ALTER TYPE "gender" ADD VALUE 'Male';--> statement-breakpoint
ALTER TYPE "gender" ADD VALUE 'Female';--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "resetTokens" (
	"id" text PRIMARY KEY NOT NULL,
	"value" text,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	"expiredTime" integer DEFAULT 3600
);
--> statement-breakpoint
ALTER TABLE "eventPresence" ALTER COLUMN "updatedAt" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "profiles" ALTER COLUMN "updatedAt" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "updatedAt" DROP DEFAULT;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "resetTokens" ADD CONSTRAINT "resetTokens_id_users_id_fk" FOREIGN KEY ("id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "eventPresence" DROP COLUMN IF EXISTS "profileImage";