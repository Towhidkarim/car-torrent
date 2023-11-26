import React from 'react';
import { AiFillHeart, AiFillBell, AiFillSetting } from 'react-icons/ai';
import { Button } from '../ui/button';
import UserMenu from './UserMenu';

const UserOptions = () => {
  const buttonDesign =
    'text-primary text-xl rounded-full p-2  active:scale-95 transition';

  return (
    <div className='flex items-center justify-center gap-5'>
      {/* <Button variant='outline' className={buttonDesign}>
        <AiFillHeart />
      </Button>
      <Button variant='outline' className={buttonDesign}>
        <div className='relative'>
          <div className='absolute w-2 h-2 rounded-full bg-destructive -top-2 left-full'></div>
          <AiFillBell />
        </div>
      </Button> */}
      {/* <Button variant='outline' className={buttonDesign}>
        <AiFillSetting />
      </Button> */}
      <UserMenu />
    </div>
  );
};

export default UserOptions;
