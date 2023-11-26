import connectMongoDB from '@/lib/mongodb/database';
import { Users } from '@/lib/mongodb/dbmodels';
import { UserType } from '@/lib/types';
import { type NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        await connectMongoDB();

        const user: UserType | null = await Users.findOne({
          email: credentials?.email,
        }).lean();
        if (user) {
          const passIsCorrect = await bcrypt.compare(
            credentials?.password || '',
            user.password
          );
          if (passIsCorrect)
            return {
              id: user._id,
              email: user.email,
              name: user.username,
            } as any;
        } else return null;

        // Add logic here to look up the user from the credentials supplied
      },
    }),
  ],
  pages: {
    signIn: '/user/signin',
  },
  secret: process.env.NEXTAUTH_SECRET,
};
