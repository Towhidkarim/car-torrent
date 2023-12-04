'use client';

import { useSession } from 'next-auth/react';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { CarData } from '@/lib/types';
import { useRouter } from 'next/navigation';
import LinkButton from '../ui/linkbutton';
import Image from 'next/image';
import carImg from '@/Assets/image 7.png';
import RentUI from './RentUi';

const RentButton = ({
  carName,
  _id,
  currentRent,
  imageUrl,
}: {
  carName: string;
  _id?: string;
  currentRent: number;
  imageUrl?: string;
}) => {
  const session = useSession();
  const router = useRouter();

  const NotSignedInContent = () => (
    <DialogContent className='sm:max-w-[425px]'>
      <DialogHeader>
        <DialogTitle className='mb-5 text-lg'>Sign In First</DialogTitle>
        <DialogDescription>You must be signed in to rent</DialogDescription>
      </DialogHeader>
      <div className='grid gap-4 py-4'></div>
      <DialogFooter>
        <LinkButton
          href={'/user/signin'}
          onClick={() => router.push('/user/signin')}
        >
          Log In
        </LinkButton>
      </DialogFooter>
    </DialogContent>
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='p-6 text-lg font-semibold'>Rent Now</Button>
      </DialogTrigger>
      {session.data?.user ? (
        <RentUI
          carName={carName}
          _id={_id}
          currentRent={currentRent}
          imageUrl={imageUrl}
        />
      ) : (
        <NotSignedInContent />
      )}
    </Dialog>
  );
};

export default RentButton;
