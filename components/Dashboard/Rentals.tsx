import React from 'react';
import LinkButton from '../ui/linkbutton';
import RentCard from '../CarCard/RentCard';
import { UserType } from '@/lib/types';
import { ScrollArea } from '../ui/scroll-area';

const Rentals = ({ userData }: { userData: UserType }) => {
  const { rentals } = userData;
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
    <div className=''>
      <div>
        <h1 className='mt-6 mb-4 text-lg font-bold'>Current Rents</h1>
        <ScrollArea className='w-full h-[80vh]'>
          <div className='flex flex-wrap items-center justify-start w-full h-full gap-4 mx-auto'>
            {rentals?.map((value, index) => (
              <div className='mx-auto'>
                <RentCard rentData={value} key={index} />
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Rentals;
