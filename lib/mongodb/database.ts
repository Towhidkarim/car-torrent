import { connect, Types } from 'mongoose';
import { CarData, UserType } from '../types';
import { Cars, Users } from './dbmodels';

const connectMongoDB = async () => {
  try {
    await connect(process.env.MONGODB_URI_CARS);
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;

export async function getCarDataFromDB(responseCount: number) {
  await connectMongoDB();
  const data: CarData[] = await Cars.find().limit(responseCount).lean();
  return data;
}

export async function getCarDataByFilter({
  skip,
  limit,
  categoryArray,
}: {
  skip?: number;
  limit?: number;
  categoryArray?: string[];
}) {
  await connectMongoDB();
  const entryCount = await Cars.find().count();

  const data: CarData[] = await Cars.find({
    category: { $in: categoryArray },
  })
    .skip(skip ?? 0)
    .limit(limit ?? 12)
    .lean();

  return { data, entryCount };
}

export async function getCarById(id: string) {
  if (!Types.ObjectId.isValid(id)) return null;
  await connectMongoDB();
  try {
    const data = await Cars.findById(id).lean();
    return data as CarData | null;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function getCarsOnDiscount() {
  await connectMongoDB();
  try {
    const data: CarData[] = await Cars.find({
      actualRent: { $ne: undefined },
    }).lean();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getUserDetail(email: string) {
  await connectMongoDB();
  const user: UserType | null = await Users.findOne({ email }, { password: 0 });
  return user;
}
