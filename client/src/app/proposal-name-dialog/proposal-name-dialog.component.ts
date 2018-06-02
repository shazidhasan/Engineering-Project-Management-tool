
import { CustomerService } from './../shared/customer.service';
import { Employee } from './../shared/employee.model';
import { ProjecttypeService } from './../shared/projecttype.service';
import { EmployeeService } from './../shared/employee.service';
import { Component, OnInit,Inject    } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA  } from '@angular/material';
import { FormGroup, FormBuilder,ReactiveFormsModule,Validators, FormControl } from '@angular/forms';
import { Customer } from '../shared/customer.model';
import { ClientCreationDialogService } from '../client-name-dialog/client-creation-dialog.service';
import { NavigationService } from '../admin/navigation/navigation.service';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-proposal-name-dialog',
  templateUrl: './proposal-name-dialog.component.html',
  styleUrls: ['./proposal-name-dialog.component.css']
})

export class ProposalNameDialogComponent implements OnInit {

  form: FormGroup;

  cities:any = [{'value':'Alameda','viewValue':'Alameda'},{'value':'Alhambra','viewValue':'Alhambra'},{'value':'Anaheim','viewValue':'Anaheim'},{'value':'Antioch','viewValue':'Antioch'}];
  states:any=[{'value':'Alabama','viewValue':'Alabama'},{'value':'Alaska','viewValue':'Alaska'},{'value':'Arizona','viewValue':'Arizona'},{'value':'Arkansas','viewValue':'Arkansas'},{'value':'California','viewValue':'California'},{'value':'Colorado','viewValue':'Colorado'},{'value':'Connecticut','viewValue':'Connecticut'},{'value':'Delaware','viewValue':'Delaware'},{'value':'Florida','viewValue':'Florida'},{'value':'Georgia','viewValue':'Georgia'},{'value':'Hawaii','viewValue':'Hawaii'},{'value':'Idaho','viewValue':'Idaho'},{'value':'Illinois','viewValue':'Illinois'},{'value':'Indiana','viewValue':'Indiana'},{'value':'Iowa','viewValue':'Iowa'},{'value':'Kansas','viewValue':'Kansas'},{'value':'Kentucky','viewValue':'Kentucky'},{'value':'Louisiana','viewValue':'Louisiana'},{'value':'Maine','viewValue':'Maine'},{'value':'Maryland','viewValue':'Maryland'},{'value':'Massachusetts','viewValue':'Massachusetts'},{'value':'Michigan','viewValue':'Michigan'},{'value':'Minnesota','viewValue':'Minnesota'},{'value':'Mississippi','viewValue':'Mississippi'},{'value':'Missouri','viewValue':'Missouri'},{'value':'Montana','viewValue':'Montana'},{'value':'Nebraska','viewValue':'Nebraska'},{'value':'Nevada','viewValue':'Nevada'},{'value':'New Hampshire','viewValue':'New Hampshire'},{'value':'New Jersey','viewValue':'New Jersey'},{'value':'New Mexico','viewValue':'New Mexico'},{'value':'New York','viewValue':'New York'},{'value':'North Carolina','viewValue':'North Carolina'},{'value':'North Dakota','viewValue':'North Dakota'},{'value':'Ohio','viewValue':'Ohio'},{'value':'Oklahoma','viewValue':'Oklahoma'},{'value':'Oregon','viewValue':'Oregon'},{'value':'Pennsylvania','viewValue':'Pennsylvania'},{'value':'Rhode Island','viewValue':'Rhode Island'},{'value':'South Carolina','viewValue':'South Carolina'},{'value':'South Dakota','viewValue':'South Dakota'},{'value':'Tennessee','viewValue':'Tennessee'},{'value':'Texas','viewValue':'Texas'},{'value':'Utah','viewValue':'Utah'},{'value':'Vermont','viewValue':'Vermont'},{'value':'Virginia','viewValue':'Virginia'},{'value':'Washington','viewValue':'Washington'},{'value':'West Virginia','viewValue':'West Virginia'},{'value':'Wisconsin','viewValue':'Wisconsin'},{'value':'Wyoming','viewValue':'Wyoming'}];
  //,'Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'  

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ProposalNameDialogComponent>,
    private employeeService:EmployeeService,
    private customerService:CustomerService,
    private clientCreationDialogService:ClientCreationDialogService,
    private navigationService:NavigationService,
    @Inject(MAT_DIALOG_DATA) private data) 
    {

    }

    // Designations = [{'value':'designer','viewValue':'Designer'},
    // {'value':'admin','viewValue':'Admin'},
    // {'value':'projectmanager','viewValue':'Project Manager'},
    // {'value':'engineer','viewValue':'Engineer'}]
    
    //selectedClient:string = "15";

    clients  :  any[];
    //selectedclient : string

    openClientAddDialog()
    {
      this.clientCreationDialogService.OpenDialog().then(
        (data)=>{
          this.refreshClientList();          
          this.form.controls["selectedClient"].setValue(data);
        },()=>{
            console.log('error in saving client information');
        }
      );
    }

    refreshClientList(){
      this.customerService.GetCustomers().subscribe(data=>{
        this.clients = data.map(eachdata=> ({
          value:eachdata.ID,
          viewValue:eachdata.Title        
        }) );
      });
    }

   selectedProposalType:string = "";
   selectedProjectType:string ="";
   selectedPiersType :string ="";
   selectedFoundationType :string ="";
   selectedFrameType :string ="";
   selectedRetainingWallType :string ="";
   selectedRetainingWallTypeType :string ="";
   selectedPoolType :string ="";

   SelectProposalType(event) {
      this.selectedProposalType = event.value;  
      //console.log(event.source.id);
      //document.getElementById('scrollToBottom').scrollIntoView();
    }
    
    SelectProjectType(event)
    {
      this.selectedProjectType = event.value;       
    }

    changePosition() {
      this.dialogRef.updatePosition({ bottom: '50px', left: '50px' });
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

  ngOnInit() {

    this.form = this.formBuilder.group({
       name:[this.data ? this.data.name : '',[Validators.minLength(5)]],
       address:[this.data ? this.data.address : '',[Validators.minLength(5)]],
       city:[this.data ? this.data.city : '',[ Validators.minLength(5)]],
       selectedstate:[this.data ? this.data.selectedstate : '',[]],
       zip:[this.data ? this.data.zip : '',[Validators.minLength(5)]],
       details:[this.data ? this.data.details : '',[Validators.minLength(5)]],
      // houseno:[this.data ? this.data.city : '',[Validators.minLength(5)]],
      // roadNo:[this.data ? this.data.roadNo : '',[Validators.minLength(5)]],
      // proposaldetails:[this.data ? this.data.proposaldetails : '',[Validators.minLength(5)]],
      selectedClient:[this.data ? this.data.selectedClient : "",[]],
      proposalType:[this.data ? this.data.proposalType : "daily",[]],
      selectDailyType:[this.data ? this.data.selectDailyType : "daily",[]],
      selectProjectType:[this.data ? this.data.selectProjectType : "project",[]],
      selectFoundationType:[this.data ? this.data.selectFoundationType : "project",[]],
      selectSlabType:[this.data ? this.data.selectSlabType : "project",[]],

      selectPiersType:[this.data ? this.data.selectPiersType : "project",[]],
      selectRemedialType:[this.data ? this.data.selectRemedialType : "project",[]],
      selectFrameType:[this.data ? this.data.selectFrameType : "project",[]],
      selectResidentialType:[this.data ? this.data.selectResidentialType : "project",[]],
      selectExteriorFinish:[this.data ? this.data.selectExteriorFinish : "project",[]],
      selectRoofType:[this.data ? this.data.selectRoofType : "project",[]],


      initialContractDatePicker:[this.data ? this.data.initialContractDatePicker : "project",[]],
      submittalDatePicker:[this.data ? this.data.submittalDatePicker : "project",[]],
      revisionDatePicker:[this.data ? this.data.revisionDatePicker : "project",[]],


      selectRetainingWallType:[this.data ? this.data.selectRetainingWallType : "project",[]],
      selectRetainingWallTypeType:[this.data ? this.data.selectRetainingWallTypeType : "project",[]],
      selectRetainingWallTypeWall:[this.data ? this.data.selectRetainingWallTypeWall : "project",[]],
      selectPoolType:[this.data ? this.data.selectPoolType : "project",[]],
      selectCompanydesigningType:[this.data ? this.data.selectCompanydesigningType : "project",[]],      
    });

    this.refreshClientList();
  }

  submit(form) {
    if(form.valid)
    {
      this.dialogRef.close(form.value);
    }
  }

}




