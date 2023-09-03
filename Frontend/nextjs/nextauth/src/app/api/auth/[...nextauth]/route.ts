import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: "28774688777-nrt54grpi7om94nuud21qd98f22miilj.apps.googleusercontent.com",
      clientSecret: "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"

    }),
  ],
});

export { handler as GET, handler as POST };
