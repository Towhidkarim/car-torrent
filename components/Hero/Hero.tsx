import React from 'react';
import { AdPoster } from './adPoster';
import adOne from '@/Assets/Ads 1.svg';
import adtwo from '@/Assets/Ads 2.svg';
import carimg from '@/Assets/image 7.png';
import { posterDetails } from '@/lib/constants';

const Hero = () => {
  return (
    <section className='flex flex-col-reverse lg:flex-row justify-between items-center my-10 sm:gap-6 gap-10 w-full '>
      <AdPoster
        image={adOne}
        title={posterDetails[0].title}
        description={posterDetails[0].description}
        carImage={carimg}
      />
      <AdPoster
        image={adtwo}
        title={posterDetails[1].title}
        description={posterDetails[1].description}
        carImage={carimg}
      />
    </section>
  );
};

export default Hero;
