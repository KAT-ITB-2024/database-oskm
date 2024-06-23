'use strict';

var drizzleOrm = require('drizzle-orm');
var pgCore = require('drizzle-orm/pg-core');

var i=pgCore.pgTableCreator(t=>`${t}`),n=i("user",{id:pgCore.varchar("id",{length:255}).notNull().primaryKey(),name:pgCore.varchar("name",{length:255}),email:pgCore.varchar("email",{length:255}).notNull(),emailVerified:pgCore.timestamp("emailVerified",{mode:"date",withTimezone:!0}).default(drizzleOrm.sql`CURRENT_TIMESTAMP`),image:pgCore.varchar("image",{length:255})}),f=drizzleOrm.relations(n,({many:t})=>({accounts:t(r)})),r=i("account",{userId:pgCore.varchar("userId",{length:255}).notNull().references(()=>n.id),type:pgCore.varchar("type",{length:255}).notNull(),provider:pgCore.varchar("provider",{length:255}).notNull(),providerAccountId:pgCore.varchar("providerAccountId",{length:255}).notNull(),refresh_token:pgCore.text("refresh_token"),access_token:pgCore.text("access_token"),expires_at:pgCore.integer("expires_at"),token_type:pgCore.varchar("token_type",{length:255}),scope:pgCore.varchar("scope",{length:255}),id_token:pgCore.text("id_token"),session_state:pgCore.varchar("session_state",{length:255})},t=>({compoundKey:pgCore.primaryKey({columns:[t.provider,t.providerAccountId]}),userIdIdx:pgCore.index("account_userId_idx").on(t.userId)})),_=drizzleOrm.relations(r,({one:t})=>({user:t(n,{fields:[r.userId],references:[n.id]})})),x=i("verificationToken",{identifier:pgCore.varchar("identifier",{length:255}).notNull(),token:pgCore.varchar("token",{length:255}).notNull(),expires:pgCore.timestamp("expires",{mode:"date",withTimezone:!0}).notNull()},t=>({compoundKey:pgCore.primaryKey({columns:[t.identifier,t.token]})}));

exports.accounts = r;
exports.accountsRelations = _;
exports.createTable = i;
exports.users = n;
exports.usersRelations = f;
exports.verificationTokens = x;
