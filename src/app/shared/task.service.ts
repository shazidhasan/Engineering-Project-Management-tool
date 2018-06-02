import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Response} from '@angular/http';
import {Observable} from 'rxjs';
import { Task } from './task.model';

@Injectable()
export class TaskService { 

  

  constructor(private http :HttpClient) { }

  SaveTask(task:Task)
  {    
      return this.http.post(environment.API_URL+"/api/Task",task);      
  }

  GetTasksByProjectId(projectId:number): Observable<Task[]>
  {
    return this.http.get(environment.API_URL+"/api/task/project/"+projectId)
    .map(data => data  as Task[]);
  }


  GetTasksByProposalId(proposalId:number): Observable<Task[]>
  {
    return this.http.get(environment.API_URL+"/api/task/proposal/"+proposalId)
    .map(data => data  as Task[]);
  }
  

  GetTasksByEmployeeId(employeeId:number): Observable<Task[]>
  {
    return this.http.get(environment.API_URL+"/api/task/employee/"+employeeId)
    .map(data => data  as Task[]);
  }

  GetTasksByClientId(clientId:number): Observable<Task[]>
  {
    console.log('shazid');
    return this.http.get(environment.API_URL+"/api/task/client/"+clientId)
    .map(data => data  as Task[]);
  }

  

  GetTasks(taskId:number): Observable<Task[]>
  {
    return this.http.get(environment.API_URL+"/api/Task/"+taskId)
    .map(data => data  as Task[]);
  }

  GetAllTasks(): Observable<Task[]>
  {
    return this.http.get(environment.API_URL+"/api/Task")
    .map(data => data  as Task[]);
  }

}
