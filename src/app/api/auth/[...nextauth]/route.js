import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  secret: process.env.NEXT_PUBLIC_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        // Validation
        if (!email || !password) {
          return null;
        }

        // Connect MongoDB
        const db = await connectDB();

        // User collection
        const currentUser = await db.collection("users").findOne({ email });

        // Check User Exist
        if (!currentUser) {
          return null;
        }
        // Match Password
        const matchPass = bcrypt.compareSync(password, currentUser.password);
        if (!matchPass) {
          return null;
        }

        return currentUser;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        token.photo = user.photo;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.photo = token.photo;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
