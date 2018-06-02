import { ProposalService } from './../../shared/proposal.service';
import { Http } from '@angular/http';
import { ProjectService } from './../../shared/project.service';
import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { NavigationModel } from './navigation.model';
import { Observable } from 'rxjs/Observable';
import { EmployeeService } from '../../shared/employee.service';
import { CustomerService } from '../../shared/customer.service';

@Injectable()
export class NavigationService {

  onNavigationCollapseToggle = new EventEmitter<any>();
  onNavigationCollapseToggled = new EventEmitter<any>();
  onNavigationModelChange: BehaviorSubject<any> = new BehaviorSubject({});
  navigationModel: NavigationModel;  


  constructor(private projectservice:ProjectService
    ,private employeeService:EmployeeService
    ,private customerService:CustomerService
    ,private proposalservice:ProposalService) {        
    this.navigationModel = new NavigationModel(projectservice,employeeService,customerService,proposalservice);
    this.onNavigationModelChange.next(this.navigationModel.model);
  }

  getNavigationModel() {
    return this.navigationModel.model;
  }

  setNavigationModel(model) {
    this.navigationModel = model;
    this.onNavigationModelChange.next(this.navigationModel.model);
  }

  refreshNavigationModel():Observable<any[]>
  {
    return this.navigationModel.refreshModel();
  }

  addNavigationItem() {

  }

  getNavigationItem() {

  }

  findNavigationItemById(location, navigation?) { 
    if (!navigation) {
      navigation = this.navigationModel.model;
    }

    for (const navItem of navigation) {
      if (navItem.id === location[0]) {
        if (location.length > 1) {
          location.splice(0, 1);
          return this.findNavigationItemById(location, navItem.children);
        } else {
          return navItem;
        }
      }
    }
  }



  GetChildItemsByName(type:string):Observable<any[]>
  {
    //this sets all product descriptions to a max length of 10 characters
    return this.navigationModel.GetChildItemsByName(type);
  }


}
