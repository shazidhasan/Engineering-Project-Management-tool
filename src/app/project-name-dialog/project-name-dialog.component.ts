import { ProjecttypeService } from './../shared/projecttype.service';
import { Customer } from './../shared/customer.model';
import { EmployeeService } from './../shared/employee.service';
import { CustomerService } from './../shared/customer.service';
import { Projectstatus } from './../shared/projectstatus.model';
import { Component, OnInit,Inject    } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA  } from '@angular/material';
import { FormGroup, FormBuilder,ReactiveFormsModule,Validators } from '@angular/forms';
import { ProjectStatusService } from '../shared/project-status.service';
import { ProjectpriorityService } from '../shared/projectpriority.service';
import { FoundationTypeService } from '../shared/foundation-type.service';


@Component({
  selector: 'app-project-name-dialog',
  templateUrl: './project-name-dialog.component.html',
  styleUrls: ['./project-name-dialog.component.css']
})
export class ProjectNameDialogComponent implements OnInit {

  form: FormGroup;

  projectStatuses:any= [];
  projectpriorities:any=[];
  Customers:any=[];
  employees:any=[];  
  
  ProjectTypes:any=[];
  FoundationTypes:any=[];

  cities:any = [{'value':1,'viewValue':'Alameda'},{'value':2,'viewValue':'Alhambra'},{'value':3,'viewValue':'Anaheim'},{'value':4,'viewValue':'Antioch'}];
  states:any=[{'value':'Alabama','viewValue':'Alabama'},{'value':'Alaska','viewValue':'Alaska'},{'value':'Arizona','viewValue':'Arizona'},{'value':'Arkansas','viewValue':'Arkansas'},{'value':'California','viewValue':'California'},{'value':'Colorado','viewValue':'Colorado'},{'value':'Connecticut','viewValue':'Connecticut'},{'value':'Delaware','viewValue':'Delaware'},{'value':'Florida','viewValue':'Florida'},{'value':'Georgia','viewValue':'Georgia'},{'value':'Hawaii','viewValue':'Hawaii'},{'value':'Idaho','viewValue':'Idaho'},{'value':'Illinois','viewValue':'Illinois'},{'value':'Indiana','viewValue':'Indiana'},{'value':'Iowa','viewValue':'Iowa'},{'value':'Kansas','viewValue':'Kansas'},{'value':'Kentucky','viewValue':'Kentucky'},{'value':'Louisiana','viewValue':'Louisiana'},{'value':'Maine','viewValue':'Maine'},{'value':'Maryland','viewValue':'Maryland'},{'value':'Massachusetts','viewValue':'Massachusetts'},{'value':'Michigan','viewValue':'Michigan'},{'value':'Minnesota','viewValue':'Minnesota'},{'value':'Mississippi','viewValue':'Mississippi'},{'value':'Missouri','viewValue':'Missouri'},{'value':'Montana','viewValue':'Montana'},{'value':'Nebraska','viewValue':'Nebraska'},{'value':'Nevada','viewValue':'Nevada'},{'value':'New Hampshire','viewValue':'New Hampshire'},{'value':'New Jersey','viewValue':'New Jersey'},{'value':'New Mexico','viewValue':'New Mexico'},{'value':'New York','viewValue':'New York'},{'value':'North Carolina','viewValue':'North Carolina'},{'value':'North Dakota','viewValue':'North Dakota'},{'value':'Ohio','viewValue':'Ohio'},{'value':'Oklahoma','viewValue':'Oklahoma'},{'value':'Oregon','viewValue':'Oregon'},{'value':'Pennsylvania','viewValue':'Pennsylvania'},{'value':'Rhode Island','viewValue':'Rhode Island'},{'value':'South Carolina','viewValue':'South Carolina'},{'value':'South Dakota','viewValue':'South Dakota'},{'value':'Tennessee','viewValue':'Tennessee'},{'value':'Texas','viewValue':'Texas'},{'value':'Utah','viewValue':'Utah'},{'value':'Vermont','viewValue':'Vermont'},{'value':'Virginia','viewValue':'Virginia'},{'value':'Washington','viewValue':'Washington'},{'value':'West Virginia','viewValue':'West Virginia'},{'value':'Wisconsin','viewValue':'Wisconsin'},{'value':'Wyoming','viewValue':'Wyoming'}];
  //,'Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'
  


  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ProjectNameDialogComponent>,
    private projectStatusService:ProjectStatusService,
    private projectPriorityService:ProjectpriorityService,
    private ProjecttypeService:ProjecttypeService,
    private customerService:CustomerService,
    private employeeService:EmployeeService,
    private foundationTypeService:FoundationTypeService,
    @Inject(MAT_DIALOG_DATA) private data) 
    {

    }

  ngOnInit() {

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


  this.customerService.GetCustomers().subscribe(data => {
            
    this.Customers = data.map(eachdata=> ({
      value:eachdata.ID,
      viewValue:eachdata.Title        
    }) );
});

this.employeeService.GetEmployees().subscribe(data => {
            
  this.employees = data.map(eachdata=> ({
    value:eachdata.ID,
    viewValue:eachdata.Name        
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




  


  







    

    this.form = this.formBuilder.group({
      projectname: [this.data ? this.data.projectname : '',[Validators.required, Validators.minLength(5)]],      
      projectNumber:[this.data ? this.data.projectNumber : '',[Validators.minLength(5)]],
      projectStatusSelect:[this.data ? this.data.projectStatusSelect : '',[Validators.required, Validators.minLength(5)]],
      projectPrioritySelect:[this.data ? this.data.projectPrioritySelect : '',[ Validators.minLength(5)]],
      customerSelect:[this.data ? this.data.customerSelect : '',[Validators.required, Validators.minLength(5)]],
      reviewdBySelect:[this.data ? this.data.reviewdBySelect : '',[Validators.minLength(5)]],
      projectStateSelect:[this.data ? this.data.projectStateSelect : '',[ Validators.minLength(5)]],
      city:[this.data ? this.data.city : '',[ Validators.minLength(5)]],
      projectTypesSelect:[this.data ? this.data.projectTypesSelect : '',[ Validators.minLength(5)]],
      foundationTypeSelect:[this.data ? this.data.foundationTypeSelect : '',[ Validators.minLength(5)]],

      planName:[this.data ? this.data.planName : '',[ Validators.minLength(5)]],
      planNumber:[this.data ? this.data.planNumber : '',[ Validators.minLength(5)]],
      pickerStart:[this.data ? this.data.pickerStart : '',[ Validators.minLength(5)]],
      pickerEnd:[this.data ? this.data.pickerEnd : '',[ Validators.minLength(5)]],
      jobAddress:[this.data ? this.data.jobAddress : '',[ Validators.minLength(5)]],
      jobZipAddress:[this.data ? this.data.jobZipAddress : '',[ Validators.minLength(5)]],
      projectTypeNotes:[this.data ? this.data.jobZipAddress : '',[ Validators.minLength(5)]],
      CrawlSpaceJoist:[this.data ? this.data.CrawlSpaceJoist : '',[ Validators.minLength(5)]],
      How_WhenSending:[this.data ? this.data.How_WhenSending : '',[ Validators.minLength(5)]],
      typeOfFloorJoist:[this.data ? this.data.typeOfFloorJoist : '',[ Validators.minLength(5)]],
      maxFloorJoistSpacing:[this.data ? this.data.maxFloorJoistSpacing : '',[ Validators.minLength(5)]],
      typeOfCeilingJoist:[this.data ? this.data.typeOfCeilingJoist : '',[ Validators.minLength(5)]],
      roofingMaterials:[this.data ? this.data.roofingMaterials : '',[ Validators.minLength(5)]],
      weightOfRoofingMaterials:[this.data ? this.data.weightOfRoofingMaterials : '',[ ]],
      projectMaterialNotes:[this.data ? this.data.projectMaterialNotes : '',[ Validators.minLength(5)]],
      couriertoWhom:[this.data ? this.data.couriertoWhom : '',[ Validators.minLength(5)]],
      couriertoAddress:[this.data ? this.data.couriertoAddress : '',[ Validators.minLength(5)]],
      emailAddress:[this.data ? this.data.emailAddress : '',[ Validators.minLength(5)]],
      pickupByPersonName:[this.data ? this.data.pickupByPersonName : '',[ Validators.minLength(5)]],
      pickupByPersonPhoneNumber:[this.data ? this.data.pickupByPersonPhoneNumber : '',[ Validators.minLength(5)]],
      numberOfCopies:[this.data ? this.data.numberOfCopies : '',[ Validators.minLength(5)]],
      projectHoldNotes:[this.data ? this.data.projectHoldNotes : '',[ Validators.minLength(5)]],
      customerData:[this.data ? this.data.customerData : '',[ Validators.minLength(5)]],
      invoice:[this.data ? this.data.invoice : '',[ Validators.minLength(5)]],
      
      isCustomerWillPickup:[this.data ? this.data.isCustomerWillPickup : '',[ Validators.minLength(5)]],         
      isFoundation:[this.data ? this.data.isFoundation : '',[ Validators.minLength(5)]],
      isHaveEmail:[this.data ? this.data.isHaveEmail : '',[ Validators.minLength(5)]],     
      isHaveSoilsReport:[this.data ? this.data.isHaveSoilsReport : '',[ Validators.minLength(5)]],
      isFraming:[this.data ? this.data.isFraming : '',[ Validators.minLength(5)]],
      isHaveCourierPlans:[this.data ? this.data.isHaveCourierPlans : '',[ Validators.minLength(5)]],


      //new FormControl({disabled: false, value: null})

    })
  }

  submit(form) {
    if(form.valid)
    {
      this.dialogRef.close(form.value);
    }
  }

}
