DROP TABLE "postTestSubmissions";--> statement-breakpoint
ALTER TABLE "postTests" DROP COLUMN IF EXISTS "title";--> statement-breakpoint
ALTER TABLE "postTests" DROP COLUMN IF EXISTS "description";