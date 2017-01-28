import { Component } from '@angular/core';
import { Headers } from '@angular/http';
import { AuthHttp, AuthConfig, IAuthConfig } from 'angular2-jwt';
import { NavController, ActionSheetController, ToastController, Platform, LoadingController, Loading } from 'ionic-angular';
import { Camera, File as _File, FilePath } from 'ionic-native';
import 'rxjs/add/operator/map';

declare var cordova: any;

@Component({
  selector: 'avatar-upload',
  templateUrl: 'avatar-upload.html'
})
export class AvatarUpload {

  contentHeaders: Headers = new Headers({'content-type': 'multipart/form-data'});
  endpoint:       string = 'http://dev.beerncapp.com:3000/api/v1/users/avatar';
  //endpoint:       string = 'http://192.168.1.140:3000/test';
  error:          string = null;
  lastImage:      string = null;
  loading:        any = null;
  constructor(
    public authHttp: AuthHttp,
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    public toastCtrl: ToastController,
    public platform: Platform,
    public loadingCtrl: LoadingController
  ){}

  onSuccess(res){
    console.log(res);
  }

  onFailure(err){

  }

  // https://devdactic.com/ionic-2-images/
  public presentActionSheet(){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(Camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(Camera.PictureSourceType.CAMERA)
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  private takePicture(sourceType){
    let options = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    }

    Camera.getPicture(options).then((imagePath) => {
      if(this.platform.is('android') && sourceType === Camera.PictureSourceType.PHOTOLIBRARY){
        FilePath.resolveNativePath(imagePath).then(filePath => {
          let currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
          let correctPath = filePath.substr(0, imagePath.lastIndexOf('/') + 1);
          this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
        });
      } else {
        let currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        let correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
    }, (err) => {
      this.presentToast('Error while selecting image.')
    })
  }

  private createFileName(){
    let d = new Date();
    let n = d.getTime();
    let newFileName = n + '.jpg';
    return newFileName;
  }

  private copyFileToLocalDir(namePath, currentName, newFileName){
    _File.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
      this.lastImage = newFileName;
    }, (err) => {
      this.presentToast('Error while storing file.');
    });
  }

  private presentToast(text){
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  public pathForImage(img){
    if(img === null){
      return '';
    } else {
      return cordova.file.dataDirectory + img;
    }
  }

  public uploadImage(){
    let targetPath = this.pathForImage(this.lastImage);
    let fileName = this.lastImage;
    let body = new FormData();
    let file = new File([''], targetPath);
    body.append('avatar', file, fileName);
    console.log(body);
    this.loading = this.loadingCtrl.create({
      content: 'Uploading...'
    });
    return new Promise(resolve => {
      this.authHttp.post(this.endpoint, body, null)
      .map(res => {
        console.log(res);
        return res => res.json();
      })
      .subscribe(data => {
        console.log(data);
        this.loading.dismissAll();
        resolve(data);
      }, err => {
        console.log(err);
      })
    });
  }

}
