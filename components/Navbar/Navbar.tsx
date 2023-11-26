import Searchbar from './searchbar';
import UserOptions from './user-options';
import Link from 'next/link';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/AuthOptions';
import LinkButton from '../ui/linkbutton';

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  const navLinkClasses = 'p-4 py-6 text-lg font-normal text-primary';

  return (
    <div className='w-full bg-white'>
      <nav className='container flex justify-between w-full py-2 mx-auto'>
        <div className='flex items-center justify-between gap-20 md:w-2/5'>
          <Link href={'/'}>
            <h1 className='text-3xl font-bold capitalize text-primary'>
              CarTorrent
            </h1>
          </Link>
          <Searchbar />
        </div>
        <div className='flex h-full gap-4 text-lg'>
          <LinkButton
            href='/allcars'
            variant='ghost'
            className={navLinkClasses}
          >
            All Cars
          </LinkButton>
          {session ? (
            <UserOptions />
          ) : (
            <LinkButton
              variant='outline'
              href='/user/signin'
              className={navLinkClasses}
            >
              Sign In
            </LinkButton>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
