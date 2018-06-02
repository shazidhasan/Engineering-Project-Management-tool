
SET QUOTED_IDENTIFIER ON;
SET ANSI_NULLS ON;
SET NOCOUNT ON;
GO

IF EXISTS (	SELECT *
			FROM INFORMATION_SCHEMA.ROUTINES
			WHERE ROUTINE_NAME = 'SAVE_UPDATE_PROJECT'
				AND ROUTINE_TYPE = 'PROCEDURE' )
BEGIN
	PRINT 'Dropping stored procedure SAVE_UPDATE_PROJECT.';
	DROP PROCEDURE SAVE_UPDATE_PROJECT;
END

GO

/*
 * ====================================================================
 * BASIC INFORMATION
 * ====================================================================
 *
 * --Client Name			: NQF
 * --Project Name			: New Website Implemenation
 * --Procedure name			: SAVE_UPDATE_PROJECT
 * --Purpose/Function		: Saves a ProjectType object
 * --Author					: MRZ
 * --Start Date(MM/DD/YY)	: 10/13/2009
 *
 * ====================================================================
 * IMPLEMENTATION LOGIC
 * ====================================================================
 *
 * --
 *
 * ====================================================================
 * PERFORMANCE (To be filled up by developer,with "Yes" values)
 * ====================================================================
 *
 * --TSQL reviewed				: No
 * --Indexing done properly		: No
 * --Index fragmentation checked: No
 * --Comment					: No comment
 *
 * ===================================================================
 * REVIEW (To be filled up by reviewer,with "Yes" values)
 * ===================================================================
 *
 * --Reviewed by				: 
 * --Review	date				: 
 * --TSQL reviewed				: No
 * --Indexing done properly		: No
 * --Index fragmentation checked: No
 * --Comment					: No comment
 *
 * ===================================================================
 * CHANGE HISTORY
 * ===================================================================
 * Date				Name	Comments
 * 10/13/2009		shazid		Initial Development				
 * ===================================================================*/

-------------------------------------------------------------------------------
--	METADATA AND OTHER MESSAGES ABOVE.
--	BEGIN CREATE STATEMENTS.
-------------------------------------------------------------------------------

--EXEC SAVE_UPDATE_PROJECT

