import NextAuth from "next-auth";
import { redirect } from "next/dist/server/api-utils";
import { authOptions } from "~/server/auth";

export default NextAuth(authOptions);

