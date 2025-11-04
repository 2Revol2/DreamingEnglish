import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/prisma/prismaClient";

const clientId = process.env.NODE_ENV === "development" ? process.env.GITHUB_ID_DEV : process.env.GITHUB_ID_PROD;
const clientSecret =
  process.env.NODE_ENV === "development" ? process.env.GITHUB_SECRET_DEV : process.env.GITHUB_SECRET_PROD;

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: clientId || "",
      clientSecret: clientSecret || "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email! },
        });

        if (!existingUser) {
          await prisma.user.create({
            data: {
              email: user.email!,
              image: user.image,
              name: user.name || `User #${user.id}`,
            },
          });
        }

        return true;
      } catch (error) {
        console.error("SignIn error:", error);
        return false;
      }
    },
  },

  debug: true,
});

export { handler as GET, handler as POST };
