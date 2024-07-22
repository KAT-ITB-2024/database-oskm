'use strict';

var cuid2 = require('@paralleldrive/cuid2');
var drizzleOrm = require('drizzle-orm');
var pgCore = require('drizzle-orm/pg-core');

var o=pgCore.pgTableCreator(e=>`${e}`),D=pgCore.pgEnum("faculty",["FITB","FMIPA","FSRD","FTMD","FTTM","FTSL","FTI","SAPPK","SBM","SF","SITH","STEI"]),_=pgCore.pgEnum("lembaga",["HMJ","Unit"]),P=pgCore.pgEnum("role",["Peserta","Mentor","Mamet"]),$=pgCore.pgEnum("gender",["male","female"]),M=pgCore.pgEnum("campus",["Ganesha","Jatinangor","Cirebon"]),b=pgCore.pgEnum("assignmentType",["Daily","Side"]),F=pgCore.pgEnum("presenceType",["Hadir","Izin/Sakit","Alpha"]),U=pgCore.pgEnum("day",["Day 1","Day 2","Day 3","Day 4"]),z=pgCore.pgEnum("presenceEvent",["Opening","Closing"]),n=o("users",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),nim:pgCore.varchar("nim",{length:100}).unique().notNull(),role:P("role").notNull(),password:pgCore.varchar("password",{length:255}).notNull(),createdAt:pgCore.timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),updatedAt:pgCore.timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull().defaultNow()},e=>({idIdx:pgCore.index().on(e.id),nimIdx:pgCore.index().on(e.nim)})),q=drizzleOrm.relations(n,({many:e,one:l})=>({profile:l(v),userMatchesAsFirstUser:e(u),userMatchesAsSecondUser:e(u),messages:e(p)})),v=o("profiles",{name:pgCore.varchar("name",{length:255}).notNull(),userId:pgCore.text("userId").notNull().references(()=>n.id,{onDelete:"cascade"}),faculty:D("faculty").notNull(),gender:$("gender").notNull(),campus:M("campus").notNull(),updatedAt:pgCore.timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),profileImage:pgCore.text("profileImage"),groupNumber:pgCore.integer("groupNumber").notNull(),point:pgCore.integer("point")},e=>({userIdIdx:pgCore.index().on(e.userId),pointIdx:pgCore.index().on(e.point)})),O=drizzleOrm.relations(v,({one:e})=>({users:e(n,{fields:[v.userId],references:[n.id]})})),u=o("userMatches",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),firstUserId:pgCore.text("firstUserId").notNull().references(()=>n.id,{onDelete:"cascade"}),secondUserId:pgCore.text("secondUserId").notNull().references(()=>n.id,{onDelete:"cascade"}),topic:pgCore.varchar("topic",{length:50}).notNull(),isRevealed:pgCore.boolean("isRevealed").notNull().default(drizzleOrm.sql`false`),isAnonymous:pgCore.boolean("isAnonymous").notNull().default(drizzleOrm.sql`false`),createdAt:pgCore.timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),endedAt:pgCore.timestamp("endedAt",{mode:"date",withTimezone:!0}).default(drizzleOrm.sql`null`).$type()}),V=drizzleOrm.relations(u,({many:e,one:l})=>({firstUser:l(n,{fields:[u.firstUserId],references:[n.id]}),secondUser:l(n,{fields:[u.secondUserId],references:[n.id]}),messages:e(p)})),p=o("messages",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),senderId:pgCore.text("senderId").notNull().references(()=>n.id),receiverId:pgCore.text("receiverId").notNull().references(()=>n.id),createdAt:pgCore.timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),userMatchId:pgCore.text("userMatchId").notNull().references(()=>u.id,{onDelete:"cascade"})}),H=drizzleOrm.relations(p,({many:e,one:l})=>({senderId:l(n,{fields:[p.senderId],references:[n.id]}),receiverId:l(n,{fields:[p.receiverId],references:[n.id]}),userMatch:l(u,{fields:[p.userMatchId],references:[u.id]})})),f=o("assignments",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),title:pgCore.varchar("title",{length:255}).notNull(),description:pgCore.text("description").notNull(),startTime:pgCore.timestamp("startTime",{mode:"date",withTimezone:!0}),deadline:pgCore.timestamp("deadline",{mode:"date",withTimezone:!0}).notNull(),files:pgCore.varchar("files",{length:255}).array().default(drizzleOrm.sql`ARRAY[]::varchar[]`),assignmentType:b("assignmentType").notNull(),point:pgCore.integer("point"),createdAt:pgCore.timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull(),updatedAt:pgCore.timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull()}),h=o("assignmentSubmissions",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),assignmentId:pgCore.text("assignmentId").notNull().references(()=>f.id,{onDelete:"cascade"}),userNim:pgCore.varchar("userNim",{length:100}).notNull().references(()=>n.nim,{onDelete:"cascade",onUpdate:"cascade"}),files:pgCore.varchar("files",{length:255}).array().default(drizzleOrm.sql`ARRAY[]::varchar[]`),createdAt:pgCore.timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull(),updatedAt:pgCore.timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull()},e=>({userIdIdx:pgCore.index("submission_userId_idx").on(e.userNim)})),B=drizzleOrm.relations(h,({one:e})=>({assignment:e(f,{fields:[h.assignmentId],references:[f.id]}),user:e(n,{fields:[h.userNim],references:[n.nim]})})),A=o("character",{name:pgCore.varchar("name",{length:255}).notNull().primaryKey(),characterImage:pgCore.varchar("characterImage",{length:255}).notNull()}),i=o("event",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),day:U("day").notNull(),eventDate:pgCore.date("eventDate",{mode:"date"}).notNull(),openingOpenPresenceTime:pgCore.time("openingOpenPresenceTime").notNull(),openingClosePresenceTime:pgCore.time("openingClosePresenceTime").notNull(),closingOpenPresenceTime:pgCore.time("closingOpenPresenceTime").notNull(),closingClosePresenceTime:pgCore.time("closingClosePresenceTime").notNull(),createdAt:pgCore.timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull(),updatedAt:pgCore.timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull(),lore:pgCore.text("lore").notNull(),characterName:pgCore.varchar("characterName",{length:255}).notNull().references(()=>A.name)},e=>({uniqueDayConstraint:pgCore.unique().on(e.day)})),G=drizzleOrm.relations(i,({one:e})=>({character:e(A,{fields:[i.characterName],references:[A.name]})})),J=drizzleOrm.relations(i,({many:e})=>({eventPresences:e(N),eventAssignments:e(I)})),N=o("eventPresence",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),eventId:pgCore.text("eventId").notNull().references(()=>i.id),userNim:pgCore.varchar("userNim",{length:255}).notNull().references(()=>n.nim),presenceType:F("presenceType").notNull(),presenceEvent:z("presenceEvent").notNull(),createdAt:pgCore.timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull(),updatedAt:pgCore.timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),profileImage:pgCore.text("profileImage")},e=>({eventIdIdx:pgCore.index("presence_eventId_idx").on(e.eventId),userIdIdx:pgCore.index("presence_userId_idx").on(e.userNim),uniquePresenceConstraint:pgCore.unique().on(e.eventId,e.presenceEvent,e.userNim)})),Y=drizzleOrm.relations(N,({one:e})=>({event:e(i,{fields:[N.eventId],references:[i.id]}),user:e(n,{fields:[N.userNim],references:[n.nim]})})),I=o("eventAssignments",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),eventId:pgCore.text("eventId").notNull().references(()=>i.id,{onDelete:"cascade"}),assignmentId:pgCore.text("assignmentId").notNull().references(()=>f.id,{onDelete:"cascade"})}),k=drizzleOrm.relations(I,({one:e})=>({event:e(i,{fields:[I.eventId],references:[i.id]}),assignment:e(f,{fields:[I.assignmentId],references:[f.id]})}));

exports.assignmentSubmissions = h;
exports.assignmentSubmissionsRelations = B;
exports.assignmentTypeEnum = b;
exports.assignments = f;
exports.campusEnum = M;
exports.character = A;
exports.createTable = o;
exports.eventAssignments = I;
exports.eventAssignmentsRelations = k;
exports.eventDayEnum = U;
exports.eventPresences = N;
exports.eventPresencesRelations = Y;
exports.events = i;
exports.eventsCharacterRelations = G;
exports.eventsRelations = J;
exports.facultyEnum = D;
exports.genderEnum = $;
exports.lembagaEnum = _;
exports.messages = p;
exports.messagesRelations = H;
exports.presenceEventEnum = z;
exports.presenceTypeEnum = F;
exports.profiles = v;
exports.profilesRelations = O;
exports.roleEnum = P;
exports.userMatches = u;
exports.userMatchesRelations = V;
exports.users = n;
exports.usersRelations = q;
