USE [producteev]
GO

/****** Object:  Table [dbo].[EmployeeShifts]    Script Date: 4/10/2018 11:42:53 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Note]') AND type in (N'U'))
BEGIN
	CREATE TABLE [dbo].[Note](
		[Id] [int] IDENTITY(1,1) NOT NULL,
		[TaskId] int NOT NULL,
		[Comment] [varchar](250),
		[CreatedDate] DateTime,
		[CreatedByEmployeeId] int
	)

	PRINT ('Table Note created successfully');
END
ELSE 
BEGIN
   
 --   ALTER TABLE [dbo].[Note]
	--ADD IsProspective BIT;
	PRINT ('Table Note Altered successfully');

END
GO







