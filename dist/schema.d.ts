import * as drizzle_orm from 'drizzle-orm';
import * as drizzle_orm_pg_core from 'drizzle-orm/pg-core';

declare const createTable: drizzle_orm_pg_core.PgTableFn<undefined>;
declare const facultyEnum: drizzle_orm_pg_core.PgEnum<["FITB", "FMIPA", "FSRD", "FTMD", "FTTM", "FTSL", "FTI", "SAPPK", "SBM", "SF", "SITH", "STEI"]>;
declare const lembagaEnum: drizzle_orm_pg_core.PgEnum<["HMJ", "Unit"]>;
declare const roleEnum: drizzle_orm_pg_core.PgEnum<["Peserta", "Mentor", "Mamet", "ITB-X"]>;
declare const genderEnum: drizzle_orm_pg_core.PgEnum<["Male", "Female"]>;
declare const assignmentTypeEnum: drizzle_orm_pg_core.PgEnum<["Main", "Side"]>;
declare const presenceTypeEnum: drizzle_orm_pg_core.PgEnum<["Hadir", "Izin/Sakit", "Alpha"]>;
declare const eventDayEnum: drizzle_orm_pg_core.PgEnum<["Day 1", "Day 2", "Day 3", "Day 4"]>;
declare const presenceEventEnum: drizzle_orm_pg_core.PgEnum<["Opening", "Closing"]>;
declare const classDayEnum: drizzle_orm_pg_core.PgEnum<["Day 1", "Day 2"]>;
declare const merchandiseExchangeStatusEnum: drizzle_orm_pg_core.PgEnum<["Taken", "Not Taken"]>;
declare const classSessionEnum: drizzle_orm_pg_core.PgEnum<["Sesi 1", "Sesi 2"]>;
declare const MBTIEnum: drizzle_orm_pg_core.PgEnum<["Mova", "Kovva", "Ozirron", "Sylas", "Odra"]>;
declare const users: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "users";
    schema: undefined;
    columns: {
        id: drizzle_orm_pg_core.PgColumn<{
            name: "id";
            tableName: "users";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        nim: drizzle_orm_pg_core.PgColumn<{
            name: "nim";
            tableName: "users";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        role: drizzle_orm_pg_core.PgColumn<{
            name: "role";
            tableName: "users";
            dataType: "string";
            columnType: "PgEnumColumn";
            data: "Peserta" | "Mentor" | "Mamet" | "ITB-X";
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: ["Peserta", "Mentor", "Mamet", "ITB-X"];
            baseColumn: never;
        }, {}, {}>;
        email: drizzle_orm_pg_core.PgColumn<{
            name: "email";
            tableName: "users";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        password: drizzle_orm_pg_core.PgColumn<{
            name: "password";
            tableName: "users";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        activityPoints: drizzle_orm_pg_core.PgColumn<{
            name: "activityPoints";
            tableName: "users";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        createdAt: drizzle_orm_pg_core.PgColumn<{
            name: "createdAt";
            tableName: "users";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        updatedAt: drizzle_orm_pg_core.PgColumn<{
            name: "updatedAt";
            tableName: "users";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const usersRelations: drizzle_orm.Relations<"users", {
    profile: drizzle_orm.One<"profiles", false>;
    userMatchesAsFirstUser: drizzle_orm.Many<"userMatches">;
    userMatchesAsSecondUser: drizzle_orm.Many<"userMatches">;
    messages: drizzle_orm.Many<"messages">;
    messagesAsReceiver: drizzle_orm.Many<"messages">;
    resetToken: drizzle_orm.One<"resetTokens", false>;
    chosenClass: drizzle_orm.One<"classes", false>;
    wrappedProfile: drizzle_orm.One<"wrappedProfiles", false>;
}>;
declare const groups: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "groups";
    schema: undefined;
    columns: {
        name: drizzle_orm_pg_core.PgColumn<{
            name: "groupName";
            tableName: "groups";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        point: drizzle_orm_pg_core.PgColumn<{
            name: "point";
            tableName: "groups";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        bata: drizzle_orm_pg_core.PgColumn<{
            name: "bata";
            tableName: "groups";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const groupRelations: drizzle_orm.Relations<"groups", {
    mentors: drizzle_orm.Many<"users">;
    students: drizzle_orm.Many<"users">;
}>;
declare const profiles: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "profiles";
    schema: undefined;
    columns: {
        userId: drizzle_orm_pg_core.PgColumn<{
            name: "userId";
            tableName: "profiles";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        name: drizzle_orm_pg_core.PgColumn<{
            name: "name";
            tableName: "profiles";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        faculty: drizzle_orm_pg_core.PgColumn<{
            name: "faculty";
            tableName: "profiles";
            dataType: "string";
            columnType: "PgEnumColumn";
            data: "FITB" | "FMIPA" | "FSRD" | "FTMD" | "FTTM" | "FTSL" | "FTI" | "SAPPK" | "SBM" | "SF" | "SITH" | "STEI";
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: ["FITB", "FMIPA", "FSRD", "FTMD", "FTTM", "FTSL", "FTI", "SAPPK", "SBM", "SF", "SITH", "STEI"];
            baseColumn: never;
        }, {}, {}>;
        gender: drizzle_orm_pg_core.PgColumn<{
            name: "gender";
            tableName: "profiles";
            dataType: "string";
            columnType: "PgEnumColumn";
            data: "Male" | "Female";
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: ["Male", "Female"];
            baseColumn: never;
        }, {}, {}>;
        updatedAt: drizzle_orm_pg_core.PgColumn<{
            name: "updatedAt";
            tableName: "profiles";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        profileImage: drizzle_orm_pg_core.PgColumn<{
            name: "profileImage";
            tableName: "profiles";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        point: drizzle_orm_pg_core.PgColumn<{
            name: "point";
            tableName: "profiles";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        instagram: drizzle_orm_pg_core.PgColumn<{
            name: "instagram";
            tableName: "profiles";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        bio: drizzle_orm_pg_core.PgColumn<{
            name: "bio";
            tableName: "profiles";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        chosenClass: drizzle_orm_pg_core.PgColumn<{
            name: "chosenClass";
            tableName: "profiles";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        group: drizzle_orm_pg_core.PgColumn<{
            name: "group";
            tableName: "profiles";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        lastMBTI: drizzle_orm_pg_core.PgColumn<{
            name: "lastMBTI";
            tableName: "profiles";
            dataType: "string";
            columnType: "PgEnumColumn";
            data: "Mova" | "Kovva" | "Ozirron" | "Sylas" | "Odra";
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: ["Mova", "Kovva", "Ozirron", "Sylas", "Odra"];
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const profilesRelations: drizzle_orm.Relations<"profiles", {
    users: drizzle_orm.One<"users", true>;
    group: drizzle_orm.One<"groups", true>;
}>;
declare const resetTokens: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "resetTokens";
    schema: undefined;
    columns: {
        userId: drizzle_orm_pg_core.PgColumn<{
            name: "id";
            tableName: "resetTokens";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        value: drizzle_orm_pg_core.PgColumn<{
            name: "value";
            tableName: "resetTokens";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        createdAt: drizzle_orm_pg_core.PgColumn<{
            name: "createdAt";
            tableName: "resetTokens";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        expiredTime: drizzle_orm_pg_core.PgColumn<{
            name: "expiredTime";
            tableName: "resetTokens";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const resetTokenRelations: drizzle_orm.Relations<"resetTokens", {
    userId: drizzle_orm.One<"users", true>;
}>;
declare const userMatches: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "userMatches";
    schema: undefined;
    columns: {
        id: drizzle_orm_pg_core.PgColumn<{
            name: "id";
            tableName: "userMatches";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        firstUserId: drizzle_orm_pg_core.PgColumn<{
            name: "firstUserId";
            tableName: "userMatches";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        secondUserId: drizzle_orm_pg_core.PgColumn<{
            name: "secondUserId";
            tableName: "userMatches";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        topic: drizzle_orm_pg_core.PgColumn<{
            name: "topic";
            tableName: "userMatches";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        isRevealed: drizzle_orm_pg_core.PgColumn<{
            name: "isRevealed";
            tableName: "userMatches";
            dataType: "boolean";
            columnType: "PgBoolean";
            data: boolean;
            driverParam: boolean;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        isAnonymous: drizzle_orm_pg_core.PgColumn<{
            name: "isAnonymous";
            tableName: "userMatches";
            dataType: "boolean";
            columnType: "PgBoolean";
            data: boolean;
            driverParam: boolean;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        lastMessage: drizzle_orm_pg_core.PgColumn<{
            name: "lastMessage";
            tableName: "userMatches";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        createdAt: drizzle_orm_pg_core.PgColumn<{
            name: "createdAt";
            tableName: "userMatches";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        endedAt: drizzle_orm_pg_core.PgColumn<{
            name: "endedAt";
            tableName: "userMatches";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date | null;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const userMatchesRelations: drizzle_orm.Relations<"userMatches", {
    firstUser: drizzle_orm.One<"users", true>;
    secondUser: drizzle_orm.One<"users", true>;
    messages: drizzle_orm.Many<"messages">;
}>;
declare const messages: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "messages";
    schema: undefined;
    columns: {
        id: drizzle_orm_pg_core.PgColumn<{
            name: "id";
            tableName: "messages";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        senderId: drizzle_orm_pg_core.PgColumn<{
            name: "senderId";
            tableName: "messages";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        receiverId: drizzle_orm_pg_core.PgColumn<{
            name: "receiverId";
            tableName: "messages";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        content: drizzle_orm_pg_core.PgColumn<{
            name: "content";
            tableName: "messages";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        isRead: drizzle_orm_pg_core.PgColumn<{
            name: "isRead";
            tableName: "messages";
            dataType: "boolean";
            columnType: "PgBoolean";
            data: boolean;
            driverParam: boolean;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        createdAt: drizzle_orm_pg_core.PgColumn<{
            name: "createdAt";
            tableName: "messages";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        userMatchId: drizzle_orm_pg_core.PgColumn<{
            name: "userMatchId";
            tableName: "messages";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const messagesRelations: drizzle_orm.Relations<"messages", {
    senderId: drizzle_orm.One<"users", true>;
    receiverId: drizzle_orm.One<"users", true>;
    userMatch: drizzle_orm.One<"userMatches", true>;
}>;
declare const assignments: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "assignments";
    schema: undefined;
    columns: {
        id: drizzle_orm_pg_core.PgColumn<{
            name: "id";
            tableName: "assignments";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        title: drizzle_orm_pg_core.PgColumn<{
            name: "title";
            tableName: "assignments";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        description: drizzle_orm_pg_core.PgColumn<{
            name: "description";
            tableName: "assignments";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        startTime: drizzle_orm_pg_core.PgColumn<{
            name: "startTime";
            tableName: "assignments";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        filename: drizzle_orm_pg_core.PgColumn<{
            name: "filename";
            tableName: "assignments";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        downloadUrl: drizzle_orm_pg_core.PgColumn<{
            name: "downloadUrl";
            tableName: "assignments";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        deadline: drizzle_orm_pg_core.PgColumn<{
            name: "deadline";
            tableName: "assignments";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        assignmentType: drizzle_orm_pg_core.PgColumn<{
            name: "assignmentType";
            tableName: "assignments";
            dataType: "string";
            columnType: "PgEnumColumn";
            data: "Main" | "Side";
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: ["Main", "Side"];
            baseColumn: never;
        }, {}, {}>;
        point: drizzle_orm_pg_core.PgColumn<{
            name: "point";
            tableName: "assignments";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        createdAt: drizzle_orm_pg_core.PgColumn<{
            name: "createdAt";
            tableName: "assignments";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        updatedAt: drizzle_orm_pg_core.PgColumn<{
            name: "updatedAt";
            tableName: "assignments";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const assignmentSubmissions: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "assignmentSubmissions";
    schema: undefined;
    columns: {
        id: drizzle_orm_pg_core.PgColumn<{
            name: "id";
            tableName: "assignmentSubmissions";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        point: drizzle_orm_pg_core.PgColumn<{
            name: "point";
            tableName: "assignmentSubmissions";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        assignmentId: drizzle_orm_pg_core.PgColumn<{
            name: "assignmentId";
            tableName: "assignmentSubmissions";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        userNim: drizzle_orm_pg_core.PgColumn<{
            name: "userNim";
            tableName: "assignmentSubmissions";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        filename: drizzle_orm_pg_core.PgColumn<{
            name: "filename";
            tableName: "assignmentSubmissions";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        downloadUrl: drizzle_orm_pg_core.PgColumn<{
            name: "downloadUrl";
            tableName: "assignmentSubmissions";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        createdAt: drizzle_orm_pg_core.PgColumn<{
            name: "createdAt";
            tableName: "assignmentSubmissions";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        updatedAt: drizzle_orm_pg_core.PgColumn<{
            name: "updatedAt";
            tableName: "assignmentSubmissions";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const assignmentSubmissionsRelations: drizzle_orm.Relations<"assignmentSubmissions", {
    assignment: drizzle_orm.One<"assignments", true>;
    user: drizzle_orm.One<"users", true>;
}>;
declare const characters: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "characters";
    schema: undefined;
    columns: {
        name: drizzle_orm_pg_core.PgColumn<{
            name: "name";
            tableName: "characters";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        characterImage: drizzle_orm_pg_core.PgColumn<{
            name: "characterImage";
            tableName: "characters";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const events: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "events";
    schema: undefined;
    columns: {
        id: drizzle_orm_pg_core.PgColumn<{
            name: "id";
            tableName: "events";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        day: drizzle_orm_pg_core.PgColumn<{
            name: "day";
            tableName: "events";
            dataType: "string";
            columnType: "PgEnumColumn";
            data: "Day 1" | "Day 2" | "Day 3" | "Day 4";
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: ["Day 1", "Day 2", "Day 3", "Day 4"];
            baseColumn: never;
        }, {}, {}>;
        eventDate: drizzle_orm_pg_core.PgColumn<{
            name: "eventDate";
            tableName: "events";
            dataType: "date";
            columnType: "PgDate";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        openingOpenPresenceTime: drizzle_orm_pg_core.PgColumn<{
            name: "openingOpenPresenceTime";
            tableName: "events";
            dataType: "string";
            columnType: "PgTime";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        openingClosePresenceTime: drizzle_orm_pg_core.PgColumn<{
            name: "openingClosePresenceTime";
            tableName: "events";
            dataType: "string";
            columnType: "PgTime";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        closingOpenPresenceTime: drizzle_orm_pg_core.PgColumn<{
            name: "closingOpenPresenceTime";
            tableName: "events";
            dataType: "string";
            columnType: "PgTime";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        closingClosePresenceTime: drizzle_orm_pg_core.PgColumn<{
            name: "closingClosePresenceTime";
            tableName: "events";
            dataType: "string";
            columnType: "PgTime";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        createdAt: drizzle_orm_pg_core.PgColumn<{
            name: "createdAt";
            tableName: "events";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        updatedAt: drizzle_orm_pg_core.PgColumn<{
            name: "updatedAt";
            tableName: "events";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        lore: drizzle_orm_pg_core.PgColumn<{
            name: "lore";
            tableName: "events";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        characterName: drizzle_orm_pg_core.PgColumn<{
            name: "characterName";
            tableName: "events";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        guideBook: drizzle_orm_pg_core.PgColumn<{
            name: "guideBook";
            tableName: "events";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        youtubeVideo: drizzle_orm_pg_core.PgColumn<{
            name: "youtubeVideo";
            tableName: "events";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const eventsCharactersRelations: drizzle_orm.Relations<"events", {
    characters: drizzle_orm.One<"characters", true>;
}>;
declare const eventsRelations: drizzle_orm.Relations<"events", {
    eventPresences: drizzle_orm.Many<"eventPresence">;
}>;
declare const eventPresences: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "eventPresence";
    schema: undefined;
    columns: {
        id: drizzle_orm_pg_core.PgColumn<{
            name: "id";
            tableName: "eventPresence";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        eventId: drizzle_orm_pg_core.PgColumn<{
            name: "eventId";
            tableName: "eventPresence";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        userNim: drizzle_orm_pg_core.PgColumn<{
            name: "userNim";
            tableName: "eventPresence";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        presenceType: drizzle_orm_pg_core.PgColumn<{
            name: "presenceType";
            tableName: "eventPresence";
            dataType: "string";
            columnType: "PgEnumColumn";
            data: "Hadir" | "Izin/Sakit" | "Alpha";
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: ["Hadir", "Izin/Sakit", "Alpha"];
            baseColumn: never;
        }, {}, {}>;
        presenceEvent: drizzle_orm_pg_core.PgColumn<{
            name: "presenceEvent";
            tableName: "eventPresence";
            dataType: "string";
            columnType: "PgEnumColumn";
            data: "Opening" | "Closing";
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: ["Opening", "Closing"];
            baseColumn: never;
        }, {}, {}>;
        remarks: drizzle_orm_pg_core.PgColumn<{
            name: "remarks";
            tableName: "eventPresence";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        createdAt: drizzle_orm_pg_core.PgColumn<{
            name: "createdAt";
            tableName: "eventPresence";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        updatedAt: drizzle_orm_pg_core.PgColumn<{
            name: "updatedAt";
            tableName: "eventPresence";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const eventPresencesRelations: drizzle_orm.Relations<"eventPresence", {
    event: drizzle_orm.One<"events", true>;
    user: drizzle_orm.One<"users", true>;
}>;
declare const classes: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "classes";
    schema: undefined;
    columns: {
        id: drizzle_orm_pg_core.PgColumn<{
            name: "id";
            tableName: "classes";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        title: drizzle_orm_pg_core.PgColumn<{
            name: "title";
            tableName: "classes";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        topic: drizzle_orm_pg_core.PgColumn<{
            name: "topic";
            tableName: "classes";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        description: drizzle_orm_pg_core.PgColumn<{
            name: "description";
            tableName: "classes";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        speaker: drizzle_orm_pg_core.PgColumn<{
            name: "speaker";
            tableName: "classes";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        location: drizzle_orm_pg_core.PgColumn<{
            name: "location";
            tableName: "classes";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        date: drizzle_orm_pg_core.PgColumn<{
            name: "date";
            tableName: "classes";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        totalSeats: drizzle_orm_pg_core.PgColumn<{
            name: "totalSeats";
            tableName: "classes";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        reservedSeats: drizzle_orm_pg_core.PgColumn<{
            name: "reservedSeats";
            tableName: "classes";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        type: drizzle_orm_pg_core.PgColumn<{
            name: "classSession";
            tableName: "classes";
            dataType: "string";
            columnType: "PgEnumColumn";
            data: "Sesi 1" | "Sesi 2";
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: ["Sesi 1", "Sesi 2"];
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const classUserRelations: drizzle_orm.Relations<"classes", {
    users: drizzle_orm.Many<"users">;
}>;
declare const postTests: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "postTests";
    schema: undefined;
    columns: {
        id: drizzle_orm_pg_core.PgColumn<{
            name: "id";
            tableName: "postTests";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        startTime: drizzle_orm_pg_core.PgColumn<{
            name: "startTime";
            tableName: "postTests";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        deadline: drizzle_orm_pg_core.PgColumn<{
            name: "deadline";
            tableName: "postTests";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        googleFormLink: drizzle_orm_pg_core.PgColumn<{
            name: "googleFormLink";
            tableName: "postTests";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        eventId: drizzle_orm_pg_core.PgColumn<{
            name: "eventId";
            tableName: "postTests";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const postTestRelations: drizzle_orm.Relations<"postTests", {
    event: drizzle_orm.One<"events", true>;
}>;
declare const notifications: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "notifications";
    schema: undefined;
    columns: {
        id: drizzle_orm_pg_core.PgColumn<{
            name: "id";
            tableName: "notifications";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        content: drizzle_orm_pg_core.PgColumn<{
            name: "content";
            tableName: "notifications";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        createdAt: drizzle_orm_pg_core.PgColumn<{
            name: "createdAt";
            tableName: "notifications";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const wrappedProfiles: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "wrappedProfiles";
    schema: undefined;
    columns: {
        userId: drizzle_orm_pg_core.PgColumn<{
            name: "userId";
            tableName: "wrappedProfiles";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        name: drizzle_orm_pg_core.PgColumn<{
            name: "name";
            tableName: "wrappedProfiles";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        totalMatch: drizzle_orm_pg_core.PgColumn<{
            name: "totalMatch";
            tableName: "wrappedProfiles";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        submittedQuest: drizzle_orm_pg_core.PgColumn<{
            name: "submittedQuest";
            tableName: "wrappedProfiles";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        character: drizzle_orm_pg_core.PgColumn<{
            name: "character";
            tableName: "wrappedProfiles";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        personality: drizzle_orm_pg_core.PgColumn<{
            name: "personality";
            tableName: "wrappedProfiles";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        personalityDesc: drizzle_orm_pg_core.PgColumn<{
            name: "personalityDesc";
            tableName: "wrappedProfiles";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        favTopics: drizzle_orm_pg_core.PgColumn<{
            name: "favTopics";
            tableName: "wrappedProfiles";
            dataType: "array";
            columnType: "PgArray";
            data: string[];
            driverParam: string | string[];
            notNull: false;
            hasDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: drizzle_orm.Column<{
                name: "favTopics";
                tableName: "wrappedProfiles";
                dataType: "string";
                columnType: "PgText";
                data: string;
                driverParam: string;
                notNull: false;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, object, object>;
        }, {}, {}>;
        rank: drizzle_orm_pg_core.PgColumn<{
            name: "rank";
            tableName: "wrappedProfiles";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        rankPercentage: drizzle_orm_pg_core.PgColumn<{
            name: "rankPercentage";
            tableName: "wrappedProfiles";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        updatedAt: drizzle_orm_pg_core.PgColumn<{
            name: "updatedAt";
            tableName: "wrappedProfiles";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const wrappedProfilesRelation: drizzle_orm.Relations<"wrappedProfiles", {
    users: drizzle_orm.One<"users", true>;
}>;
declare const merchandises: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "merchandises";
    schema: undefined;
    columns: {
        id: drizzle_orm_pg_core.PgColumn<{
            name: "id";
            tableName: "merchandises";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        name: drizzle_orm_pg_core.PgColumn<{
            name: "name";
            tableName: "merchandises";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        price: drizzle_orm_pg_core.PgColumn<{
            name: "price";
            tableName: "merchandises";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        stock: drizzle_orm_pg_core.PgColumn<{
            name: "stock";
            tableName: "merchandises";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        image: drizzle_orm_pg_core.PgColumn<{
            name: "image";
            tableName: "merchandises";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        createdAt: drizzle_orm_pg_core.PgColumn<{
            name: "createdAt";
            tableName: "merchandises";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        updatedAt: drizzle_orm_pg_core.PgColumn<{
            name: "updatedAt";
            tableName: "merchandises";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const merchandiseRelations: drizzle_orm.Relations<"merchandises", {
    merchandiseExchangeDetails: drizzle_orm.Many<"merchandiseExchangeDetails">;
}>;
declare const merchandiseExchanges: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "merchandiseExchanges";
    schema: undefined;
    columns: {
        id: drizzle_orm_pg_core.PgColumn<{
            name: "id";
            tableName: "merchandiseExchanges";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        userId: drizzle_orm_pg_core.PgColumn<{
            name: "userId";
            tableName: "merchandiseExchanges";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        status: drizzle_orm_pg_core.PgColumn<{
            name: "status";
            tableName: "merchandiseExchanges";
            dataType: "string";
            columnType: "PgEnumColumn";
            data: "Taken" | "Not Taken";
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: ["Taken", "Not Taken"];
            baseColumn: never;
        }, {}, {}>;
        createdAt: drizzle_orm_pg_core.PgColumn<{
            name: "createdAt";
            tableName: "merchandiseExchanges";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        updatedAt: drizzle_orm_pg_core.PgColumn<{
            name: "updatedAt";
            tableName: "merchandiseExchanges";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const merchandiseExchangeRelations: drizzle_orm.Relations<"merchandiseExchanges", {
    user: drizzle_orm.One<"users", true>;
    merchandiseExchangeDetails: drizzle_orm.Many<"merchandiseExchangeDetails">;
}>;
declare const merchandiseExchangeDetails: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "merchandiseExchangeDetails";
    schema: undefined;
    columns: {
        merchandiseExchangeId: drizzle_orm_pg_core.PgColumn<{
            name: "merchandiseExchangeId";
            tableName: "merchandiseExchangeDetails";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        merchandiseId: drizzle_orm_pg_core.PgColumn<{
            name: "merchandiseId";
            tableName: "merchandiseExchangeDetails";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        quantity: drizzle_orm_pg_core.PgColumn<{
            name: "quantity";
            tableName: "merchandiseExchangeDetails";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const merchandiseExchangeDetailsRelations: drizzle_orm.Relations<"merchandiseExchangeDetails", {
    merchandiseExchange: drizzle_orm.One<"merchandiseExchanges", true>;
    merchandise: drizzle_orm.One<"merchandises", true>;
}>;
type User = typeof users.$inferSelect;
type Profile = typeof profiles.$inferSelect;
type UserMatch = typeof userMatches.$inferSelect;
type Message = typeof messages.$inferSelect;
type Assignment = typeof assignments.$inferSelect;
type AssignmentSubmission = typeof assignmentSubmissions.$inferSelect;
type Character = typeof characters.$inferSelect;
type Event = typeof events.$inferSelect;
type EventPresence = typeof eventPresences.$inferSelect;
type ResetToken = typeof resetTokens.$inferSelect;
type Class = typeof classes.$inferSelect;
type PostTest = typeof postTests.$inferSelect;
type Notifications = typeof notifications.$inferSelect;
type WrappedProfiles = typeof wrappedProfiles.$inferSelect;
type Groups = typeof groups.$inferSelect;
type Merchandise = typeof merchandises.$inferSelect;
type MerchandiseExchange = typeof merchandiseExchanges.$inferSelect;
type MerchandiseExchangeDetail = typeof merchandiseExchangeDetails.$inferSelect;
type UserRole = (typeof roleEnum.enumValues)[number];
type UserFaculty = (typeof facultyEnum.enumValues)[number];
type UserGender = (typeof genderEnum.enumValues)[number];
type AssignmentType = (typeof assignmentTypeEnum.enumValues)[number];
type PresenceType = (typeof presenceTypeEnum.enumValues)[number];
type EventDay = (typeof eventDayEnum.enumValues)[number];
type PresenceEvent = (typeof presenceEventEnum.enumValues)[number];
type ClassDay = (typeof classDayEnum.enumValues)[number];
type Lembaga = (typeof lembagaEnum.enumValues)[number];

export { type Assignment, type AssignmentSubmission, type AssignmentType, type Character, type Class, type ClassDay, type Event, type EventDay, type EventPresence, type Groups, type Lembaga, MBTIEnum, type Merchandise, type MerchandiseExchange, type MerchandiseExchangeDetail, type Message, type Notifications, type PostTest, type PresenceEvent, type PresenceType, type Profile, type ResetToken, type User, type UserFaculty, type UserGender, type UserMatch, type UserRole, type WrappedProfiles, assignmentSubmissions, assignmentSubmissionsRelations, assignmentTypeEnum, assignments, characters, classDayEnum, classSessionEnum, classUserRelations, classes, createTable, eventDayEnum, eventPresences, eventPresencesRelations, events, eventsCharactersRelations, eventsRelations, facultyEnum, genderEnum, groupRelations, groups, lembagaEnum, merchandiseExchangeDetails, merchandiseExchangeDetailsRelations, merchandiseExchangeRelations, merchandiseExchangeStatusEnum, merchandiseExchanges, merchandiseRelations, merchandises, messages, messagesRelations, notifications, postTestRelations, postTests, presenceEventEnum, presenceTypeEnum, profiles, profilesRelations, resetTokenRelations, resetTokens, roleEnum, userMatches, userMatchesRelations, users, usersRelations, wrappedProfiles, wrappedProfilesRelation };
