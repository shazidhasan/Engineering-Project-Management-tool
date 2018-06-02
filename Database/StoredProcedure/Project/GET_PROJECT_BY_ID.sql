
SET QUOTED_IDENTIFIER ON;
SET ANSI_NULLS ON;
SET NOCOUNT ON;
GO

IF EXISTS (	SELECT *
			FROM INFORMATION_SCHEMA.ROUTINES
			WHERE ROUTINE_NAME = 'GET_PROJECT_BY_ID'
				AND ROUTINE_TYPE = 'PROCEDURE' )
BEGIN
	PRINT 'Dropping stored procedure GET_PROJECT_BY_ID.';
	DROP PROCEDURE GET_PROJECT_BY_ID;
END

GO

/*
 * ====================================================================
 * BASIC INFORMATION
 * ====================================================================
 *
 * --Client Name			: NQF
 * --Project Name			: New Website Implemenation
 * --Procedure name			: GET_PROJECT_BY_ID
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

--EXEC GET_PROJECT_BY_ID 1

CREATE PROCEDURE dbo.GET_PROJECT_BY_ID
(
  @ID int 
)
AS
BEGIN
	SET NOCOUNT ON;
	SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
	SELECT 
	proj.Id,
	proj.Title,
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
	Invoice,
	PS.StatusTitle as 'ProjectStatusName',
	PP.PriorityTitle as 'ProjectPriorityTitle',
	customer.KeyPerson  as 'CustomerName',
	employee.FirstName  as 'ReviewedByName',
	pt.ProjectTypeTitle  as 'ProjectTypeName',
	ft.FoundationTypeTitle  as 'FoundationTypeName'
	FROM DBO.PROJECT proj
	LEFT JOIN ProjectStatus PS ON proj.ProjectStatusID = PS.Id 
	LEFT JOIN ProjectPriority PP ON proj.ProjectPriorityID = PP.Id
	LEFT JOIN Customer customer ON proj.CustomerID = customer.Id
	LEFT JOIN Employee employee ON proj.ReviewedByID = employee.Id
	LEFT JOIN ProjectType pt ON proj.ProjectTypeID = pt.Id
	LEFT JOIN FoundationType ft ON proj.FoundationTypeID = ft.Id
	WHERE proj.ID = @ID;			
END

GO

-------------------------------------------------------------------------------
--	END OF CREATE STATEMENTS.
--	METADATA AND SUCCESS/ERROR MESSAGES BELOW.
-------------------------------------------------------------------------------
IF EXISTS (	SELECT *
			FROM INFORMATION_SCHEMA.ROUTINES
			WHERE ROUTINE_NAME = 'GET_PROJECT_BY_ID'
				AND ROUTINE_TYPE = 'PROCEDURE' )
BEGIN
	PRINT 'Stored procedure GET_PROJECT_BY_ID created successfully.';	
END
ELSE
BEGIN
	PRINT 'ERROR: Failed to create stored procedure GET_PROJECT_BY_ID.';
END
GO