CREATE PROCEDURE dbo.SAVE_UPDATE_PROJECT
(
@id int,
@title nvarchar(200),
@projectnumber nvarchar(100),
@projectstatusid int,
@projectpriorityid int,
@planname nvarchar(100),
@plannumber nvarchar(100),
@startdate datetime,
@duedate datetime,
@jobaddress nvarchar(100),
@jobcity nvarchar(50),
@jobstate nvarchar(50),
@jobzipaddress nvarchar(100),
@dwgfilelocation nvarchar(100),
@projecttypenotes nvarchar(500),
@customerid int,
@reviewedbyid int,
@projecttypeid int,
@isfoundation bit,
@foundationtypeid int,
@crawlspacejoist nvarchar(100),
@ishavesoilsreport bit,
@how_whensending nvarchar(50),
@isframing bit,
@typeoffloorjoist nvarchar(100),
@maxfloorjoistspacing nvarchar(100),
@typeofceilingjoist nvarchar(100),
@roofingmaterials nvarchar(100),
@weightofroofingmaterials nvarchar(100),
@projectmaterialnotes nvarchar(100),
@couriertowhom nvarchar(100),
@couriertoaddress nvarchar(100),
@ishavecourierplans bit,
@ishaveemail bit,
@emailaddress nvarchar(100),
@iscustomerwillpickup bit,
@pickupbypersonname nvarchar(50),
@pickupbypersonphonenumber nvarchar(50),
@numberofcopies int,
@projectholdnotes nvarchar(150),
@customerdata nvarchar(400),
@invoice nvarchar(200),
@GeneratedID BIGINT OUTPUT
)
AS
BEGIN
	SET NOCOUNT ON;
	SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
	
	

	IF @iD <> 0
	BEGIN 

	  UPDATE PROJECT 
		SET 	  
			Title = @title,
			ProjectNumber = @projectnumber,
			ProjectStatusID = @projectstatusid,
			ProjectPriorityID = @projectpriorityid,
			PlanName = @planname,
			PlanNumber = @plannumber,
			StartDate = @startdate,
			DueDate = @duedate,
			JobAddress = @jobaddress,
			JobCity = @jobcity,
			JobState = @jobstate,
			JobZipAddress = @jobzipaddress,
			DWGFIleLocation = @dwgfilelocation,
			ProjectTypeNotes = @projecttypenotes,
			CustomerID = @customerid,
			ReviewedByID = @reviewedbyid,
			ProjectTypeID = @projecttypeid,
			IsFoundation = @isfoundation,
			FoundationTypeID = @foundationtypeid,
			CrawlSpaceJoist = @crawlspacejoist,
			IsHaveSoilsReport = @ishavesoilsreport,
			How_WhenSending = @how_whensending,
			IsFraming = @isframing,
			TypeOfFloorJoist = @typeoffloorjoist,
			MaxFloorJoistSpacing = @maxfloorjoistspacing,
			TypeOfCeilingJoist = @typeofceilingjoist,
			RoofingMaterials = @roofingmaterials,
			WeightOfRoofingMaterials = @weightofroofingmaterials,
			ProjectMaterialNotes = @projectmaterialnotes,
			CouriertoWhom = @couriertowhom,
			CouriertoAddress = @couriertoaddress,
			IsHaveCourierPlans = @ishavecourierplans,
			IsHaveEmail = @ishaveemail,
			EmailAddress = @emailaddress,
			IsCustomerWillPickup = @iscustomerwillpickup,
			PickupByPersonName = @pickupbypersonname,
			PickupByPersonPhoneNumber = @pickupbypersonphonenumber,
			NumberOfCopies = @numberofcopies,
			ProjectHoldNotes = @projectholdnotes,
			CustomerData = @customerdata,
			Invoice = @invoice

	  WHERE ID  = @iD

	  Set @GeneratedID = @iD;

	END

	ELSE 
	BEGIN 

	  Insert into Project 
	  (
	  Title,
ProjectNumber,
ProjectStatusID,
ProjectPriorityID,
PlanName,
PlanNumber,
StartDate,
DueDate,
JobAddress,
JobCity,
JobState,
JobZipAddress,
DWGFIleLocation,
ProjectTypeNotes,
CustomerID,
ReviewedByID,
ProjectTypeID,
IsFoundation,
FoundationTypeID,
CrawlSpaceJoist,
IsHaveSoilsReport,
How_WhenSending,
IsFraming,
TypeOfFloorJoist,
MaxFloorJoistSpacing,
TypeOfCeilingJoist,
RoofingMaterials,
WeightOfRoofingMaterials,
ProjectMaterialNotes,
CouriertoWhom,
CouriertoAddress,
IsHaveCourierPlans,
IsHaveEmail,
EmailAddress,
IsCustomerWillPickup,
PickupByPersonName,
PickupByPersonPhoneNumber,
NumberOfCopies,
ProjectHoldNotes,
CustomerData,
Invoice) 
	 
Values (
@title,
@projectnumber,
@projectstatusid,
@projectpriorityid,
@planname,
@plannumber,
@startdate,
@duedate,
@jobaddress,
@jobcity,
@jobstate,
@jobzipaddress,
@dwgfilelocation,
@projecttypenotes,
@customerid,
@reviewedbyid,
@projecttypeid,
@isfoundation,
@foundationtypeid,
@crawlspacejoist,
@ishavesoilsreport,
@how_whensending,
@isframing,
@typeoffloorjoist,
@maxfloorjoistspacing,
@typeofceilingjoist,
@roofingmaterials,
@weightofroofingmaterials,
@projectmaterialnotes,
@couriertowhom,
@couriertoaddress,
@ishavecourierplans,
@ishaveemail,
@emailaddress,
@iscustomerwillpickup,
@pickupbypersonname,
@pickupbypersonphonenumber,
@numberofcopies,
@projectholdnotes,
@customerdata,
@invoice
)
	  Set @GeneratedID = SCOPE_IDENTITY();
	END
	
	
	
		
END

GO

-------------------------------------------------------------------------------
--	END OF CREATE STATEMENTS.
--	METADATA AND SUCCESS/ERROR MESSAGES BELOW.
-------------------------------------------------------------------------------
IF EXISTS (	SELECT *
			FROM INFORMATION_SCHEMA.ROUTINES
			WHERE ROUTINE_NAME = 'SAVE_UPDATE_PROJECT'
				AND ROUTINE_TYPE = 'PROCEDURE' )
BEGIN
	PRINT 'Stored procedure SAVE_UPDATE_PROJECT created successfully.';	
END
ELSE
BEGIN
	PRINT 'ERROR: Failed to create stored procedure SAVE_UPDATE_PROJECT.';
END
GO
