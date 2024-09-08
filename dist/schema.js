import { createId } from '@paralleldrive/cuid2';
import { relations, sql } from 'drizzle-orm';
import { pgTableCreator, pgEnum, text, varchar, integer, timestamp, index, boolean, date, time, unique, numeric, primaryKey } from 'drizzle-orm/pg-core';

var o=pgTableCreator(e=>`${e}`),U=pgEnum("faculty",["FITB","FMIPA","FSRD","FTMD","FTTM","FTSL","FTI","SAPPK","SBM","SF","SITH","STEI"]),C=pgEnum("lembaga",["BSO","UKM","HMPS","Pusat","Eksternal"]),K=pgEnum("role",["Peserta","Mentor","Mamet","ITB-X"]),V=pgEnum("gender",["Male","Female"]),B=pgEnum("assignmentType",["Main","Side"]),q=pgEnum("presenceType",["Hadir","Izin/Sakit","Alpha"]),O=pgEnum("day",["Day 1","Day 2","Day 3","Day 4"]),_=pgEnum("presenceEvent",["Opening","Closing"]),Y=pgEnum("classDay",["Day 1","Day 2"]),L=pgEnum("status",["Taken","Not Taken"]),H=pgEnum("class",["Sesi 1","Sesi 2"]),G=pgEnum("MBTI",["Mova","Kovva","Ozirron","Sylas","Odra"]),n=o("users",{id:text("id").primaryKey().$defaultFn(createId),nim:varchar("nim",{length:100}).unique().notNull(),role:K("role").notNull(),email:varchar("email",{length:255}).unique(),password:varchar("password",{length:255}).notNull(),activityPoints:integer("activityPoints").default(0),createdAt:timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),updatedAt:timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull()},e=>({idIdx:index().on(e.id),nimIdx:index().on(e.nim)})),j=relations(n,({many:e,one:i})=>({profile:i(x),userMatchesAsFirstUser:e(p,{relationName:"firstUser"}),userMatchesAsSecondUser:e(p,{relationName:"secondUser"}),messages:e(f,{relationName:"sender"}),messagesAsReceiver:e(f,{relationName:"receiver"}),resetToken:i(E),chosenClass:i(P),wrappedProfile:i(b)})),T=o("groups",{name:text("groupName").notNull().primaryKey(),point:integer("point").notNull().default(0),bata:text("bata").notNull()}),J=relations(T,({many:e,one:i})=>({mentors:e(n),students:e(n)})),x=o("profiles",{userId:text("userId").notNull().primaryKey().references(()=>n.id,{onDelete:"cascade"}),name:varchar("name",{length:255}).notNull(),faculty:U("faculty").notNull(),gender:V("gender").notNull(),updatedAt:timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull(),profileImage:text("profileImage"),point:integer("point"),instagram:varchar("instagram",{length:255}),bio:varchar("bio",{length:255}),chosenClass:varchar("chosenClass",{length:255}).references(()=>P.id),group:text("group").notNull().references(()=>T.name),lastMBTI:G("lastMBTI"),coins:integer("coins").default(0)},e=>({userIdIdx:index().on(e.userId),groupIdx:index().on(e.group),pointIdx:index().on(e.point)})),Z=relations(x,({one:e})=>({users:e(n,{fields:[x.userId],references:[n.id]}),group:e(T,{fields:[x.group],references:[T.name]})})),E=o("resetTokens",{userId:text("id").primaryKey().references(()=>n.id),value:text("value"),createdAt:timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),expiredTime:integer("expiredTime").default(3600)}),ee=relations(E,({one:e})=>({userId:e(n,{fields:[E.userId],references:[n.id]})})),p=o("userMatches",{id:text("id").primaryKey().$defaultFn(createId),firstUserId:text("firstUserId").notNull().references(()=>n.id,{onDelete:"cascade"}),secondUserId:text("secondUserId").notNull().references(()=>n.id,{onDelete:"cascade"}),topic:varchar("topic",{length:50}).notNull(),isRevealed:boolean("isRevealed").notNull().default(sql`false`),isAnonymous:boolean("isAnonymous").notNull().default(sql`false`),lastMessage:text("lastMessage"),createdAt:timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),endedAt:timestamp("endedAt",{mode:"date",withTimezone:!0}).default(sql`null`).$type()}),te=relations(p,({many:e,one:i})=>({firstUser:i(n,{fields:[p.firstUserId],references:[n.id],relationName:"firstUser"}),secondUser:i(n,{fields:[p.secondUserId],references:[n.id],relationName:"secondUser"}),messages:e(f)})),f=o("messages",{id:text("id").primaryKey().$defaultFn(createId),senderId:text("senderId").notNull().references(()=>n.id),receiverId:text("receiverId").notNull().references(()=>n.id),content:text("content").notNull(),isRead:boolean("isRead").notNull().default(sql`false`),createdAt:timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),userMatchId:text("userMatchId").notNull().references(()=>p.id,{onDelete:"cascade"})}),ne=relations(f,({many:e,one:i})=>({senderId:i(n,{fields:[f.senderId],references:[n.id],relationName:"sender"}),receiverId:i(n,{fields:[f.receiverId],references:[n.id],relationName:"receiver"}),userMatch:i(p,{fields:[f.userMatchId],references:[p.id]})})),S=o("assignments",{id:text("id").primaryKey().$defaultFn(createId),title:varchar("title",{length:255}).notNull(),description:text("description").notNull(),startTime:timestamp("startTime",{mode:"date",withTimezone:!0}).notNull(),filename:text("filename").notNull(),downloadUrl:text("downloadUrl").notNull(),deadline:timestamp("deadline",{mode:"date",withTimezone:!0}).notNull(),assignmentType:B("assignmentType").notNull(),point:integer("point").notNull(),createdAt:timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),updatedAt:timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull()}),v=o("assignmentSubmissions",{id:text("id").primaryKey().$defaultFn(createId),point:integer("point").default(0),assignmentId:text("assignmentId").notNull().references(()=>S.id,{onDelete:"cascade"}),userNim:varchar("userNim",{length:100}).notNull().references(()=>n.nim,{onDelete:"cascade",onUpdate:"cascade"}),filename:text("filename").notNull(),downloadUrl:text("downloadUrl").notNull(),createdAt:timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),updatedAt:timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull()},e=>({userIdIdx:index("submission_userId_idx").on(e.userNim)})),re=relations(v,({one:e})=>({assignment:e(S,{fields:[v.assignmentId],references:[S.id]}),user:e(n,{fields:[v.userNim],references:[n.nim]})})),D=o("characters",{name:varchar("name",{length:255}).notNull().primaryKey(),characterImage:varchar("characterImage",{length:255}).notNull()}),m=o("events",{id:text("id").primaryKey().$defaultFn(createId),day:O("day").notNull(),eventDate:date("eventDate",{mode:"date"}).notNull(),openingOpenPresenceTime:time("openingOpenPresenceTime").notNull(),openingClosePresenceTime:time("openingClosePresenceTime").notNull(),closingOpenPresenceTime:time("closingOpenPresenceTime").notNull(),closingClosePresenceTime:time("closingClosePresenceTime").notNull(),createdAt:timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),updatedAt:timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull(),lore:text("lore").notNull(),characterName:varchar("characterName",{length:255}).notNull().references(()=>D.name),guideBook:varchar("guideBook",{length:255}).notNull(),youtubeVideo:varchar("youtubeVideo",{length:255}).notNull()},e=>({uniqueDayConstraint:unique().on(e.day)})),se=relations(m,({one:e})=>({characters:e(D,{fields:[m.characterName],references:[D.name]})})),oe=relations(m,({many:e})=>({eventPresences:e(I)})),I=o("eventPresence",{id:text("id").primaryKey().$defaultFn(createId),eventId:text("eventId").notNull().references(()=>m.id),userNim:varchar("userNim",{length:255}).notNull().references(()=>n.nim),presenceType:q("presenceType").notNull(),presenceEvent:_("presenceEvent").notNull(),remarks:text("remarks"),createdAt:timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),updatedAt:timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull()},e=>({eventIdIdx:index("presence_eventId_idx").on(e.eventId),userIdIdx:index("presence_userId_idx").on(e.userNim),uniquePresenceConstraint:unique().on(e.eventId,e.presenceEvent,e.userNim)})),ae=relations(I,({one:e})=>({event:e(m,{fields:[I.eventId],references:[m.id]}),user:e(n,{fields:[I.userNim],references:[n.nim]})})),P=o("classes",{id:text("id").primaryKey().$defaultFn(createId),title:varchar("title",{length:255}).notNull(),topic:varchar("topic",{length:100}),description:text("description").notNull(),speaker:varchar("speaker",{length:100}).notNull(),location:varchar("location",{length:100}).notNull(),date:timestamp("date",{mode:"date",withTimezone:!0}).notNull(),totalSeats:integer("totalSeats").notNull(),reservedSeats:integer("reservedSeats").default(0),type:H("classSession").notNull()}),le=relations(P,({many:e})=>({users:e(n)})),M=o("postTests",{id:text("id").primaryKey().$defaultFn(createId),startTime:timestamp("startTime",{mode:"date",withTimezone:!0}),deadline:timestamp("deadline",{mode:"date",withTimezone:!0}).notNull(),googleFormLink:varchar("googleFormLink",{length:255}).notNull(),eventId:text("eventId").notNull().references(()=>m.id)}),ie=relations(M,({one:e})=>({event:e(m,{fields:[M.eventId],references:[m.id]})})),de=o("notifications",{id:text("id").primaryKey().$defaultFn(createId),content:text("content").notNull(),createdAt:timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow()}),b=o("wrappedProfiles",{userId:text("userId").notNull().references(()=>n.id,{onDelete:"cascade"}).primaryKey(),name:text("name").notNull(),totalMatch:integer("totalMatch").notNull().default(0),submittedQuest:integer("submittedQuest").notNull().default(0),character:text("character"),personality:text("personality"),personalityDesc:text("personalityDesc"),favTopics:text("favTopics").array().default(sql`ARRAY[]::text[]`),favTopicCount:integer("favTopicCount").notNull().default(0),rank:integer("rank").notNull(),rankPercentage:numeric("rankPercentage").notNull(),updatedAt:timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull()},e=>({userIdIdx:index().on(e.userId)})),ue=relations(b,({one:e})=>({users:e(n,{fields:[b.userId],references:[n.id]})})),ce=o("lembagaProfiles",{id:text("id").primaryKey().$defaultFn(createId),lembaga:C("lembaga").notNull(),detailedCategory:varchar("detailedCategory",{length:255}),name:varchar("name",{length:255}).notNull(),logo:text("logo"),description:text("description"),instagram:varchar("instagram",{length:255}),visitorCount:integer("visitorCount").default(0),userId:text("userId").notNull().references(()=>n.id,{onDelete:"cascade"}),currentToken:text("currentToken"),currentExpiry:timestamp("currentExpirty",{mode:"date",withTimezone:!0}),createdAt:timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),updatedAt:timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull()},e=>({lembagaIdIdx:index().on(e.id),lembagaEnum:index().on(e.name)})),A=o("merchandises",{id:text("id").primaryKey().$defaultFn(createId),name:varchar("name",{length:255}).notNull(),price:integer("price").notNull(),stock:integer("stock").notNull(),image:text("image"),createdAt:timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),updatedAt:timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull()},e=>({merchandiseIdIdx:index().on(e.id)})),me=relations(A,({many:e})=>({merchandiseExchangeDetails:e(N)})),pe=o("boothClaims",{id:text("id").primaryKey().$defaultFn(createId),userId:text("userId").notNull().references(()=>n.id,{onDelete:"cascade"}),boothId:text("boothId").notNull().references(()=>n.id,{onDelete:"cascade"}),createdAt:timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),updatedAt:timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull()}),h=o("merchandiseExchanges",{id:text("id").primaryKey().$defaultFn(createId),userId:text("userId").notNull().references(()=>n.id,{onDelete:"cascade"}),status:L("status").notNull(),totalItem:integer("totalItem").notNull().default(0),totalCoins:integer("totalCoins").notNull().default(0),createdAt:timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),updatedAt:timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull()}),fe=relations(h,({one:e,many:i})=>({user:e(n,{fields:[h.userId],references:[n.id]}),merchandiseExchangeDetails:i(N)})),N=o("merchandiseExchangeDetails",{merchandiseExchangeId:text("merchandiseExchangeId").notNull().references(()=>h.id,{onDelete:"cascade"}),merchandiseId:text("merchandiseId").notNull().references(()=>A.id),quantity:integer("quantity").notNull()},e=>({pk:primaryKey({columns:[e.merchandiseExchangeId,e.merchandiseId]})})),ye=relations(N,({one:e})=>({merchandiseExchange:e(h,{fields:[N.merchandiseExchangeId],references:[h.id]}),merchandise:e(A,{fields:[N.merchandiseId],references:[A.id]})}));

export { G as MBTIEnum, v as assignmentSubmissions, re as assignmentSubmissionsRelations, B as assignmentTypeEnum, S as assignments, D as characters, Y as classDayEnum, H as classSessionEnum, le as classUserRelations, P as classes, o as createTable, O as eventDayEnum, I as eventPresences, ae as eventPresencesRelations, m as events, se as eventsCharactersRelations, oe as eventsRelations, U as facultyEnum, V as genderEnum, J as groupRelations, T as groups, C as lembagaEnum, ce as lembagaProfiles, N as merchandiseExchangeDetails, ye as merchandiseExchangeDetailsRelations, fe as merchandiseExchangeRelations, L as merchandiseExchangeStatusEnum, h as merchandiseExchanges, me as merchandiseRelations, A as merchandises, f as messages, ne as messagesRelations, de as notifications, ie as postTestRelations, M as postTests, _ as presenceEventEnum, q as presenceTypeEnum, x as profiles, Z as profilesRelations, ee as resetTokenRelations, E as resetTokens, K as roleEnum, p as userMatches, te as userMatchesRelations, n as users, j as usersRelations, pe as visitors, b as wrappedProfiles, ue as wrappedProfilesRelation };
