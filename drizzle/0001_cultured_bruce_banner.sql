ALTER TABLE "assignments" ALTER COLUMN "startTime" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "eventPresence" ALTER COLUMN "updatedAt" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "password" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "eventPresence" ADD COLUMN "profileImage" text;--> statement-breakpoint
ALTER TABLE "event" ADD COLUMN "rewatd" integer DEFAULT 0 NOT NULL;