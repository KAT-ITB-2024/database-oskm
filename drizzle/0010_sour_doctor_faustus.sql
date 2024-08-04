ALTER TYPE "role" ADD VALUE 'ITB-X';--> statement-breakpoint
ALTER TABLE "profiles" ADD COLUMN "mbti" text;--> statement-breakpoint
ALTER TABLE "profiles" ADD COLUMN "favTopic" text;--> statement-breakpoint
ALTER TABLE "profiles" ADD COLUMN "rank" integer;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "email" varchar(255);--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "activityPoints" integer DEFAULT 0;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_email_unique" UNIQUE("email");