USE [producteev]
GO

/****** Object:  Table [dbo].[EmployeeShifts]    Script Date: 4/10/2018 11:42:53 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Task]') AND type in (N'U'))
BEGIN
	CREATE TABLE [dbo].[Task](
		[Id] [int] IDENTITY(1,1) NOT NULL,
		[ProjectID] [int] NOT NULL,		
		[TaskStatusID] [int] NOT NULL,		
		[TaskName] [nvarchar](100) NOT NULL,		
		[DesignByEmployeeID] [int]  NULL,		
		[Deadline] Datetime NULL,
		[ShortDescription] [nvarchar](200)  NULL,		
		[FullDescription] [nvarchar](500)  NULL,		
		[NewReviewNotes] [nvarchar](500)  NULL,		
		[ReviewNotes] [nvarchar](500)  NULL,	
		[TaskForProject] BIT,
		[CreatedDate] Date,
		[CreatedBy] int	
	)

	PRINT ('Table Task created successfully');
END
ELSE 
BEGIN
   --Alter Table Task 
   --Add 
   --TaskForProject BIT,
   --CreatedDate Date,
   --CreatedBy int
   PRINT ('Table Task altered Successfully');
END
GO








