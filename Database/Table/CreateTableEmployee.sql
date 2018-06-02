USE [producteev]
GO

/****** Object:  Table [dbo].[EmployeeShifts]    Script Date: 4/10/2018 11:42:53 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Employee]') AND type in (N'U'))
BEGIN
	CREATE TABLE [dbo].[Employee](
		[Id] [INT] IDENTITY(1,1) NOT NULL,
		FirstName nvarchar(50)  NOT NULL,
		LastName nvarchar(50)  NOT NULL,
		[Name] [NVARCHAR](100) not NULL,
		[Designation] [NVARCHAR](100) not NULL,
		[Phone] [NVARCHAR](50) not NULL,
		[Email] [NVARCHAR](50) not NULL,
		[Address] [NVARCHAR](50) not NULL,
		[City] [NVARCHAR](50) not NULL,
		[State] [NVARCHAR](50) not NULL,
		[Zip] [NVARCHAR](50) not NULL,		
		[HasReviewAuthorization] BIT NULL,
		[IsInManagement]  BIT NULL,
		[IsInDirectorPanel]  BIT NULL,
	)

	PRINT ('Table Employee created successfully');
END
ELSE 
BEGIN
   PRINT ('Table Customer Altered successfully');
END
GO







