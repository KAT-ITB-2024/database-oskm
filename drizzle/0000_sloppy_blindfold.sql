DO $$ BEGIN
 CREATE TYPE "public"."assignmentType" AS ENUM('daily', 'side');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."campus" AS ENUM('Ganesha', 'Jatinangor', 'Cirebon');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."day" AS ENUM('Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."faculty" AS ENUM('FITB', 'FMIPA', 'FSRD', 'FTMD', 'FTTM', 'FTSL', 'FTI', 'SAPPK', 'SBM', 'SF', 'SITH', 'STEI');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."gender" AS ENUM('male', 'female');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."presenceEvent" AS ENUM('Opening', 'Closing');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."presenceType" AS ENUM('Hadir', 'Izin/Sakit', 'Alpha');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."role" AS ENUM('Peserta', 'Mentor', 'Mamet');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "assignmentSubmissions" (
	"id" text PRIMARY KEY NOT NULL,
	"assignmentId" text NOT NULL,
	"userNim" varchar(100) NOT NULL,
	"files" varchar(255)[] DEFAULT ARRAY[]::varchar[],
	"createdAt" timestamp with time zone NOT NULL,
	"updatedAt" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "assignments" (
	"id" text PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"startTime" timestamp with time zone,
	"deadline" timestamp with time zone NOT NULL,
	"files" varchar(255)[] DEFAULT ARRAY[]::varchar[],
	"assignmentType" "assignmentType" NOT NULL,
	"point" integer,
	"createdAt" timestamp with time zone NOT NULL,
	"updatedAt" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "character" (
	"name" varchar(255) PRIMARY KEY NOT NULL,
	"characterImage" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "eventAssignments" (
	"id" text PRIMARY KEY NOT NULL,
	"eventId" text NOT NULL,
	"assignmentId" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "eventPresence" (
	"id" text PRIMARY KEY NOT NULL,
	"eventId" text NOT NULL,
	"userNim" varchar(255) NOT NULL,
	"presenceType" "presenceType" NOT NULL,
	"presenceEvent" "presenceEvent" NOT NULL,
	"createdAt" timestamp with time zone NOT NULL,
	"updatedAt" timestamp with time zone NOT NULL,
	CONSTRAINT "eventPresence_eventId_presenceEvent_userNim_unique" UNIQUE("eventId","presenceEvent","userNim")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "event" (
	"id" text PRIMARY KEY NOT NULL,
	"day" "day" NOT NULL,
	"eventDate" date NOT NULL,
	"openingOpenPresenceTime" time NOT NULL,
	"openingClosePresenceTime" time NOT NULL,
	"closingOpenPresenceTime" time NOT NULL,
	"closingClosePresenceTime" time NOT NULL,
	"createdAt" timestamp with time zone NOT NULL,
	"updatedAt" timestamp with time zone NOT NULL,
	"lore" text NOT NULL,
	"characterName" varchar(255) NOT NULL,
	CONSTRAINT "event_day_unique" UNIQUE("day")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "messages" (
	"id" text PRIMARY KEY NOT NULL,
	"senderId" text NOT NULL,
	"receiverId" text NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	"userMatchId" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "profiles" (
	"name" varchar(255) NOT NULL,
	"userId" text NOT NULL,
	"faculty" "faculty" NOT NULL,
	"gender" "gender" NOT NULL,
	"campus" "campus" NOT NULL,
	"updatedAt" timestamp with time zone DEFAULT now() NOT NULL,
	"profileImage" text,
	"groupNumber" integer NOT NULL,
	"point" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "userMatches" (
	"id" text PRIMARY KEY NOT NULL,
	"firstUserId" text NOT NULL,
	"secondUserId" text NOT NULL,
	"topic" varchar(50) NOT NULL,
	"isRevealed" boolean DEFAULT false NOT NULL,
	"isAnonymous" boolean DEFAULT false NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	"endedAt" timestamp with time zone DEFAULT null
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" text PRIMARY KEY NOT NULL,
	"nim" varchar(100) NOT NULL,
	"role" "role" NOT NULL,
	"password" varchar(255) NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	"updatedAt" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "users_nim_unique" UNIQUE("nim")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "assignmentSubmissions" ADD CONSTRAINT "assignmentSubmissions_assignmentId_assignments_id_fk" FOREIGN KEY ("assignmentId") REFERENCES "public"."assignments"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "assignmentSubmissions" ADD CONSTRAINT "assignmentSubmissions_userNim_users_nim_fk" FOREIGN KEY ("userNim") REFERENCES "public"."users"("nim") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "eventAssignments" ADD CONSTRAINT "eventAssignments_eventId_event_id_fk" FOREIGN KEY ("eventId") REFERENCES "public"."event"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "eventAssignments" ADD CONSTRAINT "eventAssignments_assignmentId_assignments_id_fk" FOREIGN KEY ("assignmentId") REFERENCES "public"."assignments"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "eventPresence" ADD CONSTRAINT "eventPresence_eventId_event_id_fk" FOREIGN KEY ("eventId") REFERENCES "public"."event"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "eventPresence" ADD CONSTRAINT "eventPresence_userNim_users_nim_fk" FOREIGN KEY ("userNim") REFERENCES "public"."users"("nim") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "event" ADD CONSTRAINT "event_characterName_character_name_fk" FOREIGN KEY ("characterName") REFERENCES "public"."character"("name") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "messages" ADD CONSTRAINT "messages_senderId_users_id_fk" FOREIGN KEY ("senderId") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "messages" ADD CONSTRAINT "messages_receiverId_users_id_fk" FOREIGN KEY ("receiverId") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "messages" ADD CONSTRAINT "messages_userMatchId_userMatches_id_fk" FOREIGN KEY ("userMatchId") REFERENCES "public"."userMatches"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "profiles" ADD CONSTRAINT "profiles_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "userMatches" ADD CONSTRAINT "userMatches_firstUserId_users_id_fk" FOREIGN KEY ("firstUserId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "userMatches" ADD CONSTRAINT "userMatches_secondUserId_users_id_fk" FOREIGN KEY ("secondUserId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "submission_userId_idx" ON "assignmentSubmissions" USING btree ("userNim");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "presence_eventId_idx" ON "eventPresence" USING btree ("eventId");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "presence_userId_idx" ON "eventPresence" USING btree ("userNim");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "profiles_userId_index" ON "profiles" USING btree ("userId");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "profiles_point_index" ON "profiles" USING btree ("point");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "users_id_index" ON "users" USING btree ("id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "users_nim_index" ON "users" USING btree ("nim");