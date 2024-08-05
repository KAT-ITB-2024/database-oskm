ALTER TYPE "assignmentType" ADD VALUE 'Main';--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "wrappedProfiles" (
	"userId" text NOT NULL,
	"totalMatch" integer DEFAULT 0 NOT NULL,
	"submittedQuest" integer DEFAULT 0 NOT NULL,
	"mbti" text,
	"favTopic" text,
	"rank" integer,
	"updatedAt" timestamp with time zone NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "wrappedProfiles" ADD CONSTRAINT "wrappedProfiles_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "wrappedProfiles_userId_index" ON "wrappedProfiles" USING btree ("userId");--> statement-breakpoint
ALTER TABLE "profiles" DROP COLUMN IF EXISTS "campus";--> statement-breakpoint
ALTER TABLE "profiles" DROP COLUMN IF EXISTS "totalMatch";--> statement-breakpoint
ALTER TABLE "profiles" DROP COLUMN IF EXISTS "submittedQuest";--> statement-breakpoint
ALTER TABLE "profiles" DROP COLUMN IF EXISTS "mbti";--> statement-breakpoint
ALTER TABLE "profiles" DROP COLUMN IF EXISTS "favTopic";--> statement-breakpoint
ALTER TABLE "profiles" DROP COLUMN IF EXISTS "rank";