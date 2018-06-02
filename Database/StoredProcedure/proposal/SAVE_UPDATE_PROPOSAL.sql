use producteev

SET QUOTED_IDENTIFIER ON;
SET ANSI_NULLS ON;
SET NOCOUNT ON;
GO

IF EXISTS (	SELECT *
			FROM INFORMATION_SCHEMA.ROUTINES
			WHERE ROUTINE_NAME = 'SAVE_UPDATE_PROPOSAL'
				AND ROUTINE_TYPE = 'PROCEDURE' )
BEGIN
	PRINT 'Dropping stored procedure SAVE_UPDATE_PROPOSAL.';
	DROP PROCEDURE SAVE_UPDATE_PROPOSAL;
END

GO

/*
 * ====================================================================
 * BASIC INFORMATION
 * ====================================================================
 *
 * --Client Name			: NQF
 * --Project Name			: New Website Implemenation
 * --Procedure name			: SAVE_UPDATE_PROPOSAL
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

--EXEC SAVE_UPDATE_PROPOSAL

CREATE PROCEDURE dbo.SAVE_UPDATE_PROPOSAL
(
	 @Id int 
	,@Name nvarchar(100) 
	,@Address nvarchar(100) 
	,@City nvarchar(100) 
	,@State nvarchar(100) 
	,@zip nvarchar(100) 
	,@Details nvarchar(100) 
	,@InitialContractDate Datetime 
	,@SubmittalDate Datetime
	,@RevisionDate Datetime
	,@ProposalType nvarchar(100) 
	,@DailyType nvarchar(100) 
	,@ProjectType nvarchar(100) 
	,@ProjectOtherTypeValue nvarchar(100) 
	,@FoundationTypeValue nvarchar(100) 
	,@FoundationSlabTypeValue nvarchar(100) 
	,@FoundationPierTypeValue nvarchar(100) 
	,@FoundationPierRemiedialTypeValue nvarchar(100) 
	,@FoundationPierRemiedialOtherTypeValue nvarchar(100) 
	,@FoundationOtherTypeValue nvarchar(100) 
	,@FrameTypeValue nvarchar(100) 
	,@FrameResidentialValue nvarchar(100) 
	,@FrameResidentialOtherValue nvarchar(100) 
	,@FrameExteriorValue nvarchar(100) 
	,@FrameExteriorOtherValue nvarchar(100) 
	,@FrameRoofTypeValue nvarchar(100) 
	,@FrameRoofTypeOtherValue nvarchar(100) 
	,@RetainingWallValue nvarchar(100) 
	,@RetainingWallTypeValue nvarchar(100) 
	,@RetainingWallTypeWallValue nvarchar(100) 
	,@RetainingWallTypeWallOtherValue nvarchar(100) 
	,@PoolValue nvarchar(100) 
	,@PoolCompnayDesignValue nvarchar(100) 
	,@ClientID int	
	,@GeneratedID BIGINT OUTPUT
)
AS
BEGIN
	SET NOCOUNT ON;
	SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
	
	

	IF @iD <> 0
	BEGIN 

	  UPDATE PROPOSAL 
		SET 	  									
			[Name]	  = @Name,
			[Address]	 = @Address,
			City	 = @City,
			[State]	 = @State,
			zip	 = @zip,
			Details	 = @Details,
			InitialContractDate	 = @InitialContractDate,
			SubmittalDate	= @SubmittalDate,
			 RevisionDate= @RevisionDate,
			 ProposalType= @ProposalType,
			 DailyType= @DailyType,
			 ProjectType= @ProjectType,
			 ProjectOtherTypeValue= @ProjectOtherTypeValue,
			 FoundationTypeValue= @FoundationTypeValue,
			 FoundationSlabTypeValue= @FoundationSlabTypeValue,
			 FoundationPierTypeValue= @FoundationPierTypeValue,
			 FoundationPierRemiedialTypeValue= @FoundationPierRemiedialTypeValue,
			 FoundationPierRemiedialOtherTypeValue= @FoundationPierRemiedialOtherTypeValue,
			 FoundationOtherTypeValue= @FoundationOtherTypeValue,
			 FrameTypeValue= @FrameTypeValue,
			 FrameResidentialValue= @FrameResidentialValue,
			 FrameResidentialOtherValue= @FrameResidentialOtherValue,
			 FrameExteriorValue= @FrameExteriorValue,
			 FrameExteriorOtherValue= @FrameExteriorOtherValue,
			 FrameRoofTypeValue= @FrameRoofTypeValue,
			 FrameRoofTypeOtherValue= @FrameRoofTypeOtherValue,
			 RetainingWallValue= @RetainingWallValue,
			 RetainingWallTypeValue= @RetainingWallTypeValue,
			 RetainingWallTypeWallValue= @RetainingWallTypeWallValue,
			 RetainingWallTypeWallOtherValue= @RetainingWallTypeWallOtherValue,
			 PoolValue= @PoolValue,
			 PoolCompnayDesignValue= @PoolCompnayDesignValue,
			 ClientID = @ClientID

	  WHERE ID  = @iD

	  Set @GeneratedID = @iD;

	END

	ELSE 
	BEGIN 

	  Insert into PROPOSAL 
	  (					
			[Name],
			[Address],			
			City,
			[State],
			zip,
			Details,
			InitialContractDate,
			SubmittalDate,
			RevisionDate,
			ProposalType,
			DailyType,
			ProjectType,
			ProjectOtherTypeValue,
			FoundationTypeValue,
			FoundationSlabTypeValue,
			FoundationPierTypeValue,
			FoundationPierRemiedialTypeValue,
			FoundationPierRemiedialOtherTypeValue,
			FoundationOtherTypeValue,
			FrameTypeValue,
			FrameResidentialValue,
			FrameResidentialOtherValue,
			FrameExteriorValue,
			FrameExteriorOtherValue,
			FrameRoofTypeValue,
			FrameRoofTypeOtherValue,
			RetainingWallValue,
			RetainingWallTypeValue,
			RetainingWallTypeWallValue,
			RetainingWallTypeWallOtherValue,
			PoolValue,
			PoolCompnayDesignValue,
			ClientID
	 ) 
	 
		Values (						
			@Name,
			@Address,
			@City,
			@State,
			@zip,
			@Details,
			@InitialContractDate,
			@SubmittalDate,
			@RevisionDate,
			@ProposalType,
			@DailyType,
			@ProjectType,
			@ProjectOtherTypeValue,
			@FoundationTypeValue,
			@FoundationSlabTypeValue,
			@FoundationPierTypeValue,
			@FoundationPierRemiedialTypeValue,
			@FoundationPierRemiedialOtherTypeValue,
			@FoundationOtherTypeValue,
			@FrameTypeValue,
			@FrameResidentialValue,
			@FrameResidentialOtherValue,
			@FrameExteriorValue,
			@FrameExteriorOtherValue,
			@FrameRoofTypeValue,
			@FrameRoofTypeOtherValue,
			@RetainingWallValue,
			@RetainingWallTypeValue,
			@RetainingWallTypeWallValue,
			@RetainingWallTypeWallOtherValue,
			@PoolValue,
			@PoolCompnayDesignValue,
			@ClientID
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
			WHERE ROUTINE_NAME = 'SAVE_UPDATE_PROPOSAL'
				AND ROUTINE_TYPE = 'PROCEDURE' )
BEGIN
	PRINT 'Stored procedure SAVE_UPDATE_PROPOSAL created successfully.';	
END
ELSE
BEGIN
	PRINT 'ERROR: Failed to create stored procedure SAVE_UPDATE_PROPOSAL.';
END
GO
