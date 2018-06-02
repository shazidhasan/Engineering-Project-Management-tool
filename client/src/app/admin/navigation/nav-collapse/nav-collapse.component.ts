import { ProposalService } from './../../../shared/proposal.service';

import { EmployeeService } from './../../../shared/employee.service';
import { CustomerService } from './../../../shared/customer.service';
import { Customer } from './../../../shared/customer.model';
import { ClientNameDialogComponent } from './../../../client-name-dialog/client-name-dialog.component';
import { Component, OnInit, Input, HostBinding, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NavigationService } from '../navigation.service';
import { NavigationAnimation } from '../navigation.animation';
import { MatDialog,MatDialogRef } from '@angular/material';
import { ProjectNameDialogComponent } from '../../../project-name-dialog/project-name-dialog.component';
import { filter } from 'rxjs/operators';
import { Project } from '../../../shared/project.model';
import { ProjectService } from '../../../shared/project.service';
import { ToastrService } from 'ngx-toastr';
import { FireBaseComponentsModule } from '../../../shared/firebase.module';
import { PeopleNameDialogComponent } from '../../../people-name-dialog/people-name-dialog.component';
import { Employee } from '../../../shared/employee.model';
import { ProposalNameDialogComponent } from '../../../proposal-name-dialog/proposal-name-dialog.component';
import { ClientCreationDialogService } from '../../../client-name-dialog/client-creation-dialog.service';
import { Proposal } from '../../../shared/proposal.model';

@Component({
  selector: 'stbui-nav-collapse',
  templateUrl: './nav-collapse.component.html',
  styleUrls: ['./nav-collapse.component.scss'],
  animations: NavigationAnimation,
  encapsulation: ViewEncapsulation.None
})
export class NavCollapseComponent implements OnInit {

  @Output() someEvent = new EventEmitter<boolean>();

  projectNameDialogRef: MatDialogRef<ProjectNameDialogComponent>;
  clientNameDialogRef: MatDialogRef<ClientNameDialogComponent>;
  peopleNameDialogRef: MatDialogRef<PeopleNameDialogComponent>;
  proposalNameDialogRef: MatDialogRef<ProposalNameDialogComponent>;



  @Input() item: any;
  @HostBinding('class') classes = 'navigation-collapse navigation-item';
  @HostBinding('class.open') public isOpen = false;

  constructor(private navigationservice: NavigationService, private router: Router,private dialog: MatDialog,
    private projectService : ProjectService,
    private clientService : CustomerService,
    private peopleService : EmployeeService,
    private proposalService : ProposalService,
    
    private toastr: ToastrService,
    private clientCreationDialogService:ClientCreationDialogService) {
    router.events.subscribe(
      (event) => {

        if (event instanceof NavigationEnd) {
          if (this.isUrlInChildren(this.item, event.urlAfterRedirects)) {
            this.expand();
          } else {
            this.collapse();
          }
        }
      }
    );

    this.navigationservice.onNavigationCollapseToggled.subscribe(
      (clickedItem) => {
        if (clickedItem && clickedItem.children) {
          if (this.isChildrenOf(this.item, clickedItem)) {
            return;
          }

          if (this.isUrlInChildren(this.item, this.router.url)) {
            return;
          }

          if (this.item !== clickedItem) {
            this.collapse();
          }
        }
      }
    );
  }

  ngOnInit() {
    if (this.isUrlInChildren(this.item, this.router.url)) {
      this.expand();
    } else {
      this.collapse();
    }
  }

  toggleOpen(e) {
    e.preventDefault();

    this.isOpen = !this.isOpen;
    this.navigationservice.onNavigationCollapseToggled.emit(this.item);
    this.navigationservice.onNavigationCollapseToggle.emit();
  }

  expand() {
    if (this.isOpen) {
      return;
    }

    this.isOpen = true;
    this.navigationservice.onNavigationCollapseToggle.emit();
  }

  collapse() {
    if (!this.isOpen) {
      return;
    }
    this.isOpen = false;
    this.navigationservice.onNavigationCollapseToggle.emit();
  }

  isChildrenOf(parent, item) {
    if (!parent.children) {
      return false;
    }

    if (parent.children.indexOf(item) !== -1) {
      return true;
    }

    for (const children of parent.children) {
      if (children.children) {
        return this.isChildrenOf(children, item);
      }
    }
  }

  isUrlInChildren(parent, url) {
    if (!parent.children) {
      return false;
    }

    for (let i = 0; i < parent.children.length; i++) {
      if (parent.children[i].children) {
        if (this.isUrlInChildren(parent.children[i], url)) {
          return true;
        }
      }

      if (parent.children[i].url === url || url.includes(parent.children[i].url)) {
        return true;
      }
    }

    return false;
  }

  refreshParentComponent() {
    this.someEvent.next(true);
  }

