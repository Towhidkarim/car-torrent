import { Skeleton } from '../ui/skeleton';
import LinkButton from '../ui/linkbutton';
import Image from 'next/image';
import poster from '@/Assets/offerPoster.jpg';
import MapAlt from '@/Assets/Maps.svg';
import CarAlt from '@/Assets/image 7.png';
import Top5 from '@/Assets/top5.svg';
import connectMongoDB, { getCarsOnDiscount } from '@/lib/mongodb/database';
import Link from 'next/link';
import { CarData, UserType } from '@/lib/types';
import { Cars } from '@/lib/mongodb/dbmodels';
import { ScrollArea } from '../ui/scroll-area';

const MainFeed = async ({ userDetail }: { userDetail: UserType }) => {
  const { rentals } = userDetail;
  await connectMongoDB();
  const offers = await getCarsOnDiscount();
  const rentedCars: CarData[] = await Cars.find({
    _id: { $in: rentals?.map((v) => v.carId) },
  });
  const rentDurationHours =
    rentals?.map((v) =>
      Math.abs(
        (v.rentEndingDate.getTime() - v.rentStartingDate.getTime()) / 36e5
      )
    ) || [];

  return (
    <section className='flex flex-col w-full h-full gap-8 px-2 pt-2 pb-4 overflow-x-hidden overflow-y-auto md:flex-row bg-secondary'>
      <div className='h-full px-6 bg-white rounded-lg shadow-sm md:w-1/2'>
        <h1 className='pt-6 text-xl font-semibold'>Offers for you</h1>
        <Image
          src={MapAlt}
          alt='map'
          priority={false}
          className='object-cover w-full py-2 mx-auto'
        />
        <ul className='mt-4'>
          {offers?.map((item, index) => (
            <Link
              href={`/car/${item._id}`}
              className='flex flex-row items-center justify-between h-16 px-4 my-2 transition border shadow-sm rounded-xl hover:shadow-md'
              key={index}
            >
              <figure className='flex flex-row items-center justify-center gap-4'>
                <Image
                  src={CarAlt}
                  alt='car'
                  className='w-auto h-12 py-2 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-xl'
                />
                <span className='text-lg font-semibold'>
                  {item.carName}
                  <br />
                  <small className='text-muted-foreground'>
                    {item.category}
                  </small>
                </span>
              </figure>
              <div className='pl-4 text-right'>
                <span className='text-xl font-bold '>
                  ${item.currentRent}/
                  <small className='font-semibold'>day only</small>
                </span>
                <br />
                <small className='text-sm font-semibold line-through text-muted-foreground'>
                  ${item.actualRent}
                </small>
              </div>
            </Link>
          ))}
        </ul>
      </div>
      <div className='flex flex-col items-center justify-start w-full h-full gap-4 px-6 rounded-lg md:w-1/2'>
        <div className='rounded-xl'>
          <figure>
            <Image
              src={Top5}
              alt='top5'
              className='object-cover w-full mx-auto'
            />
          </figure>
        </div>
        <div className='w-full h-full px-6 rounded-lg bg-background'>
          <h1 className='pt-6 text-xl font-semibold'>Recent Transactions</h1>
          <ScrollArea className='w-full h-80'>
            {rentals ? (
              <ul>
                {rentedCars?.map((item, index) => (
                  <li
                    key={index}
                    className='flex flex-row items-center justify-between h-16 px-4 my-2 shadow-sm rounded-xl'
                  >
                    <figure className='flex flex-row items-center justify-center gap-4'>
                      <Image
                        src={CarAlt}
                        alt='car'
                        className='w-auto h-12 py-2 '
                      />
                      <span className='text-lg font-semibold'>
                        {item.carName}
                        <br />
                        <small className='text-muted-foreground'>
                          {item.category}
                        </small>
                      </span>
                    </figure>
                    <div className='text-right'>
                      <span className='text-lg font-semibold'>
                        Total: $
                        {(rentDurationHours[index] / 24) * item.currentRent}
                      </span>
                      <br />
                      <small>{rentDurationHours[index] / 24} days</small>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <h1>No Rentals Found</h1>
            )}
          </ScrollArea>
        </div>
      </div>
    </section>
  );
};

export default MainFeed;
