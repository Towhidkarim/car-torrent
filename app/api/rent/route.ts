import connectMongoDB from '@/lib/mongodb/database';
import { Users } from '@/lib/mongodb/dbmodels';
import { RentDataType, UserType } from '@/lib/types';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const rentCarId = searchParams.get('carId');
  const duration = searchParams.get('days');
  const email = searchParams.get('email');

  if (!rentCarId && !duration) return;
  try {
    connectMongoDB();
    const user = (await Users.findOne({ email })) as UserType;
    const rentEndingDate = new Date();
    rentEndingDate.setDate(rentEndingDate.getDate() + Number(duration));

    if (user && rentCarId) {
      const newRent: RentDataType = {
        carId: rentCarId,
        rentStartingDate: new Date(),
        rentEndingDate,
      };
      const data = await Users.updateOne(
        { email },
        { $push: { rentals: newRent } }
      );
      return Response.json({ data }, { status: 200 });
    }
    return Response.json({ success: false }, { status: 500 });
  } catch (error) {
    return Response.json(error);
  }
}
