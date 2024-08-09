'use strict';

var cuid2 = require('@paralleldrive/cuid2');
var drizzleOrm = require('drizzle-orm');
var pgCore = require('drizzle-orm/pg-core');

var o=pgCore.pgTableCreator(e=>`${e}`),R=pgCore.pgEnum("faculty",["FITB","FMIPA","FSRD","FTMD","FTTM","FTSL","FTI","SAPPK","SBM","SF","SITH","STEI"]),V=pgCore.pgEnum("lembaga",["HMJ","Unit"]),U=pgCore.pgEnum("role",["Peserta","Mentor","Mamet","ITB-X"]),E=pgCore.pgEnum("gender",["Male","Female"]),k=pgCore.pgEnum("assignmentType",["Main","Side"]),K=pgCore.pgEnum("presenceType",["Hadir","Izin/Sakit","Alpha"]),C=pgCore.pgEnum("day",["Day 1","Day 2","Day 3","Day 4"]),_=pgCore.pgEnum("presenceEvent",["Opening","Closing"]),H=pgCore.pgEnum("classDay",["Day 1","Day 2"]),n=o("users",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),nim:pgCore.varchar("nim",{length:100}).unique().notNull(),role:U("role").notNull(),email:pgCore.varchar("email",{length:255}).unique(),password:pgCore.varchar("password",{length:255}).notNull(),activityPoints:pgCore.integer("activityPoints").default(0),createdAt:pgCore.timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),updatedAt:pgCore.timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull()},e=>({idIdx:pgCore.index().on(e.id),nimIdx:pgCore.index().on(e.nim)})),L=drizzleOrm.relations(n,({many:e,one:l})=>({profile:l(T),userMatchesAsFirstUser:e(m,{relationName:"firstUser"}),userMatchesAsSecondUser:e(m,{relationName:"secondUser"}),messages:e(f,{relationName:"sender"}),messagesAsReceiver:e(f,{relationName:"receiver"}),resetToken:l(w),chosenClass:l(M),wrappedProfile:l($)})),h=o("groups",{name:pgCore.text("groupName").notNull().primaryKey(),point:pgCore.integer("point").notNull().default(0)}),G=drizzleOrm.relations(h,({many:e,one:l})=>({mentors:e(n),students:e(n)})),T=o("profiles",{name:pgCore.varchar("name",{length:255}).notNull(),userId:pgCore.text("userId").notNull().references(()=>n.id,{onDelete:"cascade"}),faculty:R("faculty").notNull(),gender:E("gender").notNull(),updatedAt:pgCore.timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull(),profileImage:pgCore.text("profileImage"),point:pgCore.integer("point"),instagram:pgCore.varchar("instagram",{length:255}),chosenClass:pgCore.varchar("chosenClass",{length:255}).references(()=>M.id),group:pgCore.text("group").notNull().references(()=>h.name)},e=>({userIdIdx:pgCore.index().on(e.userId),groupIdx:pgCore.index().on(e.group),pointIdx:pgCore.index().on(e.point)})),Q=drizzleOrm.relations(T,({one:e})=>({users:e(n,{fields:[T.userId],references:[n.id]}),group:e(h,{fields:[T.group],references:[h.name]})})),w=o("resetTokens",{userId:pgCore.text("id").primaryKey().references(()=>n.id),value:pgCore.text("value"),createdAt:pgCore.timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),expiredTime:pgCore.integer("expiredTime").default(3600)}),J=drizzleOrm.relations(w,({one:e})=>({userId:e(n,{fields:[w.userId],references:[n.id]})})),m=o("userMatches",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),firstUserId:pgCore.text("firstUserId").notNull().references(()=>n.id,{onDelete:"cascade"}),secondUserId:pgCore.text("secondUserId").notNull().references(()=>n.id,{onDelete:"cascade"}),topic:pgCore.varchar("topic",{length:50}).notNull(),isRevealed:pgCore.boolean("isRevealed").notNull().default(drizzleOrm.sql`false`),isAnonymous:pgCore.boolean("isAnonymous").notNull().default(drizzleOrm.sql`false`),lastMessage:pgCore.text("lastMessage"),createdAt:pgCore.timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),endedAt:pgCore.timestamp("endedAt",{mode:"date",withTimezone:!0}).default(drizzleOrm.sql`null`).$type()}),W=drizzleOrm.relations(m,({many:e,one:l})=>({firstUser:l(n,{fields:[m.firstUserId],references:[n.id],relationName:"firstUser"}),secondUser:l(n,{fields:[m.secondUserId],references:[n.id],relationName:"secondUser"}),messages:e(f)})),f=o("messages",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),senderId:pgCore.text("senderId").notNull().references(()=>n.id),receiverId:pgCore.text("receiverId").notNull().references(()=>n.id),content:pgCore.text("content").notNull(),isRead:pgCore.boolean("isRead").notNull().default(drizzleOrm.sql`false`),createdAt:pgCore.timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),userMatchId:pgCore.text("userMatchId").notNull().references(()=>m.id,{onDelete:"cascade"})}),X=drizzleOrm.relations(f,({many:e,one:l})=>({senderId:l(n,{fields:[f.senderId],references:[n.id],relationName:"sender"}),receiverId:l(n,{fields:[f.receiverId],references:[n.id],relationName:"receiver"}),userMatch:l(m,{fields:[f.userMatchId],references:[m.id]})})),S=o("assignments",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),title:pgCore.varchar("title",{length:255}).notNull(),description:pgCore.text("description").notNull(),startTime:pgCore.timestamp("startTime",{mode:"date",withTimezone:!0}),deadline:pgCore.timestamp("deadline",{mode:"date",withTimezone:!0}).notNull(),file:pgCore.varchar("file",{length:255}),assignmentType:k("assignmentType").notNull(),point:pgCore.integer("point"),createdAt:pgCore.timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),updatedAt:pgCore.timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull()}),I=o("assignmentSubmissions",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),point:pgCore.integer("point"),assignmentId:pgCore.text("assignmentId").notNull().references(()=>S.id,{onDelete:"cascade"}),userNim:pgCore.varchar("userNim",{length:100}).notNull().references(()=>n.nim,{onDelete:"cascade",onUpdate:"cascade"}),file:pgCore.varchar("file",{length:255}).notNull(),createdAt:pgCore.timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),updatedAt:pgCore.timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull()},e=>({userIdIdx:pgCore.index("submission_userId_idx").on(e.userNim)})),j=drizzleOrm.relations(I,({one:e})=>({assignment:e(S,{fields:[I.assignmentId],references:[S.id]}),user:e(n,{fields:[I.userNim],references:[n.nim]})})),P=o("characters",{name:pgCore.varchar("name",{length:255}).notNull().primaryKey(),characterImage:pgCore.varchar("characterImage",{length:255}).notNull()}),c=o("events",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),day:C("day").notNull(),eventDate:pgCore.date("eventDate",{mode:"date"}).notNull(),openingOpenPresenceTime:pgCore.time("openingOpenPresenceTime").notNull(),openingClosePresenceTime:pgCore.time("openingClosePresenceTime").notNull(),closingOpenPresenceTime:pgCore.time("closingOpenPresenceTime").notNull(),closingClosePresenceTime:pgCore.time("closingClosePresenceTime").notNull(),createdAt:pgCore.timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),updatedAt:pgCore.timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull(),lore:pgCore.text("lore").notNull(),characterName:pgCore.varchar("characterName",{length:255}).notNull().references(()=>P.name),guideBook:pgCore.varchar("guideBook",{length:255}).notNull(),youtubeVideo:pgCore.varchar("youtubeVideo",{length:255}).notNull()},e=>({uniqueDayConstraint:pgCore.unique().on(e.day)})),Y=drizzleOrm.relations(c,({one:e})=>({characters:e(P,{fields:[c.characterName],references:[P.name]})})),Z=drizzleOrm.relations(c,({many:e})=>({eventPresences:e(x)})),x=o("eventPresence",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),eventId:pgCore.text("eventId").notNull().references(()=>c.id),userNim:pgCore.varchar("userNim",{length:255}).notNull().references(()=>n.nim),presenceType:K("presenceType").notNull(),presenceEvent:_("presenceEvent").notNull(),createdAt:pgCore.timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),updatedAt:pgCore.timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull()},e=>({eventIdIdx:pgCore.index("presence_eventId_idx").on(e.eventId),userIdIdx:pgCore.index("presence_userId_idx").on(e.userNim),uniquePresenceConstraint:pgCore.unique().on(e.eventId,e.presenceEvent,e.userNim)})),ee=drizzleOrm.relations(x,({one:e})=>({event:e(c,{fields:[x.eventId],references:[c.id]}),user:e(n,{fields:[x.userNim],references:[n.nim]})})),M=o("classes",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),title:pgCore.varchar("title",{length:255}).notNull(),topic:pgCore.varchar("topic",{length:100}),description:pgCore.text("description").notNull(),speaker:pgCore.varchar("speaker",{length:100}).notNull(),location:pgCore.varchar("location",{length:100}).notNull(),date:pgCore.timestamp("date",{mode:"date",withTimezone:!0}).notNull(),totalSeats:pgCore.integer("totalSeats").notNull(),reservedSeats:pgCore.integer("reservedSeats").default(0)}),te=drizzleOrm.relations(M,({many:e})=>({users:e(n)})),N=o("postTests",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),title:pgCore.varchar("title",{length:255}).notNull(),description:pgCore.text("description").notNull(),startTime:pgCore.timestamp("startTime",{mode:"date",withTimezone:!0}),deadline:pgCore.timestamp("deadline",{mode:"date",withTimezone:!0}).notNull(),googleFormLink:pgCore.varchar("googleFormLink",{length:255}).notNull(),eventId:pgCore.text("eventId").notNull().references(()=>c.id)}),v=o("postTestSubmissions",{postTestId:pgCore.text("postTestId").notNull().references(()=>N.id),userNim:pgCore.varchar("userNim",{length:100}).notNull().references(()=>n.nim),createdAt:pgCore.timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow()},e=>({pk:pgCore.primaryKey({columns:[e.postTestId,e.userNim]}),userNimIdx:pgCore.index("submission_usernim_idx").on(e.userNim)})),ne=drizzleOrm.relations(N,({one:e})=>({event:e(c,{fields:[N.eventId],references:[c.id]})})),se=drizzleOrm.relations(v,({one:e})=>({postTest:e(N,{fields:[v.postTestId],references:[N.id]}),user:e(n,{fields:[v.userNim],references:[n.nim]})})),re=o("notifications",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),content:pgCore.text("content").notNull(),createdAt:pgCore.timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow()}),$=o("wrappedProfiles",{userId:pgCore.text("userId").notNull().references(()=>n.id,{onDelete:"cascade"}),totalMatch:pgCore.integer("totalMatch").notNull().default(0),submittedQuest:pgCore.integer("submittedQuest").notNull().default(0),personality:pgCore.text("personality"),favTopic:pgCore.text("favTopic"),rank:pgCore.integer("rank"),updatedAt:pgCore.timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull()},e=>({userIdIdx:pgCore.index().on(e.userId)})),oe=drizzleOrm.relations($,({one:e})=>({users:e(n,{fields:[$.userId],references:[n.id]})}));

