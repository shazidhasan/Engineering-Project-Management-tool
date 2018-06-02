import { AuthenticationService } from './../shared/authentication.service';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { User } from '../shared/user.model';
import { Observable } from 'rxjs/Observable';
import { Auth1Service } from '../shared/auth1.service';

@Injectable()
export class AuthService {

  authState: any = null; // user Info
  userRef: AngularFireObject<any>;

  get authenticated() {
    return this.authState !== null;
  }

  // Current user
  get currentUser() {
    return this.authenticated ? this.authState : null;
  }

  get currentUserObservable() {
    return this.afAuth.authState;
  }

  // Currently logged in user id
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  // User Account
  get currentUserName(): string {
    if (!this.authState) {
      return 'Stbui';
    } else {
      return this.authState['displayName'] || 'Name';
    }
  }

  // Anonymous User
  get currentUserAnonymous(): boolean {
    return this.authenticated ? this.authState.anonymous : false;
  }

  

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase,private authenticationService:AuthenticationService) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth;
    });
  }

  githubLogin() {
    const provide = new firebase.auth.GithubAuthProvider();
    return this.afAuth.auth.signInWithPopup(provide).then((credential) => {
      this.authState = credential.user;
      this.updateUserData();
    }).catch(error => console.log(error));
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.afAuth.auth.signInWithPopup(provider).then((credential) => {
      this.authState = credential.user;
      this.updateUserData();
    }).catch(error => console.log(error));
  }

  twitterLogin() {
    const provider = new firebase.auth.TwitterAuthProvider();
    return this.afAuth.auth.signInWithPopup(provider).then((credential) => {
      this.authState = credential.user;
      this.updateUserData();
    }).catch(error => console.log(error));
  }

  anonymousLogin() {
    return this.afAuth.auth.signInAnonymously().then((user) => {
      this.authState = user;
      this.updateUserData();
    }).catch(error => console.log(error));
  }

   emailLogin(username: string, password: string) {

    var user:User = 
    {
        ID:0,
        UserName:username,
        Email:'', 
        Password: password,
        FirstName:'',
        LastName:''
    };
      
  return new Promise<void>((resolve, reject) => 
  {            
   this.authenticationService.GetBearerToken(user).subscribe((data:any) => {                                  
    if(data.access_token)
        {                                                                        
                localStorage.setItem('token',data.access_token);                
                this.authenticationService.GetAuthenticatedUserInfo(user.UserName).subscribe((user1:User) => {
                  this.authState = {uid:user1.ID,displayName:user1.UserName,email:user1.Email};        
                  this.updateUserData();                  
              });
              resolve();                           
        }
        else
        {
          reject();
        }          
    },(error:any)=>{
      reject();
    });    
    });
  }

  

  /**
   *  email registration
   * */
  emailSignUp(firstname:string,lastname:string,username:string, email: string, password: string,role:number) {
    // return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then((user) => {
    //   this.authState = user;
    //   this.updateUserData();
    // }).catch(error => console.log(error));
    return new Promise<void>((resolve, reject) => 
    {  
      this.authenticationService.Signupuser({'FirstName':firstname,'LastName':lastname,'UserName':username,'EmailID':email,'Password':password,'RoleId':role}).subscribe(data=>{
        this.emailLogin(username,password).then(()=>{
          resolve();
        });
        
      },error=>{
        reject();
        });
    });
  }

  resetPassword(email: string) {
    const fbAuth = firebase.auth();
    return fbAuth.sendPasswordResetEmail(email).then(() => {
      console.log('密码已发到你的邮箱中');
    }).catch(error => console.log('密码重置出错', error));
  }

  /**
   *  Sign out
   * */
  signOut() {
    return new Promise<void>((resolve, reject) => 
    {
      localStorage.setItem('token','');       
      resolve();
    });    
  }

  private updateUserData() {
    const path = `users/${this.currentUserId}`;
    //this.userRef = this.db.object(path);
    const data = {
      email: this.authState.email,
      name: this.authState.displayName
    };

    //this.userRef.update(data).catch(error => console.log('Update user data：', error));
  }

}
