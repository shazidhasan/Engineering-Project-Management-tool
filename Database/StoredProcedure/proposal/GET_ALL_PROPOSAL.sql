USE producteev


SET QUOTED_IDENTIFIER ON;
SET ANSI_NULLS ON;
SET NOCOUNT ON;
GO

IF EXISTS (	SELECT *
			FROM INFORMATION_SCHEMA.ROUTINES
			WHERE ROUTINE_NAME = 'GET_ALL_PROPOSAL'
				AND ROUTINE_TYPE = 'PROCEDURE' )
BEGIN
	PRINT 'Dropping stored procedure GET_ALL_PROPOSAL.';
	DROP PROCEDURE GET_ALL_PROPOSAL;
END

GO

/*
 * ====================================================================
 * BASIC INFORMATION
 * ====================================================================
 *
 * --Client Name			: NQF
 * --Project Name			: New Website Implemenation
 * --Procedure name			: GET_ALL_PROPOSAL
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

--EXEC GET_ALL_PROPOSAL

CREATE PROCEDURE dbo.GET_ALL_PROPOSAL
AS
BEGIN
	SET NOCOUNT ON;
	SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
	SELECT Id,[Name],[Address],City,[State],zip,Details,InitialContractDate,SubmittalDate,
	RevisionDate,ProposalType,DailyType,ProjectType,ProjectOtherTypeValue,FoundationTypeValue,FoundationSlabTypeValue,
	FoundationPierTypeValue,FoundationPierRemiedialTypeValue,FoundationPierRemiedialOtherTypeValue,FoundationOtherTypeValue,
	FrameTypeValue,FrameResidentialValue,FrameResidentialOtherValue,FrameExteriorValue,FrameExteriorOtherValue,FrameRoofTypeValue,
	FrameRoofTypeOtherValue,RetainingWallValue,RetainingWallTypeValue,RetainingWallTypeWallValue,RetainingWallTypeWallOtherValue,
	PoolValue,PoolCompnayDesignValue,ClientID
	 FROM DBO.proposal
	
END

GO

-------------------------------------------------------------------------------
--	END OF CREATE STATEMENTS.
--	METADATA AND SUCCESS/ERROR MESSAGES BELOW.
-------------------------------------------------------------------------------
IF EXISTS (	SELECT *
			FROM INFORMATION_SCHEMA.ROUTINES
			WHERE ROUTINE_NAME = 'GET_ALL_PROPOSAL'
				AND ROUTINE_TYPE = 'PROCEDURE' )
BEGIN
	PRINT 'Stored procedure GET_ALL_PROPOSAL created successfully.';	
END
ELSE
BEGIN
	PRINT 'ERROR: Failed to create stored procedure GET_ALL_PROPOSAL.';
END
GO
