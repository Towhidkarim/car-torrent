import connectMongoDB from '@/lib/mongodb/database';
import { Cars } from '@/lib/mongodb/dbmodels';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  await connectMongoDB();
  const aggregation = [
    {
      $search: {
        index: 'searchCars',
        autocomplete: {
          query: searchParams.get('keyword'),
          path: 'carName',
          fuzzy: { maxEdits: 1, prefixLength: 1, maxExpansions: 256 },
        },
      },
    },
    { $limit: 20 },
  ];
  const data = await Cars.aggregate(aggregation);
  // const data: CarData[] = await Cars.find().lean();
  return Response.json(data);
}
