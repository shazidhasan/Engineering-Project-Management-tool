import { Employee } from './../shared/employee.model';
import { ProjecttypeService } from './../shared/projecttype.service';
import { EmployeeService } from './../shared/employee.service';
import { Component, OnInit,Inject    } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA  } from '@angular/material';
import { FormGroup, FormBuilder,ReactiveFormsModule,Validators } from '@angular/forms';


@Component({
  selector: 'app-people-name-dialog',
  templateUrl: './people-name-dialog.component.html',
  styleUrls: ['./people-name-dialog.component.css']
})

export class PeopleNameDialogComponent implements OnInit {

  form: FormGroup;

  cities:any = [{'value':'Alameda','viewValue':'Alameda'},{'value':'Alhambra','viewValue':'Alhambra'},{'value':'Anaheim','viewValue':'Anaheim'},{'value':'Antioch','viewValue':'Antioch'}];
  states:any=[{'value':'Alabama','viewValue':'Alabama'},{'value':'Alaska','viewValue':'Alaska'},{'value':'Arizona','viewValue':'Arizona'},{'value':'Arkansas','viewValue':'Arkansas'},{'value':'California','viewValue':'California'},{'value':'Colorado','viewValue':'Colorado'},{'value':'Connecticut','viewValue':'Connecticut'},{'value':'Delaware','viewValue':'Delaware'},{'value':'Florida','viewValue':'Florida'},{'value':'Georgia','viewValue':'Georgia'},{'value':'Hawaii','viewValue':'Hawaii'},{'value':'Idaho','viewValue':'Idaho'},{'value':'Illinois','viewValue':'Illinois'},{'value':'Indiana','viewValue':'Indiana'},{'value':'Iowa','viewValue':'Iowa'},{'value':'Kansas','viewValue':'Kansas'},{'value':'Kentucky','viewValue':'Kentucky'},{'value':'Louisiana','viewValue':'Louisiana'},{'value':'Maine','viewValue':'Maine'},{'value':'Maryland','viewValue':'Maryland'},{'value':'Massachusetts','viewValue':'Massachusetts'},{'value':'Michigan','viewValue':'Michigan'},{'value':'Minnesota','viewValue':'Minnesota'},{'value':'Mississippi','viewValue':'Mississippi'},{'value':'Missouri','viewValue':'Missouri'},{'value':'Montana','viewValue':'Montana'},{'value':'Nebraska','viewValue':'Nebraska'},{'value':'Nevada','viewValue':'Nevada'},{'value':'New Hampshire','viewValue':'New Hampshire'},{'value':'New Jersey','viewValue':'New Jersey'},{'value':'New Mexico','viewValue':'New Mexico'},{'value':'New York','viewValue':'New York'},{'value':'North Carolina','viewValue':'North Carolina'},{'value':'North Dakota','viewValue':'North Dakota'},{'value':'Ohio','viewValue':'Ohio'},{'value':'Oklahoma','viewValue':'Oklahoma'},{'value':'Oregon','viewValue':'Oregon'},{'value':'Pennsylvania','viewValue':'Pennsylvania'},{'value':'Rhode Island','viewValue':'Rhode Island'},{'value':'South Carolina','viewValue':'South Carolina'},{'value':'South Dakota','viewValue':'South Dakota'},{'value':'Tennessee','viewValue':'Tennessee'},{'value':'Texas','viewValue':'Texas'},{'value':'Utah','viewValue':'Utah'},{'value':'Vermont','viewValue':'Vermont'},{'value':'Virginia','viewValue':'Virginia'},{'value':'Washington','viewValue':'Washington'},{'value':'West Virginia','viewValue':'West Virginia'},{'value':'Wisconsin','viewValue':'Wisconsin'},{'value':'Wyoming','viewValue':'Wyoming'}];
  //,'Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'  

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<PeopleNameDialogComponent>,
    private employeeService:EmployeeService,
    @Inject(MAT_DIALOG_DATA) private data) 
    {

    }

    Designations = [{'value':'designer','viewValue':'Designer'},
    {'value':'admin','viewValue':'Admin'},
    {'value':'projectmanager','viewValue':'Project Manager'},
    {'value':'engineer','viewValue':'Engineer'}]

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstname: [this.data ? this.data.firstname : '',[Validators.required, Validators.minLength(5)]],      
      lastname: [this.data ? this.data.lastname : '',[Validators.required, Validators.minLength(5)]],
      designation:[this.data ? this.data.designation : '',[Validators.minLength(5)]],
      phone:[this.data ? this.data.phone : '',[Validators.required, Validators.minLength(5)]],
      email:[this.data ? this.data.email : '',[ Validators.minLength(5)]],
      zip:[this.data ? this.data.zip : '',[Validators.required, Validators.minLength(5)]],
      selectedstate:[this.data ? this.data.selectedstate : '',[Validators.minLength(5)]],
      city:[this.data ? this.data.city : '',[Validators.minLength(5)]],
      address:[this.data ? this.data.address : '',[Validators.minLength(5)]],
      //roadNo:[this.data ? this.data.roadNo : '',[Validators.minLength(5)]],
    })
  }

  submit(form) {
    if(form.valid)
    {
      this.dialogRef.close(form.value);
    }
  }

}
