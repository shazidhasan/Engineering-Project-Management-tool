import { Employee } from './employee.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Response} from '@angular/http';
// import {Http, HTTP_BINDINGS, Headers} from '@angular/http';
// import {ROUTER_BINDINGS} from '@angular2/router';
import {Observable} from 'rxjs';
import { Project } from './project.model';
import { environment } from '../../environments/environment';

@Injectable()
export class EmployeeService {

  

  constructor(private http :HttpClient) { }

  SaveEmployee(employee:Employee)
  {     
      return this.http.post(environment.API_URL+"/api/Employee",employee);      
  }

  GetEmployees(): Observable<Employee[]>
  {
    return this.http.get(environment.API_URL+"/api/Employee")
    .map(data => data  as Employee[]);
  }

  GetEmployeebyId(id:number): Observable<Employee>
  {
    return this.http.get(environment.API_URL+"/api/Employee/"+id)
    .map(data => data  as Employee);
  }
}
