import { ProjectNameDialogComponent } from './../project-name-dialog/project-name-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { filter } from 'rxjs/operators';
import { Project } from '../shared/project.model';
import { ProjectService } from '../shared/project.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-project-tree',
  templateUrl: './project-tree.component.html',
  styleUrls: ['./project-tree.component.css']
})
export class ProjectTreeComponent implements OnInit {

  projects: Project[] = [];

  projectNameDialogRef: MatDialogRef<ProjectNameDialogComponent>;

  constructor(private dialog: MatDialog,private projectService : ProjectService,private toastr: ToastrService) {}

  ngOnInit() {
  }

  // openAddprojectDialog() {
  //   this.projectNameDialogRef = this.dialog.open(ProjectNameDialogComponent);
  // }

  openprojectDialog(project?) {

    this.projectNameDialogRef = this.dialog.open(ProjectNameDialogComponent,{
      hasBackdrop:false,
      data: {
        projectname: project ? project.Title : ''
      }
    });

    var newProject:Project;

    // dialogRef.afterClosed().subscribe(() => {
    //   // unsubscribe onAdd
    // });

    // this.projectNameDialogRef.afterClosed().pipe(
    //     filter(formData => formData)
    //   ).subscribe(formData => 
    //   {
    //     //console.log(formData)

    //   if (project) {
    //     newProject = { ID:project.ID, Title:formData.projectname};
    //   }
    //   else
    //   {
    //     newProject = { ID:0, Title:formData.projectname};
    //   }

    //   this.projectService.SaveProject(newProject)
    //    .subscribe((data:any)=> {

    //      if(data.Status == "success")
    //      {          
    //       if (project) {
    //         const index = this.projects.findIndex(p => p.Title == project.Title);
            
    //         if (index !== -1) {
    //           this.projects[index] = newProject;
    //         }
    //       } else {
    //         newProject.ID = data.ID;
    //         this.projects.push(newProject);
    //       }
    //        this.toastr.success('project save successful');
    //      }
 
    //      else{
    //        this.toastr.error(data.Errors[0]);      
    //      }      
    //    });
    // });

    
  }

}
