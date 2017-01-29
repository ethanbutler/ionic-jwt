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
    comp.onChange(email, 'email');
    comp.onChange(username, 'username');
    comp.onChange('xxx', 'nonProperty');

    expect(comp.credentials.name).toBe(name);
    expect(comp.credentials.email).toBe(email);
    expect(comp.credentials.username).toBe(username);
    expect(typeof comp.credentials.nonProperty).toBe('undefined');
  });

  it('should check that passwords match', () => {
    let a = 'password';
    let b = 'NOTPASSWORD';

    comp.onPasswordChange(a, 'original');
    comp.onPasswordChange(b, 'confirmation');

    expect(comp.password.original).toBe(a);
    expect(comp.password.confirmation).toBe(b);
    expect(comp.doPasswordsMatch).toBe(false);

    comp.onPasswordChange(a, 'confirmation');

    expect(comp.doPasswordsMatch).toBe(true);
    expect(comp.credentials.password).toBe(a);
    expect(comp.onPasswordChange(a, b)).toBe(null);

  });

})
