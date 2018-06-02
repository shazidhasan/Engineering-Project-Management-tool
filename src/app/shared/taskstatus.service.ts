import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Response} from '@angular/http';
import {Observable} from 'rxjs';
import { Taskstatus } from './taskstatus.model';

@Injectable()
export class TaskStatusService {

  ;

  constructor(private http :HttpClient) { }

  SaveTaskStatus(taskstatus:Taskstatus)
  {    
      return this.http.post(environment.API_URL+"/api/TaskStatus",taskstatus);      
  }

  GetTaskStatuses(): Observable<Taskstatus[]>
  {
    return this.http.get(environment.API_URL+"/api/TaskStatus")
    .map(data => data  as Taskstatus[]);
  }

}
