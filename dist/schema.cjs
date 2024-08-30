'use strict';

var cuid2 = require('@paralleldrive/cuid2');
var drizzleOrm = require('drizzle-orm');
var pgCore = require('drizzle-orm/pg-core');

var o=pgCore.pgTableCreator(e=>`${e}`),k=pgCore.pgEnum("faculty",["FITB","FMIPA","FSRD","FTMD","FTTM","FTSL","FTI","SAPPK","SBM","SF","SITH","STEI"]),W=pgCore.pgEnum("lembaga",["HMJ","Unit"]),K=pgCore.pgEnum("role",["Peserta","Mentor","Mamet","ITB-X"]),C=pgCore.pgEnum("gender",["Male","Female"]),V=pgCore.pgEnum("assignmentType",["Main","Side"]),B=pgCore.pgEnum("presenceType",["Hadir","Izin/Sakit","Alpha"]),q=pgCore.pgEnum("day",["Day 1","Day 2","Day 3","Day 4"]),_=pgCore.pgEnum("presenceEvent",["Opening","Closing"]),X=pgCore.pgEnum("classDay",["Day 1","Day 2"]),O=pgCore.pgEnum("status",["Taken","Not Taken"]),L=pgCore.pgEnum("class",["Sesi 1","Sesi 2"]),H=pgCore.pgEnum("MBTI",["Mova","Kovva","Ozirron","Sylas","Odra"]),n=o("users",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),nim:pgCore.varchar("nim",{length:100}).unique().notNull(),role:K("role").notNull(),email:pgCore.varchar("email",{length:255}).unique(),password:pgCore.varchar("password",{length:255}).notNull(),activityPoints:pgCore.integer("activityPoints").default(0),createdAt:pgCore.timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),updatedAt:pgCore.timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull()},e=>({idIdx:pgCore.index().on(e.id),nimIdx:pgCore.index().on(e.nim)})),j=drizzleOrm.relations(n,({many:e,one:i})=>({profile:i(T),userMatchesAsFirstUser:e(m,{relationName:"firstUser"}),userMatchesAsSecondUser:e(m,{relationName:"secondUser"}),messages:e(f,{relationName:"sender"}),messagesAsReceiver:e(f,{relationName:"receiver"}),resetToken:i(b),chosenClass:i(P),wrappedProfile:i($)})),v=o("groups",{name:pgCore.text("groupName").notNull().primaryKey(),point:pgCore.integer("point").notNull().default(0),bata:pgCore.text("bata").notNull()}),Y=drizzleOrm.relations(v,({many:e,one:i})=>({mentors:e(n),students:e(n)})),T=o("profiles",{userId:pgCore.text("userId").notNull().primaryKey().references(()=>n.id,{onDelete:"cascade"}),name:pgCore.varchar("name",{length:255}).notNull(),faculty:k("faculty").notNull(),gender:C("gender").notNull(),updatedAt:pgCore.timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull(),profileImage:pgCore.text("profileImage"),point:pgCore.integer("point"),instagram:pgCore.varchar("instagram",{length:255}),bio:pgCore.varchar("bio",{length:255}),chosenClass:pgCore.varchar("chosenClass",{length:255}).references(()=>P.id),group:pgCore.text("group").notNull().references(()=>v.name),lastMBTI:H("lastMBTI")},e=>({userIdIdx:pgCore.index().on(e.userId),groupIdx:pgCore.index().on(e.group),pointIdx:pgCore.index().on(e.point)})),Z=drizzleOrm.relations(T,({one:e})=>({users:e(n,{fields:[T.userId],references:[n.id]}),group:e(v,{fields:[T.group],references:[v.name]})})),b=o("resetTokens",{userId:pgCore.text("id").primaryKey().references(()=>n.id),value:pgCore.text("value"),createdAt:pgCore.timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),expiredTime:pgCore.integer("expiredTime").default(3600)}),ee=drizzleOrm.relations(b,({one:e})=>({userId:e(n,{fields:[b.userId],references:[n.id]})})),m=o("userMatches",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),firstUserId:pgCore.text("firstUserId").notNull().references(()=>n.id,{onDelete:"cascade"}),secondUserId:pgCore.text("secondUserId").notNull().references(()=>n.id,{onDelete:"cascade"}),topic:pgCore.varchar("topic",{length:50}).notNull(),isRevealed:pgCore.boolean("isRevealed").notNull().default(drizzleOrm.sql`false`),isAnonymous:pgCore.boolean("isAnonymous").notNull().default(drizzleOrm.sql`false`),lastMessage:pgCore.text("lastMessage"),createdAt:pgCore.timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),endedAt:pgCore.timestamp("endedAt",{mode:"date",withTimezone:!0}).default(drizzleOrm.sql`null`).$type()}),te=drizzleOrm.relations(m,({many:e,one:i})=>({firstUser:i(n,{fields:[m.firstUserId],references:[n.id],relationName:"firstUser"}),secondUser:i(n,{fields:[m.secondUserId],references:[n.id],relationName:"secondUser"}),messages:e(f)})),f=o("messages",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),senderId:pgCore.text("senderId").notNull().references(()=>n.id),receiverId:pgCore.text("receiverId").notNull().references(()=>n.id),content:pgCore.text("content").notNull(),isRead:pgCore.boolean("isRead").notNull().default(drizzleOrm.sql`false`),createdAt:pgCore.timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),userMatchId:pgCore.text("userMatchId").notNull().references(()=>m.id,{onDelete:"cascade"})}),ne=drizzleOrm.relations(f,({many:e,one:i})=>({senderId:i(n,{fields:[f.senderId],references:[n.id],relationName:"sender"}),receiverId:i(n,{fields:[f.receiverId],references:[n.id],relationName:"receiver"}),userMatch:i(m,{fields:[f.userMatchId],references:[m.id]})})),D=o("assignments",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),title:pgCore.varchar("title",{length:255}).notNull(),description:pgCore.text("description").notNull(),startTime:pgCore.timestamp("startTime",{mode:"date",withTimezone:!0}).notNull(),filename:pgCore.text("filename").notNull(),downloadUrl:pgCore.text("downloadUrl").notNull(),deadline:pgCore.timestamp("deadline",{mode:"date",withTimezone:!0}).notNull(),assignmentType:V("assignmentType").notNull(),point:pgCore.integer("point").notNull(),createdAt:pgCore.timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),updatedAt:pgCore.timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull()}),E=o("assignmentSubmissions",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),point:pgCore.integer("point").default(0),assignmentId:pgCore.text("assignmentId").notNull().references(()=>D.id,{onDelete:"cascade"}),userNim:pgCore.varchar("userNim",{length:100}).notNull().references(()=>n.nim,{onDelete:"cascade",onUpdate:"cascade"}),filename:pgCore.text("filename").notNull(),downloadUrl:pgCore.text("downloadUrl").notNull(),createdAt:pgCore.timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),updatedAt:pgCore.timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull()},e=>({userIdIdx:pgCore.index("submission_userId_idx").on(e.userNim)})),se=drizzleOrm.relations(E,({one:e})=>({assignment:e(D,{fields:[E.assignmentId],references:[D.id]}),user:e(n,{fields:[E.userNim],references:[n.nim]})})),M=o("characters",{name:pgCore.varchar("name",{length:255}).notNull().primaryKey(),characterImage:pgCore.varchar("characterImage",{length:255}).notNull()}),p=o("events",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),day:q("day").notNull(),eventDate:pgCore.date("eventDate",{mode:"date"}).notNull(),openingOpenPresenceTime:pgCore.time("openingOpenPresenceTime").notNull(),openingClosePresenceTime:pgCore.time("openingClosePresenceTime").notNull(),closingOpenPresenceTime:pgCore.time("closingOpenPresenceTime").notNull(),closingClosePresenceTime:pgCore.time("closingClosePresenceTime").notNull(),createdAt:pgCore.timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),updatedAt:pgCore.timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull(),lore:pgCore.text("lore").notNull(),characterName:pgCore.varchar("characterName",{length:255}).notNull().references(()=>M.name),guideBook:pgCore.varchar("guideBook",{length:255}).notNull(),youtubeVideo:pgCore.varchar("youtubeVideo",{length:255}).notNull()},e=>({uniqueDayConstraint:pgCore.unique().on(e.day)})),re=drizzleOrm.relations(p,({one:e})=>({characters:e(M,{fields:[p.characterName],references:[M.name]})})),oe=drizzleOrm.relations(p,({many:e})=>({eventPresences:e(I)})),I=o("eventPresence",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),eventId:pgCore.text("eventId").notNull().references(()=>p.id),userNim:pgCore.varchar("userNim",{length:255}).notNull().references(()=>n.nim),presenceType:B("presenceType").notNull(),presenceEvent:_("presenceEvent").notNull(),createdAt:pgCore.timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),updatedAt:pgCore.timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull()},e=>({eventIdIdx:pgCore.index("presence_eventId_idx").on(e.eventId),userIdIdx:pgCore.index("presence_userId_idx").on(e.userNim),uniquePresenceConstraint:pgCore.unique().on(e.eventId,e.presenceEvent,e.userNim)})),ae=drizzleOrm.relations(I,({one:e})=>({event:e(p,{fields:[I.eventId],references:[p.id]}),user:e(n,{fields:[I.userNim],references:[n.nim]})})),P=o("classes",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),title:pgCore.varchar("title",{length:255}).notNull(),topic:pgCore.varchar("topic",{length:100}),description:pgCore.text("description").notNull(),speaker:pgCore.varchar("speaker",{length:100}).notNull(),location:pgCore.varchar("location",{length:100}).notNull(),date:pgCore.timestamp("date",{mode:"date",withTimezone:!0}).notNull(),totalSeats:pgCore.integer("totalSeats").notNull(),reservedSeats:pgCore.integer("reservedSeats").default(0),type:L("classSession").notNull()}),ie=drizzleOrm.relations(P,({many:e})=>({users:e(n)})),y=o("postTests",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),title:pgCore.varchar("title",{length:255}).notNull(),description:pgCore.text("description").notNull(),startTime:pgCore.timestamp("startTime",{mode:"date",withTimezone:!0}),deadline:pgCore.timestamp("deadline",{mode:"date",withTimezone:!0}).notNull(),googleFormLink:pgCore.varchar("googleFormLink",{length:255}).notNull(),eventId:pgCore.text("eventId").notNull().references(()=>p.id)}),w=o("postTestSubmissions",{postTestId:pgCore.text("postTestId").notNull().references(()=>y.id),userNim:pgCore.varchar("userNim",{length:100}).notNull().references(()=>n.nim),createdAt:pgCore.timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow()},e=>({pk:pgCore.primaryKey({columns:[e.postTestId,e.userNim]}),userNimIdx:pgCore.index("submission_usernim_idx").on(e.userNim)})),le=drizzleOrm.relations(y,({one:e})=>({event:e(p,{fields:[y.eventId],references:[p.id]})})),de=drizzleOrm.relations(w,({one:e})=>({postTest:e(y,{fields:[w.postTestId],references:[y.id]}),user:e(n,{fields:[w.userNim],references:[n.nim]})})),ue=o("notifications",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),content:pgCore.text("content").notNull(),createdAt:pgCore.timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow()}),$=o("wrappedProfiles",{userId:pgCore.text("userId").notNull().references(()=>n.id,{onDelete:"cascade"}),totalMatch:pgCore.integer("totalMatch").notNull().default(0),submittedQuest:pgCore.integer("submittedQuest").notNull().default(0),personality:pgCore.text("personality"),favTopic:pgCore.text("favTopic"),rank:pgCore.integer("rank"),updatedAt:pgCore.timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull()},e=>({userIdIdx:pgCore.index().on(e.userId)})),ce=drizzleOrm.relations($,({one:e})=>({users:e(n,{fields:[$.userId],references:[n.id]})})),A=o("merchandises",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),name:pgCore.varchar("name",{length:255}).notNull(),price:pgCore.integer("price").notNull(),stock:pgCore.integer("stock").notNull(),image:pgCore.text("image").notNull(),createdAt:pgCore.timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),updatedAt:pgCore.timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull()}),pe=drizzleOrm.relations(A,({many:e})=>({merchandiseExchangeDetails:e(N)})),h=o("merchandiseExchanges",{id:pgCore.text("id").primaryKey().$defaultFn(cuid2.createId),userId:pgCore.text("userId").notNull().references(()=>n.id,{onDelete:"cascade"}),status:O("status").notNull(),createdAt:pgCore.timestamp("createdAt",{mode:"date",withTimezone:!0}).notNull().defaultNow(),updatedAt:pgCore.timestamp("updatedAt",{mode:"date",withTimezone:!0}).notNull()}),me=drizzleOrm.relations(h,({one:e,many:i})=>({user:e(n,{fields:[h.userId],references:[n.id]}),merchandiseExchangeDetails:i(N)})),N=o("merchandiseExchangeDetails",{merchandiseExchangeId:pgCore.text("merchandiseExchangeId").notNull().references(()=>h.id,{onDelete:"cascade"}),merchandiseId:pgCore.text("merchandiseId").notNull().references(()=>A.id),quantity:pgCore.integer("quantity").notNull()},e=>({pk:pgCore.primaryKey({columns:[e.merchandiseExchangeId,e.merchandiseId]})})),fe=drizzleOrm.relations(N,({one:e})=>({merchandiseExchange:e(h,{fields:[N.merchandiseExchangeId],references:[h.id]}),merchandise:e(A,{fields:[N.merchandiseId],references:[A.id]})}));

