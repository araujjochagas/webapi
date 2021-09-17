USE [ITBIT]
GO

/****** Object:  Table [dbo].[usuario]    Script Date: 16/09/2021 17:47:26 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[usuario](
	[UsuarioID] [int] IDENTITY(1,1) NOT NULL,
	[Nome] [varchar](200) NOT NULL,
	[DataNascimento] [date] NOT NULL,
	[Email] [varchar](100) NULL,
	[Senha] [varchar](30) NOT NULL,
	[Ativo] [bit] NULL,
	[Sexoid] [int] NOT NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[usuario] ADD  DEFAULT ((1)) FOR [Ativo]
GO

ALTER TABLE [dbo].[usuario]  WITH CHECK ADD  CONSTRAINT [FK_Sexoid_usuario] FOREIGN KEY([Sexoid])
REFERENCES [dbo].[sexo] ([Sexoid])
GO

ALTER TABLE [dbo].[usuario] CHECK CONSTRAINT [FK_Sexoid_usuario]
GO


