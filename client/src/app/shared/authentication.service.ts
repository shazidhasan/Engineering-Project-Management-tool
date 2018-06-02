import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams} from '@angular/common/http';
import {Response} from '@angular/http';
import {Observable} from 'rxjs';
import { Taskstatus } from './taskstatus.model';
import { User } from 'firebase/app';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthenticationService {

  

  constructor(private http :HttpClient) { }

  Signupuser(userData:any)
  {    
      return this.http.post(environment.API_URL+"/api/Authentication/Signup",userData);
  }

  GetBearerToken(userData:any):Observable<any>
  {    
    const body = new HttpParams()
    .set('username', userData.UserName)
    .set('password', userData.Password)
    .set('grant_type', 'password');
    
    var headersvalue = new HttpHeaders();
    headersvalue.append('Content-Type', 'application/x-www-form-urlencoded');    
    return this.http.post(environment.API_URL+"/token",body.toString(),{ headers: headersvalue});
      //.map(data=>data.json());
    //  .catch((error:any) => Observable.throw((error:any) =>{}));
  }

  GetAuthenticatedUserInfo(userName:string):Observable<any>
  {
    // console.log(token);
    // var headersvalue = new HttpHeaders();
    // headersvalue.append('Authorization', 'bearer ' + token );     

    return this.http.get(environment.API_URL+"/api/Authentication/GetUserInfo/"+userName+"/");    
  }

  IsAuthenticatedUser()
  {
    return this.http.get(environment.API_URL+"/api/Authentication/IsAuthenticatedUser");
  }

  

}
