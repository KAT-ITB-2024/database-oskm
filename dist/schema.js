import { createId } from '@paralleldrive/cuid2';
import { relations, sql } from 'drizzle-orm';
import { pgTableCreator, pgEnum, text, varchar, timestamp, index, integer, boolean, date, time, unique } from 'drizzle-orm/pg-core';

var o=pgTableCreator(e=>`${e}`),U=pgEnum("faculty",["FITB","FMIPA","FSRD","FTMD","FTTM","FTSL","FTI","SAPPK","SBM","SF","SITH","STEI"]),_=pgEnum("lembaga",["HMJ","Unit"]),D=pgEnum("role",["Peserta","Mentor","Mamet"]),P=pgEnum("gender",["male","female"]),R=pgEnum("campus",["Ganesha","Jatinangor","Cirebon"]),$=pgEnum("assignmentType",["Daily","Side"]),M=pgEnum("presenceType",["Hadir","Izin/Sakit","Alpha"]),b=pgEnum("day",["Day 1","Day 2","Day 3","Day 4"]),F=pgEnum("presenceEvent",["Opening","Closing"]),n=o("users",{id:text("id").primaryKey().$defaultFn(createId),nim:varchar("nim",{length:100}).unique().notNull(),role:D("role").notNull(),password:varchar("password",{length:255}).notNull(),createdAt:timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),updatedAt:timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull().defaultNow()},e=>({idIdx:index().on(e.id),nimIdx:index().on(e.nim)})),q=relations(n,({many:e,one:d})=>({profile:d(A),userMatchesAsFirstUser:e(u,{relationName:"firstUser"}),userMatchesAsSecondUser:e(u,{relationName:"secondUser"}),messages:e(m,{relationName:"sender"}),messagesAsReceiver:e(m,{relationName:"receiver"})})),A=o("profiles",{name:varchar("name",{length:255}).notNull(),userId:text("userId").notNull().references(()=>n.id,{onDelete:"cascade"}),faculty:U("faculty").notNull(),gender:P("gender").notNull(),campus:R("campus").notNull(),updatedAt:timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),profileImage:text("profileImage"),groupNumber:integer("groupNumber").notNull(),point:integer("point")},e=>({userIdIdx:index().on(e.userId),pointIdx:index().on(e.point)})),O=relations(A,({one:e})=>({users:e(n,{fields:[A.userId],references:[n.id]})})),u=o("userMatches",{id:text("id").primaryKey().$defaultFn(createId),firstUserId:text("firstUserId").notNull().references(()=>n.id,{onDelete:"cascade"}),secondUserId:text("secondUserId").notNull().references(()=>n.id,{onDelete:"cascade"}),topic:varchar("topic",{length:50}).notNull(),isRevealed:boolean("isRevealed").notNull().default(sql`false`),isAnonymous:boolean("isAnonymous").notNull().default(sql`false`),createdAt:timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),endedAt:timestamp("endedAt",{mode:"date",withTimezone:!0}).default(sql`null`).$type()}),B=relations(u,({many:e,one:d})=>({firstUser:d(n,{fields:[u.firstUserId],references:[n.id],relationName:"firstUser"}),secondUser:d(n,{fields:[u.secondUserId],references:[n.id],relationName:"secondUser"}),messages:e(m)})),m=o("messages",{id:text("id").primaryKey().$defaultFn(createId),senderId:text("senderId").notNull().references(()=>n.id),receiverId:text("receiverId").notNull().references(()=>n.id),content:text("content").notNull(),isRead:boolean("isRead").notNull().default(sql`false`),createdAt:timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),userMatchId:text("userMatchId").notNull().references(()=>u.id,{onDelete:"cascade"})}),V=relations(m,({many:e,one:d})=>({senderId:d(n,{fields:[m.senderId],references:[n.id],relationName:"sender"}),receiverId:d(n,{fields:[m.receiverId],references:[n.id],relationName:"receiver"}),userMatch:d(u,{fields:[m.userMatchId],references:[u.id]})})),N=o("assignments",{id:text("id").primaryKey().$defaultFn(createId),title:varchar("title",{length:255}).notNull(),description:text("description").notNull(),startTime:timestamp("startTime",{mode:"date",withTimezone:!0}),deadline:timestamp("deadline",{mode:"date",withTimezone:!0}).notNull(),files:varchar("files",{length:255}).array().default(sql`ARRAY[]::varchar[]`),assignmentType:$("assignmentType").notNull(),point:integer("point"),createdAt:timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull(),updatedAt:timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull()}),h=o("assignmentSubmissions",{id:text("id").primaryKey().$defaultFn(createId),assignmentId:text("assignmentId").notNull().references(()=>N.id,{onDelete:"cascade"}),userNim:varchar("userNim",{length:100}).notNull().references(()=>n.nim,{onDelete:"cascade",onUpdate:"cascade"}),files:varchar("files",{length:255}).array().default(sql`ARRAY[]::varchar[]`),createdAt:timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull(),updatedAt:timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull()},e=>({userIdIdx:index("submission_userId_idx").on(e.userNim)})),k=relations(h,({one:e})=>({assignment:e(N,{fields:[h.assignmentId],references:[N.id]}),user:e(n,{fields:[h.userNim],references:[n.nim]})})),T=o("characters",{name:varchar("name",{length:255}).notNull().primaryKey(),characterImage:varchar("characterImage",{length:255}).notNull()}),i=o("event",{id:text("id").primaryKey().$defaultFn(createId),day:b("day").notNull(),eventDate:date("eventDate",{mode:"date"}).notNull(),openingOpenPresenceTime:time("openingOpenPresenceTime").notNull(),openingClosePresenceTime:time("openingClosePresenceTime").notNull(),closingOpenPresenceTime:time("closingOpenPresenceTime").notNull(),closingClosePresenceTime:time("closingClosePresenceTime").notNull(),createdAt:timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull(),updatedAt:timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull(),lore:text("lore").notNull(),characterName:varchar("characterName",{length:255}).notNull().references(()=>T.name),guideBook:varchar("guideBook",{length:255}).notNull()},e=>({uniqueDayConstraint:unique().on(e.day)})),H=relations(i,({one:e})=>({characters:e(T,{fields:[i.characterName],references:[T.name]})})),G=relations(i,({many:e})=>({eventPresences:e(y),eventAssignments:e(I)})),y=o("eventPresence",{id:text("id").primaryKey().$defaultFn(createId),eventId:text("eventId").notNull().references(()=>i.id),userNim:varchar("userNim",{length:255}).notNull().references(()=>n.nim),presenceType:M("presenceType").notNull(),presenceEvent:F("presenceEvent").notNull(),createdAt:timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull(),updatedAt:timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),profileImage:text("profileImage")},e=>({eventIdIdx:index("presence_eventId_idx").on(e.eventId),userIdIdx:index("presence_userId_idx").on(e.userNim),uniquePresenceConstraint:unique().on(e.eventId,e.presenceEvent,e.userNim)})),J=relations(y,({one:e})=>({event:e(i,{fields:[y.eventId],references:[i.id]}),user:e(n,{fields:[y.userNim],references:[n.nim]})})),I=o("eventAssignments",{id:text("id").primaryKey().$defaultFn(createId),eventId:text("eventId").notNull().references(()=>i.id,{onDelete:"cascade"}),assignmentId:text("assignmentId").notNull().references(()=>N.id,{onDelete:"cascade"})}),Y=relations(I,({one:e})=>({event:e(i,{fields:[I.eventId],references:[i.id]}),assignment:e(N,{fields:[I.assignmentId],references:[N.id]})}));

export { h as assignmentSubmissions, k as assignmentSubmissionsRelations, $ as assignmentTypeEnum, N as assignments, R as campusEnum, T as characters, o as createTable, I as eventAssignments, Y as eventAssignmentsRelations, b as eventDayEnum, y as eventPresences, J as eventPresencesRelations, i as events, H as eventsCharactersRelations, G as eventsRelations, U as facultyEnum, P as genderEnum, _ as lembagaEnum, m as messages, V as messagesRelations, F as presenceEventEnum, M as presenceTypeEnum, A as profiles, O as profilesRelations, D as roleEnum, u as userMatches, B as userMatchesRelations, n as users, q as usersRelations };
