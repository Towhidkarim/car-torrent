import connectMongoDB from '@/lib/mongodb/database';
import { Users } from '@/lib/mongodb/dbmodels';
import { UserType } from '@/lib/types';
import { emailIsValid, passwordIsValid, usernameIsValid } from '@/lib/utils';
import { NextRequest } from 'next/server';
import bcrypt from 'bcrypt';

export async function POST(req: NextRequest) {
  const newUser = (await req.json()) as UserType;
  if (
    passwordIsValid(newUser.password) &&
    usernameIsValid(newUser.username) &&
    emailIsValid(newUser.email)
  ) {
    bcrypt.genSalt(10, (error, salt) => {
      bcrypt.hash(newUser.password, salt, async (error, hash) => {
        newUser.password = hash;
        await connectMongoDB();
        newUser.password = await Users.create(newUser);
      });
    });
    return Response.json({}, { statusText: 'success' });
  } else return Response.json({ error: 'Data does not meet criteria' });
}
