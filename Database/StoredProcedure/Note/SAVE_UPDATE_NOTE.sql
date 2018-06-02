
SET QUOTED_IDENTIFIER ON;
SET ANSI_NULLS ON;
SET NOCOUNT ON;
GO

IF EXISTS (	SELECT *
			FROM INFORMATION_SCHEMA.ROUTINES
			WHERE ROUTINE_NAME = 'SAVE_UPDATE_NOTE'
				AND ROUTINE_TYPE = 'PROCEDURE' )
BEGIN
	PRINT 'Dropping stored procedure SAVE_UPDATE_NOTE.';
	DROP PROCEDURE SAVE_UPDATE_NOTE;
END

GO

/*
 * ====================================================================
 * BASIC INFORMATION
 * ====================================================================
 *
 * --Client Name			: NQF
 * --Project Name			: New Website Implemenation
 * --Procedure name			: SAVE_UPDATE_NOTE
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

--EXEC SAVE_UPDATE_NOTE

CREATE PROCEDURE dbo.SAVE_UPDATE_NOTE
(
@Id int,
@taskId int,
@Comment varchar(250),
@CreatedDate DateTime,
@CreatedByEmployeeId int,
@GeneratedID BIGINT OUTPUT
)
AS
BEGIN
	SET NOCOUNT ON;
	SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
	
	

	IF @iD <> 0
	BEGIN 

	  UPDATE NOTE 
		SET 	  			
			TASKID = @taskId,
			Comment= @Comment,
			CreatedDate= @CreatedDate,
			CreatedByEmployeeId=@CreatedByEmployeeId			

	  WHERE ID  = @Id

	  Set @GeneratedID = @Id;

	END

	ELSE 
	BEGIN 

	  Insert into NOTE (TaskID,Comment,CreatedDate,CreatedByEmployeeId)
	  values (		
		@taskId,@Comment,@CreatedDate,@CreatedByEmployeeId
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
			WHERE ROUTINE_NAME = 'SAVE_UPDATE_NOTE'
				AND ROUTINE_TYPE = 'PROCEDURE' )
BEGIN
	PRINT 'Stored procedure SAVE_UPDATE_NOTE created successfully.';	
END
ELSE
BEGIN
	PRINT 'ERROR: Failed to create stored procedure SAVE_UPDATE_NOTE.';
END
GO
