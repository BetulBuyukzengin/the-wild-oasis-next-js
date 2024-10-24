import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  //! User authentication
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },
    //! Create new user if there is no existing user
    async signIn({ user, account, profile }) {
      try {
        const existing = await getGuest(user.email);
        if (!existing)
          await createGuest({ email: user.email, fullName: user.name });
        return true;
      } catch {
        return false;
      }
    },
    //* We cannot use the session in signIn. Because the session has not been created yet. That's why we made it separate.
    //! Create guest id
    async session({ session, user }) {
      const guest = await getGuest(session.user.email);
      session.user.guestId = guest.id;
      return session;
    },
  },
  //! Redirect to a specially created login page
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
