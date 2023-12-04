import connectMongoDB from '@/lib/mongodb/database';
import { Cars, Users } from '@/lib/mongodb/dbmodels';
import { CarData, RentDataType } from '@/lib/types';
import { getServerSession } from 'next-auth';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const session = await getServerSession();
  const id = searchParams.get('id');
  const duration = searchParams.get('duration');
  if (!id || !duration || !session)
    return Response.json({ success: false }, { status: 500 });
  else {
    try {
      await connectMongoDB();
      const carData: CarData | null = await Cars.findById(id);
      if (!carData) return Response.json({ success: false }, { status: 500 });
      //const cost = carData?.currentRent * Number(duration);
      const rentEndDate = new Date();
      rentEndDate.setDate(rentEndDate.getDate() + Number(duration));
      await Users.updateOne(
        { email: session?.user?.email },
        {
          $push: {
            rentals: {
              carId: carData._id,
              rentStartingDate: new Date(),
              rentEndingDate: rentEndDate,
            },
          },
        }
      );
      return Response.json({ success: true }, { status: 200 });
    } catch (error) {
      return Response.json({ success: false }, { status: 500 });
    }
  }
}
