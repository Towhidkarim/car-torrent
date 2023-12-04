import React from 'react';
import LinkButton from '../ui/linkbutton';
import RentCard from '../CarCard/RentCard';
import { CarData, UserType } from '@/lib/types';
import CarCard from '../CarCard/CarCard';
import connectMongoDB, { getCarById } from '@/lib/mongodb/database';
import { Cars } from '@/lib/mongodb/dbmodels';

const Favorites = async ({ userData }: { userData: UserType }) => {
  const { favorites } = userData;
  await connectMongoDB();
  const favoriteCarsData = await Cars.find({
    _id: { $in: favorites },
  });
  const RentsNA = () => (
    <>
      <h1 className='mt-6 mb-4 text-lg font-bold'>Current Rents</h1>
      <div className='flex flex-col items-center justify-center w-full h-48 gap-2'>
        <p className='text-lg text-muted-foreground'>No Rentals Found</p>
        <LinkButton href='/allcars'>Rent Now</LinkButton>
      </div>
    </>
  );

  return (
    <div>
      <div>
        <h1 className='mt-6 mb-4 text-lg font-bold'>Favorite Cars</h1>
        <div className='grid items-center justify-between w-full gap-10 overflow-hidden sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
          {favoriteCarsData.length === 0 ? (
            <h1 className=''>No Favorites Found</h1>
          ) : (
            favoriteCarsData?.map((value, index) => (
              <CarCard {...value} key={index} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
