import Image from 'next/image';
import React from 'react';
import avatar from '@/Assets/avatar.webp';
import { getServerSession } from 'next-auth';
import { MdVerified } from 'react-icons/md';
import { UserType } from '@/lib/types';

const Profile = async ({ userData }: { userData: UserType }) => {
  const session = await getServerSession();
  if (!session) return;
  return (
    <section className=''>
      <div className='flex flex-col items-center justify-start w-1/4 py-5 my-5 rounded-xl bg-background'>
        <figure>
          <Image
            src={avatar}
            alt={session?.user?.name || ''}
            className='mt-[10%] object-cover w-24 h-24 rounded-full outline outline-[3px] outline-offset-2 outline-primary'
          />
        </figure>
        <h1 className='flex items-center justify-start gap-1 mt-4 mb-2 text-xl font-bold'>
          <span className='flex-1'>{session.user?.name || 'Loading...'}</span>
          <span className='flex-grow-0'>
            <MdVerified />
          </span>
        </h1>
        <p className=' text-muted-foreground'>Verified User</p>
      </div>
    </section>
  );
};

export default Profile;
