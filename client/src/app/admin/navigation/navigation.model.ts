import { Customer } from './../../shared/customer.model';
import { CustomerService } from './../../shared/customer.service';
import { EmployeeService } from './../../shared/employee.service';
import { Project } from './../../shared/project.model';
import { ProjectService } from './../../shared/project.service';
import { enableProdMode } from '@angular/core';
import { Model } from '@swimlane/ngx-datatable';
import { Observable } from 'rxjs/Observable';
import { ProposalService } from '../../shared/proposal.service';
export class NavigationModel { 

  public model: any[];    

  constructor(private projectservice: ProjectService
    ,private employeeService:EmployeeService
    ,private customerService:CustomerService
    ,private proposalservice:ProposalService) {
    this.model = [
      // {
      //   'id': 'proposal',
      //   'title': 'Proposal',
      //   'type': 'collapse',
      //   'icon': 'description',   
      //   'ishaveaddbtn':true,     
      //   'children': []
      // },
      {
        'id': 'proposal',
        'title': 'Proposal',
        'type': 'collapse',
        'icon': 'people',     
        'ishaveaddbtn':true,   
        'children': []
      },
      {
        'id': 'people',
        'title': 'User',
        'type': 'collapse',
        'icon': 'accessible',
        'url': '/people',
        'ishaveaddbtn':true,
        'children': []
      },
      {
        'id': 'client',
        'title': 'Client',
        'type': 'collapse',
        'icon': 'people',     
        'ishaveaddbtn':true,   
        'children': []
      },  
      {
        'id': 'project',
        'title': 'Project',
        'type': 'collapse',
        'icon': 'description',   
        'ishaveaddbtn':true,     
        'children': []
      },
        
    ];
    //this sets all product descriptions to a max length of 10 characters
    this.model.forEach(element => {
      if(element.id == 'project')
        {
          //console.log(element);
          projectservice.GetProjects().subscribe(data => {
            
            element.children =  data.map(eachdata=> ({
              id:eachdata.ID,
              title:eachdata.Title,
              type: 'item',
              url: '/projects/'+eachdata.ID,
              icon: 'note',
              itemtype:'project'
            }) );
          });
        }

        else if(element.id == 'proposal')
        {
          //console.log(element);
          this.proposalservice.GetProposals().subscribe(data => {
            
            element.children =  data.map(eachdata=> ({
              id:eachdata.ID,
              title:eachdata.Name,
              type: 'item',
              url: '/proposal/'+eachdata.ID,
              icon: 'note',
              itemtype:'proposal'
            }) );
          });
        }

        else if(element.id == 'people')
        {          
          this.employeeService.GetEmployees().subscribe(data => {         
            element.children =  data.map(eachdata=> ({
              id:eachdata.ID,
              title:eachdata.FirstName+' '+eachdata.LastName,
              type: 'item',
              url: '/employees/'+eachdata.ID,
              icon: 'note',
              itemtype:'people'
            }) );
          });
        }

        else if(element.id == 'client')
        {
          //console.log(element);
          customerService.GetCustomers().subscribe(data => {
            
            element.children =  data.map(eachdata=> ({
              id:eachdata.ID,
              title:eachdata.Title,
              type: 'item',
              url: '/clients/'+eachdata.ID,
              icon: 'note',
              itemtype:'client'
            }) );
          });
        }

        // else if(element.id == 'prospect')
        // {
        //   //console.log(element);
        //   customerService.GetProspectiveCustomers().subscribe(data => {
            
        //     element.children =  data.map(eachdata=> ({
        //       id:eachdata.ID,
        //       title:eachdata.Title,
        //       type: 'item',
        //       url: '/prospects/'+eachdata.ID,
        //       icon: 'note',
        //       itemtype:'prospect'
        //     }) );
        //   });
        // }
    });    
  }


  refreshModel():Observable<any[]>
  {
    //this sets all product descriptions to a max length of 10 characters
    this.model.forEach(element => {
      if(element.id == 'project')
        {
          this.projectservice.GetProjects().subscribe(data => {  

            element.children =  data.map(eachdata=> ({
              id:eachdata.ID,
              title:eachdata.Title,
              type: 'item',
              url: '/projects/'+eachdata.ID,
              icon: 'note',
              itemtype:'project'
            }) );

          });
        }

        else if(element.id == 'proposal')
        {
          //console.log(element);
          this.proposalservice.GetProposals().subscribe(data => {
            
            element.children =  data.map(eachdata=> ({
              id:eachdata.ID,
              title:eachdata.Name,
              type: 'item',
              url: '/proposal/'+eachdata.ID,
              icon: 'note',
              itemtype:'proposal'
            }) );
          });
        }

        else if(element.id == 'people')
        {          
          this.employeeService.GetEmployees().subscribe(data => {         
            element.children =  data.map(eachdata=> ({
              id:eachdata.ID,
              title:eachdata.FirstName+' '+eachdata.LastName,
              type: 'item',
              url: '/employees/'+eachdata.ID,
              icon: 'note',
              itemtype:'people'
            }) );
          });
        }

        else if(element.id == 'client')
        {          
          this.customerService.GetCustomers().subscribe(data => {
            
            element.children =  data.map(eachdata=> ({
              id:eachdata.ID,
              title:eachdata.Title,
              type: 'item',
              url: '/clients/'+eachdata.ID,
              icon: 'note',
              itemtype:'client'
            }) );
          });
        }

        else if(element.id == 'prospect')
        {
          //console.log(element);
          this.customerService.GetProspectiveCustomers().subscribe(data => {
            
            element.children =  data.map(eachdata=> ({
              id:eachdata.ID,
              title:eachdata.Title,
              type: 'item',
              url: '/prospects/'+eachdata.ID,
              icon: 'note',
              itemtype:'prospect'
            }) );
          });
        }
    });

    return Observable.of(this.model);
  }


  GetChildItemsByName(type:string):Observable<any[]>
  {
    //this sets all product descriptions to a max length of 10 characters        
    this.model.forEach(element => {
      if(element.id == type)
        {
          return Observable.of(element.children);
        }
      });

      return Observable.of();      
  }
}


