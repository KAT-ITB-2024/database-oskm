import * as drizzle_orm from 'drizzle-orm';
import * as drizzle_orm_pg_core from 'drizzle-orm/pg-core';

declare const createTable: drizzle_orm_pg_core.PgTableFn<undefined>;
declare const facultyEnum: drizzle_orm_pg_core.PgEnum<["FITB", "FMIPA", "FSRD", "FTMD", "FTTM", "FTSL", "FTI", "SAPPK", "SBM", "SF", "SITH", "STEI"]>;
declare const lembagaEnum: drizzle_orm_pg_core.PgEnum<["HMJ", "Unit"]>;
declare const roleEnum: drizzle_orm_pg_core.PgEnum<["Peserta", "Mentor", "Mamet"]>;
declare const genderEnum: drizzle_orm_pg_core.PgEnum<["male", "female"]>;
declare const campusEnum: drizzle_orm_pg_core.PgEnum<["Ganesha", "Jatinangor", "Cirebon"]>;
declare const assignmentTypeEnum: drizzle_orm_pg_core.PgEnum<["Daily", "Side"]>;
declare const presenceTypeEnum: drizzle_orm_pg_core.PgEnum<["Hadir", "Izin/Sakit", "Alpha"]>;
declare const eventDayEnum: drizzle_orm_pg_core.PgEnum<["Day 1", "Day 2", "Day 3", "Day 4"]>;
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
            notNull: true;
            hasDefault: true;
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
            data: "Daily" | "Side";
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: ["Daily", "Side"];
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
    };
    dialect: "pg";
}>;
declare const eventsCharacterRelations: drizzle_orm.Relations<"events", {
    character: drizzle_orm.One<"characters", true>;
}>;
declare const eventsRelations: drizzle_orm.Relations<"events", {
    eventPresences: drizzle_orm.Many<"eventPresences">;
    eventAssignments: drizzle_orm.Many<"eventAssignments">;
}>;
declare const eventPresences: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "eventPresences";
    schema: undefined;
    columns: {
        id: drizzle_orm_pg_core.PgColumn<{
            name: "id";
            tableName: "eventPresences";
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
            tableName: "eventPresences";
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
            tableName: "eventPresences";
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
            tableName: "eventPresences";
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
            tableName: "eventPresences";
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
            tableName: "eventPresences";
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
            tableName: "eventPresences";
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
            tableName: "eventPresences";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const eventPresencesRelations: drizzle_orm.Relations<"eventPresences", {
    event: drizzle_orm.One<"events", true>;
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
    event: drizzle_orm.One<"events", true>;
    assignment: drizzle_orm.One<"assignments", true>;
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
type EventAssignment = typeof eventAssignments.$inferSelect;
type UserRole = (typeof roleEnum.enumValues)[number];
type UserFaculty = (typeof facultyEnum.enumValues)[number];
type UserGender = (typeof genderEnum.enumValues)[number];
type UserCampus = (typeof campusEnum.enumValues)[number];

type schema_Assignment = Assignment;
type schema_AssignmentSubmission = AssignmentSubmission;
type schema_Character = Character;
type schema_Event = Event;
type schema_EventAssignment = EventAssignment;
type schema_EventPresence = EventPresence;
type schema_Message = Message;
type schema_Profile = Profile;
type schema_User = User;
type schema_UserCampus = UserCampus;
type schema_UserFaculty = UserFaculty;
type schema_UserGender = UserGender;
type schema_UserMatch = UserMatch;
type schema_UserRole = UserRole;
declare const schema_assignmentSubmissions: typeof assignmentSubmissions;
declare const schema_assignmentSubmissionsRelations: typeof assignmentSubmissionsRelations;
declare const schema_assignmentTypeEnum: typeof assignmentTypeEnum;
declare const schema_assignments: typeof assignments;
declare const schema_campusEnum: typeof campusEnum;
declare const schema_characters: typeof characters;
declare const schema_createTable: typeof createTable;
declare const schema_eventAssignments: typeof eventAssignments;
declare const schema_eventAssignmentsRelations: typeof eventAssignmentsRelations;
declare const schema_eventDayEnum: typeof eventDayEnum;
declare const schema_eventPresences: typeof eventPresences;
declare const schema_eventPresencesRelations: typeof eventPresencesRelations;
declare const schema_events: typeof events;
declare const schema_eventsCharacterRelations: typeof eventsCharacterRelations;
declare const schema_eventsRelations: typeof eventsRelations;
declare const schema_facultyEnum: typeof facultyEnum;
declare const schema_genderEnum: typeof genderEnum;
declare const schema_lembagaEnum: typeof lembagaEnum;
declare const schema_messages: typeof messages;
declare const schema_messagesRelations: typeof messagesRelations;
declare const schema_presenceEventEnum: typeof presenceEventEnum;
declare const schema_presenceTypeEnum: typeof presenceTypeEnum;
declare const schema_profiles: typeof profiles;
declare const schema_profilesRelations: typeof profilesRelations;
declare const schema_roleEnum: typeof roleEnum;
declare const schema_userMatches: typeof userMatches;
declare const schema_userMatchesRelations: typeof userMatchesRelations;
declare const schema_users: typeof users;
declare const schema_usersRelations: typeof usersRelations;
declare namespace schema {
  export { type schema_Assignment as Assignment, type schema_AssignmentSubmission as AssignmentSubmission, type schema_Character as Character, type schema_Event as Event, type schema_EventAssignment as EventAssignment, type schema_EventPresence as EventPresence, type schema_Message as Message, type schema_Profile as Profile, type schema_User as User, type schema_UserCampus as UserCampus, type schema_UserFaculty as UserFaculty, type schema_UserGender as UserGender, type schema_UserMatch as UserMatch, type schema_UserRole as UserRole, schema_assignmentSubmissions as assignmentSubmissions, schema_assignmentSubmissionsRelations as assignmentSubmissionsRelations, schema_assignmentTypeEnum as assignmentTypeEnum, schema_assignments as assignments, schema_campusEnum as campusEnum, schema_characters as characters, schema_createTable as createTable, schema_eventAssignments as eventAssignments, schema_eventAssignmentsRelations as eventAssignmentsRelations, schema_eventDayEnum as eventDayEnum, schema_eventPresences as eventPresences, schema_eventPresencesRelations as eventPresencesRelations, schema_events as events, schema_eventsCharacterRelations as eventsCharacterRelations, schema_eventsRelations as eventsRelations, schema_facultyEnum as facultyEnum, schema_genderEnum as genderEnum, schema_lembagaEnum as lembagaEnum, schema_messages as messages, schema_messagesRelations as messagesRelations, schema_presenceEventEnum as presenceEventEnum, schema_presenceTypeEnum as presenceTypeEnum, schema_profiles as profiles, schema_profilesRelations as profilesRelations, schema_roleEnum as roleEnum, schema_userMatches as userMatches, schema_userMatchesRelations as userMatchesRelations, schema_users as users, schema_usersRelations as usersRelations };
}

export { eventPresences as A, eventPresencesRelations as B, eventAssignments as C, eventAssignmentsRelations as D, type UserMatch as E, type Assignment as F, type AssignmentSubmission as G, type Character as H, type Event as I, type EventPresence as J, type EventAssignment as K, type UserRole as L, type Message as M, type UserFaculty as N, type UserGender as O, type Profile as P, type UserCampus as Q, type User as U, campusEnum as a, assignmentTypeEnum as b, createTable as c, presenceEventEnum as d, eventDayEnum as e, facultyEnum as f, genderEnum as g, usersRelations as h, profiles as i, profilesRelations as j, userMatches as k, lembagaEnum as l, userMatchesRelations as m, messages as n, messagesRelations as o, presenceTypeEnum as p, assignments as q, roleEnum as r, schema as s, assignmentSubmissions as t, users as u, assignmentSubmissionsRelations as v, characters as w, events as x, eventsCharacterRelations as y, eventsRelations as z };
