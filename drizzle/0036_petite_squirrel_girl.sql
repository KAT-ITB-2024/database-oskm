ALTER TABLE "boothClaims" DROP CONSTRAINT "boothClaims_boothId_users_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "boothClaims" ADD CONSTRAINT "boothClaims_boothId_lembagaProfiles_id_fk" FOREIGN KEY ("boothId") REFERENCES "public"."lembagaProfiles"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "boothClaims_id_index" ON "boothClaims" USING btree ("id");