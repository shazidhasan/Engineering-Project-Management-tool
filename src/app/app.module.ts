//import { MatFileUploadModule } from 'angular-material-fileupload';
import { ClientNameDialogComponent } from './client-name-dialog/client-name-dialog.component';
import { TaskStatusService } from './shared/taskstatus.service';
import { EmployeeService } from './shared/employee.service';
import { ProjecttypeService } from './shared/projecttype.service';
import { UserService } from './shared/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';

import { AppComponent } from './app.component';

import { AngularBasicModalModule } from 'angular-basic-modal';
import { BootstrapModalComponent } from './bootstrap-modal/bootstrap-modal.component';
// import { BasicModalComponent } from './producteev-basic-modal/producteev-basic-modal.component';


import { MatDialogModule } from '@angular/material';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { ProjectTreeComponent } from './project-tree/project-tree.component';
import { ProjectNameDialogComponent } from './project-name-dialog/project-name-dialog.component';
import { ProjectService } from './shared/project.service';

import 'hammerjs';


import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app.routing';
import { AdminModule } from './admin/admin.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';

import { FireBaseComponentsModule } from './shared/firebase.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationModule } from './navigation/navigation.module';
import { AdminComponent } from './admin/admin.component';
import { ProjectStatusService } from './shared/project-status.service';
import { ProjectpriorityService } from './shared/projectpriority.service';
import { CustomerService } from './shared/customer.service';
import { FoundationTypeService } from './shared/foundation-type.service';

import { TaskService } from './shared/task.service';
import { TaskAddDialogComponent } from './task-add-dialog/task-add-dialog.component';
import { PeopleNameDialogComponent } from './people-name-dialog/people-name-dialog.component';
import { AuthenticationService } from './shared/authentication.service';
import { TokenInterceptor } from './shared/tokenInterceptor';
import { Auth1Service } from './shared/auth1.service';
import { AuthGuardService } from './shared/auth-guard.service';
import { ProposalNameDialogComponent } from './proposal-name-dialog/proposal-name-dialog.component';
import { Daterangepicker } from 'ng2-daterangepicker';
import { ClientCreationDialogService } from './client-name-dialog/client-creation-dialog.service';
import { CommonModule } from '@angular/common';
import { ProposalService } from './shared/proposal.service';
import { NoteService } from './shared/note.service';




@NgModule({
  declarations: [
    AppComponent,    
    BootstrapModalComponent,    
    ProjectTreeComponent,     
    ProjectNameDialogComponent,
    ProposalNameDialogComponent,    
    DashboardComponent,
    SignupComponent,
    SigninComponent,
    TaskAddDialogComponent,
    PeopleNameDialogComponent,
    ClientNameDialogComponent,            
  ],
  imports: [
    //MatFileUploadModule,
    FormsModule,    
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule,
    CoreModule,
    AdminModule,
    AppRoutingModule,
    FireBaseComponentsModule,   
    AdminModule,         
    environment['ngsw']  ? ServiceWorkerModule.register('./ngsw-worker.js') : [],
    Daterangepicker,
    CommonModule
  ],

  providers: [UserService,ClientCreationDialogService,ProjectService,ProjectStatusService,
    ProjectpriorityService,CustomerService,ProjecttypeService,EmployeeService,
    FoundationTypeService,TaskService,TaskStatusService,AuthenticationService,
    ProposalService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },Auth1Service,AuthGuardService,NoteService ],
    
  bootstrap: [AppComponent],
  entryComponents:[ProjectNameDialogComponent,TaskAddDialogComponent
    ,PeopleNameDialogComponent,ClientNameDialogComponent,
  ProposalNameDialogComponent]
})
export class AppModule { }
