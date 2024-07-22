DO $$ BEGIN
 CREATE TYPE "public"."lembaga" AS ENUM('HMJ', 'Unit');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TYPE "assignmentType" ADD VALUE 'Daily';--> statement-breakpoint
ALTER TYPE "assignmentType" ADD VALUE 'Side';--> statement-breakpoint
ALTER TABLE "event" DROP COLUMN IF EXISTS "rewatd";