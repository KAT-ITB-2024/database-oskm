import * as drizzle_orm from 'drizzle-orm';
import * as drizzle_orm_pg_core from 'drizzle-orm/pg-core';

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
declare const createTable: drizzle_orm_pg_core.PgTableFn<undefined>;
declare const facultyEnum: drizzle_orm_pg_core.PgEnum<["FITB", "FMIPA", "FSRD", "FTMD", "FTTM", "FTSL", "FTI", "SAPPK", "SBM", "SF", "SITH", "STEI"]>;
declare const roleEnum: drizzle_orm_pg_core.PgEnum<["Peserta", "Mentor", "Mamet"]>;
declare const genderEnum: drizzle_orm_pg_core.PgEnum<["male", "female"]>;
declare const campusEnum: drizzle_orm_pg_core.PgEnum<["Ganesha", "Jatinangor", "Cirebon"]>;
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
type User = typeof users.$inferSelect;
type Profile = typeof profiles.$inferSelect;
type UserMatch = typeof userMatches.$inferSelect;
type Message = typeof messages.$inferSelect;
type UserRole = (typeof roleEnum.enumValues)[number];
type UserFaculty = (typeof facultyEnum.enumValues)[number];
type UserGender = (typeof genderEnum.enumValues)[number];
type UserCampus = (typeof campusEnum.enumValues)[number];

export { type Message, type Profile, type User, type UserCampus, type UserFaculty, type UserGender, type UserMatch, type UserRole, campusEnum, createTable, facultyEnum, genderEnum, messages, messagesRelations, profiles, profilesRelations, roleEnum, userMatches, userMatchesRelations, users, usersRelations };
