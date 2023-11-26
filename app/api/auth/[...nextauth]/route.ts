import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authOptions } from '../AuthOptions';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
