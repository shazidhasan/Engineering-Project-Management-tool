import { ProjecttypeService } from './../shared/projecttype.service';
import { Customer } from './../shared/customer.model';
import { CustomerService } from './../shared/customer.service';
import { Component, OnInit,Inject    } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA  } from '@angular/material';
import { FormGroup, FormBuilder,ReactiveFormsModule,Validators } from '@angular/forms';



@Component({
  selector: 'app-client-name-dialog',
  templateUrl: './client-name-dialog.component.html',
  styleUrls: ['./client-name-dialog.component.css']
})
export class ClientNameDialogComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ClientNameDialogComponent>,
    private customerService:CustomerService,    
    @Inject(MAT_DIALOG_DATA) private data) 
    {

    }

    states:any=[{'value':'Alabama','viewValue':'Alabama'},{'value':'Alaska','viewValue':'Alaska'},{'value':'Arizona','viewValue':'Arizona'},{'value':'Arkansas','viewValue':'Arkansas'},{'value':'California','viewValue':'California'},{'value':'Colorado','viewValue':'Colorado'},{'value':'Connecticut','viewValue':'Connecticut'},{'value':'Delaware','viewValue':'Delaware'},{'value':'Florida','viewValue':'Florida'},{'value':'Georgia','viewValue':'Georgia'},{'value':'Hawaii','viewValue':'Hawaii'},{'value':'Idaho','viewValue':'Idaho'},{'value':'Illinois','viewValue':'Illinois'},{'value':'Indiana','viewValue':'Indiana'},{'value':'Iowa','viewValue':'Iowa'},{'value':'Kansas','viewValue':'Kansas'},{'value':'Kentucky','viewValue':'Kentucky'},{'value':'Louisiana','viewValue':'Louisiana'},{'value':'Maine','viewValue':'Maine'},{'value':'Maryland','viewValue':'Maryland'},{'value':'Massachusetts','viewValue':'Massachusetts'},{'value':'Michigan','viewValue':'Michigan'},{'value':'Minnesota','viewValue':'Minnesota'},{'value':'Mississippi','viewValue':'Mississippi'},{'value':'Missouri','viewValue':'Missouri'},{'value':'Montana','viewValue':'Montana'},{'value':'Nebraska','viewValue':'Nebraska'},{'value':'Nevada','viewValue':'Nevada'},{'value':'New Hampshire','viewValue':'New Hampshire'},{'value':'New Jersey','viewValue':'New Jersey'},{'value':'New Mexico','viewValue':'New Mexico'},{'value':'New York','viewValue':'New York'},{'value':'North Carolina','viewValue':'North Carolina'},{'value':'North Dakota','viewValue':'North Dakota'},{'value':'Ohio','viewValue':'Ohio'},{'value':'Oklahoma','viewValue':'Oklahoma'},{'value':'Oregon','viewValue':'Oregon'},{'value':'Pennsylvania','viewValue':'Pennsylvania'},{'value':'Rhode Island','viewValue':'Rhode Island'},{'value':'South Carolina','viewValue':'South Carolina'},{'value':'South Dakota','viewValue':'South Dakota'},{'value':'Tennessee','viewValue':'Tennessee'},{'value':'Texas','viewValue':'Texas'},{'value':'Utah','viewValue':'Utah'},{'value':'Vermont','viewValue':'Vermont'},{'value':'Virginia','viewValue':'Virginia'},{'value':'Washington','viewValue':'Washington'},{'value':'West Virginia','viewValue':'West Virginia'},{'value':'Wisconsin','viewValue':'Wisconsin'},{'value':'Wyoming','viewValue':'Wyoming'}];

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: [this.data ? this.data.title : '',[Validators.required, Validators.minLength(5)]],      
      keyperson:[this.data ? this.data.keyperson : '',[Validators.minLength(5)]],
      address:[this.data ? this.data.address : '',[Validators.required, Validators.minLength(5)]],
      city:[this.data ? this.data.city : '',[Validators.required, Validators.minLength(5)]],
      selectedstate:[this.data ? this.data.selectedstate : '',[Validators.required, Validators.minLength(5)]],
      zip:[this.data ? this.data.zip : '',[Validators.required, Validators.minLength(5)]],
      phone:[this.data ? this.data.phone : '',[ Validators.minLength(5)]],
      email:[this.data ? this.data.email : '',[ Validators.minLength(5)]],
      //clientOrProspectSelect:[this.data ? this.data.clientOrProspectSelect : '',[ Validators.minLength(5)]],
    })
  }

  submit(form) {
    if(form.valid)
    {
      this.dialogRef.close(form.value);
    }
  }

}
