USE [producteev]
GO

/****** Object:  Table [dbo].[EmployeeShifts]    Script Date: 4/10/2018 11:42:53 AM ******/
SET ANSI_NULLS ON
GO

--drop table proposal

SET QUOTED_IDENTIFIER ON
GO

IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Proposal]') AND type in (N'U'))
BEGIN
	CREATE TABLE [dbo].[Proposal](
		[Id] [int] IDENTITY(1,1) NOT NULL,
		[Name] [nvarchar](100) NOT NULL,				
		[Address] [nvarchar](200)  NULL,	
		[City] [nvarchar](200)  NULL,	
		[State]	[nvarchar](200)  NULL,	
		[zip] [nvarchar](200)  NULL,			
		[Details] [nvarchar](500)  NULL,	
		[InitialContractDate] Datetime,
		[SubmittalDate] Datetime,
		[RevisionDate] Datetime,
		
		[ProposalType] nvarchar(50),

		[DailyType] nvarchar(50),
		[ProjectType] nvarchar(50),
		
		[ProjectOtherTypeValue] nvarchar(50),

		[FoundationTypeValue] nvarchar(50),		
		[FoundationSlabTypeValue] nvarchar(50),
		[FoundationPierTypeValue] nvarchar(50),
		[FoundationPierRemiedialTypeValue] nvarchar(50),
		[FoundationPierRemiedialOtherTypeValue] nvarchar(50),
		[FoundationOtherTypeValue] nvarchar(50),


		[FrameTypeValue] nvarchar(50),		
		[FrameResidentialValue] nvarchar(50),		
		[FrameResidentialOtherValue] nvarchar(50),		
		[FrameExteriorValue] nvarchar(50),
		[FrameExteriorOtherValue] nvarchar(50),
		[FrameRoofTypeValue] nvarchar(50),
		[FrameRoofTypeOtherValue] nvarchar(50),

		[RetainingWallValue] nvarchar(50),
		[RetainingWallTypeValue] nvarchar(50),
		[RetainingWallTypeWallValue] nvarchar(50),
		[RetainingWallTypeWallOtherValue] nvarchar(50),

		[PoolValue] nvarchar(50),
		[PoolCompnayDesignValue] nvarchar(50),
	
			 
	)

	PRINT ('Table Proposals created successfully');
END
ELSE 
BEGIN
   
    ALTER TABLE [dbo].[Proposal]
	ADD [ClientID] int;
	PRINT ('Table Proposal Altered successfully');

END
GO







