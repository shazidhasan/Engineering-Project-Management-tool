USE [producteev]
GO

/****** Object:  Table [dbo].[EmployeeShifts]    Script Date: 4/10/2018 11:42:53 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[ProjectStatus]') AND type in (N'U'))
BEGIN
	CREATE TABLE [dbo].[ProjectStatus](
		[Id] [int] IDENTITY(1,1) NOT NULL,
		[StatusTitle] [nvarchar](100) NOT NULL,		
	)

	PRINT ('Table ProjectStatus created successfully');
END
ELSE 
BEGIN
   PRINT ('You need to alter');
END
GO







