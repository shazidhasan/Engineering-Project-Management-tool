use producteev

SET QUOTED_IDENTIFIER ON;
SET ANSI_NULLS ON;
SET NOCOUNT ON;
GO

IF EXISTS (	SELECT *
			FROM INFORMATION_SCHEMA.ROUTINES
			WHERE ROUTINE_NAME = 'SAVE_UPDATE_CUSTOMER'
				AND ROUTINE_TYPE = 'PROCEDURE' )
BEGIN
	PRINT 'Dropping stored procedure SAVE_UPDATE_CUSTOMER.';
	DROP PROCEDURE SAVE_UPDATE_CUSTOMER;
END

GO

/*
 * ====================================================================
 * BASIC INFORMATION
 * ====================================================================
 *
 * --Client Name			: NQF
 * --Project Name			: New Website Implemenation
 * --Procedure name			: SAVE_UPDATE_CUSTOMER
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

--EXEC SAVE_UPDATE_CUSTOMER

CREATE PROCEDURE dbo.SAVE_UPDATE_CUSTOMER
(
	@Id int,
	@Title nvarchar(100),
	@KeyPerson nvarchar(100),
	@Address nvarchar(100),
	@Phone nvarchar(50),
	@AltPhone nvarchar(50),
	@Email nvarchar(50),
	@Notes nvarchar(500),	
	@City nvarchar(50),
	@State nvarchar(50),
	@Zip nvarchar(50),
	@GeneratedID BIGINT OUTPUT
)
AS
BEGIN
	SET NOCOUNT ON;
	SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
	
	

	IF @iD <> 0
	BEGIN 

	  UPDATE CUSTOMER 
		SET 	  						
			Title = @Title,
			KeyPerson = @KeyPerson,
			[Address] = @Address,
			[City] = @City,
			[State] = @State,
			[Zip] = @Zip,
			Phone = @Phone,
			AltPhone = @AltPhone,
			Email = @Email,
			Notes = @Notes			

	  WHERE ID  = @iD

	  Set @GeneratedID = @iD;

	END

	ELSE 
	BEGIN 

	  Insert into CUSTOMER 
	  (		
			Title,
			KeyPerson,
			[Address],
			Phone,
			AltPhone,
			Email,
			Notes,
			City,[State],Zip
	 ) 
	 
		Values (			
			@Title,
			@KeyPerson,
			@Address,
			@Phone,
			@AltPhone,
			@Email,
			@Notes,
			@City,
			@State,@Zip
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
			WHERE ROUTINE_NAME = 'SAVE_UPDATE_CUSTOMER'
				AND ROUTINE_TYPE = 'PROCEDURE' )
BEGIN
	PRINT 'Stored procedure SAVE_UPDATE_CUSTOMER created successfully.';	
END
ELSE
BEGIN
	PRINT 'ERROR: Failed to create stored procedure SAVE_UPDATE_CUSTOMER.';
END
GO
