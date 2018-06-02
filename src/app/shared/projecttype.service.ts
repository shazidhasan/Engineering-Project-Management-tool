import {Projecttype } from './projecttype.model';
import {Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Response} from '@angular/http';
// import {Http, Headers} from '@angular/http';
// import {ROUTER_BINDINGS} from '@angular2/router';
import {Observable} from 'rxjs';
import { Project } from './project.model';
import { environment } from '../../environments/environment';

@Injectable()
export class ProjecttypeService {

  

  constructor(private http :HttpClient) { }

  SaveProjectType(projecttype:Projecttype)
  {     
      return this.http.post(environment.API_URL+"/api/projecttype",projecttype);
      
  }

  GetProjecttypes(): Observable<Projecttype[]>
  {
    return this.http.get(environment.API_URL+"/api/projecttype")
    .map(data => data  as Projecttype[]);
  }

}
