import { environment } from './../../environments/environment';
import { Projectpriority } from './projectpriority.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Response} from '@angular/http';
// import {Http, HTTP_BINDINGS, Headers} from '@angular/http';
// import {ROUTER_BINDINGS} from '@angular2/router';
import {Observable} from 'rxjs';
import { Project } from './project.model';

@Injectable()
export class ProjectpriorityService {

  

  constructor(private http :HttpClient) { }

  SaveProject(projectpriority:Projectpriority)
  {     
      return this.http.post(environment.API_URL+"/api/Projectpriority",projectpriority);      
  }

  GetProjectPriorities(): Observable<Projectpriority[]>
  {
    return this.http.get(environment.API_URL+"/api/Projectpriority")
    .map(data => data  as Projectpriority[]);
  }

}
