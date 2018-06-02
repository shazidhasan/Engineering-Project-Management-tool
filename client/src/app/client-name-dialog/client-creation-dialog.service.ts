import { CustomerService } from './../shared/customer.service';
import { Injectable } from '@angular/core';
import { ClientNameDialogComponent } from './client-name-dialog.component';
import { MatDialogRef, MatDialog } from '@angular/material';
import { Customer } from '../shared/customer.model';
import { filter } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { NavigationService } from '../admin/navigation/navigation.service';
import { Observable } from 'rxjs';

@Injectable()
export class ClientCreationDialogService {

  clientNameDialogRef: MatDialogRef<ClientNameDialogComponent>;

  constructor(private dialog: MatDialog
    ,private clientService:CustomerService
    ,private toastr: ToastrService
    ,private navigationservice: NavigationService
    ) { }


  OpenDialog() 
  {
    this.clientNameDialogRef = this.dialog.open(ClientNameDialogComponent,{
      hasBackdrop:true,
      width:'420px',
      data: {          
      }
    });
   
    var newCustomer:Customer;
    return new Promise<void>((resolve, reject) => 
      { 

    this.clientNameDialogRef.afterClosed().pipe(
      filter(formData => formData)
    ).subscribe(formData => {

      newCustomer = {
          ID:0, 
          Title:formData.title,            
          KeyPerson:formData.keyperson,
          Address:formData.address,
          City:formData.city,
          State:formData.selectedstate,
          Zip:formData.zip,
          Phone:formData.phone,
          Email:formData.email,                    
        };                

        console.log(newCustomer);
        return this.clientService.SaveCustomer(newCustomer).subscribe((data:any)=> {
        if(data.Status == "success")
        {                                
          this.toastr.success('customer saved successful');
          this.navigationservice.refreshNavigationModel().subscribe(data1 => {            
            resolve(data.ID);            
          });
        }
        else{
          this.toastr.error(data.Errors[0]);      
          reject();
        }     
      });      
    });  
  });
}
}
