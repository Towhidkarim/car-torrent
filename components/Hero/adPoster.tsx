import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { Button } from '../ui/button';

type PosterProps = {
  image: StaticImageData;
  carImage: StaticImageData;
  title?: string;
  description?: string;
};

export const AdPoster = ({
  image,
  title,
  description,
  carImage,
}: PosterProps) => {
  return (
    <div className='lg:w-[45vw] w-full relative'>
      <div className='z-20 absolute p-5 xl:w-2/3  sm:w-4/5'>
        <h1 className='md:text-3xl xl:text-3xl text-xl font-semibold md:mb-4 mb-1 text-primary-foreground'>
          {title}
        </h1>
        <p className='text-primary-foreground md:text-base text-sm'>
          {description}
        </p>
        <Button
          className='md:mt-10 my-2 px-6 font-semibold '
          variant='secondary'
        >
          Rent now
        </Button>
      </div>
      <Image
        src={image}
        className='z-10 w-full scale-y-110 sm:scale-100'
        alt=''
      />
      <Image
        src={carImage}
        className='absolute top-2/3 w-2/3 left-1/2 -translate-x-1/2'
        alt=''
      />
    </div>
  );
};
