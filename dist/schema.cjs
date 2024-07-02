'use strict';

var cuid2 = require('@paralleldrive/cuid2');
var drizzleOrm = require('drizzle-orm');
var pgCore = require('drizzle-orm/pg-core');

var i=pgCore.pgTableCreator(e=>`${e}`),c=pgCore.pgEnum("fakultas",["FITB","FMIPA","FSRD","FTMD","FTTM","FTSL","FTI","SAPPK","SBM","SF","SITH","STEI"]),f=pgCore.pgEnum("role",["Peserta","Mentor","Mamet"]),I=pgCore.pgEnum("gender",["male","female"]),x=pgCore.pgEnum("campus",["Ganesha","Jatinangor","Cirebon"]),r=i("user",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),nim:pgCore.varchar("nim",{length:100}).unique().notNull(),role:f("role").notNull(),password:pgCore.varchar("password",{length:255}).notNull(),createdAt:pgCore.timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),updatedAt:pgCore.timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull().defaultNow()},e=>({idIdx:pgCore.index().on(e.id),nimIdx:pgCore.index().on(e.nim)})),d=i("profile",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),name:pgCore.varchar("name",{length:255}).notNull(),userId:pgCore.text("userId").notNull().references(()=>r.id),faculty:c("faculty").notNull(),gender:I("gender").notNull(),campus:x("campus").notNull(),updatedAt:pgCore.timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),profileImage:pgCore.text("profileImage")},e=>({userIdIdx:pgCore.index().on(e.userId)})),A=drizzleOrm.relations(r,({many:e,one:m})=>({profile:m(d)})),S=drizzleOrm.relations(d,({one:e})=>({users:e(r,{fields:[d.userId],references:[r.id]})}));

exports.campusEnum = x;
exports.createTable = i;
exports.facultyEnum = c;
exports.genderEnum = I;
exports.profiles = d;
exports.profilesRelations = S;
exports.roleEnum = f;
exports.users = r;
exports.usersRelations = A;
