import { createId } from '@paralleldrive/cuid2';
import { relations, sql } from 'drizzle-orm';
import {
  index,
  integer,
  pgEnum,
  pgTableCreator,
  primaryKey,
  serial,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `${name}`);
export const facultyEnum = pgEnum('fakultas', [
  'FITB',
  'FMIPA',
  'FSRD',
  'FTMD',
  'FTTM',
  'FTSL',
  'FTI',
  'SAPPK',
  'SBM',
  'SF',
  'SITH',
  'STEI',
]);

export const roleEnum = pgEnum('role', ['Peserta', 'Mentor', 'Mamet']);

export const genderEnum = pgEnum('gender', ['male', 'female']);

export const campusEnum = pgEnum('campus', [
  'Ganesha',
  'Jatinangor',
  'Cirebon',
]);

export const users = createTable(
  'user',
  {
    id: text('id').primaryKey().$defaultFn(createId),
    nim: varchar('nim', { length: 100 }).unique().notNull(),
    role: roleEnum('role').notNull(),
    password: varchar('password', { length: 255 }).notNull(),
    createdAt: timestamp('createdAt', {
      mode: 'date',
      withTimezone: true,
    })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp('updatedAt', {
      mode: 'date',
      withTimezone: true,
    })
      .notNull()
      .defaultNow(),
  },
  (user) => ({
    idIdx: index().on(user.id),
    nimIdx: index().on(user.nim),
  }),
);

export const usersRelations = relations(users, ({ many, one }) => ({
  profile: one(profiles),
  userMatchesAsFirstUser: many(userMatches),
  userMatchesAsSecondUser: many(userMatches),
  messages: many(messages),
}));

export const profiles = createTable(
  'profile',
  {
    name: varchar('name', { length: 255 }).notNull(),
    userId: text('userId')
      .notNull()
      .references(() => users.id),
    faculty: facultyEnum('faculty').notNull(),
    gender: genderEnum('gender').notNull(),
    campus: campusEnum('campus').notNull(),
    updatedAt: timestamp('updatedAt', {
      mode: 'date',
      withTimezone: true,
    })
      .notNull()
      .defaultNow(),
    profileImage: text('profileImage'),
  },
  (profile) => ({
    userIdIdx: index().on(profile.userId),
  }),
);

export const profilesRelations = relations(profiles, ({ one }) => ({
  users: one(users, {
    fields: [profiles.userId],
    references: [users.id],
  }),
}));

export const userMatches = createTable('userMatch', {
  id: text('id').primaryKey().$defaultFn(createId),
  firstUserId: text('firstUserId')
    .notNull()
    .references(() => users.id),
  secondUserId: text('secondUserId')
    .notNull()
    .references(() => users.id),
  createdAt: timestamp('createdAt', {
    mode: 'date',
    withTimezone: true,
  })
    .notNull()
    .defaultNow(),
});

export const userMatchesRelations = relations(userMatches, ({ many, one }) => ({
  firstUser: one(users, {
    fields: [userMatches.firstUserId],
    references: [users.id],
  }),
  secondUser: one(users, {
    fields: [userMatches.secondUserId],
    references: [users.id],
  }),
  messages: many(messages),
}));

export const messages = createTable('message', {
  id: text('id').primaryKey().$defaultFn(createId),
  senderId: text('senderId')
    .notNull()
    .references(() => users.id),
  receiverId: text('receiverId')
    .notNull()
    .references(() => users.id),
  createdAt: timestamp('createdAt', {
    mode: 'date',
    withTimezone: true,
  })
    .notNull()
    .defaultNow(),
  userMatchId: text('userMatchId')
    .notNull()
    .references(() => userMatches.id),
});

export const messagesRelations = relations(messages, ({ many, one }) => ({
  senderId: one(users, {
    fields: [messages.senderId],
    references: [users.id],
  }),
  receiverId: one(users, {
    fields: [messages.receiverId],
    references: [users.id],
  }),
  userMatch: one(userMatches, {
    fields: [messages.userMatchId],
    references: [userMatches.id],
  }),
}));
