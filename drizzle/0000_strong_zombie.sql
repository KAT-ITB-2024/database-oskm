DO $$ BEGIN
 CREATE TYPE "public"."campus" AS ENUM('Ganesha', 'Jatinangor', 'Cirebon');
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
 CREATE TYPE "public"."role" AS ENUM('Peserta', 'Mentor', 'Mamet');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
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
	"profileImage" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "userMatches" (
	"id" text PRIMARY KEY NOT NULL,
	"firstUserId" text NOT NULL,
	"secondUserId" text NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL
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
CREATE INDEX IF NOT EXISTS "profiles_userId_index" ON "profiles" USING btree ("userId");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "users_id_index" ON "users" USING btree ("id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "users_nim_index" ON "users" USING btree ("nim");