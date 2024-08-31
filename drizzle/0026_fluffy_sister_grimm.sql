ALTER TABLE "wrappedProfiles" ADD PRIMARY KEY ("userId");--> statement-breakpoint
ALTER TABLE "wrappedProfiles" DROP COLUMN IF EXISTS "favTopic"; --> Drop the favTopic column if it exists
ALTER TABLE "wrappedProfiles" ADD COLUMN "favTopics" varchar[] DEFAULT ARRAY[]::varchar[]; --> Recreate the favTopic column with the correct type
ALTER TABLE "wrappedProfiles" ADD COLUMN "name" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "wrappedProfiles" ADD COLUMN "personalityDesc" text;--> statement-breakpoint
ALTER TABLE "wrappedProfiles" ADD COLUMN "character" text;--> statement-breakpoint
ALTER TABLE "wrappedProfiles" ADD COLUMN "percent" integer;