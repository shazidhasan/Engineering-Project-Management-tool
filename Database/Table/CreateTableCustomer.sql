USE [producteev]
GO

/****** Object:  Table [dbo].[EmployeeShifts]    Script Date: 4/10/2018 11:42:53 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Customer]') AND type in (N'U'))
BEGIN
	CREATE TABLE [dbo].[Customer](
		[Id] [int] IDENTITY(1,1) NOT NULL,
		[Title] [nvarchar](100) NOT NULL,		
		[KeyPerson] [nvarchar](100)  NULL,		
		[Address] [nvarchar](200)  NULL,		
		[City] [nvarchar](200)  NULL,		
		[State] [nvarchar](200)  NULL,		
		[Zip] [nvarchar](200)  NULL,		
		[Phone] [nvarchar](50)  NULL,		
		[AltPhone] [nvarchar](50)  NULL,		
		[Email] [nvarchar](100)  NULL,		
		[Notes] [nvarchar](500)  NULL,		
	)

	PRINT ('Table Customer created successfully');
END
ELSE 
BEGIN
   
 --   ALTER TABLE [dbo].[Customer]
	--ADD IsProspective BIT;
	PRINT ('Table Customer Altered successfully');

END
GO







