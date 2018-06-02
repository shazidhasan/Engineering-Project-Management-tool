import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Response } from '@angular/http';
import {Observable} from 'rxjs';
import { Project } from './project.model';
import { Projectstatus } from './projectstatus.model';


@Injectable()
export class ProjectStatusService {

   

  constructor(private http :HttpClient) { }

  SaveProjectStauts(project1:Projectstatus)
  {      
      return this.http.post(environment.API_URL+"/api/ProjectStatus",project1);      
  }

  GetProjectStauts(): Observable<Projectstatus[]>
  {
    return this.http.get(environment.API_URL+"/api/ProjectStatus").map    
    (data => data as Projectstatus[] ) ;
  }

}
