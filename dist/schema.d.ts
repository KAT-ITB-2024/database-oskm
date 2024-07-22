import * as drizzle_orm from 'drizzle-orm';
import * as drizzle_orm_pg_core from 'drizzle-orm/pg-core';

declare const createTable: drizzle_orm_pg_core.PgTableFn<undefined>;
declare const facultyEnum: drizzle_orm_pg_core.PgEnum<["FITB", "FMIPA", "FSRD", "FTMD", "FTTM", "FTSL", "FTI", "SAPPK", "SBM", "SF", "SITH", "STEI"]>;
declare const roleEnum: drizzle_orm_pg_core.PgEnum<["Peserta", "Mentor", "Mamet"]>;
declare const genderEnum: drizzle_orm_pg_core.PgEnum<["male", "female"]>;
declare const campusEnum: drizzle_orm_pg_core.PgEnum<["Ganesha", "Jatinangor", "Cirebon"]>;
declare const assignmentTypeEnum: drizzle_orm_pg_core.PgEnum<["daily", "side"]>;
declare const presenceTypeEnum: drizzle_orm_pg_core.PgEnum<["Hadir", "Izin/Sakit", "Alpha"]>;
declare const eventDayEnum: drizzle_orm_pg_core.PgEnum<["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"]>;
declare const presenceEventEnum: drizzle_orm_pg_core.PgEnum<["Opening", "Closing"]>;
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
            data: "Peserta" | "Mentor" | "Mamet";
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: ["Peserta", "Mentor", "Mamet"];
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
            hasDefault: true;
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
}>;
declare const profiles: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "profiles";
    schema: undefined;
    columns: {
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
            data: "male" | "female";
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: ["male", "female"];
            baseColumn: never;
        }, {}, {}>;
        campus: drizzle_orm_pg_core.PgColumn<{
            name: "campus";
            tableName: "profiles";
            dataType: "string";
            columnType: "PgEnumColumn";
            data: "Ganesha" | "Jatinangor" | "Cirebon";
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: ["Ganesha", "Jatinangor", "Cirebon"];
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
            hasDefault: true;
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
        groupNumber: drizzle_orm_pg_core.PgColumn<{
            name: "groupNumber";
            tableName: "profiles";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
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
    };
    dialect: "pg";
}>;
declare const profilesRelations: drizzle_orm.Relations<"profiles", {
    users: drizzle_orm.One<"users", true>;
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
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
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
        files: drizzle_orm_pg_core.PgColumn<{
            name: "files";
            tableName: "assignments";
            dataType: "array";
            columnType: "PgArray";
            data: string[];
            driverParam: string | string[];
            notNull: false;
            hasDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: drizzle_orm.Column<{
                name: "files";
                tableName: "assignments";
                dataType: "string";
                columnType: "PgVarchar";
                data: string;
                driverParam: string;
                notNull: false;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, object, object>;
        }, {}, {}>;
        assignmentType: drizzle_orm_pg_core.PgColumn<{
            name: "assignmentType";
            tableName: "assignments";
            dataType: "string";
            columnType: "PgEnumColumn";
            data: "daily" | "side";
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: ["daily", "side"];
            baseColumn: never;
        }, {}, {}>;
        point: drizzle_orm_pg_core.PgColumn<{
            name: "point";
            tableName: "assignments";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: false;
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
            hasDefault: false;
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
        files: drizzle_orm_pg_core.PgColumn<{
            name: "files";
            tableName: "assignmentSubmissions";
            dataType: "array";
            columnType: "PgArray";
            data: string[];
            driverParam: string | string[];
            notNull: false;
            hasDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: drizzle_orm.Column<{
                name: "files";
                tableName: "assignmentSubmissions";
                dataType: "string";
                columnType: "PgVarchar";
                data: string;
                driverParam: string;
                notNull: false;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, object, object>;
        }, {}, {}>;
        createdAt: drizzle_orm_pg_core.PgColumn<{
            name: "createdAt";
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
declare const character: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "character";
    schema: undefined;
    columns: {
        name: drizzle_orm_pg_core.PgColumn<{
            name: "name";
            tableName: "character";
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
            tableName: "character";
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
    name: "event";
    schema: undefined;
    columns: {
        id: drizzle_orm_pg_core.PgColumn<{
            name: "id";
            tableName: "event";
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
            tableName: "event";
            dataType: "string";
            columnType: "PgEnumColumn";
            data: "Day 1" | "Day 2" | "Day 3" | "Day 4" | "Day 5";
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"];
            baseColumn: never;
        }, {}, {}>;
        eventDate: drizzle_orm_pg_core.PgColumn<{
            name: "eventDate";
            tableName: "event";
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
            tableName: "event";
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
            tableName: "event";
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
            tableName: "event";
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
            tableName: "event";
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
            tableName: "event";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        updatedAt: drizzle_orm_pg_core.PgColumn<{
            name: "updatedAt";
            tableName: "event";
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
            tableName: "event";
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
            tableName: "event";
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
declare const eventsCharacterRelations: drizzle_orm.Relations<"event", {
    character: drizzle_orm.One<"character", true>;
}>;
declare const eventsRelations: drizzle_orm.Relations<"event", {
    eventPresences: drizzle_orm.Many<"eventPresence">;
    eventAssignments: drizzle_orm.Many<"eventAssignments">;
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
        createdAt: drizzle_orm_pg_core.PgColumn<{
            name: "createdAt";
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
    event: drizzle_orm.One<"event", true>;
    user: drizzle_orm.One<"users", true>;
}>;
declare const eventAssignments: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "eventAssignments";
    schema: undefined;
    columns: {
        id: drizzle_orm_pg_core.PgColumn<{
            name: "id";
            tableName: "eventAssignments";
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
            tableName: "eventAssignments";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        assignmentId: drizzle_orm_pg_core.PgColumn<{
            name: "assignmentId";
            tableName: "eventAssignments";
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
declare const eventAssignmentsRelations: drizzle_orm.Relations<"eventAssignments", {
    event: drizzle_orm.One<"event", true>;
    assignment: drizzle_orm.One<"assignments", true>;
}>;
type User = typeof users.$inferSelect;
type Profile = typeof profiles.$inferSelect;
type UserMatch = typeof userMatches.$inferSelect;
type Message = typeof messages.$inferSelect;
type Assignment = typeof assignments.$inferSelect;
type AssignmentSubmission = typeof assignmentSubmissions.$inferSelect;
type Character = typeof character.$inferSelect;
type Event = typeof events.$inferSelect;
type EventPresence = typeof eventPresences.$inferSelect;
type EventAssignment = typeof eventAssignments.$inferSelect;
type UserRole = (typeof roleEnum.enumValues)[number];
type UserFaculty = (typeof facultyEnum.enumValues)[number];
type UserGender = (typeof genderEnum.enumValues)[number];
type UserCampus = (typeof campusEnum.enumValues)[number];

export { type Assignment, type AssignmentSubmission, type Character, type Event, type EventAssignment, type EventPresence, type Message, type Profile, type User, type UserCampus, type UserFaculty, type UserGender, type UserMatch, type UserRole, assignmentSubmissions, assignmentSubmissionsRelations, assignmentTypeEnum, assignments, campusEnum, character, createTable, eventAssignments, eventAssignmentsRelations, eventDayEnum, eventPresences, eventPresencesRelations, events, eventsCharacterRelations, eventsRelations, facultyEnum, genderEnum, messages, messagesRelations, presenceEventEnum, presenceTypeEnum, profiles, profilesRelations, roleEnum, userMatches, userMatchesRelations, users, usersRelations };
