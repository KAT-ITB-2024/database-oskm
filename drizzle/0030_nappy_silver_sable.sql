ALTER TYPE "lembaga" ADD VALUE 'BSO';--> statement-breakpoint
ALTER TYPE "lembaga" ADD VALUE 'UKM';--> statement-breakpoint
ALTER TYPE "lembaga" ADD VALUE 'HMPS';--> statement-breakpoint
ALTER TYPE "lembaga" ADD VALUE 'Pusat';--> statement-breakpoint
ALTER TYPE "lembaga" ADD VALUE 'Eksternal';--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "lembagaProfiles" (
	"id" text PRIMARY KEY NOT NULL,
	"lembaga" "lembaga" NOT NULL,
	"detailedCategory" varchar(255),
	"name" varchar(255) NOT NULL,
	"logo" text,
	"description" text,
	"instagram" varchar(255),
	"visitorCount" integer DEFAULT 0,
	"userId" text NOT NULL,
	"currentToken" text,
	"currentExpirty" timestamp with time zone,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	"updatedAt" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "merchandiseCarts" (
	"userId" text NOT NULL,
	"merchandiseId" text NOT NULL,
	"quantity" integer NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "merchandiseCarts_userId_merchandiseId_pk" PRIMARY KEY("userId","merchandiseId")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "boothClaims" (
	"id" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"boothId" text NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	"updatedAt" timestamp with time zone NOT NULL
);
--> statement-breakpoint
ALTER TABLE "profiles" ADD COLUMN "coins" integer DEFAULT 0;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "lembagaProfiles" ADD CONSTRAINT "lembagaProfiles_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "merchandiseCarts" ADD CONSTRAINT "merchandiseCarts_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "merchandiseCarts" ADD CONSTRAINT "merchandiseCarts_merchandiseId_merchandises_id_fk" FOREIGN KEY ("merchandiseId") REFERENCES "public"."merchandises"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "boothClaims" ADD CONSTRAINT "boothClaims_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "boothClaims" ADD CONSTRAINT "boothClaims_boothId_users_id_fk" FOREIGN KEY ("boothId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
