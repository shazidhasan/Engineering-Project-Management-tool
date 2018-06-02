
SET QUOTED_IDENTIFIER ON;
SET ANSI_NULLS ON;
SET NOCOUNT ON;
GO

IF EXISTS (	SELECT *
			FROM INFORMATION_SCHEMA.ROUTINES
			WHERE ROUTINE_NAME = 'SAVE_UPDATE_EMPLOYEE'
				AND ROUTINE_TYPE = 'PROCEDURE' )
BEGIN
	PRINT 'Dropping stored procedure SAVE_UPDATE_EMPLOYEE.';
	DROP PROCEDURE SAVE_UPDATE_EMPLOYEE;
END

GO

/*
 * ====================================================================
 * BASIC INFORMATION
 * ====================================================================
 *
 * --Client Name			: NQF
 * --Project Name			: New Website Implemenation
 * --Procedure name			: SAVE_UPDATE_EMPLOYEE
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

--EXEC SAVE_UPDATE_EMPLOYEE

CREATE PROCEDURE dbo.SAVE_UPDATE_EMPLOYEE
(
	@Id int,
	@Name Varchar(100),
	@FirstName Varchar(100),
	@LastName Varchar(100),
	@Designation Varchar(100),
	@Phone Varchar(100),
	@Email Varchar(100),
	@Zip Varchar(100),
	@State Varchar(100),
	@City  Varchar(100),
	@Address Varchar(100),	
	@HasReviewAuthorization   Varchar(100),
	@IsInManagement  Varchar(100),
	@IsInDirectorPanel Varchar(100),
	@GeneratedID BIGINT OUTPUT
)
AS
BEGIN
	SET NOCOUNT ON;
	SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;	

	IF @iD <> 0
	BEGIN 

	  UPDATE EMPLOYEE 
		SET 	  										
				[Name] = @Name,
				[FirstName] = @FirstName,
				[LastName] = @LastName,
				Designation = @Designation,
				Phone = @Phone,
				Email = @Email, 
				Zip = @Zip,
				[State] = @State,
				City = @City,
				[Address] = @Address,				
				HasReviewAuthorization = @HasReviewAuthorization,
				IsInManagement = @IsInManagement,
				IsInDirectorPanel = @IsInDirectorPanel 

	  WHERE ID  = @iD

	  Set @GeneratedID = @iD;

	END

	ELSE 
	BEGIN 

	  Insert into EMPLOYEE 
	  (		
			[Name] ,
			[FirstName],
			[LastName],
			Designation ,
			Phone ,
			Email ,
			Zip ,
			[State] ,
			City ,
			[Address] ,
			HasReviewAuthorization ,
			IsInManagement ,
			IsInDirectorPanel
		) 
	 
		Values (			
				@Name ,
				@FirstName,
				@LastName,
				@Designation ,
				@Phone ,
				@Email ,
				@Zip ,
				@State ,
				@City ,
				@Address,				
				@HasReviewAuthorization ,
				@IsInManagement ,
				@IsInDirectorPanel
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
			WHERE ROUTINE_NAME = 'SAVE_UPDATE_EMPLOYEE'
				AND ROUTINE_TYPE = 'PROCEDURE' )
BEGIN
	PRINT 'Stored procedure SAVE_UPDATE_EMPLOYEE created successfully.';	
END
ELSE
BEGIN
	PRINT 'ERROR: Failed to create stored procedure SAVE_UPDATE_EMPLOYEE.';
END
GO
