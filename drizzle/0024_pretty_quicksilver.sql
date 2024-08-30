DO $$ BEGIN
 CREATE TYPE "public"."MBTI" AS ENUM('Mova', 'Kovva', 'Ozirron', 'Sylas', 'Odra');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "profiles" ADD COLUMN "lastMBTI" "MBTI";