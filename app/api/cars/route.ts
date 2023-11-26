import { Cars } from '@/lib/mongodb/dbmodels';
import { generateCars } from '@/lib/mockgenerator';
import connectMongoDB from '@/lib/mongodb/database';
import { type CarData } from '@/lib/types';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const generatedCar = generateCars(1);
  await connectMongoDB();
  for (let i = 0; i < generatedCar.length; i++)
    await Cars.create(generatedCar[i]);
  return Response.json({ msg: 'success' });
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  await connectMongoDB();

  //const data = await Cars.aggregate(aggregation);
  const data: CarData[] = await Cars.find().limit(20).lean();
  return Response.json(data);
}
