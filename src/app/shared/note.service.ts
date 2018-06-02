import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Note } from './note.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NoteService {

  
  constructor(private http :HttpClient) { }

  SaveNote(Note:Note)
  {     
      return this.http.post(environment.API_URL+"/api/Note",Note);      
  }

  GetNotes(): Observable<Note[]>
  {
    return this.http.get(environment.API_URL+"/api/Note")
    .map(data => data  as Note[]);
  }

  GetNotebyTaskId(taskId:number): Observable<Note[]>
  {    
    return this.http.get(environment.API_URL+"/api/Note/"+taskId)
    .map(data => data  as Note[]);
    
    
  }

}
