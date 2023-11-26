import { CarData } from '@/lib/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import Rating from '../ui/rating';
import FavoriteButton from '../CarCard/favoriteButton';
import RentButton from './rentbutton';

const CarDetails = ({
  carName,
  description,
  category,
  steeringMode,
  gasoline,
  capacity,
  currentRent,
  actualRent,
}: CarData) => {
  const carTagClass = 'flex items-center justify-between';
  const carTagName = 'text-muted-foreground';
  const carTagValue = 'font-bold text-muted-foreground text-right';

  const tagList = [
    { key: 'Car Type', value: category },
    { key: 'Steering', value: steeringMode },
    { key: 'Capacity', value: capacity + ' people' },
    { key: 'Gasoline', value: gasoline + 'L' },
  ];

  return (
    <Card className='min-w-[40%] lg:max-w-2xl w-full border-none shadow-md rounded-xl max-lg:rounded-t-none lg:rounded-l-none'>
      <CardHeader className='flex flex-row items-start justify-between'>
        <CardTitle className='text-3xl'>
          <span className='font-bold '>{carName}</span>

          <section className='flex items-center justify-start gap-3 mt-2'>
            <Rating rating={3} />
            <span className='text-base font-light text-muted-foreground'>
              20 reviews
            </span>
          </section>
        </CardTitle>
        <FavoriteButton />
      </CardHeader>
      <CardDescription className='m-6 text-base lg:text-xl leading-[200%]'>
        {description}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam debitis
        quae ipsa? Recusandae mollitia excepturi laboriosam beatae fugit
        accusantium.
      </CardDescription>
      <CardContent className='grid grid-cols-2  my-6 gap-x-[10%] gap-y-4 md:text-base text-sm'>
        {tagList.map((item, i) => (
          <ul className={carTagClass} key={i}>
            <li className={carTagName} key={item.key}>
              {item.key}
            </li>
            <li className={carTagValue} key={item.value}>
              {item.value}
            </li>
          </ul>
        ))}
      </CardContent>
      <CardFooter className='my-4'>
        <div className='flex items-center justify-between w-full mt-4'>
          <div>
            <span className='text-3xl font-bold'>{`$${currentRent}/`}</span>
            <span className=' text-muted-foreground'>{'day'}</span>
            {actualRent && (
              <div className='my-1 line-through text-muted-foreground'>
                {`$${actualRent}/day`}
              </div>
            )}
          </div>
          <RentButton />
        </div>
      </CardFooter>
    </Card>
  );
};

export default CarDetails;
