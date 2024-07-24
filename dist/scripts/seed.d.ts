import { s as schema } from '../schema-CFM41OAO.js';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js/driver';
import 'drizzle-orm';
import 'drizzle-orm/pg-core';

declare function seedUser(db: PostgresJsDatabase<typeof schema>): Promise<void>;
declare function seedProfile(db: PostgresJsDatabase<typeof schema>): Promise<void>;
declare function seedAssignment(db: PostgresJsDatabase<typeof schema>): Promise<void>;
declare function seedCharacter(db: PostgresJsDatabase<typeof schema>): Promise<void>;
declare function seedEvent(db: PostgresJsDatabase<typeof schema>): Promise<void>;
declare function seed(dbUrl: string): Promise<void>;

export { seed, seedAssignment, seedCharacter, seedEvent, seedProfile, seedUser };
