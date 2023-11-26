'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { FaUser } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { ImSpinner9 } from 'react-icons/im';
import { useSession } from 'next-auth/react';
import avatar from '@/Assets/avatar.webp';
import Image from 'next/image';

const UserMenu = () => {
  const { status, data } = useSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          className='flex gap-4 p-3 py-7 rounded-full text-lg transition text-primary active:scale-95 '
        >
          <span className='text-2xl'>
            {/* <FaUserCircle /> */}
            <Image
              src={avatar}
              className='h-8 w-8 rounded-full object-cover outline outline-2 outline-offset-2 outline-primary'
              alt={data?.user?.name || ''}
            />
          </span>
          {/* {data?.user?.name || (
            <span className='animate-spin'>
              <ImSpinner9 />
            </span>
          )} */}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='p-2 '>
        <DropdownMenuLabel>
          {status !== 'loading' ? data?.user?.name : 'Loading...'}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='p-2 cursor-pointer' asChild>
          <Link href='/user/dashboard'>Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className='p-2 cursor-pointer'>
          Subscriptions
        </DropdownMenuItem>
        <DropdownMenuItem className='p-2 cursor-pointer'>
          Favorites
        </DropdownMenuItem>
        <DropdownMenuItem
          className='p-2 cursor-pointer'
          onClick={() => signOut()}
        >
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
