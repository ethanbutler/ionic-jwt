import { App } from '../../app/app.component';
import { Edit } from './edit';
import { AvatarUpload } from '../../components/avatar-upload/avatar-upload';
import { NavController, NavParams } from 'ionic-angular';
import { AuthHttp } from 'angular2-jwt';
import { User } from '../../providers/user';
import { Distance } from '../../providers/distance';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';

//mocks
class MockNavParams {
  data = {};
  get(param){ return this.date[param]; }
}

class MockAuthHttp {
  get = (url:string) => { return resp$ };
}

let comp = Edit;
let fixture: ComponentFixture<Edit> = null;

//https://www.joshmorony.com/introduction-to-testing-ionic-2-applications-with-testbed/
describe('Edit Page', () => {

  beforeEach(async(() => {
    TestBed.overrideComponent(Edit, {
      set: {
        template: '<div></div>';
      }
    });
    TestBed.configureTestingModule({
      declarations: [App, Edit],
      providers: [
        NavController,
        User,
        Distance,
        {provide: NavParams, useClass: MockNavParams},
        {provide: AuthHttp, useClass: MockAuthHttp}
      ],
      imports: [IonicModule.forRoot(App)];
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Edit);
    comp = fixture.componentInstance;
  })

  afterEach(() => {
    fixture = null;
    comp = null;
  });

  it('should update credentials correctly', () => {
    let name = 'Ethan';
    let email = 'email@test.com';
    let username = 'ethombutler';

    comp.onChange(name, 'name');
    expect(comp.credentials.name).toBe(name);
    comp.onChange(email, 'email');
    expect(comp.credentials.email).toBe(email);
    comp.onChange(username, 'username');
    expect(comp.credentials.username).toBe(username);
    comp.onChange('xxx', 'nonProperty');
    expect(typeof comp.credentials.nonProperty).toBe('undefined');
  });

})
