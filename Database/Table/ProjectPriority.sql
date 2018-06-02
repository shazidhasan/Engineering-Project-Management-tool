USE [producteev]
GO

/****** Object:  Table [dbo].[EmployeeShifts]    Script Date: 4/10/2018 11:42:53 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[ProjectPriority]') AND type in (N'U'))
BEGIN
	CREATE TABLE [dbo].[ProjectPriority](
		[Id] [int] IDENTITY(1,1) NOT NULL,
		[PriorityTitle] [nvarchar](100) NOT NULL,		
	)

	PRINT ('Table ProjectPriority created successfully');
END
ELSE 
BEGIN
   PRINT ('You need to alter');
END
GO







