import { environment } from './../../environments/environment';
import { User } from './user.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {  

  constructor(private http :HttpClient) { 

  }

  registerUser(user:User)
  {
     const user1 : User = {
       ID:0,
       UserName:user.UserName,
       Password :user.Password,
       Email:user.Email,
       FirstName:user.FirstName,
       LastName:user.LastName
    }
    return this.http.post(environment.API_URL+"/api/User/Register",user1);
    }
}
