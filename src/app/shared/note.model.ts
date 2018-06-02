import { Model } from '@swimlane/ngx-datatable';
export class Note {
    ID:number;
    TaskId: number ;
    Comment: string ;
    CreatedDate: Date ;
    CreatedByEmployeeId: number;
}
