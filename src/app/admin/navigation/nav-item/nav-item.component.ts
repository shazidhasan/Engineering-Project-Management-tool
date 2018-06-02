import { UserService } from './../../../pages/user/user.service';



import { CustomerService } from './../../../shared/customer.service';
import { Customer } from './../../../shared/customer.model';
import { Component, HostBinding, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { Router } from '@angular/router';
import { ProjectService } from '../../../shared/project.service';
import { EmployeeService } from '../../../shared/employee.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef, MatDialog } from '@angular/material';
import { ProjectNameDialogComponent } from '../../../project-name-dialog/project-name-dialog.component';
import { ClientNameDialogComponent } from '../../../client-name-dialog/client-name-dialog.component';
import { PeopleNameDialogComponent } from '../../../people-name-dialog/people-name-dialog.component';
import { Project } from '../../../shared/project.model';
import { filter } from 'rxjs/operators';
import { Employee } from '../../../shared/employee.model';


@Component({
  selector: 'stbui-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavItemComponent {


  @Input() item: any;
  // @HostBinding('style.color') color = '#f0f';

  @Output() someEvent = new EventEmitter<boolean>();

  projectNameDialogRef: MatDialogRef<ProjectNameDialogComponent>;
  clientNameDialogRef: MatDialogRef<ClientNameDialogComponent>;
  peopleNameDialogRef: MatDialogRef<PeopleNameDialogComponent>;


  @HostBinding('class') classes = 'navigation-collapse navigation-item';
  @HostBinding('class.open') public isOpen = false;

  constructor(private navigationservice: NavigationService, 
    private router: Router,
    private dialog: MatDialog,
    private projectService : ProjectService,
    private clientService : CustomerService,
    private userService : EmployeeService,
    private toastr: ToastrService) {}

openDialog(type:string,id:number) {

    console.log(type);
    
  if(type == 'project' || type == 'proposal')
  {
    var newProject:Project;
   this.projectService.GetProjectById(id).subscribe(data=>{
    newProject = data;
    this.projectNameDialogRef = this.dialog.open(ProjectNameDialogComponent,{
      hasBackdrop:false,   
      width:'420px',     
      data: {
       'projectname' : newProject.Title,
       'projectNumber' : newProject.ProjectNumber,
       'projectStatusSelect' : newProject.ProjectStatusID,
       'projectPrioritySelect' : newProject.ProjectPriorityID,
       'customerSelect' :  newProject.CustomerID,
       'reviewdBySelect' : newProject.ReviewedByID,
       'projectStateSelect' : newProject.ProjectStatusID,
       'projectCitySelect' : newProject.JobCity,
       'projectTypesSelect' : newProject.ProjectTypeID,
       'foundationTypeSelect' : newProject.FoundationTypeID,
 
       'planName' : newProject.PlanName,
       'planNumber' : newProject.PlanNumber,
       'startDate' : newProject.StartDate,
       'dueDate' : newProject.DueDate,
       'jobAddress' : newProject.JobAddress,
       'jobZipAddress' : newProject.JobZipAddress,
       'projectTypeNotes' : newProject.ProjectTypeNotes,
       'CrawlSpaceJoist' : newProject.CrawlSpaceJoist,
       'How_WhenSending' : newProject.How_WhenSending,
       'typeOfFloorJoist' : newProject.TypeOfFloorJoist,
       'maxFloorJoistSpacing' : newProject.MaxFloorJoistSpacing,
       'typeOfCeilingJoist' : newProject.TypeOfCeilingJoist,
       'roofingMaterials' : newProject.RoofingMaterials,
       'weightOfRoofingMaterials' : newProject.WeightOfRoofingMaterials,
       'projectMaterialNotes' : newProject.ProjectMaterialNotes,
       'couriertoWhom' : newProject.CouriertoWhom,
       'couriertoAddress' : newProject.CouriertoAddress,
       'emailAddress' : newProject.EmailAddress,
       'pickupByPersonName' : newProject.PickupByPersonName,
       'pickupByPersonPhoneNumber' : newProject.PickupByPersonPhoneNumber,
       'numberOfCopies' : newProject.NumberOfCopies,
       'projectHoldNotes' : newProject.ProjectHoldNotes,       
       'invoice' : newProject.Invoice,
 
       'isCustomerWillPickup' : newProject.IsCustomerWillPickup,
       'isFoundation': newProject.IsFoundation,
       'isHaveEmail': newProject.IsHaveEmail,
       'isHaveSoilsReport': newProject.IsHaveSoilsReport,
       'isFraming': newProject.IsFraming,
       'isHaveCourierPlans': newProject.IsHaveCourierPlans,       
      }
    });

    this.projectNameDialogRef.afterClosed().pipe(
      filter(formData => formData)
    ).subscribe(formData => {
       
        newProject = { 
          ID:newProject ? newProject.ID : 0, 
          Title:formData.projectname,  
          ProjectStatusName:'', 
          ProjectPriorityTitle:'',
          CustomerName:'',
          ReviewedByName:'',
          ProjectTypeName:'',
          FoundationTypeName:'',         
          ProjectNumber:formData.projectNumber,
          ProjectStatusID:formData.projectStatusSelect,
          ProjectPriorityID:formData.projectPrioritySelect,
          PlanName:formData.planName,
          PlanNumber:formData.planNumber,
          StartDate:formData.startDate,
          DueDate:formData.dueDate,
          JobAddress:formData.jobAddress,
          JobCity:formData.projectCitySelect,
          JobState:formData.projectStateSelect,
          JobZipAddress:formData.jobZipAddress,
          DWGFIleLocation:'',
          ProjectTypeNotes:formData.ProjectTypeNotes,
          CustomerID:formData.customerSelect,
          ReviewedByID:formData.reviewdBySelect,
          ProjectTypeID:formData.projectTypesSelect,
          IsFoundation:formData.isFoundation,
          FoundationTypeID:formData.foundationTypeSelect,
          CrawlSpaceJoist:formData.CrawlSpaceJoist,
          IsHaveSoilsReport:formData.isHaveSoilsReport,
          How_WhenSending:formData.How_WhenSending,
          IsFraming:formData.isFraming,
          TypeOfFloorJoist:formData.typeOfFloorJoist,
          MaxFloorJoistSpacing:formData.maxFloorJoistSpacing,
          TypeOfCeilingJoist:formData.typeOfCeilingJoist,
          RoofingMaterials:formData.roofingMaterials,
          WeightOfRoofingMaterials:formData.weightOfRoofingMaterials,
          ProjectMaterialNotes:formData.projectMaterialNotes,
          CouriertoWhom:formData.couriertoWhom,
          CouriertoAddress:formData.couriertoAddress,
          IsHaveCourierPlans:formData.isHaveCourierPlans,
          IsHaveEmail:formData.isHaveEmail,
          EmailAddress:formData.emailAddress,
          IsCustomerWillPickup:formData.isCustomerWillPickup,
          PickupByPersonName:formData.pickupByPersonName,
          PickupByPersonPhoneNumber:formData.pickupByPersonPhoneNumber,
          NumberOfCopies:formData.numberOfCopies,
          ProjectHoldNotes:formData.projectHoldNotes,          
          Invoice:formData.invoice,
          CustomerData:formData.customerData,
        };
      //}
 
      this.projectService.SaveProject(newProject)
       .subscribe((data:any)=> {
         if(data.Status == "success")
         {                              
           this.toastr.success('project save successful');
           this.navigationservice.refreshNavigationModel().subscribe(data => {
            this.refreshParentComponent();
           });
           
         }
 
         else{
           this.toastr.error(data.Errors[0]);      
         }      
       });
    });

   });
  }

  else if(type == 'prospect' )
  {
    var customer : Customer;
    this.clientService.GetProspectiveCustomerById(id).subscribe(data=>{
      customer = data;
      this.clientNameDialogRef = this.dialog.open(ClientNameDialogComponent,{
        hasBackdrop:false,
        width:'420px',
        data: {      
          'title':customer.Title,
          'keyperson':customer.KeyPerson,
          'address':customer.Address,
          'phone':customer.Phone,
          'email':customer.Email,
          'clientOrProspectSelect':type 
        }
      });

      this.clientNameDialogRef.afterClosed().pipe(
        filter(formData => formData)
      ).subscribe(formData => {
   
        customer = {                          
            ID: customer?customer.ID : 0,  
            Title : formData.title,     
            KeyPerson: formData.keyperson,  
            Address: formData.address,          
            State: formData.selectedstate,  
            Zip: formData.zip,  
            Phone: formData.phone,
            Email: formData.email,
            City: formData.city
          };        
   
          
   
        this.clientService.SaveCustomer(customer)
         .subscribe((data:any)=> {
           if(data.Status == "success")
           {                                  
             this.toastr.success('Proposal saved successful');
             this.navigationservice.refreshNavigationModel().subscribe(data => {
              this.refreshParentComponent();
             });             
           }
   
           else{
             this.toastr.error(data.Errors[0]);      
           }      
         });
      });
    });
  }
  else if(type == 'client' )
  {
    var customer : Customer;
    this.clientService.GetCustomerById(id).subscribe(data=>{
      customer = data;
      this.clientNameDialogRef = this.dialog.open(ClientNameDialogComponent,{
        hasBackdrop:false,
        width:'420px',
        data: {      
          'title':customer.Title,
          'keyperson':customer.KeyPerson,
          'address':customer.Address,
          'phone':customer.Phone,
          'email':customer.Email,
          'clientOrProspectSelect':type 
        }
      });

      this.clientNameDialogRef.afterClosed().pipe(
        filter(formData => formData)
      ).subscribe(formData => {
   
        customer = { 
          ID: customer?customer.ID : 0,  
          Title : formData.title,     
          KeyPerson: formData.keyperson,  
          Address: formData.address,          
          State: formData.selectedstate,  
          Zip: formData.zip,  
          Phone: formData.phone,
          Email: formData.email,
          City: formData.city         
          };        
   
          
   
        this.clientService.SaveCustomer(customer)
         .subscribe((data:any)=> {
           if(data.Status == "success")
           {                                  
             this.toastr.success('Customer saved successful');
             this.navigationservice.refreshNavigationModel().subscribe(data => {
              this.refreshParentComponent();
             });             
           }
   
           else{
             this.toastr.error(data.Errors[0]);      
           }      
         });
      });
    });
   

   

   

   

  }

  else if(type == 'people')
  {
    var user : Employee;
    this.userService.GetEmployeebyId(id).subscribe(data=>{
      user = data;
      this.peopleNameDialogRef = this.dialog.open(PeopleNameDialogComponent,{
        hasBackdrop:true,     
        width:'420px',   
        data: {     
          'firstname' : user.FirstName,
          'lastname':user.LastName,
          'designation':user.Designation,
          'phone':user.Phone,          
          'email':user.Email,
          'zip':user.Zip,
          'state':user.State,
          'city':user.City,          
        }
      });

      

   this.peopleNameDialogRef.afterClosed().pipe(
    filter(formData => formData)
  ).subscribe(formData => {

    user = { 
        ID:user?user.ID : 0,
        FirstName : formData.firstname,
        LastName : formData.lastname,
        Name: formData.firstname + ' '+  formData.lastname,
        Address: formData.address ,  
        Designation: formData.designation,  
        State: formData.selectedstate,  
        Zip: formData.zip,  
        Phone: formData.phone,
        Email: formData.email,
        City: formData.city,           
        HasReviewAuthorization:false,
        IsInManagement:false,
        IsInDirectorPanel:false           
      };

    this.userService.SaveEmployee(user)
     .subscribe((data:any)=> {
       if(data.Status == "success")
       {                                  
         this.toastr.success('Employee saved successful');
         this.navigationservice.refreshNavigationModel().subscribe(data => {
          this.refreshParentComponent();
         });
         
       }

       else{
         this.toastr.error(data.Errors[0]);      
       }      
      });
    });

  });

  }
}

  refreshParentComponent() {
    this.someEvent.next(true);
  }
}