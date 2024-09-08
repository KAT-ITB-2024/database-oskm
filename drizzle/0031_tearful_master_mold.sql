DROP TABLE "merchandiseCarts";--> statement-breakpoint
ALTER TABLE "merchandises" ALTER COLUMN "image" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "merchandiseExchanges" ADD COLUMN "totalItem" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "merchandiseExchanges" ADD COLUMN "totalCoins" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "lembagaProfiles_id_index" ON "lembagaProfiles" USING btree ("id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "lembagaProfiles_name_index" ON "lembagaProfiles" USING btree ("name");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "merchandises_id_index" ON "merchandises" USING btree ("id");