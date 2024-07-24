ALTER TABLE "character" RENAME TO "characters";--> statement-breakpoint
ALTER TABLE "event" DROP CONSTRAINT "event_characterName_character_name_fk";
--> statement-breakpoint
ALTER TABLE "event" ADD COLUMN "guideBook" varchar(255) NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "event" ADD CONSTRAINT "event_characterName_characters_name_fk" FOREIGN KEY ("characterName") REFERENCES "public"."characters"("name") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
