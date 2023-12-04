import React from 'react';
import CarCard from '../CarCard/CarCard';
import { CarData } from '@/lib/types';
import { generateCars } from '@/lib/mockgenerator';
import { Button } from '../ui/button';
import Link from 'next/link';
import LinkButton from '../ui/linkbutton';
import { getCarDataFromDB } from '@/lib/mongodb/database';

const getCarData = async () => {
  const response = await fetch('/api/cars');
  return response.json();
};

const PopularSection = async () => {
  // const car: CarData = {
  //   carId: 112,
  //   carName: 'Nissan GT-R',
  //   category: 'Sport',
  //   milage: 80,
  //   capacity: 2,
  //   gearMode: 'Manual',
  //   currentRent: 80,
  //   actualRent: 100,
  // };

  const cars = await getCarDataFromDB(10);
  // const cars: CarData[] = await carDataFromDB.json();

  return (
    <>
      <br />
      <div className='flex items-center justify-between w-full my-6 '>
        <p className='text-muted-foreground'>Popular Cars</p>
        <Link
          href='/'
          className='font-semibold transition text-primary hover:opacity-90'
        >
          View All
        </Link>
      </div>
      <div className='grid items-center justify-between w-full gap-10 overflow-hidden sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {/* <div className='flex flex-wrap items-center w-full gap-6 border '> */}
        {cars.map((value, i) => (
          <CarCard {...value} key={i} />
        ))}
      </div>
      <LinkButton
        className='px-6 py-5 mx-auto my-12 text-base'
        href={'/allcars'}
        variant='default'
      >
        Show More Cars
      </LinkButton>
    </>
  );
};

export default PopularSection;
