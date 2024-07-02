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
    name: "user";
    schema: undefined;
    columns: {
        id: drizzle_orm_pg_core.PgColumn<{
            name: "id";
            tableName: "user";
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
            tableName: "user";
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
            tableName: "user";
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
            tableName: "user";
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
            tableName: "user";
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
            tableName: "user";
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
declare const profiles: drizzle_orm_pg_core.PgTableWithColumns<{
    name: "profile";
    schema: undefined;
    columns: {
        id: drizzle_orm_pg_core.PgColumn<{
            name: "id";
            tableName: "profile";
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
            tableName: "profile";
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
            tableName: "profile";
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
            tableName: "profile";
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
            tableName: "profile";
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
            tableName: "profile";
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
            tableName: "profile";
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
            tableName: "profile";
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
declare const usersRelations: drizzle_orm.Relations<"user", {
    profile: drizzle_orm.One<"profile", false>;
}>;
declare const profilesRelations: drizzle_orm.Relations<"profile", {
    users: drizzle_orm.One<"user", true>;
}>;
type User = typeof users.$inferSelect;
type Profile = typeof profiles.$inferSelect;
type UserRole = (typeof roleEnum.enumValues)[number];
type UserFaculty = (typeof facultyEnum.enumValues)[number];
type UserGender = (typeof genderEnum.enumValues)[number];

export { type Profile, type User, type UserFaculty, type UserGender, type UserRole, campusEnum, createTable, facultyEnum, genderEnum, profiles, profilesRelations, roleEnum, users, usersRelations };
