'use strict';

var cuid2 = require('@paralleldrive/cuid2');
var drizzleOrm = require('drizzle-orm');
var pgCore = require('drizzle-orm/pg-core');

var u=pgCore.pgTableCreator(r=>`${r}`),I=pgCore.pgEnum("faculty",["FITB","FMIPA","FSRD","FTMD","FTTM","FTSL","FTI","SAPPK","SBM","SF","SITH","STEI"]),y=pgCore.pgEnum("role",["Peserta","Mentor","Mamet"]),x=pgCore.pgEnum("gender",["male","female"]),N=pgCore.pgEnum("campus",["Ganesha","Jatinangor","Cirebon"]),e=u("users",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),nim:pgCore.varchar("nim",{length:100}).unique().notNull(),role:y("role").notNull(),password:pgCore.varchar("password",{length:255}).notNull(),createdAt:pgCore.timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),updatedAt:pgCore.timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull().defaultNow()},r=>({idIdx:pgCore.index().on(r.id),nimIdx:pgCore.index().on(r.nim)})),w=drizzleOrm.relations(e,({many:r,one:s})=>({profile:s(p),userMatchesAsFirstUser:r(o),userMatchesAsSecondUser:r(o),messages:r(n)})),p=u("profiles",{name:pgCore.varchar("name",{length:255}).notNull(),userId:pgCore.text("userId").notNull().references(()=>e.id,{onDelete:"cascade"}),faculty:I("faculty").notNull(),gender:x("gender").notNull(),campus:N("campus").notNull(),updatedAt:pgCore.timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),profileImage:pgCore.text("profileImage")},r=>({userIdIdx:pgCore.index().on(r.userId)})),S=drizzleOrm.relations(p,({one:r})=>({users:r(e,{fields:[p.userId],references:[e.id]})})),o=u("userMatches",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),firstUserId:pgCore.text("firstUserId").notNull().references(()=>e.id,{onDelete:"cascade"}),secondUserId:pgCore.text("secondUserId").notNull().references(()=>e.id,{onDelete:"cascade"}),createdAt:pgCore.timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow()}),E=drizzleOrm.relations(o,({many:r,one:s})=>({firstUser:s(e,{fields:[o.firstUserId],references:[e.id]}),secondUser:s(e,{fields:[o.secondUserId],references:[e.id]}),messages:r(n)})),n=u("messages",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),senderId:pgCore.text("senderId").notNull().references(()=>e.id),receiverId:pgCore.text("receiverId").notNull().references(()=>e.id),createdAt:pgCore.timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),userMatchId:pgCore.text("userMatchId").notNull().references(()=>o.id,{onDelete:"cascade"})}),$=drizzleOrm.relations(n,({many:r,one:s})=>({senderId:s(e,{fields:[n.senderId],references:[e.id]}),receiverId:s(e,{fields:[n.receiverId],references:[e.id]}),userMatch:s(o,{fields:[n.userMatchId],references:[o.id]})}));

exports.campusEnum = N;
exports.createTable = u;
exports.facultyEnum = I;
exports.genderEnum = x;
exports.messages = n;
exports.messagesRelations = $;
exports.profiles = p;
exports.profilesRelations = S;
exports.roleEnum = y;
exports.userMatches = o;
exports.userMatchesRelations = E;
exports.users = e;
exports.usersRelations = w;
