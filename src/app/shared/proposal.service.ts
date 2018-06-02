import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proposal } from './proposal.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProposalService {

  
  constructor(private http :HttpClient) { }

  SaveProposal(Proposal:Proposal)
  {     
      return this.http.post(environment.API_URL+"/api/Proposal",Proposal);      
  }

  GetProposals(): Observable<Proposal[]>
  {
    return this.http.get(environment.API_URL+"/api/Proposal")
    .map(data => data  as Proposal[]);
  }

  GetProposalById(id:number): Observable<Proposal>
  {
    return this.http.get(environment.API_URL+"/api/Proposal/"+id)
    .map(data => data  as Proposal);
  }

  GetProspectiveProposalById(id:number): Observable<Proposal>
  {
    return this.http.get(environment.API_URL+"/api/ProspectiveProposal/"+id)
    .map(data => data  as Proposal);
  }

  GetProspectiveProposals(): Observable<Proposal[]>
  {
    return this.http.get(environment.API_URL+"/api/ProspectiveProposal")
    .map(data => data  as Proposal[]);
  }


}
