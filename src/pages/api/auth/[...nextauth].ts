import NextAuth from "next-auth";
import { redirect } from "next/dist/server/api-utils";
import { authOptions } from "~/server/auth";

export default NextAuth(authOptions);

callbacks: {
    async await redirect({url, baseUrl }) {
        if (url.startsWith("/")) return `${baseUrl}${url}`
        else if (new URL(url).origin === baseUrl) return url 
        return baseUrl
    }
}