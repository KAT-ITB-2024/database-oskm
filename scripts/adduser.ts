// db-utils.ts (or a suitable file name)
import fs from "fs";
import csvParser from "csv-parser";
import {
  users,
  profiles,
  type UserRole,
  type campusEnum,
  type UserFaculty,
  type UserGender,
} from "../src/schema";
import bcrypt from "bcrypt";
import { type PostgresJsDatabase } from "drizzle-orm/postgres-js/driver";
type CSVUser = {
  name: string;
  nim: string;
  faculty: UserFaculty;
  gender: UserGender;
  campus: (typeof campusEnum.enumValues)[number];
};

export async function addUsersFromCSV(
  db: PostgresJsDatabase<Record<string, never>>,
  filePath: string,
  roletype: UserRole
) {
  try {
    const stream = fs.createReadStream(filePath).pipe(csvParser());

    stream.on("data", (data: CSVUser) => {
      void (async () => {
        try {
          const pass = await bcrypt.hash(roletype + "-" + data.nim, 10);
          const [addedUser] = await db
            .insert(users)
            .values({
              nim: data.nim,
              password: pass,
              role: roletype,
            })
            .returning();

          if (!addedUser) {
            throw new Error(`Failed to add user: ${data.nim}`);
          }

          await db.insert(profiles).values({
            campus: data.campus,
            faculty: data.faculty,
            gender: data.gender,
            name: data.name,
            userId: addedUser.id,
          });

          console.log(`User added: ${data.nim}`);
        } catch (error) {
          console.error(`Failed to add user: ${data.nim}`, error);
        }
      })();
    });

    stream.on("end", () => {
      console.log("CSV processing complete");
    });

    stream.on("error", (error) => {
      console.error("Error processing CSV file:", error);
    });
  } catch (error) {
    console.error("Error processing CSV file:", error);
  }
}
