import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const hardcodedAdmin = {
          email: "admin@example.com",
          password: "admin123" // Change this to a more secure password
        };

        if (
          credentials.email === hardcodedAdmin.email &&
          credentials.password === hardcodedAdmin.password
        ) {
          return { id: "1", name: "Admin", email: hardcodedAdmin.email };
        }

        throw new Error("Invalid credentials!");
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
