
SET QUOTED_IDENTIFIER ON;
SET ANSI_NULLS ON;
SET NOCOUNT ON;
GO

IF EXISTS (	SELECT *
			FROM INFORMATION_SCHEMA.ROUTINES
			WHERE ROUTINE_NAME = 'GET_ALL_TASK_BY_EMPLOYEE_ID'
				AND ROUTINE_TYPE = 'PROCEDURE' )
BEGIN
	PRINT 'Dropping stored procedure GET_ALL_TASK_BY_EMPLOYEE_ID';
	DROP PROCEDURE GET_ALL_TASK_BY_EMPLOYEE_ID;
END

GO

/*
 * ====================================================================
 * BASIC INFORMATION
 * ====================================================================
 *
 * --Client Name			: NQF
 * --Project Name			: New Website Implemenation
 * --Procedure name			: GET_ALL_TASK_BY_EMPLOYEE_ID
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

--EXEC GET_ALL_TASK_BY_EMPLOYEE_ID 1

CREATE PROCEDURE dbo.GET_ALL_TASK_BY_EMPLOYEE_ID
(@empId INT)
AS
BEGIN
	SET NOCOUNT ON;
	SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
	SELECT Task.ID,ProjectID,TaskStatusID,TaskName,DesignByEmployeeID,Deadline,
	ShortDescription,FullDescription,NewReviewNotes,ReviewNotes,emp.[Name] as [DesignByEmployee],taskstatus.StatusTitle as [TaskStatus] ,proj.Title  as ProjectName FROM DBO.Task task

	JOIN DBO.Employee emp on emp.Id = task.DesignByEmployeeID AND emp.Id = @empId
	JOIN DBO.TaskStatus taskstatus on taskstatus.Id = task.TaskStatusID
	JOIN DBO.Project proj on proj.Id = task.ProjectID
			
END

GO

-------------------------------------------------------------------------------
--	END OF CREATE STATEMENTS.
--	METADATA AND SUCCESS/ERROR MESSAGES BELOW.
-------------------------------------------------------------------------------
IF EXISTS (	SELECT *
			FROM INFORMATION_SCHEMA.ROUTINES
			WHERE ROUTINE_NAME = 'GET_ALL_TASK_BY_EMPLOYEE_ID'
				AND ROUTINE_TYPE = 'PROCEDURE' )
BEGIN
	PRINT 'Stored procedure GET_ALL_TASK_BY_EMPLOYEE_ID created successfully.';	
END
ELSE
BEGIN
	PRINT 'ERROR: Failed to create stored procedure GET_ALL_TASK_BY_EMPLOYEE_ID.';
END
GO
