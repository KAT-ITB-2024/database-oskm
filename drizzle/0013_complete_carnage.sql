ALTER TABLE "assignmentSubmissions" RENAME COLUMN "files" TO "file";--> statement-breakpoint
ALTER TABLE "assignments" RENAME COLUMN "files" TO "file";--> statement-breakpoint
ALTER TABLE "wrappedProfiles" RENAME COLUMN "mbti" TO "personality";--> statement-breakpoint
ALTER TABLE "assignmentSubmissions" ALTER COLUMN "file" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "assignmentSubmissions" ALTER COLUMN "file" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "assignmentSubmissions" ALTER COLUMN "file" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "assignments" ALTER COLUMN "file" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "assignments" ALTER COLUMN "file" DROP DEFAULT;--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "profiles_group_index" ON "profiles" USING btree ("group");--> statement-breakpoint
ALTER TABLE "profiles" DROP COLUMN IF EXISTS "groupNumber";