DO $$ BEGIN
 CREATE TYPE "public"."class" AS ENUM('Sesi 1', 'Sesi 2');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "classes" ADD COLUMN "classSession" "class" NOT NULL;