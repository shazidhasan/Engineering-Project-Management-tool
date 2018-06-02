USE [producteev]
GO

--drop table project

/****** Object:  Table [dbo].[EmployeeShifts]    Script Date: 4/10/2018 11:42:53 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[project]') AND type in (N'U'))
BEGIN
	CREATE TABLE [dbo].[Project](
		[Id] [int] IDENTITY(1,1) NOT NULL,
		[Title] [nvarchar](200) NOT NULL,
		[ProjectNumber] [nvarchar](100) NOT NULL,
		[ProjectStatusID] [int] NOT NULL,
		[ProjectPriorityID] [int] NULL,
		[PlanName] [nvarchar](100) NULL,
		[PlanNumber] [nvarchar](100) NULL,
		[StartDate] DateTime NULL,
		[DueDate] DateTime NULL,
		[JobAddress] [nvarchar](100)  NULL,
		[JobCity] [nvarchar](50) NULL,
		[JobState] [nvarchar](50) NULL,
		[JobZipAddress] [nvarchar](100) NULL,
		[DWGFIleLocation] [nvarchar](100) NULL,
		[ProjectTypeNotes] [nvarchar](500) NULL,
		[CustomerID] [int] NOT NULL,
		[ReviewedByID] [int] NULL,
		[ProjectTypeID] [int] NULL,
		[IsFoundation] bit,
		[FoundationTypeID] [int] NULL,
		[CrawlSpaceJoist] [nvarchar](100) NULL,
		[IsHaveSoilsReport] bit,
		[How_WhenSending] [nvarchar](50) NULL,
		[IsFraming] bit,
		[TypeOfFloorJoist] [nvarchar](100) NULL,
		[MaxFloorJoistSpacing] [nvarchar](100) NULL,
		[TypeOfCeilingJoist] [nvarchar](100) NULL,
		[RoofingMaterials] [nvarchar](100) NULL,
		[WeightOfRoofingMaterials] [nvarchar](100) NULL,
		[ProjectMaterialNotes] [nvarchar](100) NULL,

		[CouriertoWhom] [nvarchar](100) NULL,
		[CouriertoAddress] [nvarchar](100) NULL,
		[IsHaveCourierPlans] bit NULL,

		[IsHaveEmail] bit NULL,
		[EmailAddress] [nvarchar](100) NULL,
		[IsCustomerWillPickup] bit NULL,
		[PickupByPersonName] Nvarchar(50) NULL,
		[PickupByPersonPhoneNumber] Nvarchar(50) NULL,

		[NumberOfCopies] int NULL,
		[ProjectHoldNotes] Nvarchar(150) NULL,
		[CustomerData] Nvarchar(400) NULL,
		[Invoice] Nvarchar(200) NULL

	)

	PRINT ('Table Project created successfully');
END
ELSE 
BEGIN
 --   ALTER TABLE [dbo].[PROJECT]
	--ADD IsProposal BIT;
	PRINT ('Table Project Altered successfully');
END
GO







