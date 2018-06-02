export class Task {
    ID:number;
    ProjectID:number;
    ProjectName:string;
    TaskStatusID:number; 
    TaskStatus:string;   
    DesignByEmployeeID:number;
    DesignByEmployee:string;
    Deadline:Date;
    ShortDescription:string;
    FullDescription:string;
    NewReviewNotes:string;
    ReviewNotes:string;
    TaskForProject:boolean;
    CreatedBy:number;
    CreatedDate:Date;
    constructor(public TaskName:string){

    }
}
