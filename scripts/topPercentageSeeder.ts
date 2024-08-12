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

    const userRank = ((numOfUsers - i) / numOfUsers) * 100;

    const wrappedProfile = await db
      .select()
      .from(wrappedProfiles)
      .where(eq(wrappedProfiles.userId, profile.id))
      .then((result) => result[0]);

    if (!wrappedProfile) {
      await db.insert(wrappedProfiles).values({
        userId: profile.id,
        updatedAt: new Date(),
        rank: userRank,
      });
    } else {
      await db
        .update(wrappedProfiles)
        .set({
          rank: userRank,
          updatedAt: new Date(),
        })
        .where(eq(wrappedProfiles.userId, profile?.id));
    }
  }
}
