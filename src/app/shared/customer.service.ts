import { environment } from './../../environments/environment';
import { Customer } from './customer.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Response} from '@angular/http';
// import {Http, HTTP_BINDINGS, Headers} from '@angular/http';
// import {ROUTER_BINDINGS} from '@angular2/router';
import {Observable} from 'rxjs';
import { Project } from './project.model';


@Injectable()
export class CustomerService {

  constructor(private http :HttpClient) { }

  SaveCustomer(Customer:Customer)
  {     
      return this.http.post(environment.API_URL+"/api/Customer",Customer);      
  }

  GetCustomers(): Observable<Customer[]>
  {
    return this.http.get(environment.API_URL+"/api/Customer")
    .map(data => data  as Customer[]);
  }

  GetCustomerById(id:number): Observable<Customer>
  {
    return this.http.get(environment.API_URL+"/api/Customer/"+id)
    .map(data => data  as Customer);
  }

  GetProspectiveCustomerById(id:number): Observable<Customer>
  {
    return this.http.get(environment.API_URL+"/api/ProspectiveCustomer/"+id)
    .map(data => data  as Customer);
  }

  GetProspectiveCustomers(): Observable<Customer[]>
  {
    return this.http.get(environment.API_URL+"/api/ProspectiveCustomer")
    .map(data => data  as Customer[]);
  }

}
