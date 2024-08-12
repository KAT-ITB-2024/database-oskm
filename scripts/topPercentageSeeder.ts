import { profiles } from '~/schema';
import * as schema from '../src/schema';
import { type PostgresJsDatabase } from 'drizzle-orm/postgres-js/driver';
import { asc, eq } from 'drizzle-orm';
import { wrappedProfiles } from 'dist/schema.cjs';

export async function topPercentage(db: PostgresJsDatabase<typeof schema>) {
  const userProfiles = await db
    .select({
      id: profiles.userId,
      point: profiles.point,
    })
    .from(profiles)
    .orderBy(asc(profiles.point));

  if (!userProfiles) {
    throw new Error('No user found');
  }

  const numOfUsers = userProfiles.length;
  for (let i = 0; i < numOfUsers; i++) {
    const profile = userProfiles[i];

    if (!profile) {
      throw new Error(`User not found`);
    }

    await db
      .update(wrappedProfiles)
      .set({
        rank: ((numOfUsers - i) / numOfUsers) * 100,
      })
      .where(eq(wrappedProfiles.userId, profile?.id));
  }
}
