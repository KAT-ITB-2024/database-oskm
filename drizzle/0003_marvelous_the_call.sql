ALTER TABLE "messages" ADD COLUMN "content" text NOT NULL;--> statement-breakpoint
ALTER TABLE "messages" ADD COLUMN "isRead" boolean DEFAULT false NOT NULL;