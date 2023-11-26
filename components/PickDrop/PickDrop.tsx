'use client';

import { useState } from 'react';
import { type PickDropData } from '@/lib/types';
import InputSection from './inputSection';
import {
  AiOutlineArrowUp,
  AiOutlineArrowDown,
  AiOutlineSearch,
} from 'react-icons/ai';
import { Button } from '../ui/button';

const PickDrop = () => {
  const [pickLocation, setPickLocation] = useState<PickDropData>();
  const [dropLocation, setDropLocation] = useState<PickDropData>();

  return (
    <div className='w-full flex flex-col lg:flex-row items-center justify-between gap-5 my-5'>
      <InputSection title='Pick Up' icon={<AiOutlineArrowUp />} />
      <Button
        variant='default'
        className='h-16 w-16 shadow-lg hover:shadow-xl transition rounded-2xl'
      >
        <span className='font-extrabold p-2 text-4xl'>
          <AiOutlineSearch />
        </span>
      </Button>
      <InputSection title='Drop Off' icon={<AiOutlineArrowDown />} />
    </div>
  );
};

export default PickDrop;
