'use strict';

var cuid2 = require('@paralleldrive/cuid2');
var drizzleOrm = require('drizzle-orm');
var pgCore = require('drizzle-orm/pg-core');

var o=pgCore.pgTableCreator(e=>`${e}`),U=pgCore.pgEnum("faculty",["FITB","FMIPA","FSRD","FTMD","FTTM","FTSL","FTI","SAPPK","SBM","SF","SITH","STEI"]),_=pgCore.pgEnum("lembaga",["HMJ","Unit"]),D=pgCore.pgEnum("role",["Peserta","Mentor","Mamet"]),P=pgCore.pgEnum("gender",["male","female"]),R=pgCore.pgEnum("campus",["Ganesha","Jatinangor","Cirebon"]),$=pgCore.pgEnum("assignmentType",["Daily","Side"]),M=pgCore.pgEnum("presenceType",["Hadir","Izin/Sakit","Alpha"]),b=pgCore.pgEnum("day",["Day 1","Day 2","Day 3","Day 4"]),F=pgCore.pgEnum("presenceEvent",["Opening","Closing"]),n=o("users",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),nim:pgCore.varchar("nim",{length:100}).unique().notNull(),role:D("role").notNull(),password:pgCore.varchar("password",{length:255}).notNull(),createdAt:pgCore.timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),updatedAt:pgCore.timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull().defaultNow()},e=>({idIdx:pgCore.index().on(e.id),nimIdx:pgCore.index().on(e.nim)})),q=drizzleOrm.relations(n,({many:e,one:d})=>({profile:d(A),userMatchesAsFirstUser:e(u,{relationName:"firstUser"}),userMatchesAsSecondUser:e(u,{relationName:"secondUser"}),messages:e(m,{relationName:"sender"}),messagesAsReceiver:e(m,{relationName:"receiver"})})),A=o("profiles",{name:pgCore.varchar("name",{length:255}).notNull(),userId:pgCore.text("userId").notNull().references(()=>n.id,{onDelete:"cascade"}),faculty:U("faculty").notNull(),gender:P("gender").notNull(),campus:R("campus").notNull(),updatedAt:pgCore.timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),profileImage:pgCore.text("profileImage"),groupNumber:pgCore.integer("groupNumber").notNull(),point:pgCore.integer("point")},e=>({userIdIdx:pgCore.index().on(e.userId),pointIdx:pgCore.index().on(e.point)})),O=drizzleOrm.relations(A,({one:e})=>({users:e(n,{fields:[A.userId],references:[n.id]})})),u=o("userMatches",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),firstUserId:pgCore.text("firstUserId").notNull().references(()=>n.id,{onDelete:"cascade"}),secondUserId:pgCore.text("secondUserId").notNull().references(()=>n.id,{onDelete:"cascade"}),topic:pgCore.varchar("topic",{length:50}).notNull(),isRevealed:pgCore.boolean("isRevealed").notNull().default(drizzleOrm.sql`false`),isAnonymous:pgCore.boolean("isAnonymous").notNull().default(drizzleOrm.sql`false`),createdAt:pgCore.timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),endedAt:pgCore.timestamp("endedAt",{mode:"date",withTimezone:!0}).default(drizzleOrm.sql`null`).$type()}),B=drizzleOrm.relations(u,({many:e,one:d})=>({firstUser:d(n,{fields:[u.firstUserId],references:[n.id],relationName:"firstUser"}),secondUser:d(n,{fields:[u.secondUserId],references:[n.id],relationName:"secondUser"}),messages:e(m)})),m=o("messages",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),senderId:pgCore.text("senderId").notNull().references(()=>n.id),receiverId:pgCore.text("receiverId").notNull().references(()=>n.id),content:pgCore.text("content").notNull(),isRead:pgCore.boolean("isRead").notNull().default(drizzleOrm.sql`false`),createdAt:pgCore.timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),userMatchId:pgCore.text("userMatchId").notNull().references(()=>u.id,{onDelete:"cascade"})}),V=drizzleOrm.relations(m,({many:e,one:d})=>({senderId:d(n,{fields:[m.senderId],references:[n.id],relationName:"sender"}),receiverId:d(n,{fields:[m.receiverId],references:[n.id],relationName:"receiver"}),userMatch:d(u,{fields:[m.userMatchId],references:[u.id]})})),N=o("assignments",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),title:pgCore.varchar("title",{length:255}).notNull(),description:pgCore.text("description").notNull(),startTime:pgCore.timestamp("startTime",{mode:"date",withTimezone:!0}),deadline:pgCore.timestamp("deadline",{mode:"date",withTimezone:!0}).notNull(),files:pgCore.varchar("files",{length:255}).array().default(drizzleOrm.sql`ARRAY[]::varchar[]`),assignmentType:$("assignmentType").notNull(),point:pgCore.integer("point"),createdAt:pgCore.timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull(),updatedAt:pgCore.timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull()}),h=o("assignmentSubmissions",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),assignmentId:pgCore.text("assignmentId").notNull().references(()=>N.id,{onDelete:"cascade"}),userNim:pgCore.varchar("userNim",{length:100}).notNull().references(()=>n.nim,{onDelete:"cascade",onUpdate:"cascade"}),files:pgCore.varchar("files",{length:255}).array().default(drizzleOrm.sql`ARRAY[]::varchar[]`),createdAt:pgCore.timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull(),updatedAt:pgCore.timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull()},e=>({userIdIdx:pgCore.index("submission_userId_idx").on(e.userNim)})),k=drizzleOrm.relations(h,({one:e})=>({assignment:e(N,{fields:[h.assignmentId],references:[N.id]}),user:e(n,{fields:[h.userNim],references:[n.nim]})})),T=o("characters",{name:pgCore.varchar("name",{length:255}).notNull().primaryKey(),characterImage:pgCore.varchar("characterImage",{length:255}).notNull()}),i=o("event",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),day:b("day").notNull(),eventDate:pgCore.date("eventDate",{mode:"date"}).notNull(),openingOpenPresenceTime:pgCore.time("openingOpenPresenceTime").notNull(),openingClosePresenceTime:pgCore.time("openingClosePresenceTime").notNull(),closingOpenPresenceTime:pgCore.time("closingOpenPresenceTime").notNull(),closingClosePresenceTime:pgCore.time("closingClosePresenceTime").notNull(),createdAt:pgCore.timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull(),updatedAt:pgCore.timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull(),lore:pgCore.text("lore").notNull(),characterName:pgCore.varchar("characterName",{length:255}).notNull().references(()=>T.name),guideBook:pgCore.varchar("guideBook",{length:255}).notNull()},e=>({uniqueDayConstraint:pgCore.unique().on(e.day)})),H=drizzleOrm.relations(i,({one:e})=>({characters:e(T,{fields:[i.characterName],references:[T.name]})})),G=drizzleOrm.relations(i,({many:e})=>({eventPresences:e(y),eventAssignments:e(I)})),y=o("eventPresence",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),eventId:pgCore.text("eventId").notNull().references(()=>i.id),userNim:pgCore.varchar("userNim",{length:255}).notNull().references(()=>n.nim),presenceType:M("presenceType").notNull(),presenceEvent:F("presenceEvent").notNull(),createdAt:pgCore.timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull(),updatedAt:pgCore.timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),profileImage:pgCore.text("profileImage")},e=>({eventIdIdx:pgCore.index("presence_eventId_idx").on(e.eventId),userIdIdx:pgCore.index("presence_userId_idx").on(e.userNim),uniquePresenceConstraint:pgCore.unique().on(e.eventId,e.presenceEvent,e.userNim)})),J=drizzleOrm.relations(y,({one:e})=>({event:e(i,{fields:[y.eventId],references:[i.id]}),user:e(n,{fields:[y.userNim],references:[n.nim]})})),I=o("eventAssignments",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),eventId:pgCore.text("eventId").notNull().references(()=>i.id,{onDelete:"cascade"}),assignmentId:pgCore.text("assignmentId").notNull().references(()=>N.id,{onDelete:"cascade"})}),Y=drizzleOrm.relations(I,({one:e})=>({event:e(i,{fields:[I.eventId],references:[i.id]}),assignment:e(N,{fields:[I.assignmentId],references:[N.id]})}));

exports.assignmentSubmissions = h;
exports.assignmentSubmissionsRelations = k;
exports.assignmentTypeEnum = $;
exports.assignments = N;
exports.campusEnum = R;
exports.characters = T;
exports.createTable = o;
exports.eventAssignments = I;
exports.eventAssignmentsRelations = Y;
exports.eventDayEnum = b;
exports.eventPresences = y;
exports.eventPresencesRelations = J;
exports.events = i;
exports.eventsCharactersRelations = H;
exports.eventsRelations = G;
exports.facultyEnum = U;
exports.genderEnum = P;
exports.lembagaEnum = _;
exports.messages = m;
exports.messagesRelations = V;
exports.presenceEventEnum = F;
exports.presenceTypeEnum = M;
exports.profiles = A;
exports.profilesRelations = O;
exports.roleEnum = D;
exports.userMatches = u;
exports.userMatchesRelations = B;
exports.users = n;
exports.usersRelations = q;
