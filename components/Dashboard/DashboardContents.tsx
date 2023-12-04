'use client';
import { MdVerified, MdDashboard, MdContactSupport } from 'react-icons/md';
import { FaSearch, FaCar, FaBell, FaHeart } from 'react-icons/fa';
import { IoStatsChart, IoLogOut } from 'react-icons/io5';
import { IoMdAddCircle, IoMdSettings } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';
import Link from 'next/link';
import avatar from '@/Assets/avatar.webp';
import LinkButton from '../ui/linkbutton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Session } from 'next-auth';
import Image from 'next/image';
import { Button } from '../ui/button';
import MainFeed from './MainFeed';
import { useRouter } from 'next/navigation';
import Notifications from './Notifications';
import Explore from './Explore';
import Rentals from './Rentals';
import { Separator } from '../ui/separator';
import { signOut } from 'next-auth/react';

const menuOptions = [
  { title: 'Dashboard', icon: <MdDashboard /> },
  { title: 'Explore', url: '/allcars', icon: <FaSearch /> },
  { title: 'Notifications', icon: <FaBell /> },
  { title: 'Rentals', icon: <FaCar /> },
  { title: 'Favorites', icon: <FaHeart /> },
  // { title: 'Stats', icon: <IoStatsChart /> },
];

const menuSecondaryOptions = [
  { title: 'Profile', icon: <FaUser /> },
  // { title: 'Settings', icon: <IoMdSettings /> },
  { title: 'Help and Support', icon: <MdContactSupport /> },
];

const DashboardContents = ({
  session,
  children,
  admin,
}: {
  session: Session;
  children: React.ReactNode;
  admin: boolean;
}) => {
  const router = useRouter();
  return (
    <Tabs
      orientation='vertical'
      defaultValue={menuOptions[0].title}
      className='flex flex-row items-start w-full h-[calc(100dvh-85px)] justify-stretch md:flex bg-secondary '
    >
      <TabsList className='md:flex hidden flex-col items-center justify-start h-[calc(100dvh-80px)] border-r md:w-1/4 bg-background min-w-[308px]'>
        <ul className='flex flex-col items-start w-full h-full mt-[10%] justify-stretch'>
          {menuOptions.map((item, index) => (
            <TabsTrigger
              key={index}
              value={item.title}
              onClick={item.url ? () => router.push(item.url) : () => null}
              asChild
            >
              <Button
                variant='ghost'
                className='justify-start rounded-xl w-[95%] py-6 mx-auto my-1 font-semibold text-muted-foreground hover:bg-primary hover:text-primary-foreground'
                key={index}
              >
                <li className='flex items-center gap-8 text-base'>
                  <span className='ml-8 text-xl'>{item.icon}</span>
                  {item.title}
                </li>
              </Button>
            </TabsTrigger>
          ))}
          {true ? (
            <TabsTrigger value='AddCars' key={22} asChild>
              <Button
                variant='ghost'
                className='justify-start rounded-xl w-[95%] py-6 mx-auto my-1 font-semibold text-muted-foreground hover:bg-primary hover:text-primary-foreground'
              >
                <li key={22} className='flex items-center gap-8 text-base'>
                  <span className='ml-8 text-xl'>
                    <IoMdAddCircle />
                  </span>
                  Add Cars
                </li>
              </Button>
            </TabsTrigger>
          ) : (
            admin
          )}
          <Separator className='my-4 w-[90%] mx-auto' />
          {menuSecondaryOptions.map((item, index) => (
            <TabsTrigger key={index} value={item.title} asChild>
              <Button
                variant='ghost'
                className='justify-start rounded-xl w-[95%] py-6 mx-auto my-1 font-semibold text-muted-foreground hover:bg-primary hover:text-primary-foreground'
                key={index}
              >
                <li className='flex items-center gap-8 text-base'>
                  <span className='ml-8 text-xl'>{item.icon}</span>
                  {item.title}
                </li>
              </Button>
            </TabsTrigger>
          ))}
          <Button
            variant='ghost'
            onClick={() => signOut()}
            className='justify-start rounded-xl w-[95%] py-6 mx-auto my-1 font-semibold text-muted-foreground hover:bg-primary hover:text-primary-foreground'
          >
            <li className='flex items-center gap-8 text-base'>
              <span className='ml-8 text-xl'>
                <IoLogOut />
              </span>
              Log Out
            </li>
          </Button>
        </ul>
      </TabsList>
      <section className='w-full h-full mx-auto'>{children}</section>
    </Tabs>
  );
};

export default DashboardContents;
