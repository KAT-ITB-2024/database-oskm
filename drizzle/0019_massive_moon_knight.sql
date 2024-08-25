ALTER TABLE "assignments" ADD COLUMN "filename" text NOT NULL;--> statement-breakpoint
ALTER TABLE "assignments" ADD COLUMN "downloadUrl" text NOT NULL;--> statement-breakpoint
ALTER TABLE "assignments" DROP COLUMN IF EXISTS "file";