    openDialog(type:string) {
    
     if(type == 'project' )
     {
      this.projectNameDialogRef = this.dialog.open(ProjectNameDialogComponent,{
        hasBackdrop:true,                
        width:'420px',
        data: {
          projectname:  ''
        },

      });
  
      var newProject:Project;
  
      
  
      this.projectNameDialogRef.afterClosed().pipe(
        filter(formData => formData)
      ).subscribe(formData => {
  
        // console.log(formData);
        // if (project) {
        //   newProject = { ID:project.ID, Title:name};
        // }
        // else
        // {
          newProject = { 
            ID:0, 
            Title:formData.projectname,            
            ProjectNumber:formData.projectNumber,
            ProjectStatusID:formData.projectStatusSelect,
            ProjectStatusName:'',
            ProjectPriorityID:formData.projectPrioritySelect,
            ProjectPriorityTitle:'',
            PlanName:formData.planName,
            PlanNumber:formData.planNumber,
            StartDate:formData.startDate,
            DueDate:formData.dueDate,
            JobAddress:formData.jobAddress,
            JobCity:formData.city,
            JobState:formData.projectStateSelect,
            JobZipAddress:formData.jobZipAddress,
            DWGFIleLocation:'',
            CustomerName:'',
            ReviewedByName:'',
            ProjectTypeName:'',
            FoundationTypeName:'',
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
            // if (project) {
            //   const index = this.projects.findIndex(p => p.Title == project.Title);
              
            //   if (index !== -1) {
            //     this.projects[index] = newProject;
            //   }
            // } else {
              //newProject.ID = data.ID;
              //this.projects.push(newProject);
            //}
            
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
     }

     else if(type == 'proposal')
     {
      
      this.proposalNameDialogRef = this.dialog.open(ProposalNameDialogComponent,{
        hasBackdrop:true,
        width:'420px',
        data: {   
          ID:0       
        }
      });

      var newProposal:Proposal;

      this.proposalNameDialogRef.afterClosed().pipe(
        filter(formData => formData)
      ).subscribe(formData => {        
          
        //console.log(formData);
        newProposal = {
          ID: formData.ID ,  
          Name: formData.name ,   
          Address: formData.address ,  
          City: formData.city ,  
          State: formData.selectedstate ,  
          Zip: formData.zip ,  
          Details: formData.details ,  
          InitialContractDate: formData.initialContractDatePicker ,  
          SubmittalDate: formData.submittalDatePicker ,  
          RevisionDate: formData.revisionDatePicker ,  
          ProposalType: formData.proposalType ,  
          DailyType: formData.selectDailyType,  
          ProjectType: formData.selectProjectType ,  
          ProjectOtherTypeValue: formData.ProjectOtherTypeValue ,  
          FoundationTypeValue: formData.selectFoundationType ,  
          FoundationSlabTypeValue: formData.selectSlabType ,  
          FoundationPierTypeValue: formData.selectPiersType ,  
          FoundationPierRemiedialTypeValue: formData.selectRemedialType ,  
          FoundationPierRemiedialOtherTypeValue: formData.FoundationPierRemiedialOtherTypeValue ,  
          FoundationOtherTypeValue: formData.FoundationOtherTypeValue ,  
          FrameTypeValue: formData.selectFrameType ,  
          FrameResidentialValue: formData.selectResidentialType ,  
          FrameResidentialOtherValue: formData.FrameResidentialOtherValue ,  
          FrameExteriorValue: formData.selectExteriorFinish ,  
          FrameExteriorOtherValue: formData.FrameExteriorOtherValue ,  
          FrameRoofTypeValue: formData.selectRoofType ,  
          FrameRoofTypeOtherValue: formData.FrameRoofTypeOtherValue ,  
          RetainingWallValue: formData.selectRetainingWallType ,  
          RetainingWallTypeValue: formData.selectRetainingWallTypeType ,  
          RetainingWallTypeWallValue: formData.selectRetainingWallTypeWall ,  
          RetainingWallTypeWallOtherValue: formData.RetainingWallTypeWallOtherValue ,  
          PoolValue: formData.selectPoolType ,  
          PoolCompanyDesignValue:formData.selectCompanydesigningType, 
          ClientID : formData.selectedClient
          };        

         //console.log(newProposal); 
  
        this.proposalService.SaveProposal(newProposal)
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

     }

     else if(type == 'client')
     {                
        this.clientCreationDialogService.OpenDialog().then(
        ()=>{
          this.refreshParentComponent();
        },()=>{
            console.log('error in saving client information');
        }
        )
  
     }

     else if(type == 'people')
     {
      this.peopleNameDialogRef = this.dialog.open(PeopleNameDialogComponent,{
        hasBackdrop:true,   
        width:'420px',     
        data: {      

        }
      });
  
      var newPeople:Employee;
  
      
  
      this.peopleNameDialogRef.afterClosed().pipe(
        filter(formData => formData)
      ).subscribe(formData => {
  
        newPeople = { 
            ID:0, 
            FirstName:formData.firstname,            
            LastName:formData.lastname,
            Name:formData.name,            
            Designation:formData.designation,
            Phone:formData.phone,
            Email:formData.email,
            Zip:formData.zip,
            State:formData.selectedstate,
            City:formData.city,
            Address:formData.address,            
            HasReviewAuthorization:false,
            IsInManagement:false,
            IsInDirectorPanel:false            
          };
  
          //console.log(newPeople);
        this.peopleService.SaveEmployee(newPeople)
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

     }
    

    

    
  }
}
