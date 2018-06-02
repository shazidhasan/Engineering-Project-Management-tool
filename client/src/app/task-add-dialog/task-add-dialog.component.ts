import { Employee } from './../shared/employee.model';
import { EmployeeService } from './../shared/employee.service';
import { Taskstatus } from './../shared/taskstatus.model';
import { TaskStatusService } from './../shared/taskstatus.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder,ReactiveFormsModule,Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-task-add-dialog',
  templateUrl: './task-add-dialog.component.html',
  styleUrls: ['./task-add-dialog.component.scss']
})
export class TaskAddDialogComponent implements OnInit {

  form: FormGroup;

  taskStatuses:any= []; 
  employees:any=[];  
    

  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<TaskAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data,
    private taskStatusService:TaskStatusService,
    private employeeService:EmployeeService)
  {

  }
  
  ngOnInit() {

    this.taskStatusService.GetTaskStatuses().subscribe(data => {
            
      this.taskStatuses = data.map(eachdata=> ({
        value:eachdata.ID,
        viewValue:eachdata.StatusTitle        
      }) );
  });


  this.employeeService.GetEmployees().subscribe(data => {
            
    this.employees = data.map(eachdata=> ({
      value:eachdata.ID,
      viewValue:eachdata.Name
    }) );
});

  


    this.form = this.formBuilder.group({
      taskname: [this.data ? this.data.taskname : '',[Validators.required, Validators.minLength(5)]],      
      taskStatusSelect:[this.data ? this.data.taskStatusSelect : '',[Validators.required, Validators.minLength(5)]],
      designedBySelect:[this.data ? this.data.designedBySelect : '',[Validators.required]],
      // shortDescription:[this.data ? this.data.shortDescription : '',[ Validators.minLength(5)]],
      // fullDescription:[this.data ? this.data.fullDescription : '',[Validators.required, Validators.minLength(5)]],
      // newReviewNotes:[this.data ? this.data.newReviewNotes : '',[Validators.required, Validators.minLength(5)]],
      // reviewNotes:[this.data ? this.data.reviewNotes : '',[Validators.required, Validators.minLength(5)]],
      deadlineDate:[this.data ? this.data.deadlineDate : '',[ Validators.required]],
      note:[this.data ? this.data.deadlineDate : '',[ Validators.required]],
  
      //new FormControl({disabled: false, value: null})
  
    });
  }


  submit(form) {
    if(form.valid)
    {
      this.dialogRef.close(form.value);
    }
  }

  

}
