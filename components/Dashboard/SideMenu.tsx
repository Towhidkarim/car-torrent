'use client';
import { Session } from 'next-auth';
import Image from 'next/image';
import avatar from '@/Assets/avatar.webp';
import { MdVerified, MdDashboard } from 'react-icons/md';
import { FaSearch, FaCar, FaBell, FaHeart } from 'react-icons/fa';
import { IoStatsChart } from 'react-icons/io5';
import Link from 'next/link';
import LinkButton from '../ui/linkbutton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MainFeed from './MainFeed';

export const menuOptions1 = [
  {
    title: 'Dashboard',
    url: '/user/dashboard',
    icon: <MdDashboard />,
  },
  {
    title: 'Explore',
    url: '/allcars',
    icon: <FaSearch />,
  },
  {
    title: 'Notifications',
    url: '#',
    icon: <FaBell />,
  },
  {
    title: 'Rentals',
    url: '/user/dashboard',
    icon: <FaCar />,
  },
  {
    title: 'Favorites',
    url: '#',
    icon: <FaHeart />,
  },
  {
    title: 'Stats',
    url: '#',
    icon: <IoStatsChart />,
  },
];

const SideMenu = ({ session }: { session: Session }) => {
  return (
    <Tabs
      defaultValue='dashboard'
      className='h-full flex-row items-start justify-stretch py-3 md:flex hidden min-w-[348px] '
    >
      <TabsList className='mt-[15%] w-1/4 border-r md:w-1/5'>
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
        {/* <ul className='flex flex-row items-start h-full justify-stretch'
      > */}
        {menuOptions.map((item, index) => (
          <TabsTrigger value={item.title} asChild>
            <LinkButton
              variant='ghost'
              href={item.url}
              className='justify-start rounded-xl w-[95%] py-6 mx-3 my-1 font-semibold hover:bg-primary hover:text-primary-foreground'
              key={index}
            >
              <li className='flex items-center gap-8 text-base'>
                <span className='ml-8 text-2xl'>{item.icon}</span>
                {item.title}
              </li>
            </LinkButton>
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value={menuOptions[0].title}>
        <MainFeed />
      </TabsContent>
    </Tabs>
  );
};

export default SideMenu;
