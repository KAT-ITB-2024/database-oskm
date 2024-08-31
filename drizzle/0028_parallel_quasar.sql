ALTER TABLE "wrappedProfiles" ADD PRIMARY KEY ("userId");--> statement-breakpoint
ALTER TABLE "wrappedProfiles" ALTER COLUMN "rank" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "wrappedProfiles" ALTER COLUMN "rankPercentage" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "wrappedProfiles" ADD COLUMN "name" text NOT NULL;