ALTER TABLE "assignmentSubmissions" ALTER COLUMN "createdAt" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "assignments" ALTER COLUMN "createdAt" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "event" ALTER COLUMN "createdAt" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "profiles" ALTER COLUMN "point" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "updatedAt" DROP DEFAULT;