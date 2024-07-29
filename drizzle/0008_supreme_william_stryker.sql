CREATE TABLE IF NOT EXISTS "postTestSubmissions" (
	"postTestId" text NOT NULL,
	"userNim" varchar(100) NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "postTestSubmissions_postTestId_userNim_pk" PRIMARY KEY("postTestId","userNim")
);
--> statement-breakpoint
DROP TABLE "eventAssignments";--> statement-breakpoint
ALTER TABLE "assignmentSubmissions" ADD COLUMN "point" integer;--> statement-breakpoint
ALTER TABLE "postTests" ADD COLUMN "eventId" text NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "postTestSubmissions" ADD CONSTRAINT "postTestSubmissions_postTestId_postTests_id_fk" FOREIGN KEY ("postTestId") REFERENCES "public"."postTests"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "postTestSubmissions" ADD CONSTRAINT "postTestSubmissions_userNim_users_nim_fk" FOREIGN KEY ("userNim") REFERENCES "public"."users"("nim") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "submission_usernim_idx" ON "postTestSubmissions" USING btree ("userNim");--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "postTests" ADD CONSTRAINT "postTests_eventId_events_id_fk" FOREIGN KEY ("eventId") REFERENCES "public"."events"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
