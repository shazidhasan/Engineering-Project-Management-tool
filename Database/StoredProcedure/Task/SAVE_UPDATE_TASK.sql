
SET QUOTED_IDENTIFIER ON;
SET ANSI_NULLS ON;
SET NOCOUNT ON;
GO

IF EXISTS (	SELECT *
			FROM INFORMATION_SCHEMA.ROUTINES
			WHERE ROUTINE_NAME = 'SAVE_UPDATE_TASK'
				AND ROUTINE_TYPE = 'PROCEDURE' )
BEGIN
	PRINT 'Dropping stored procedure SAVE_UPDATE_TASK.';
	DROP PROCEDURE SAVE_UPDATE_TASK;
END

GO

/*
 * ====================================================================
 * BASIC INFORMATION
 * ====================================================================
 *
 * --Client Name			: NQF
 * --Project Name			: New Website Implemenation
 * --Procedure name			: SAVE_UPDATE_TASK
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

--EXEC SAVE_UPDATE_TASK

CREATE PROCEDURE dbo.SAVE_UPDATE_TASK
(
@Id int,
@ProjectID int,
@TaskStatusID int,
@TaskName nvarchar(100),
@DesignByEmployeeID int ,
@Deadline Datetime,
@ShortDescription nvarchar(200),
@FullDescription  nvarchar(500),
@NewReviewNotes nvarchar(500),
@ReviewNotes  nvarchar(500),
@TaskForProject bit, 
@CreatedDate Date,
@CreatedBy int,
@GeneratedID BIGINT OUTPUT
)
AS
BEGIN
	SET NOCOUNT ON;
	SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
	
	

	IF @iD <> 0
	BEGIN 

	  UPDATE TASK 
		SET 	  			
			ProjectID =@ProjectID,
			TaskStatusID=@TaskStatusID,
			TaskName=@TaskName,
			DesignByEmployeeID=@DesignByEmployeeID,
			Deadline=@Deadline,
			ShortDescription=@ShortDescription,
			FullDescription=@FullDescription,
			NewReviewNotes=@NewReviewNotes,
			ReviewNotes=@ReviewNotes,
			TaskForProject = @TaskForProject,
			CreatedDate = @CreatedDate,
			CreatedBy = @CreatedBy

	  WHERE ID  = @iD

	  Set @GeneratedID = @iD;

	END

	ELSE 
	BEGIN 

	  Insert into Task 
	  (		
		ProjectID,
		TaskStatusID,
		TaskName,
		DesignByEmployeeID,
		Deadline,
		ShortDescription,
		FullDescription,
		NewReviewNotes,
		ReviewNotes,
		TaskForProject,
		CreatedDate,
		CreatedBy) 
	 
		Values (
		@ProjectID,
		@TaskStatusID,
		@TaskName,
		@DesignByEmployeeID,
		@Deadline,
		@ShortDescription,
		@FullDescription,
		@NewReviewNotes,
		@ReviewNotes,
		@TaskForProject,
		@CreatedDate,
		@CreatedBy
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
			WHERE ROUTINE_NAME = 'SAVE_UPDATE_TASK'
				AND ROUTINE_TYPE = 'PROCEDURE' )
BEGIN
	PRINT 'Stored procedure SAVE_UPDATE_TASK created successfully.';	
END
ELSE
BEGIN
	PRINT 'ERROR: Failed to create stored procedure SAVE_UPDATE_TASK.';
END
GO