exports.assignmentSubmissions = I;
exports.assignmentSubmissionsRelations = j;
exports.assignmentTypeEnum = k;
exports.assignments = S;
exports.characters = P;
exports.classDayEnum = H;
exports.classUserRelations = te;
exports.classes = M;
exports.createTable = o;
exports.eventDayEnum = C;
exports.eventPresences = x;
exports.eventPresencesRelations = ee;
exports.events = c;
exports.eventsCharactersRelations = Y;
exports.eventsRelations = Z;
exports.facultyEnum = R;
exports.genderEnum = E;
exports.groupRelations = G;
exports.groups = h;
exports.lembagaEnum = V;
exports.messages = f;
exports.messagesRelations = X;
exports.notifications = re;
exports.postTestRelations = ne;
exports.postTestSubmissionRelations = se;
exports.postTestSubmissions = v;
exports.postTests = N;
exports.presenceEventEnum = _;
exports.presenceTypeEnum = K;
exports.profiles = T;
exports.profilesRelations = Q;
exports.resetTokenRelations = J;
exports.resetTokens = w;
exports.roleEnum = U;
exports.userMatches = m;
exports.userMatchesRelations = W;
exports.users = n;
exports.usersRelations = L;
exports.wrappedProfiles = $;
exports.wrappedProfilesRelation = oe;
