import { integer, pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

export const userTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
  role: varchar({ length: 255 }).notNull().default("user"),
  name: varchar({ length: 255 }),
  address: text(),
});

export const createUserSchema = createInsertSchema(userTable);

export const loginUserSchema = createInsertSchema(userTable).pick({
  email: true,
  password: true,
});
