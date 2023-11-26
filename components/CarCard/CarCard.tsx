import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { type CarData } from '@/lib/types';
import Image from 'next/image';
import { FaGasPump } from 'react-icons/fa';
import { GiSteeringWheel } from 'react-icons/gi';
import { BsPeopleFill } from 'react-icons/bs';
import carImg from '@/Assets/image 7.png';
import { Button } from '../ui/button';
import FavoriteButton from './favoriteButton';
import CarTag from './carTag';
import LinkButton from '../ui/linkbutton';

const CarCard = ({
  _id,
  carId,
  carName,
  category,
  gasoline,
  steeringMode,
  capacity,
  currentRent,
  actualRent,
}: CarData) => {
  return (
    <Card className='min-w-[300px] min-h-[390px] my-2 border-none shadow-md'>
      <CardHeader>
        <CardTitle className='flex items-center justify-between text-xl font-bold '>
          {carName}
          <FavoriteButton carId={carId} />
        </CardTitle>
        <CardDescription>{category}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image src={carImg} alt='car' className='my-8 ' />
      </CardContent>
      <CardFooter className='flex flex-col'>
        <div className='flex items-center justify-around w-full gap-3 text-sm'>
          <CarTag
            icon={<FaGasPump />}
            tooltipText='Gasoline'
            info={`${gasoline}L`}
          />
          <CarTag
            icon={<GiSteeringWheel />}
            tooltipText='Steering Mode'
            info={steeringMode}
          />
          <CarTag
            icon={<BsPeopleFill />}
            tooltipText='Capacity'
            info={`${capacity} people`}
          />
        </div>
        <div className='flex items-center justify-between w-full mt-4'>
          <div className=''>
            <span className='text-2xl font-bold'>{`$${currentRent}/`}</span>
            <span className='text-sm text-muted-foreground'>{'day'}</span>
            {actualRent && (
              <div className='my-1 text-sm line-through text-muted-foreground'>
                {`$${actualRent}/day`}
              </div>
            )}
          </div>
          <LinkButton
            href={`/car/${_id}`}
            className='p-5 text-base font-semibold'
          >
            Rent Now
          </LinkButton>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
