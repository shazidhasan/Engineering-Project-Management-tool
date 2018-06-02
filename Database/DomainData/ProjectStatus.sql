insert into ProjectStatus (StatusTitle) values ('Customer Input')
insert into ProjectStatus (StatusTitle) values ('Pending')
insert into ProjectStatus (StatusTitle) values ('Active')
insert into ProjectStatus (StatusTitle) values ('Assigned to Designer')
insert into ProjectStatus (StatusTitle) values ('Invoice')
insert into ProjectStatus (StatusTitle) values ('Ready for Delivery')
insert into ProjectStatus (StatusTitle) values ('Archive')
insert into ProjectStatus (StatusTitle) values ('Customer Input (HOLD)')
insert into ProjectStatus (StatusTitle) values ('Pending (HOLD)')
insert into ProjectStatus (StatusTitle) values ('Active (HOLD)')
insert into ProjectStatus (StatusTitle) values ('Assigned to Designer (HOLD)')
insert into ProjectStatus (StatusTitle) values ('Invoice (HOLD)')
insert into ProjectStatus (StatusTitle) values ('Ready for Delivery (HOLD)')
insert into ProjectStatus (StatusTitle) values ('Archive (HOLD)')


insert into projectType (ProjectTypeTitle) values ('Proposal')
insert into projectType (ProjectTypeTitle) values ('Custom Home')
insert into projectType (ProjectTypeTitle) values ('Addition/Remodel')
insert into projectType (ProjectTypeTitle) values ('Revision')
insert into projectType (ProjectTypeTitle) values ('Frisco Start')
insert into projectType (ProjectTypeTitle) values ('Tract New Plan')
insert into projectType (ProjectTypeTitle) values ('Tract Revision')
insert into projectType (ProjectTypeTitle) values ('Inspection')
insert into projectType (ProjectTypeTitle) values ('Other')


insert into ProjectPriority(PriorityTitle) values ('Low')
insert into ProjectPriority(PriorityTitle) values ('Medium')
insert into ProjectPriority(PriorityTitle) values ('High')


insert into FoundationType([FoundationTypeTitle]) Values ('Pier &amp; Beam')
insert into FoundationType([FoundationTypeTitle]) Values ('Conventional Reinforced Slab w/o Piers')
insert into FoundationType([FoundationTypeTitle]) Values ('Conventional Reinforced Slab w/ Piers')


--drop table Customer

insert into Customer(Title,KeyPerson,Phone,Email) Values ('708 Studios','','','')
insert into Customer(Title,KeyPerson,Phone,Email) Values ('84 Lumber','','','')
insert into Customer(Title,KeyPerson,Phone,Email) Values ('Accoustical Control','','','')
insert into Customer(Title,KeyPerson,Phone,Email) Values ('Agape Home Services','','','')
insert into Customer(Title,KeyPerson,Phone,Email) Values ('Alford','','','')
insert into Customer(Title,KeyPerson,Phone,Email) Values ('Andregg Contracting, Inc.','','','')


insert into Employee([Name],Designation,Phone,Email,Zip,[State],City,HouseNo,RoadNo,HasReviewAuthorization,IsInManagement,IsInDirectorPanel)
values('admin@jensenengineers.com','','','','','','','','',1,1,1)

insert into Employee([Name],Designation,Phone,Email,Zip,[State],City,HouseNo,RoadNo,HasReviewAuthorization,IsInManagement,IsInDirectorPanel)
values('mallard@jensenengineers.com','','','','','','','','',1,1,1)

insert into Employee([Name],Designation,Phone,Email,Zip,[State],City,HouseNo,RoadNo,HasReviewAuthorization,IsInManagement,IsInDirectorPanel)
values('draft2@jensenengineers.com','','','','','','','','',1,1,1)

insert into Employee([Name],Designation,Phone,Email,Zip,[State],City,HouseNo,RoadNo,HasReviewAuthorization,IsInManagement,IsInDirectorPanel)
values('draft1@jensenengineers.com','','','','','','','','',1,1,1)

insert into Employee([Name],Designation,Phone,Email,Zip,[State],City,HouseNo,RoadNo,HasReviewAuthorization,IsInManagement,IsInDirectorPanel)
values('kroan@jensenengineers.com','','','','','','','','',1,1,1)

insert into Employee([Name],Designation,Phone,Email,Zip,[State],City,HouseNo,RoadNo,HasReviewAuthorization,IsInManagement,IsInDirectorPanel)
values('mike@jensenengineers.com','','','','','','','','',1,1,1)

insert into Employee([Name],Designation,Phone,Email,Zip,[State],City,HouseNo,RoadNo,HasReviewAuthorization,IsInManagement,IsInDirectorPanel)
values('mjensen@jensenengineers.com','','','','','','','','',1,1,1)

insert into Employee([Name],Designation,Phone,Email,Zip,[State],City,HouseNo,RoadNo,HasReviewAuthorization,IsInManagement,IsInDirectorPanel)
values('k.fields@jensenengineers.com','','','','','','','','',1,1,1)

insert into Employee([Name],Designation,Phone,Email,Zip,[State],City,HouseNo,RoadNo,HasReviewAuthorization,IsInManagement,IsInDirectorPanel)
values('kunderhill@jensenengineers.com','','','','','','','','',1,1,1)





	




	





--Select * from taskStatus


Insert into taskStatus (StatusTitle) values ('Initial Redline')
Insert into taskStatus (StatusTitle) values ('Waiting on Designer')
Insert into taskStatus (StatusTitle) values ('Drafting')
Insert into taskStatus (StatusTitle) values ('Pending Review 1')
Insert into taskStatus (StatusTitle) values ('Review 1')
Insert into taskStatus (StatusTitle) values ('Pending Review 2')
Insert into taskStatus (StatusTitle) values ('Review 2')
Insert into taskStatus (StatusTitle) values ('Pending Review 3')
Insert into taskStatus (StatusTitle) values ('Review 3')
Insert into taskStatus (StatusTitle) values ('Final Review')
Insert into taskStatus (StatusTitle) values ('Completed')



--task table 

insert into Task(ProjectID,TaskStatusID,TaskName,DesignByEmployeeID,Deadline,ShortDescription,FullDescription,NewReviewNotes,ReviewNotes)
values (1,1,'Task 1',1,cast('5/30/2018' as datetime),'test','test','test','test');

insert into Task(ProjectID,TaskStatusID,TaskName,DesignByEmployeeID,Deadline,ShortDescription,FullDescription,NewReviewNotes,ReviewNotes)
values (1,1,'Task 2',1,cast('5/30/2018' as datetime),'test','test','test','test');

insert into Task(ProjectID,TaskStatusID,TaskName,DesignByEmployeeID,Deadline,ShortDescription,FullDescription,NewReviewNotes,ReviewNotes)
values (1,1,'Task 3',1,cast('5/30/2018' as datetime),'test','test','test','test');

insert into Task(ProjectID,TaskStatusID,TaskName,DesignByEmployeeID,Deadline,ShortDescription,FullDescription,NewReviewNotes,ReviewNotes)
values (1,1,'Task 4',1,cast('5/30/2018' as datetime),'test','test','test','test');

insert into Task(ProjectID,TaskStatusID,TaskName,DesignByEmployeeID,Deadline,ShortDescription,FullDescription,NewReviewNotes,ReviewNotes)
values (1,1,'Task 5',1,cast('5/30/2018' as datetime),'test','test','test','test');


--Select cast('5/30/2018' as datetime)



insert into UserRole (RoleName)   values('Administrator')
insert into UserRole (RoleName)   values('Reviewer')
insert into UserRole (RoleName)   values('Designer')

