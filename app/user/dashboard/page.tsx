import Navbar from '@/components/Navbar/Navbar';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import avatar from '@/Assets/avatar.webp';
import React from 'react';
import Image from 'next/image';
import SideMenu from '@/components/Dashboard/SideMenu';
import MainFeed from '@/components/Dashboard/MainFeed';

const Dashboard = async () => {
  const session = await getServerSession();
  if (!session) redirect('/user/login');
  else
    return (
      <main className='h-[100dvh] flex flex-col'>
        <Navbar />
        <hr className='m-2 bg-muted-foreground' />
        <div className='flex flex-row items-start h-full justify-stretch'>
          <SideMenu session={session} />
          <MainFeed />
        </div>
      </main>
    );
};

export default Dashboard;
