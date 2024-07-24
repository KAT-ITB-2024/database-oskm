ALTER TABLE "character" RENAME TO "characters";--> statement-breakpoint
ALTER TABLE "eventPresence" RENAME TO "eventPresences";--> statement-breakpoint
ALTER TABLE "event" RENAME TO "events";--> statement-breakpoint
ALTER TABLE "eventPresences" DROP CONSTRAINT "eventPresence_eventId_presenceEvent_userNim_unique";--> statement-breakpoint
ALTER TABLE "events" DROP CONSTRAINT "event_day_unique";--> statement-breakpoint
ALTER TABLE "eventAssignments" DROP CONSTRAINT "eventAssignments_eventId_event_id_fk";
--> statement-breakpoint
ALTER TABLE "eventPresences" DROP CONSTRAINT "eventPresence_eventId_event_id_fk";
--> statement-breakpoint
ALTER TABLE "eventPresences" DROP CONSTRAINT "eventPresence_userNim_users_nim_fk";
--> statement-breakpoint
ALTER TABLE "events" DROP CONSTRAINT "event_characterName_character_name_fk";
--> statement-breakpoint
ALTER TABLE "eventPresences" ALTER COLUMN "createdAt" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "eventPresences" ALTER COLUMN "updatedAt" DROP DEFAULT;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "eventAssignments" ADD CONSTRAINT "eventAssignments_eventId_events_id_fk" FOREIGN KEY ("eventId") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "eventPresences" ADD CONSTRAINT "eventPresences_eventId_events_id_fk" FOREIGN KEY ("eventId") REFERENCES "public"."events"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "eventPresences" ADD CONSTRAINT "eventPresences_userNim_users_nim_fk" FOREIGN KEY ("userNim") REFERENCES "public"."users"("nim") ON DELETE no action ON UPDATE no action;
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
ALTER TABLE "eventPresences" ADD CONSTRAINT "eventPresences_eventId_presenceEvent_userNim_unique" UNIQUE("eventId","presenceEvent","userNim");--> statement-breakpoint
ALTER TABLE "events" ADD CONSTRAINT "events_day_unique" UNIQUE("day");