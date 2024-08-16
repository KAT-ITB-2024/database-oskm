DO $$ BEGIN
 CREATE TYPE "public"."status" AS ENUM('Taken', 'Not Taken');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "merchandiseExchangeDetails" (
	"merchandiseExchangeId" text NOT NULL,
	"merchandiseId" text NOT NULL,
	"quantity" integer NOT NULL,
	CONSTRAINT "merchandiseExchangeDetails_merchandiseExchangeId_merchandiseId_pk" PRIMARY KEY("merchandiseExchangeId","merchandiseId")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "merchandiseExchanges" (
	"id" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"status" "status" NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	"updatedAt" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "merchandises" (
	"id" text PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"price" integer NOT NULL,
	"stock" integer NOT NULL,
	"image" text NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	"updatedAt" timestamp with time zone NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "merchandiseExchangeDetails" ADD CONSTRAINT "merchandiseExchangeDetails_merchandiseExchangeId_merchandiseExchanges_id_fk" FOREIGN KEY ("merchandiseExchangeId") REFERENCES "public"."merchandiseExchanges"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "merchandiseExchangeDetails" ADD CONSTRAINT "merchandiseExchangeDetails_merchandiseId_merchandises_id_fk" FOREIGN KEY ("merchandiseId") REFERENCES "public"."merchandises"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "merchandiseExchanges" ADD CONSTRAINT "merchandiseExchanges_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
