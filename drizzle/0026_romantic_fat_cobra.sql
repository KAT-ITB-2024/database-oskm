ALTER TABLE "wrappedProfiles" ADD COLUMN "character" text;--> statement-breakpoint
ALTER TABLE "wrappedProfiles" ADD COLUMN "personalityDesc" text;--> statement-breakpoint
ALTER TABLE "wrappedProfiles" ADD COLUMN "rankPercentage" integer;--> statement-breakpoint
ALTER TABLE "wrappedProfiles" DROP COLUMN IF EXISTS "favTopic";