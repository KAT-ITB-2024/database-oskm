CREATE TABLE IF NOT EXISTS "groups" (
	"groupName" text PRIMARY KEY NOT NULL,
	"point" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
ALTER TABLE "profiles" ADD COLUMN "group" text NOT NULL;--> statement-breakpoint
ALTER TABLE "userMatches" ADD COLUMN "lastMessage" text;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "profiles" ADD CONSTRAINT "profiles_group_groups_groupName_fk" FOREIGN KEY ("group") REFERENCES "public"."groups"("groupName") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
