import Image from 'next/image';
import carImg from '@/Assets/image 7.png';
import CarDetails from './CarDetails';
import { CarData } from '@/lib/types';

const CarPoster = (props: CarData) => {
  return (
    <section className='flex flex-col gap-0 lg:flex-row'>
      <figure
        className='flex flex-col bg-gradient-to-r from-sky-500 to-indigo-500 min-h-[350px] shadow-md 
                         rounded-xl max-lg:rounded-b-none lg:rounded-r-none'
      >
        <Image src={carImg} alt='car Image' className='w-full m-auto' />
        <div className='flex items-center justify-around w-full py-4'>
          <div className='w-20 h-20 bg-white shadow-xl rounded-xl'></div>
          <div className='w-20 h-20 bg-white shadow-xl rounded-xl'></div>
          <div className='w-20 h-20 bg-white shadow-xl rounded-xl'></div>
        </div>
      </figure>
      <CarDetails {...props} />
    </section>
  );
};

export default CarPoster;
