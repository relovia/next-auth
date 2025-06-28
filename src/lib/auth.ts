import { NextAuthOptions } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";

export const authOptions: NextAuthOptions = {
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: process.env.AUTH0_ISSUER!,
      authorization: {
        params: {
          prompt: "login",
        },
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, account, user }) {
      if (account && user) {
        token.id = user.id;
        if (user.email) {
          token.email = user.email;
        }
        token.accessToken = account.access_token;

        const adminEmails = ["adminacc@test.com"]; // ileride genişletilebilir
        token.role = adminEmails.includes(user.email ?? "") ? "admin" : "user";
      }

      // console.log("JWT Callback - Token:", token);
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      session.accessToken = token.accessToken;

      // console.log("Session Callback - Session:", session);
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};
