import { Cars } from '@/lib/mongodb/dbmodels';
import { generateCars } from '@/lib/mockgenerator';
import connectMongoDB from '@/lib/mongodb/database';
import { type CarData } from '@/lib/types';
import { NextRequest } from 'next/server';
import { NextApiRequest } from 'next';
import { getServerSession } from 'next-auth';

export async function POST(request: NextRequest) {
  const session = getServerSession();
  const { searchParams } = new URL(request.url);
  if (!request.body || !session)
    return Response.json({ success: false }, { status: 500 });

  await connectMongoDB();
  try {
    const data: CarData | null = await JSON.parse(
      searchParams.get('data') || ''
    );
    const res = await Cars.create(data);
    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ success: false }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  await connectMongoDB();

  //const data = await Cars.aggregate(aggregation);
  const data: CarData[] = await Cars.find().limit(20).lean();
  return Response.json(data);
}
