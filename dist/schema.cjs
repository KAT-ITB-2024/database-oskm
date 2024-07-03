'use strict';

var cuid2 = require('@paralleldrive/cuid2');
var drizzleOrm = require('drizzle-orm');
var pgCore = require('drizzle-orm/pg-core');

var d=pgCore.pgTableCreator(e=>`${e}`),f=pgCore.pgEnum("fakultas",["FITB","FMIPA","FSRD","FTMD","FTTM","FTSL","FTI","SAPPK","SBM","SF","SITH","STEI"]),c=pgCore.pgEnum("role",["Peserta","Mentor","Mamet"]),y=pgCore.pgEnum("gender",["male","female"]),x=pgCore.pgEnum("campus",["Ganesha","Jatinangor","Cirebon"]),r=d("user",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),nim:pgCore.varchar("nim",{length:100}).unique().notNull(),role:c("role").notNull(),password:pgCore.varchar("password",{length:255}).notNull(),createdAt:pgCore.timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),updatedAt:pgCore.timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull().defaultNow()},e=>({idIdx:pgCore.index().on(e.id),nimIdx:pgCore.index().on(e.nim)})),a=d("profile",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),name:pgCore.varchar("name",{length:255}).notNull(),userId:pgCore.text("userId").notNull().references(()=>r.id),faculty:f("faculty").notNull(),gender:y("gender").notNull(),campus:x("campus").notNull(),updatedAt:pgCore.timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),profileImage:pgCore.text("profileImage")},e=>({userIdIdx:pgCore.index().on(e.userId)})),h=drizzleOrm.relations(r,({many:e,one:m})=>({profile:m(a)})),w=drizzleOrm.relations(a,({one:e})=>({users:e(r,{fields:[a.userId],references:[r.id]})}));

exports.campusEnum = x;
exports.createTable = d;
exports.facultyEnum = f;
exports.genderEnum = y;
exports.profiles = a;
exports.profilesRelations = w;
exports.roleEnum = c;
exports.users = r;
exports.usersRelations = h;
