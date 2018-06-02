import { Projecttype } from './../../shared/projecttype.model';

import { Customer } from './../../shared/customer.model';
import { getTestBed } from '@angular/core/testing';
import { CustomerService } from './../../shared/customer.service';
import { ProjectService } from './../../shared/project.service';
import { Task } from './../../shared/task.model';
import { TaskService } from './../../shared/task.service';
import { Component, OnInit, HostListener, ElementRef, ViewEncapsulation, Output,EventEmitter } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { MatDialogRef, MatDialog } from '@angular/material';
import { TaskAddDialogComponent } from '../../task-add-dialog/task-add-dialog.component';
import { filter } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import * as moment from "moment";
import { EmployeeService } from '../../shared/employee.service';
import { Project } from '../../shared/project.model';
import { Employee } from '../../shared/employee.model';
import { Proposal } from '../../shared/proposal.model';
import { ProposalService } from '../../shared/proposal.service';
import { FormGroup, FormBuilder,ReactiveFormsModule,Validators, FormControl } from '@angular/forms';
import { NavigationService } from '../../admin/navigation/navigation.service';
import { ProjectStatusService } from '../../shared/project-status.service';
import { ProjectpriorityService } from '../../shared/projectpriority.service';
import { ProjecttypeService } from '../../shared/projecttype.service';
import { FoundationTypeService } from '../../shared/foundation-type.service';
import { ClientCreationDialogService } from '../../client-name-dialog/client-creation-dialog.service';
import { NoteService } from '../../shared/note.service';
import { Note } from '../../shared/note.model';
import { dateTimeFormat } from '../../component/date-picker/dateUtils';


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {'class': 'app-error'}
})
  export class ErrorComponent implements OnInit {

 // @Output() selectedDate:EventEmitter<any> = new EventEmitter(false);
  
 proposalform: FormGroup;
 employeeform: FormGroup;
 clientform: FormGroup;
 projectform: FormGroup;
 clients  :  any[];
 employees:any[];

 projectStatuses:any= [];
 projectpriorities:any=[];
 ProjectTypes:any=[];
 FoundationTypes:any=[];

  cities:any = [{'value':'Alameda','viewValue':'Alameda'},{'value':'Alhambra','viewValue':'Alhambra'},{'value':'Anaheim','viewValue':'Anaheim'},{'value':'Antioch','viewValue':'Antioch'}];
  states:any=[{'value':'Alabama','viewValue':'Alabama'},{'value':'Alaska','viewValue':'Alaska'},{'value':'Arizona','viewValue':'Arizona'},{'value':'Arkansas','viewValue':'Arkansas'},{'value':'California','viewValue':'California'},{'value':'Colorado','viewValue':'Colorado'},{'value':'Connecticut','viewValue':'Connecticut'},{'value':'Delaware','viewValue':'Delaware'},{'value':'Florida','viewValue':'Florida'},{'value':'Georgia','viewValue':'Georgia'},{'value':'Hawaii','viewValue':'Hawaii'},{'value':'Idaho','viewValue':'Idaho'},{'value':'Illinois','viewValue':'Illinois'},{'value':'Indiana','viewValue':'Indiana'},{'value':'Iowa','viewValue':'Iowa'},{'value':'Kansas','viewValue':'Kansas'},{'value':'Kentucky','viewValue':'Kentucky'},{'value':'Louisiana','viewValue':'Louisiana'},{'value':'Maine','viewValue':'Maine'},{'value':'Maryland','viewValue':'Maryland'},{'value':'Massachusetts','viewValue':'Massachusetts'},{'value':'Michigan','viewValue':'Michigan'},{'value':'Minnesota','viewValue':'Minnesota'},{'value':'Mississippi','viewValue':'Mississippi'},{'value':'Missouri','viewValue':'Missouri'},{'value':'Montana','viewValue':'Montana'},{'value':'Nebraska','viewValue':'Nebraska'},{'value':'Nevada','viewValue':'Nevada'},{'value':'New Hampshire','viewValue':'New Hampshire'},{'value':'New Jersey','viewValue':'New Jersey'},{'value':'New Mexico','viewValue':'New Mexico'},{'value':'New York','viewValue':'New York'},{'value':'North Carolina','viewValue':'North Carolina'},{'value':'North Dakota','viewValue':'North Dakota'},{'value':'Ohio','viewValue':'Ohio'},{'value':'Oklahoma','viewValue':'Oklahoma'},{'value':'Oregon','viewValue':'Oregon'},{'value':'Pennsylvania','viewValue':'Pennsylvania'},{'value':'Rhode Island','viewValue':'Rhode Island'},{'value':'South Carolina','viewValue':'South Carolina'},{'value':'South Dakota','viewValue':'South Dakota'},{'value':'Tennessee','viewValue':'Tennessee'},{'value':'Texas','viewValue':'Texas'},{'value':'Utah','viewValue':'Utah'},{'value':'Vermont','viewValue':'Vermont'},{'value':'Virginia','viewValue':'Virginia'},{'value':'Washington','viewValue':'Washington'},{'value':'West Virginia','viewValue':'West Virginia'},{'value':'Wisconsin','viewValue':'Wisconsin'},{'value':'Wyoming','viewValue':'Wyoming'}];

  sortby:string = "Title";
  tasks: Task[];
  project: Project;
  employee:Employee;
  customer:Customer;
  proposal:Proposal;
  taskAddDialogRef: MatDialogRef<TaskAddDialogComponent>;
  taskSelected: Task;
  projectId:number;
  employeeId:number;
  clientId:number;
  proposalId:number;

  constructor(private _elementRef: ElementRef
      ,private formBuilder: FormBuilder
      ,private activatedRoute: ActivatedRoute
      ,private taskService:TaskService
      ,private noteService:NoteService
      ,private projectService:ProjectService
      ,private clientService:CustomerService
      ,private employeeService:EmployeeService
      ,private proposalService:ProposalService
      ,private navigationservice:NavigationService
      ,private router: Router
      ,private dialog: MatDialog
      ,private toastr: ToastrService
      ,private projectStatusService:ProjectStatusService
      ,private projectPriorityService:ProjectpriorityService
      ,private ProjecttypeService:ProjecttypeService
      ,private customerService:CustomerService
      ,private foundationTypeService:FoundationTypeService
      , private clientCreationDialogService:ClientCreationDialogService,
  
      ) {
        
        // this.disabled = false;
        // this.selected = {};
      
      
      this.activatedRoute.params.subscribe((params: Params) => {
        this.isEdit = false;  
        var currentURL:string = this.router.url;
        var numberOfTasks:number;
        if(currentURL.startsWith("/projects"))
        {                       
          if(!params.Id)
          {
            this.projectId = params.id;
            if(this.projectId)
            {
              this.taskService.GetTasksByProjectId(this.projectId).subscribe(data => {
                this.tasks = data;
                numberOfTasks = data.length;                
              });

              this.projectService.GetProjectById(this.projectId).subscribe(data => {
                this.project = data;                
              });
            }
          }
        }
        else if(currentURL.startsWith("/employees") )
        {                     
          if(!params.Id)
          {
            this.employeeId = params.id;            
            if(this.employeeId)
            {
              this.taskService.GetTasksByEmployeeId(this.employeeId).subscribe(data => {            
                this.tasks = data;
                numberOfTasks = data.length;                
              });

              this.employeeService.GetEmployeebyId(this.employeeId).subscribe(data => {
                this.employee = data;                
              });
            }           
          }
        }

        else if(currentURL.startsWith("/clients"))
        {          
          if(!params.Id)
          {
            this.clientId = params.id;
            
            if(this.clientId)
            {
              this.taskService.GetTasksByClientId(this.clientId).subscribe(data => {            
                this.tasks = data;
                numberOfTasks = data.length;
             });

             this.clientService.GetCustomerById(this.clientId).subscribe(data => {
              this.customer = data;
            });

            }
          }
        }


        else if(currentURL.startsWith("/proposal"))
        {          
          if(!params.Id)
          {
            this.proposalId = params.id;
            
            if(this.proposalId)
            {
               this.taskService.GetTasksByProposalId(this.proposalId).subscribe(data => {            
                 this.tasks = data;
                 numberOfTasks = data.length;
              });

             this.proposalService.GetProposalById(this.proposalId).subscribe(data => {
              this.proposal = data;
            });
            }
          }
        }
     });    
     
     //console.log(this.proposal);

     
  }  
  
  onChange(newValue) {
    //console.log(newValue);    
    //this.tasks
}

selectedproject:string = "1";

sortorder:string = "asc";
  
  sortBys:any = [{'value':'CreationDate','viewValue':'Creation Date'},
                 {'value':'LastChanged','viewValue':'Last Changed'},
                 {'value':'Project','viewValue':'Project'},
                 {'value':'Creator','viewValue':'Creator'},
                 {'value':'Deadline','viewValue':'Deadline'},
                 {'value':'Priority','viewValue':'Priority'},
                 {'value':'Title','viewValue':'Title'},
                ];

  openDialog() {

    // if(!this.projectId)
    // {
    //   //this.dialog.open("No project Selected");
    //   return;
    // }

     this.taskAddDialogRef = this.dialog.open(TaskAddDialogComponent,{
       hasBackdrop:false,
       width:'420px',
      //  data: {
      //    projectname:  ''
      //  }
     });
 
     var newTask:Task;
 
     
 
     this.taskAddDialogRef.afterClosed().pipe(
       filter(formData => formData)
     ).subscribe(formData => {
        
      newTask = { 
          ID:0,              
          ProjectID: this.proposalId ? this.proposalId : this.projectId,
          TaskStatusID:formData.taskStatusSelect, 
          TaskStatus:'', 
          TaskName:formData.taskname,         
          DesignByEmployeeID:formData.designedBySelect,          
          DesignByEmployee:'',
          Deadline:formData.deadlineDate,
          ShortDescription:'',
          FullDescription:'',
          NewReviewNotes:'',
          ReviewNotes:'',      
          ProjectName:'',
          TaskForProject: this.proposalId ? false : true,
          CreatedDate:new Date(),
          CreatedBy:1,
         };       
 
       this.taskService.SaveTask(newTask)
        .subscribe((data:any)=> {
          if(data.Status == "success")
          {                                
            this.toastr.success('Task added successful');
            newTask.ID = data.ID;
            this.tasks.unshift(newTask);
            let note:Note;
            note = {
              ID: 0 ,
              Comment:formData.note, 
              TaskId: data.ID ,
              CreatedDate:new Date(),
              CreatedByEmployeeId : 1
            }
            this.noteService.SaveNote(note).subscribe((data:any)=> {
              if(data.Status == "success")
              {   
              }                       
            });
          }
  
          else{
            this.toastr.error(data.Errors[0]);      
          }
        });
     });

    }

  checkboxSelection = [];
  checked: boolean = false;
  openDetial: boolean = false;
  isEdit:boolean = false;  



  // Exception

    @HostListener('document:click', ['$event', '$event.target']) onClick(event: MouseEvent, targetElement: HTMLElement) {
      if (!targetElement) {
        return;
      }

      const clickedInside = this._elementRef.nativeElement.contains(targetElement);
      if (!clickedInside && this.openDetial === true) {
        this.openDetial = false;
      }
  }

  makeEditable()
  {
    this.isEdit= true;  
    // console.log('proposal'+this.proposalId)
    // console.log('employee'+this.employeeId)
    // console.log('client'+this.clientId)
    // console.log('project'+this.projectId)
    if(this.proposalId)
      this.showProposalEditValue();
    else if(this.employeeId)
      this.showEmployeeEditValue();
    else if(this.clientId)
      this.showClientEditValue();
    else if(this.projectId)
      this.showProjectEditValue();
  }

  makeReadonly()
  {
    this.isEdit= false;
  }

  Designations = [{'value':'designer','viewValue':'Designer'},
    {'value':'admin','viewValue':'Admin'},
    {'value':'projectmanager','viewValue':'Project Manager'},
    {'value':'engineer','viewValue':'Engineer'}]

  showClientEditValue(){
    this.clientform.controls['title'].setValue(this.customer.Title);
    this.clientform.controls['keyperson'].setValue(this.customer.KeyPerson);
    this.clientform.controls['address'].setValue(this.customer.Address);
    this.clientform.controls['city'].setValue(this.customer.City);
    this.clientform.controls['selectedstate'].setValue(this.customer.State);
    this.clientform.controls['zip'].setValue(this.customer.Zip);        
    this.clientform.controls['phone'].setValue(this.customer.Phone);
    this.clientform.controls['email'].setValue(this.customer.Email);
  }

  delete(){
    // if(this.proposalId)
    //   //this.proposalService.de();
    // else if(this.employeeId)
    //   this.showEmployeeEditValue();
    // else if(this.clientId)
    //   this.showClientEditValue();
    // else if(this.projectId)
    //   this.showProjectEditValue();
  }

  showProjectEditValue(){

    this.projectform.controls['projectname'].setValue(this.project.Title); 
    this.projectform.controls['projectNumber'].setValue(this.project.ProjectNumber); 
    this.projectform.controls['projectStatusSelect'].setValue(this.project.ProjectStatusID); 
    this.projectform.controls['projectPrioritySelect'].setValue(this.project.ProjectPriorityID); 
    this.projectform.controls['clientSelect'].setValue(this.project.CustomerID); 
    this.projectform.controls['reviewdBySelect'].setValue(this.project.ReviewedByID); 
    this.projectform.controls['projectStateSelect'].setValue(this.project.JobState); 
    this.projectform.controls['city'].setValue(this.project.JobCity); 
    this.projectform.controls['projectTypesSelect'].setValue(this.project.ProjectTypeID); 
    this.projectform.controls['foundationTypeSelect'].setValue(this.project.FoundationTypeID); 
    this.projectform.controls['planName'].setValue(this.project.PlanName); 
    this.projectform.controls['planNumber'].setValue(this.project.PlanNumber); 
    this.projectform.controls['pickerStart'].setValue(this.project.StartDate); 
    this.projectform.controls['pickerEnd'].setValue(this.project.DueDate); 
    this.projectform.controls['jobAddress'].setValue(this.project.JobAddress); 
    this.projectform.controls['jobZipAddress'].setValue(this.project.JobZipAddress); 
    this.projectform.controls['projectTypeNotes'].setValue(this.project.ProjectTypeNotes); 
    this.projectform.controls['CrawlSpaceJoist'].setValue(this.project.CrawlSpaceJoist); 
    this.projectform.controls['How_WhenSending'].setValue(this.project.How_WhenSending); 
    this.projectform.controls['typeOfFloorJoist'].setValue(this.project.TypeOfFloorJoist); 
    this.projectform.controls['maxFloorJoistSpacing'].setValue(this.project.MaxFloorJoistSpacing); 
    this.projectform.controls['typeOfCeilingJoist'].setValue(this.project.TypeOfCeilingJoist); 
    this.projectform.controls['roofingMaterials'].setValue(this.project.RoofingMaterials); 
    this.projectform.controls['weightOfRoofingMaterials'].setValue(this.project.WeightOfRoofingMaterials); 
    this.projectform.controls['projectMaterialNotes'].setValue(this.project.ProjectMaterialNotes); 
    this.projectform.controls['couriertoWhom'].setValue(this.project.CouriertoWhom); 
    this.projectform.controls['couriertoAddress'].setValue(this.project.CouriertoAddress); 
    this.projectform.controls['emailAddress'].setValue(this.project.EmailAddress); 
    this.projectform.controls['pickupByPersonName'].setValue(this.project.PickupByPersonName); 
    this.projectform.controls['pickupByPersonPhoneNumber'].setValue(this.project.PickupByPersonPhoneNumber); 
    this.projectform.controls['numberOfCopies'].setValue(this.project.NumberOfCopies); 
    this.projectform.controls['projectHoldNotes'].setValue(this.project.ProjectHoldNotes);     
    this.projectform.controls['invoice'].setValue(this.project.Invoice); 
    this.projectform.controls['isCustomerWillPickup'].setValue(this.project.IsCustomerWillPickup); 
    this.projectform.controls['isFoundation'].setValue(this.project.IsFoundation); 
    this.projectform.controls['isHaveEmail'].setValue(this.project.IsHaveEmail); 
    this.projectform.controls['isHaveSoilsReport'].setValue(this.project.IsHaveSoilsReport); 
    this.projectform.controls['isFraming'].setValue(this.project.IsFraming); 
    this.projectform.controls['isHaveCourierPlans'].setValue(this.project.IsHaveCourierPlans); 
  }

  showEmployeeEditValue()
  {        
    this.employeeform.controls['firstname'].setValue(this.employee.FirstName);      
    this.employeeform.controls['lastname'].setValue(this.employee.LastName);
    this.employeeform.controls['address'].setValue(this.employee.Address);
    this.employeeform.controls['city'].setValue(this.employee.City);
    this.employeeform.controls['selectedstate'].setValue(this.employee.State);
    this.employeeform.controls['zip'].setValue(this.employee.Zip);    
    this.employeeform.controls['designation'].setValue(this.employee.Designation);    
    this.employeeform.controls['phone'].setValue(this.employee.Phone);
    this.employeeform.controls['email'].setValue(this.employee.Email);
  }

  showProposalEditValue()
  {
    this.proposalform.controls['selectedClient'].setValue(this.proposal.ClientID);      
    this.proposalform.controls['name'].setValue(this.proposal.Name);
    this.proposalform.controls['address'].setValue(this.proposal.Address);
    this.proposalform.controls['city'].setValue(this.proposal.City);
    this.proposalform.controls['selectedstate'].setValue(this.proposal.State);
    this.proposalform.controls['zip'].setValue(this.proposal.Zip);
    this.proposalform.controls['details'].setValue(this.proposal.Details);
    this.proposalform.controls['proposalType'].setValue(this.proposal.ProposalType);
    this.proposalform.controls['selectDailyType'].setValue(this.proposal.DailyType);
    this.proposalform.controls['selectProjectType'].setValue(this.proposal.ProjectType);
    this.proposalform.controls['selectFoundationType'].setValue(this.proposal.FoundationTypeValue);
    this.proposalform.controls['selectSlabType'].setValue(this.proposal.FoundationSlabTypeValue);
    this.proposalform.controls['selectPiersType'].setValue(this.proposal.FoundationPierTypeValue);
    this.proposalform.controls['selectRemedialType'].setValue(this.proposal.FoundationPierRemiedialTypeValue);
    this.proposalform.controls['selectFrameType'].setValue(this.proposal.FrameTypeValue);
    this.proposalform.controls['selectResidentialType'].setValue(this.proposal.FrameResidentialValue);
    this.proposalform.controls['selectExteriorFinish'].setValue(this.proposal.FrameExteriorValue);
    this.proposalform.controls['selectRoofType'].setValue(this.proposal.FrameRoofTypeValue);
    this.proposalform.controls['initialContractDatePicker'].setValue(this.proposal.InitialContractDate);
    this.proposalform.controls['submittalDatePicker'].setValue(this.proposal.SubmittalDate);
    this.proposalform.controls['revisionDatePicker'].setValue(this.proposal.RevisionDate);
    this.proposalform.controls['selectRetainingWallType'].setValue(this.proposal.RetainingWallTypeValue);
    this.proposalform.controls['selectRetainingWallTypeType'].setValue(this.proposal.RetainingWallTypeValue);
    this.proposalform.controls['selectRetainingWallTypeWall'].setValue(this.proposal.RetainingWallTypeWallValue);
    this.proposalform.controls['selectPoolType'].setValue(this.proposal.PoolValue);
    this.proposalform.controls['selectCompanydesigningType'].setValue(this.proposal.PoolCompanyDesignValue);
  }

  ngOnInit() {

    this.employeeService.GetEmployees().subscribe(data => {            
      this.employees = data.map(eachdata=> ({
        value:eachdata.ID,
        viewValue:eachdata.Name      
      }) );
    });

    this.projectStatusService.GetProjectStauts().subscribe(data => {
            
      this.projectStatuses = data.map(eachdata=> ({
        value:eachdata.ID,
        viewValue:eachdata.StatusTitle        
      }) );
  });

  this.projectPriorityService.GetProjectPriorities().subscribe(data => {
          
    this.projectpriorities = data.map(eachdata=> ({
      value:eachdata.ID,
      viewValue:eachdata.PriorityTitle        
    }) );
});

this.ProjecttypeService.GetProjecttypes().subscribe(data => {
            
  this.ProjectTypes = data.map(eachdata=> ({
    value:eachdata.ID,
    viewValue:eachdata.ProjectTypeTitle        
  }) );
});


this.foundationTypeService.GetFoundationType().subscribe(data => {
          
this.FoundationTypes = data.map(eachdata=> ({
  value:eachdata.ID,
  viewValue:eachdata.FoundationTypeTitle        
}) );
});

    this.proposalform = this.formBuilder.group({
    name:[this.proposal ? this.proposal.Name:  '',[Validators.minLength(5)]],
    address:[this.proposal ? this.proposal.Address:  '',[Validators.minLength(5)]],
    city:['',[ Validators.minLength(5)]],
    selectedstate:[ '',[]],
    zip:['',[Validators.minLength(5)]],
    details:['',[Validators.minLength(5)]],
     selectedClient:["",[]],
     proposalType:["daily",[]],
     selectDailyType:[ "daily",[]],
     selectProjectType:["project",[]],
     selectFoundationType:[ "project",[]],
     selectSlabType:[ "project",[]],

     selectPiersType:[ "project",[]],
     selectRemedialType:[ "project",[]],
     selectFrameType:[ "project",[]],
     selectResidentialType:[ "project",[]],
     selectExteriorFinish:[ "project",[]],
     selectRoofType:[ "project",[]],

     initialContractDatePicker:[ "project",[]],
     submittalDatePicker:[ "project",[]],
     revisionDatePicker:[ "project",[]],


     selectRetainingWallType:[ "project",[]],
     selectRetainingWallTypeType:[ "project",[]],
     selectRetainingWallTypeWall:[ "project",[]],
     selectPoolType:[ "project",[]],
     selectCompanydesigningType:["project",[]],      
   });   
   this.refreshClientList();


   this.employeeform = this.formBuilder.group({
    firstname:[this.employee ? this.employee.FirstName:  '',[Validators.minLength(5)]],
    lastname:[this.employee ? this.employee.LastName:  '',[Validators.minLength(5)]],  
    designation  :[this.employee ? this.employee.Designation:  '',[Validators.minLength(5)]],  
    address:[this.employee ? this.employee.Address:  '',[Validators.minLength(5)]],
    city:['',[ Validators.minLength(5)]],
    selectedstate:[ '',[]],
    zip:['',[Validators.minLength(5)]],
    phone:['',[Validators.minLength(5)]],
    email:[this.employee ? this.employee.Email:  '',[Validators.minLength(5)]],
 });

 this.clientform = this.formBuilder.group({
  title:[this.customer ? this.customer.Title:  '',[Validators.minLength(5)]],
  keyperson:[this.customer ? this.customer.KeyPerson:  '',[Validators.minLength(5)]],    
  address:[this.customer ? this.customer.Address:  '',[Validators.minLength(5)]],
  city:['',[ Validators.minLength(5)]],
  selectedstate:[ '',[]],
  zip:['',[Validators.minLength(5)]],
  phone:['',[Validators.minLength(5)]],
  email:[this.customer ? this.customer.Email:  '',[Validators.minLength(5)]],
});


this.projectform = this.formBuilder.group({
  projectname: [this.project ? this.project.Title : '',[Validators.required, Validators.minLength(5)]],      
  projectNumber:[this.project ? this.project.ProjectNumber : '',[Validators.minLength(5)]],
  projectStatusSelect:[this.project ? this.project.ProjectStatusID : '',[Validators.required, Validators.minLength(5)]],
  projectPrioritySelect:[this.project ? this.project.ProjectPriorityID : '',[ Validators.minLength(5)]],
  clientSelect:[this.project ? this.project.CustomerID : '',[Validators.required, Validators.minLength(5)]],
  reviewdBySelect:[this.project ? this.project.ReviewedByID : '',[Validators.minLength(5)]],
  projectStateSelect:[this.project ? this.project.ProjectStatusID : '',[ Validators.minLength(5)]],
  city:[this.project ? this.project.JobCity : '',[ Validators.minLength(5)]],
  projectTypesSelect:[this.project ? this.project.ProjectTypeID : '',[ Validators.minLength(5)]],
  foundationTypeSelect:[this.project ? this.project.FoundationTypeID : '',[ Validators.minLength(5)]],

  planName:[this.project ? this.project.PlanName : '',[ Validators.minLength(5)]],
  planNumber:[this.project ? this.project.PlanNumber : '',[ Validators.minLength(5)]],
  pickerStart:[this.project ? this.project.StartDate : '',[ Validators.minLength(5)]],
  pickerEnd:[this.project ? this.project.DueDate : '',[ Validators.minLength(5)]],
  jobAddress:[this.project ? this.project.JobAddress : '',[ Validators.minLength(5)]],
  jobZipAddress:[this.project ? this.project.JobZipAddress : '',[ Validators.minLength(5)]],
  projectTypeNotes:[this.project ? this.project.ProjectTypeNotes : '',[ Validators.minLength(5)]],
  CrawlSpaceJoist:[this.project ? this.project.CrawlSpaceJoist : '',[ Validators.minLength(5)]],
  How_WhenSending:[this.project ? this.project.How_WhenSending : '',[ Validators.minLength(5)]],
  typeOfFloorJoist:[this.project ? this.project.TypeOfFloorJoist : '',[ Validators.minLength(5)]],
  maxFloorJoistSpacing:[this.project ? this.project.MaxFloorJoistSpacing : '',[ Validators.minLength(5)]],
  typeOfCeilingJoist:[this.project ? this.project.TypeOfCeilingJoist : '',[ Validators.minLength(5)]],
  roofingMaterials:[this.project ? this.project.RoofingMaterials : '',[ Validators.minLength(5)]],
  weightOfRoofingMaterials:[this.project ? this.project.WeightOfRoofingMaterials : '',[ ]],
  projectMaterialNotes:[this.project ? this.project.ProjectMaterialNotes : '',[ Validators.minLength(5)]],
  couriertoWhom:[this.project ? this.project.CouriertoWhom : '',[ Validators.minLength(5)]],
  couriertoAddress:[this.project ? this.project.CouriertoAddress : '',[ Validators.minLength(5)]],
  emailAddress:[this.project ? this.project.EmailAddress : '',[ Validators.minLength(5)]],
  pickupByPersonName:[this.project ? this.project.PickupByPersonName : '',[ Validators.minLength(5)]],
  pickupByPersonPhoneNumber:[this.project ? this.project.PickupByPersonPhoneNumber : '',[ Validators.minLength(5)]],
  numberOfCopies:[this.project ? this.project.NumberOfCopies : '',[ Validators.minLength(5)]],
  projectHoldNotes:[this.project ? this.project.ProjectHoldNotes : '',[ Validators.minLength(5)]],
  customerData:[this.project ? this.project.CustomerData : '',[ Validators.minLength(5)]],
  invoice:[this.project ? this.project.Invoice : '',[ Validators.minLength(5)]],
  
  isCustomerWillPickup:[this.project ? this.project.IsCustomerWillPickup : '',[ Validators.minLength(5)]],         
  isFoundation:[this.project ? this.project.IsFoundation : '',[ Validators.minLength(5)]],
  isHaveEmail:[this.project ? this.project.IsHaveEmail : '',[ Validators.minLength(5)]],     
  isHaveSoilsReport:[this.project ? this.project.IsHaveSoilsReport : '',[ Validators.minLength(5)]],
  isFraming:[this.project ? this.project.IsFraming : '',[ Validators.minLength(5)]],
  isHaveCourierPlans:[this.project ? this.project.IsHaveCourierPlans : '',[ Validators.minLength(5)]],
});


  }

  refreshClientList(){
    this.clientService.GetCustomers().subscribe(data=>{
      this.clients = data.map(eachdata=> ({
        value:eachdata.ID,
        viewValue:eachdata.Title        
      }) );
    });
  }

  onCheckBoxAllTrigger($event) {
    if ($event.checked) {
      this.checkboxSelection = this.tasks;
    } else {
      this.checkboxSelection = [];
    }
  }

  onDetailTriggered(taskItem) {
    if(this.openDetial)
    {
      if(this.taskSelected && taskItem )
      {      
        if(this.taskSelected.ID == taskItem.ID)
          this.openDetial = false;
      }
    }
    else
      this.openDetial = true;

     this.taskSelected = taskItem;
  }

  onOpenedTriggered(opened) {
    //console.log(opened);    
    this.openDetial = opened;
  }

  

      // public disabled:boolean;

      public options: Object = {
        'showDropdowns': true,
        'showWeekNumbers': true,
        'timePickerIncrement': 5,
        'autoApply': true,
        'startDate': '05/14/2018',
        'endDate': '06/27/2018',        
        "showISOWeekNumbers": true,
        "timePicker": false,
        "alwaysShowCalendars": true,
        "singleDatePicker": false,
        // "ranges":{
        //   'Today': [moment(), moment()],
        // 'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        // 'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        // 'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        // 'This Month': [moment().startOf('month'), moment().endOf('month')],
        // 'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        // }
      };

      // private formats:Array<string> = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY', 'shortDate'];
      // private format:string = this.proposalformats[0];
      // private startdate: Date = new Date();
      // private enddate: Date = new Date();
      // private datelabel: string = 'Please choose a date';
      // private selected: any;

      

      // private dateSelected(message: any) {
      //   this.selectedDate.emit(message);
      // }


      public daterange: any = {
        startDate: moment().subtract(29, 'days'), 
        endDate: moment()          
      };

  
      public selectedDate(value: any, datepicker?: any) {
          // this is the date the iser selected
          console.log(value);
  
          // any object can be passed to the selected event and it will be passed back here
          datepicker.start = value.start;
          datepicker.end = value.end;
  
          // or manupulat your own internal property
          this.daterange.start = value.start;
          this.daterange.end = value.end;
          this.daterange.label = value.label;
      }


      selectedProposalType:string = "daily";
      selectedProjectType:string ="";
      selectedPiersType :string ="";
      selectedFoundationType :string ="";
      selectedFrameType :string ="";
      selectedRetainingWallType :string ="";
      selectedRetainingWallTypeType :string ="";
      selectedPoolType :string ="";

   SelectProposalType(event) {      
      this.selectedProposalType = event.value;  
    }   
    
    SelectProjectType(event)
    {
      this.selectedProjectType = event.value;  
    }
    
    SelectFoundationType(event)
    {
      this.selectedFoundationType = event.value; 
    }

    // SelectSlabType(event)
    // {
    //   //this.selectedProjectType = event.value; 
    // }

    SelectPiersType(event)
    {
      this.selectedPiersType = event.value; 
    }

    // SelectRemedialType(event)
    // {
    //   //this.selectedProjectType = event.value; 
    // }

    SelectFrameType(event)
    {
      this.selectedFrameType = event.value; 
    }

    // SelectResidentialType(event)
    // {
    //   //this.selectedre = event.value; 
    // }


    // SelectExteriorFinishType(event)
    // {
    //   //this.selectedex = event.value; 
    // }

    // SelectRoofType(event)
    // {
    //  // this.selectedProjectType = event.value; 
    // }

    SelectRetainingWallType(event)
    {
      this.selectedRetainingWallType = event.value; 
    }

    SelectRetainingWallTypeType(event){
      this.selectedRetainingWallTypeType = event.value; 
    }

    // SelectWallType(event){
    //   //this.selectedProjectType = event.value; 
    // }

    SelectPoolType(event){
      this.selectedPoolType = event.value; 
    }

    // SelectCompanyDesigningType(event){
    //   //this.selectedProjectType = event.value; 
    // }

    submitproject(form) {
      if(form.valid)
      {    
        this.project = {
          ID: this.projectId,  
          Title:form.value["projectname"],            
          ProjectNumber:form.value["projectNumber"],
          ProjectStatusID:form.value["projectStatusSelect"],
          ProjectStatusName:'',
          ProjectPriorityID:form.value["projectPrioritySelect"],
          ProjectPriorityTitle:'',
          PlanName:form.value["planName"],
          PlanNumber:form.value["planNumber"],
          StartDate:form.value["pickerStart"],
          DueDate:form.value["pickerEnd"],
          JobAddress:form.value["jobAddress"],
          JobCity:form.value["city"],
          JobState:form.value["projectStateSelect"],
          JobZipAddress:form.value["jobZipAddress"],
          DWGFIleLocation:'',
          CustomerName:'',
          ReviewedByName:'',
          ProjectTypeName:'',
          FoundationTypeName:'',
          ProjectTypeNotes:form.value["projectTypeNotes"],
          CustomerID:form.value["clientSelect"],
          ReviewedByID:form.value["reviewdBySelect"],
          ProjectTypeID:form.value["projectTypesSelect"],
          IsFoundation:form.value["isFoundation"],
          FoundationTypeID:form.value["foundationTypeSelect"],
          CrawlSpaceJoist:form.value["CrawlSpaceJoist"],
          IsHaveSoilsReport:form.value["isHaveSoilsReport"],
          How_WhenSending:form.value["How_WhenSending"],
          IsFraming:form.value["isFraming"],
          TypeOfFloorJoist:form.value["typeOfFloorJoist"],
          MaxFloorJoistSpacing:form.value["maxFloorJoistSpacing"],
          TypeOfCeilingJoist:form.value["typeOfCeilingJoist"],
          RoofingMaterials:form.value["roofingMaterials"],
          WeightOfRoofingMaterials:form.value["weightOfRoofingMaterials"],
          ProjectMaterialNotes:form.value["projectMaterialNotes"],
          CouriertoWhom:form.value["couriertoWhom"],
          CouriertoAddress:form.value["couriertoAddress"],
          IsHaveCourierPlans:form.value["isHaveCourierPlans"],
          IsHaveEmail:form.value["isHaveEmail"],
          EmailAddress:form.value["emailAddress"],
          IsCustomerWillPickup:form.value["isCustomerWillPickup"],
          PickupByPersonName:form.value["pickupByPersonName"],
          PickupByPersonPhoneNumber:form.value["pickupByPersonPhoneNumber"],
          NumberOfCopies:form.value["numberOfCopies"],
          ProjectHoldNotes:form.value["projectHoldNotes"],
          Invoice:form.value["invoice"],
          CustomerData:form.value["customerData"],
          
        }
        this.projectService.SaveProject(this.project).subscribe((data:any)=> {
          if(data.Status == "success")
          {                                  
            this.toastr.success('Project saved successful');
            this.navigationservice.refreshNavigationModel().subscribe(data => {           
              this.isEdit = false;
            });             
          }
  
          else{
            this.toastr.error(data.Errors[0]);      
          }      
        });
      }
    }


  submitUser(form) {
    if(form.valid)
    {    
      this.employee = {
        ID: this.employeeId,  
        FirstName : form.value["firstname"],
        LastName : form.value["lastname"],
        Name: form.value["firstname"] + ' '+  form.value["lastname"],
        Address: form.value["address"] ,  
        Designation: form.value["designation"] ,  
        State: form.value["selectedstate"] ,  
        Zip: form.value["zip"] ,  
        Phone: form.value["phone"] ,
        Email: form.value["email"] ,
        City: form.value["city"] ,           
        HasReviewAuthorization:false,
        IsInManagement:false,
        IsInDirectorPanel:false       
        }; 
      this.employeeService.SaveEmployee(this.employee).subscribe((data:any)=> {
        if(data.Status == "success")
        {                                  
          this.toastr.success('Employee saved successful');
          this.navigationservice.refreshNavigationModel().subscribe(data => {           
            this.isEdit = false;
          });             
        }

        else{
          this.toastr.error(data.Errors[0]);      
        }      
      });
    }
  }

  submitClient(form){
    if(form.valid)
    {
      this.customer = {
        ID: this.clientId ,  
        Title : form.value["title"],  
        KeyPerson: form.value["keyperson"],  
        Address: form.value["address"] ,          
        State: form.value["selectedstate"] ,  
        Zip: form.value["zip"] ,  
        Phone: form.value["phone"] ,
        Email: form.value["email"] ,
        City: form.value["city"]        
        }; 
      this.clientService.SaveCustomer(this.customer).subscribe((data:any)=> {
        if(data.Status == "success")
        {                                  
          this.toastr.success('Customer saved successful');
          this.navigationservice.refreshNavigationModel().subscribe(data => {           
            this.isEdit = false;
          });             
        }

        else{
          this.toastr.error(data.Errors[0]);      
        }      
      });
    }
  }


  submitProposal(form) {
    if(form.valid)
    {      
      this.proposal = {
        ID: this.proposalId ,  
        Name: form.value["name"] ,   
        Address: form.value["address"] ,  
        City: form.value["city"] ,  
        State: form.value["selectedstate"] ,  
        Zip: form.value["zip"] ,  
        Details: form.value["details"] ,  
        InitialContractDate: form.value["initialContractDatePicker"] ,  
        SubmittalDate: form.value["submittalDatePicker"] ,  
        RevisionDate: form.value["revisionDatePicker"] ,  
        ProposalType: form.value["proposalType"] ,  
        DailyType: form.value["selectDailyType"],  
        ProjectType: form.value["selectProjectType"] ,  
        ProjectOtherTypeValue: form.value["ProjectOtherTypeValue"] ,  
        FoundationTypeValue: form.value["selectFoundationType"] ,  
        FoundationSlabTypeValue: form.value["selectSlabType"] ,  
        FoundationPierTypeValue: form.value["selectPiersType"] ,  
        FoundationPierRemiedialTypeValue: form.value["selectRemedialType"] ,  
        FoundationPierRemiedialOtherTypeValue: form.value["FoundationPierRemiedialOtherTypeValue"] ,  
        FoundationOtherTypeValue: form.value["FoundationOtherTypeValue"] ,  
        FrameTypeValue: form.value["selectFrameType"] ,  
        FrameResidentialValue: form.value["selectResidentialType"] ,  
        FrameResidentialOtherValue: form.value["FrameResidentialOtherValue"] ,  
        FrameExteriorValue: form.value["selectExteriorFinish"] ,  
        FrameExteriorOtherValue: form.value["FrameExteriorOtherValue"] ,  
        FrameRoofTypeValue: form.value["selectRoofType"] ,  
        FrameRoofTypeOtherValue: form.value["FrameRoofTypeOtherValue"] ,  
        RetainingWallValue: form.value["selectRetainingWallType"] ,  
        RetainingWallTypeValue: form.value["selectRetainingWallTypeType"] ,  
        RetainingWallTypeWallValue: form.value["selectRetainingWallTypeWall"] ,  
        RetainingWallTypeWallOtherValue: form.value["RetainingWallTypeWallOtherValue"] ,  
        PoolValue: form.value["selectPoolType"] ,  
        PoolCompanyDesignValue:form.value["selectCompanydesigningType"], 
        ClientID : form.value["selectedClient"]
        }; 
      this.proposalService.SaveProposal(this.proposal).subscribe((data:any)=> {
        if(data.Status == "success")
        {                                  
          this.toastr.success('Proposal saved successful');
          this.navigationservice.refreshNavigationModel().subscribe(data => {           
            this.isEdit = false;
          });             
        }

        else{
          this.toastr.error(data.Errors[0]);      
        }      
      });
    }
  }


  openClientAddDialog()
    {
      this.clientCreationDialogService.OpenDialog().then(
        (data)=>{
          this.refreshClientList();          
          this.proposalform.controls["selectedClient"].setValue(data);
        },()=>{
            console.log('error in saving client information');
        }
      );
    }

  

}
