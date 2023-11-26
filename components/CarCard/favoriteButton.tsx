'use client';

import { useState } from 'react';
import Swap from '../ui/swap';
import { GoHeart, GoHeartFill } from 'react-icons/go';
import { CarData } from '@/lib/types';

const FavoriteButton = ({ carId }: { carId?: number }) => {
  const loggedIn = false;
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <>
      <Swap
        checkedElement={<GoHeart />}
        uncheckedElement={<GoHeartFill />}
        onClick={handleChange}
        isChecked={checked}
      />
    </>
  );
};

export default FavoriteButton;
