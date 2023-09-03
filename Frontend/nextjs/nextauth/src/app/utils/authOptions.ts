import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
  providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string
        }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email" },
        password: { label: "Password" },
      },
      authorize(credentials, req) {
        if (
          credentials?.email === "admin@example.com" &&
          credentials.password === "admin"
        ) {
          return {
            id: "1",
            email: "admin@example.com",
          };
        }

        return null;
      },
    }),
  ],
};
