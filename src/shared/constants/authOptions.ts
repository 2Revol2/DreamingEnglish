import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/shared/lib/prisma/prismaClient";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "Guest",
      credentials: {},
      async authorize() {
        const user = await prisma.user.findUnique({
          where: { email: "guest@test.com" },
        });

        if (!user) return null;
        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email! },
        });

        if (existingUser) {
          await prisma.user.update({
            where: { email: existingUser.email!, id: existingUser.id },
            data: {
              image: user.image,
            },
          });
        }

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
    async jwt({ token, user }) {
      if (user) {
        const dbUser = await prisma.user.findUnique({
          where: { email: user.email! },
          select: {
            id: true,
            totalInput: true,
            dailyGoal: true,
            email: true,
            name: true,
            image: true,
            level: true,
            password: false,
          },
        });

        if (dbUser) {
          token.user = {
            ...dbUser,
            email: dbUser.email || "",
            name: dbUser.name || "",
            image: dbUser.image || "",
          };
        }
      }
      return token;
    },

    async session({ session, token }) {
      if (token.user) {
        session.user = token.user;
      }
      return session;
    },
  },
};
