DO $$ BEGIN
 CREATE TYPE "public"."classDay" AS ENUM('Day 1', 'Day 2');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "classes" (
	"id" text PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"topic" varchar(100),
	"description" text NOT NULL,
	"speaker" varchar(100) NOT NULL,
	"location" varchar(100) NOT NULL,
	"date" timestamp with time zone NOT NULL,
	"totalSeats" integer NOT NULL,
	"reservedSeats" integer DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "postTests" (
	"id" text PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"startTime" timestamp with time zone,
	"deadline" timestamp with time zone NOT NULL,
	"googleFormLink" varchar(255) NOT NULL
);
--> statement-breakpoint
ALTER TABLE "event" RENAME TO "events";--> statement-breakpoint
ALTER TABLE "events" DROP CONSTRAINT "event_day_unique";--> statement-breakpoint
ALTER TABLE "eventAssignments" DROP CONSTRAINT "eventAssignments_eventId_event_id_fk";
--> statement-breakpoint
ALTER TABLE "eventPresence" DROP CONSTRAINT "eventPresence_eventId_event_id_fk";
--> statement-breakpoint
ALTER TABLE "events" DROP CONSTRAINT "event_characterName_characters_name_fk";
--> statement-breakpoint
ALTER TABLE "events" ADD COLUMN "youtubeVideo" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "profiles" ADD COLUMN "instagram" varchar(255);--> statement-breakpoint
ALTER TABLE "profiles" ADD COLUMN "chosenClass" varchar(255);--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "eventAssignments" ADD CONSTRAINT "eventAssignments_eventId_events_id_fk" FOREIGN KEY ("eventId") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "eventPresence" ADD CONSTRAINT "eventPresence_eventId_events_id_fk" FOREIGN KEY ("eventId") REFERENCES "public"."events"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "events" ADD CONSTRAINT "events_characterName_characters_name_fk" FOREIGN KEY ("characterName") REFERENCES "public"."characters"("name") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "profiles" ADD CONSTRAINT "profiles_chosenClass_classes_id_fk" FOREIGN KEY ("chosenClass") REFERENCES "public"."classes"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "events" ADD CONSTRAINT "events_day_unique" UNIQUE("day");