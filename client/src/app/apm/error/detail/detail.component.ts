import { take } from 'rxjs/operators/take';
import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Task } from '../../../shared/task.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NoteService } from '../../../shared/note.service';
import { Note } from '../../../shared/note.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'error-detail,stbui-error-detail,stb-error-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  @Input() selectedTask: Task;
  @Input() opened: boolean = false;
  @Output() onOpened = new EventEmitter();

  detailedTask:Task;

  noteform: FormGroup;
  note : Note;
  notesOfThisTask:Note[];
  defaultuser:string = "Admin";

  onlyThreeNote:boolean = true;

  count = 0;

  constructor(private formBuilder: FormBuilder
    ,private noteService:NoteService
    ,private toastr: ToastrService) {
    
  }

  ngOnInit() {
    this.detailedTask = new Task('');
    this.noteform = this.formBuilder.group({
      txtnote: ['',[Validators.minLength(5)]]
    });

    
    

  }

  
  ngDoCheck() {
    this.count += 1;
  }

  
  ngAfterContentInit() {
    
  }

  
  ngAfterContentChecked() {
    
  }

  
  ngAfterViewInit() {
    
  }

  
  ngAfterViewChecked() {    
  }

  onCloseTriggered() {
    this.opened = false;
    this.onOpened.emit(this.opened);
  }

  onOpenTriggered() {
    this.opened = true;
    this.onOpened.emit(this.opened);
  }

  ngOnChanges(changes: SimpleChanges) { 
    this.detailedTask = this.selectedTask;
    if(this.detailedTask)
    {
      this.noteService.GetNotebyTaskId( this.detailedTask.ID)
      .subscribe(data=>{
        this.numberOfNotesOfThisTask = data.length;
        this.notesOfThisTask =   data.slice(0, 3);
      });
    }    
  }

  submitnote(form) {
    if(form.valid)
    {
      if(form.value["txtnote"] != '')
      {
        this.note = {
          ID: 0 ,
          Comment:form.value["txtnote"], 
          TaskId: this.selectedTask.ID ,
          CreatedDate:new Date(),
          CreatedByEmployeeId : 1
        }
        this.noteService.SaveNote(this.note).subscribe((data:any)=> {
          if(data.Status == "success")
          {                                  
            this.toastr.success('note saved successful');
            this.noteform.controls['txtnote'].setValue("");
            this.showNotes();
          }
          else{
            this.toastr.error(data.Errors[0]);      
          }      
        }); 
      }           
    }
  }

  seeMoreLess(event){       
      this.onlyThreeNote = this.onlyThreeNote ? false : true;
      this.showNotes();
      if(this.onlyThreeNote)
      {                 
        event.srcElement.childNodes[0].textContent = 'show more';
      }
      else
        event.srcElement.childNodes[0].textContent = 'show less';
  }

  numberOfNotesOfThisTask:number;

  showNotes()
  {
         this.noteService.GetNotebyTaskId(this.detailedTask.ID)
        .subscribe(data=>{
          this.notesOfThisTask =   data; 
          this.numberOfNotesOfThisTask = data.length;
          if(this.onlyThreeNote)
          {            
            this.notesOfThisTask =   this.notesOfThisTask.slice(0, 3);            
          }
        });       
  }
}
