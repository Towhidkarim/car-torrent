import { Skeleton } from '../ui/skeleton';
import LinkButton from '../ui/linkbutton';
import Image from 'next/image';
import poster from '@/Assets/offerPoster.jpg';

const MainFeed = () => {
  return (
    <section className='flex flex-col w-11/12 px-2 mx-8 overflow-x-hidden overflow-y-auto md:w-9/12'>
      <div className='w-full'>
        <h1 className='mt-2 mb-4 text-lg font-bold'>Offers For You</h1>
        <Skeleton className='w-full h-48 animate-pulse bg-gray-400/20' />
        <h1 className='mt-6 mb-4 text-lg font-bold'>Current Rents</h1>
        <div className='flex flex-col items-center justify-center w-full h-48 gap-2'>
          <p className='text-lg text-muted-foreground'>No Rentals Found</p>
          <LinkButton href='/allcars'>Rent Now</LinkButton>
        </div>
      </div>
    </section>
  );
};

export default MainFeed;