exports.MBTIEnum = H;
exports.assignmentSubmissions = E;
exports.assignmentSubmissionsRelations = se;
exports.assignmentTypeEnum = V;
exports.assignments = D;
exports.characters = M;
exports.classDayEnum = X;
exports.classSessionEnum = L;
exports.classUserRelations = ie;
exports.classes = P;
exports.createTable = o;
exports.eventDayEnum = q;
exports.eventPresences = I;
exports.eventPresencesRelations = ae;
exports.events = p;
exports.eventsCharactersRelations = re;
exports.eventsRelations = oe;
exports.facultyEnum = k;
exports.genderEnum = C;
exports.groupRelations = Y;
exports.groups = v;
exports.lembagaEnum = W;
exports.merchandiseExchangeDetails = N;
exports.merchandiseExchangeDetailsRelations = fe;
exports.merchandiseExchangeRelations = me;
exports.merchandiseExchangeStatusEnum = O;
exports.merchandiseExchanges = h;
exports.merchandiseRelations = pe;
exports.merchandises = A;
exports.messages = f;
exports.messagesRelations = ne;
exports.notifications = ue;
exports.postTestRelations = le;
exports.postTestSubmissionRelations = de;
exports.postTestSubmissions = w;
exports.postTests = y;
exports.presenceEventEnum = _;
exports.presenceTypeEnum = B;
exports.profiles = T;
exports.profilesRelations = Z;
exports.resetTokenRelations = ee;
exports.resetTokens = b;
exports.roleEnum = K;
exports.userMatches = m;
exports.userMatchesRelations = te;
exports.users = n;
exports.usersRelations = j;
exports.wrappedProfiles = $;
exports.wrappedProfilesRelation = ce;
