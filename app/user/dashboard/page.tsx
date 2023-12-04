import Navbar from '@/components/Navbar/Navbar';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import avatar from '@/Assets/avatar.webp';
import React, { use } from 'react';
import Image from 'next/image';
import SideMenu from '@/components/Dashboard/SideMenu';
import MainFeed from '@/components/Dashboard/MainFeed';
import DashboardContents from '@/components/Dashboard/DashboardContents';
import { MdDashboard } from 'react-icons/md';
import { FaBell, FaCar, FaHeart, FaSearch } from 'react-icons/fa';
import Explore from '@/components/Dashboard/Explore';
import Notifications from '@/components/Dashboard/Notifications';
import Rentals from '@/components/Dashboard/Rentals';
import { IoStatsChart } from 'react-icons/io5';
import { TabsContent } from '@/components/ui/tabs';
import { getUserDetail } from '@/lib/mongodb/database';
import { UserType } from '@/lib/types';
import Favorites from '@/components/Dashboard/Favorites';
import Profile from '@/components/Dashboard/Profile';
import Support from '@/components/Dashboard/Support';

const Dashboard = async () => {
  const session = await getServerSession();

  if (!session || !session?.user?.email) redirect('/user/login');
  else {
    const user: UserType | null = await getUserDetail(session.user?.email);
    if (user == null) return;
    const menuOptions = [
      { title: 'Dashboard', content: <MainFeed userDetail={user} /> },
      { title: 'Explore', content: <Explore /> },
      { title: 'Notifications', content: <Notifications /> },
      { title: 'Rentals', content: <Rentals userData={user} /> },
      { title: 'Favorites', content: <Favorites userData={user} /> },
    ];

    const menuSecondaryOptions = [
      { title: 'Profile', content: <Profile userData={user} /> },
      // { title: 'Help and Support', content: '' },
      { title: 'Help and Support', content: <Support /> },
    ];

    return (
      <main className='h-[100dvh] overflow-hidden flex flex-col'>
        <Navbar />
        <hr className='m-2 bg-muted-foreground' />
        <DashboardContents session={session}>
          {menuOptions.map((item, index) => (
            <TabsContent
              className='h-full mx-8 transition-all'
              key={index}
              value={item.title}
            >
              {item.content}
            </TabsContent>
          ))}
          {menuSecondaryOptions.map((item, index) => (
            <TabsContent
              className='h-full mx-8 transition-all'
              key={index}
              value={item.title}
            >
              {item.content}
            </TabsContent>
          ))}
        </DashboardContents>
        {/* <div className='flex flex-row items-start h-full justify-stretch'> */}
        {/* <SideMenu session={session} /> */}
        {/* </div> */}
      </main>
    );
  }
};

export default Dashboard;
