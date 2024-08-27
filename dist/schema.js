import { createId } from '@paralleldrive/cuid2';
import { relations, sql } from 'drizzle-orm';
import { pgTableCreator, pgEnum, text, varchar, integer, timestamp, index, boolean, date, time, unique, primaryKey } from 'drizzle-orm/pg-core';

var o=pgTableCreator(e=>`${e}`),k=pgEnum("faculty",["FITB","FMIPA","FSRD","FTMD","FTTM","FTSL","FTI","SAPPK","SBM","SF","SITH","STEI"]),Q=pgEnum("lembaga",["HMJ","Unit"]),K=pgEnum("role",["Peserta","Mentor","Mamet","ITB-X"]),C=pgEnum("gender",["Male","Female"]),V=pgEnum("assignmentType",["Main","Side"]),q=pgEnum("presenceType",["Hadir","Izin/Sakit","Alpha"]),_=pgEnum("day",["Day 1","Day 2","Day 3","Day 4"]),B=pgEnum("presenceEvent",["Opening","Closing"]),J=pgEnum("classDay",["Day 1","Day 2"]),O=pgEnum("status",["Taken","Not Taken"]),n=o("users",{id:text("id").primaryKey().$defaultFn(createId),nim:varchar("nim",{length:100}).unique().notNull(),role:K("role").notNull(),email:varchar("email",{length:255}).unique(),password:varchar("password",{length:255}).notNull(),activityPoints:integer("activityPoints").default(0),createdAt:timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),updatedAt:timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull()},e=>({idIdx:index().on(e.id),nimIdx:index().on(e.nim)})),W=relations(n,({many:e,one:a})=>({profile:a(T),userMatchesAsFirstUser:e(m,{relationName:"firstUser"}),userMatchesAsSecondUser:e(m,{relationName:"secondUser"}),messages:e(f,{relationName:"sender"}),messagesAsReceiver:e(f,{relationName:"receiver"}),resetToken:a(D),chosenClass:a(z),wrappedProfile:a(P)})),A=o("groups",{name:text("groupName").notNull().primaryKey(),point:integer("point").notNull().default(0)}),X=relations(A,({many:e,one:a})=>({mentors:e(n),students:e(n)})),T=o("profiles",{userId:text("userId").notNull().primaryKey().references(()=>n.id,{onDelete:"cascade"}),name:varchar("name",{length:255}).notNull(),faculty:k("faculty").notNull(),gender:C("gender").notNull(),updatedAt:timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull(),profileImage:text("profileImage"),point:integer("point"),instagram:varchar("instagram",{length:255}),bio:varchar("bio",{length:255}),chosenClass:varchar("chosenClass",{length:255}).references(()=>z.id),group:text("group").notNull().references(()=>A.name)},e=>({userIdIdx:index().on(e.userId),groupIdx:index().on(e.group),pointIdx:index().on(e.point)})),j=relations(T,({one:e})=>({users:e(n,{fields:[T.userId],references:[n.id]}),group:e(A,{fields:[T.group],references:[A.name]})})),D=o("resetTokens",{userId:text("id").primaryKey().references(()=>n.id),value:text("value"),createdAt:timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),expiredTime:integer("expiredTime").default(3600)}),Y=relations(D,({one:e})=>({userId:e(n,{fields:[D.userId],references:[n.id]})})),m=o("userMatches",{id:text("id").primaryKey().$defaultFn(createId),firstUserId:text("firstUserId").notNull().references(()=>n.id,{onDelete:"cascade"}),secondUserId:text("secondUserId").notNull().references(()=>n.id,{onDelete:"cascade"}),topic:varchar("topic",{length:50}).notNull(),isRevealed:boolean("isRevealed").notNull().default(sql`false`),isAnonymous:boolean("isAnonymous").notNull().default(sql`false`),lastMessage:text("lastMessage"),createdAt:timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),endedAt:timestamp("endedAt",{mode:"date",withTimezone:!0}).default(sql`null`).$type()}),Z=relations(m,({many:e,one:a})=>({firstUser:a(n,{fields:[m.firstUserId],references:[n.id],relationName:"firstUser"}),secondUser:a(n,{fields:[m.secondUserId],references:[n.id],relationName:"secondUser"}),messages:e(f)})),f=o("messages",{id:text("id").primaryKey().$defaultFn(createId),senderId:text("senderId").notNull().references(()=>n.id),receiverId:text("receiverId").notNull().references(()=>n.id),content:text("content").notNull(),isRead:boolean("isRead").notNull().default(sql`false`),createdAt:timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),userMatchId:text("userMatchId").notNull().references(()=>m.id,{onDelete:"cascade"})}),ee=relations(f,({many:e,one:a})=>({senderId:a(n,{fields:[f.senderId],references:[n.id],relationName:"sender"}),receiverId:a(n,{fields:[f.receiverId],references:[n.id],relationName:"receiver"}),userMatch:a(m,{fields:[f.userMatchId],references:[m.id]})})),$=o("assignments",{id:text("id").primaryKey().$defaultFn(createId),title:varchar("title",{length:255}).notNull(),description:text("description").notNull(),startTime:timestamp("startTime",{mode:"date",withTimezone:!0}).notNull(),filename:text("filename").notNull(),downloadUrl:text("downloadUrl").notNull(),deadline:timestamp("deadline",{mode:"date",withTimezone:!0}).notNull(),assignmentType:V("assignmentType").notNull(),point:integer("point").notNull(),createdAt:timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),updatedAt:timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull()}),w=o("assignmentSubmissions",{id:text("id").primaryKey().$defaultFn(createId),point:integer("point").default(0),assignmentId:text("assignmentId").notNull().references(()=>$.id,{onDelete:"cascade"}),userNim:varchar("userNim",{length:100}).notNull().references(()=>n.nim,{onDelete:"cascade",onUpdate:"cascade"}),filename:text("filename").notNull(),downloadUrl:text("downloadUrl").notNull(),createdAt:timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),updatedAt:timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull()},e=>({userIdIdx:index("submission_userId_idx").on(e.userNim)})),te=relations(w,({one:e})=>({assignment:e($,{fields:[w.assignmentId],references:[$.id]}),user:e(n,{fields:[w.userNim],references:[n.nim]})})),b=o("characters",{name:varchar("name",{length:255}).notNull().primaryKey(),characterImage:varchar("characterImage",{length:255}).notNull()}),p=o("events",{id:text("id").primaryKey().$defaultFn(createId),day:_("day").notNull(),eventDate:date("eventDate",{mode:"date"}).notNull(),openingOpenPresenceTime:time("openingOpenPresenceTime").notNull(),openingClosePresenceTime:time("openingClosePresenceTime").notNull(),closingOpenPresenceTime:time("closingOpenPresenceTime").notNull(),closingClosePresenceTime:time("closingClosePresenceTime").notNull(),createdAt:timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),updatedAt:timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull(),lore:text("lore").notNull(),characterName:varchar("characterName",{length:255}).notNull().references(()=>b.name),guideBook:varchar("guideBook",{length:255}).notNull(),youtubeVideo:varchar("youtubeVideo",{length:255}).notNull()},e=>({uniqueDayConstraint:unique().on(e.day)})),ne=relations(p,({one:e})=>({characters:e(b,{fields:[p.characterName],references:[b.name]})})),se=relations(p,({many:e})=>({eventPresences:e(I)})),I=o("eventPresence",{id:text("id").primaryKey().$defaultFn(createId),eventId:text("eventId").notNull().references(()=>p.id),userNim:varchar("userNim",{length:255}).notNull().references(()=>n.nim),presenceType:q("presenceType").notNull(),presenceEvent:B("presenceEvent").notNull(),createdAt:timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),updatedAt:timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull()},e=>({eventIdIdx:index("presence_eventId_idx").on(e.eventId),userIdIdx:index("presence_userId_idx").on(e.userNim),uniquePresenceConstraint:unique().on(e.eventId,e.presenceEvent,e.userNim)})),re=relations(I,({one:e})=>({event:e(p,{fields:[I.eventId],references:[p.id]}),user:e(n,{fields:[I.userNim],references:[n.nim]})})),z=o("classes",{id:text("id").primaryKey().$defaultFn(createId),title:varchar("title",{length:255}).notNull(),topic:varchar("topic",{length:100}),description:text("description").notNull(),speaker:varchar("speaker",{length:100}).notNull(),location:varchar("location",{length:100}).notNull(),date:timestamp("date",{mode:"date",withTimezone:!0}).notNull(),totalSeats:integer("totalSeats").notNull(),reservedSeats:integer("reservedSeats").default(0)}),oe=relations(z,({many:e})=>({users:e(n)})),y=o("postTests",{id:text("id").primaryKey().$defaultFn(createId),title:varchar("title",{length:255}).notNull(),description:text("description").notNull(),startTime:timestamp("startTime",{mode:"date",withTimezone:!0}),deadline:timestamp("deadline",{mode:"date",withTimezone:!0}).notNull(),googleFormLink:varchar("googleFormLink",{length:255}).notNull(),eventId:text("eventId").notNull().references(()=>p.id)}),E=o("postTestSubmissions",{postTestId:text("postTestId").notNull().references(()=>y.id),userNim:varchar("userNim",{length:100}).notNull().references(()=>n.nim),createdAt:timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow()},e=>({pk:primaryKey({columns:[e.postTestId,e.userNim]}),userNimIdx:index("submission_usernim_idx").on(e.userNim)})),ie=relations(y,({one:e})=>({event:e(p,{fields:[y.eventId],references:[p.id]})})),ae=relations(E,({one:e})=>({postTest:e(y,{fields:[E.postTestId],references:[y.id]}),user:e(n,{fields:[E.userNim],references:[n.nim]})})),le=o("notifications",{id:text("id").primaryKey().$defaultFn(createId),content:text("content").notNull(),createdAt:timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow()}),P=o("wrappedProfiles",{userId:text("userId").notNull().references(()=>n.id,{onDelete:"cascade"}),totalMatch:integer("totalMatch").notNull().default(0),submittedQuest:integer("submittedQuest").notNull().default(0),personality:text("personality"),favTopic:text("favTopic"),rank:integer("rank"),updatedAt:timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull()},e=>({userIdIdx:index().on(e.userId)})),de=relations(P,({one:e})=>({users:e(n,{fields:[P.userId],references:[n.id]})})),v=o("merchandises",{id:text("id").primaryKey().$defaultFn(createId),name:varchar("name",{length:255}).notNull(),price:integer("price").notNull(),stock:integer("stock").notNull(),image:text("image").notNull(),createdAt:timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),updatedAt:timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull()}),ue=relations(v,({many:e})=>({merchandiseExchangeDetails:e(N)})),h=o("merchandiseExchanges",{id:text("id").primaryKey().$defaultFn(createId),userId:text("userId").notNull().references(()=>n.id,{onDelete:"cascade"}),status:O("status").notNull(),createdAt:timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),updatedAt:timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull()}),ce=relations(h,({one:e,many:a})=>({user:e(n,{fields:[h.userId],references:[n.id]}),merchandiseExchangeDetails:a(N)})),N=o("merchandiseExchangeDetails",{merchandiseExchangeId:text("merchandiseExchangeId").notNull().references(()=>h.id,{onDelete:"cascade"}),merchandiseId:text("merchandiseId").notNull().references(()=>v.id),quantity:integer("quantity").notNull()},e=>({pk:primaryKey({columns:[e.merchandiseExchangeId,e.merchandiseId]})})),pe=relations(N,({one:e})=>({merchandiseExchange:e(h,{fields:[N.merchandiseExchangeId],references:[h.id]}),merchandise:e(v,{fields:[N.merchandiseId],references:[v.id]})}));

export { w as assignmentSubmissions, te as assignmentSubmissionsRelations, V as assignmentTypeEnum, $ as assignments, b as characters, J as classDayEnum, oe as classUserRelations, z as classes, o as createTable, _ as eventDayEnum, I as eventPresences, re as eventPresencesRelations, p as events, ne as eventsCharactersRelations, se as eventsRelations, k as facultyEnum, C as genderEnum, X as groupRelations, A as groups, Q as lembagaEnum, N as merchandiseExchangeDetails, pe as merchandiseExchangeDetailsRelations, ce as merchandiseExchangeRelations, O as merchandiseExchangeStatusEnum, h as merchandiseExchanges, ue as merchandiseRelations, v as merchandises, f as messages, ee as messagesRelations, le as notifications, ie as postTestRelations, ae as postTestSubmissionRelations, E as postTestSubmissions, y as postTests, B as presenceEventEnum, q as presenceTypeEnum, T as profiles, j as profilesRelations, Y as resetTokenRelations, D as resetTokens, K as roleEnum, m as userMatches, Z as userMatchesRelations, n as users, W as usersRelations, P as wrappedProfiles, de as wrappedProfilesRelation };
