import { environment } from './../../environments/environment';
import { FoundationType } from './foundation-type.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Response} from '@angular/http';
// import {Http, HTTP_BINDINGS, Headers} from '@angular/http';
// import {ROUTER_BINDINGS} from '@angular2/router';
import {Observable} from 'rxjs';

@Injectable()
export class FoundationTypeService {

  ;

  constructor(private http :HttpClient) { }

  SaveFoundationType(foundationType:FoundationType)
  {     
      return this.http.post(environment.API_URL+"/api/FoundationType",FoundationType);      
  }

  GetFoundationType(): Observable<FoundationType[]>
  {
    return this.http.get(environment.API_URL+"/api/FoundationType")
    .map(data => data  as FoundationType[]);
  }

}
