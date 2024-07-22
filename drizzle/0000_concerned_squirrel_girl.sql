DO $$ BEGIN
 CREATE TYPE "public"."campus" AS ENUM('Ganesha', 'Jatinangor', 'Cirebon');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."fakultas" AS ENUM('FITB', 'FMIPA', 'FSRD', 'FTMD', 'FTTM', 'FTSL', 'FTI', 'SAPPK', 'SBM', 'SF', 'SITH', 'STEI');
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
CREATE TABLE IF NOT EXISTS "profile" (
	"id" text PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"userId" text NOT NULL,
	"faculty" "fakultas" NOT NULL,
	"gender" "gender" NOT NULL,
	"campus" "campus" NOT NULL,
	"updatedAt" timestamp with time zone DEFAULT now() NOT NULL,
	"profileImage" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"id" text PRIMARY KEY NOT NULL,
	"nim" varchar(100) NOT NULL,
	"role" "role" NOT NULL,
	"password" varchar(255) NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	"updatedAt" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "user_nim_unique" UNIQUE("nim")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "profile" ADD CONSTRAINT "profile_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "profile_userId_index" ON "profile" USING btree ("userId");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "user_id_index" ON "user" USING btree ("id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "user_nim_index" ON "user" USING btree ("nim");