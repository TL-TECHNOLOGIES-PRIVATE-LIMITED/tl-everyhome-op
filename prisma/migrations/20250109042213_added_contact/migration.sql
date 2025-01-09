BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Contact] (
    [id] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [email] NVARCHAR(1000) NOT NULL,
    [subject] NVARCHAR(1000) NOT NULL,
    [message] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Contact_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [Contact_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Contact_email_key] UNIQUE NONCLUSTERED ([email])
);

-- CreateIndex
CREATE NONCLUSTERED INDEX [Contact_email_idx] ON [dbo].[Contact]([email]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
