import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { RentDataType, type CarData } from '@/lib/types';
import Image from 'next/image';
import { MdOutlineTimer } from 'react-icons/md';
import carImg from '@/Assets/image 7.png';
import { Button } from '../ui/button';
import FavoriteButton from './favoriteButton';
import LinkButton from '../ui/linkbutton';
import connectMongoDB, { getCarById } from '@/lib/mongodb/database';
import TimeCounter from './TimeCounter';

const RentCard = async ({ rentData }: { rentData: RentDataType }) => {
  await connectMongoDB();
  const rentCarData: CarData | null = await getCarById(rentData.carId);
  const date1 = rentData.rentStartingDate;
  const date2 = rentData.rentEndingDate;
  const timeDifference = (date2.getTime() - new Date().getTime()) / 36e5;

  return (
    <Card className='w-[300px] min-h-[350px] my-2 border-none shadow-md'>
      <CardHeader>
        <CardTitle className='flex items-center justify-between text-xl font-bold '>
          {rentCarData?.carName || 'invalid'}
        </CardTitle>
        <CardDescription>{rentCarData?.category}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image src={carImg} alt='car' className='my-8 ' />
      </CardContent>
      <CardFooter className='flex flex-col'>
        <h1 className='flex flex-row items-center justify-center gap-1 text-xl font-semibold '>
          <span className='font-bold text2xl'>
            <MdOutlineTimer />
          </span>
          <p className='text-xl font-semibold'>
            {timeDifference > 0 ? (
              <>
                <TimeCounter timeHours={timeDifference} />
                <small>left</small>
              </>
            ) : (
              <h1>Rent Expired</h1>
            )}
          </p>
        </h1>
      </CardFooter>
    </Card>
  );
};

export default RentCard;
