import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//import decode from 'jwt-decode';
//import { AuthHttp, AuthConfig, tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class Auth1Service {

  constructor(private authenticationService:AuthenticationService) {

   }


  public getToken(): string {
    return localStorage.getItem('token');    
  }
  

  public isAuthenticated()
  {
    return this.authenticationService.IsAuthenticatedUser();    
  }

}