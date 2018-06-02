import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Response} from '@angular/http';
// import {Http, HTTP_BINDINGS, Headers} from '@angular/http';
// import {ROUTER_BINDINGS} from '@angular2/router';
import {Observable} from 'rxjs';
import { Project } from './project.model';
import { environment } from '../../environments/environment';


@Injectable()
export class ProjectService {
  
  constructor(private http :HttpClient) { }

  SaveProject(project1:Project)
  {
     if(project1.ID > 0)
     {
      return this.http.put(environment.API_URL+"/api/project",project1);
     }

    else 
      return this.http.post(environment.API_URL+"/api/project",project1);
      
  }

  GetProjects(): Observable<Project[]>
  {
    return this.http.get(environment.API_URL+"/api/project")
    .map(data => data  as Project[]);
  }

  GetProjectById(id:number): Observable<Project>
  {
    return this.http.get(environment.API_URL+"/api/project/"+id)
    .map(data => data  as Project);
  }

  GetProposals(): Observable<Project[]>
  {
    return this.http.get(environment.API_URL+"/api/proposal")
    .map(data => data  as Project[]);
  }
}
