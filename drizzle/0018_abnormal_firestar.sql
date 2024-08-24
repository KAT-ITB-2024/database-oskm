ALTER TABLE "assignmentSubmissions" RENAME COLUMN "file" TO "filename";--> statement-breakpoint
ALTER TABLE "assignmentSubmissions" ADD COLUMN "downloadUrl" text NOT NULL;