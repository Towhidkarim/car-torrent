import LinkButton from '@/components/ui/linkbutton';
import Link from 'next/link';
import loginImage from '@/Assets/login3.jpg';
import Image from 'next/image';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/AuthOptions';
import { signIn, signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import SignInForm from '@/components/Forms/SignInForm';
import PageTransition from '@/components/AuthProvider';

const SignInPage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <main className='flex w-full h-screen'>
      <section className='relative items-center justify-center hidden w-2/5 h-full md:flex '>
        <Image
          src={loginImage}
          className='absolute object-cover h-screen blur-sm -z-10'
          alt=''
        />
        <Link
          href='/'
          className='absolute mx-auto text-xl font-bold top-10 text-background'
        >
          CarTorrent
        </Link>
        <div className='flex flex-col items-center justify-center gap-5'>
          <h1 className='font-bold md:text-2xl lg:text-4xl text-background'>
            Not an existing user?
          </h1>
          <LinkButton
            variant='outline'
            href={'/user/signup'}
            className='p-5 mx-auto text-xl font-bold rounded-2xl backdrop-blur-sm text-background'
          >
            Sign Up
          </LinkButton>
        </div>
      </section>
      <section className='relative flex items-center justify-center w-full md:w-3/5'>
        <h1 className='absolute mx-auto text-3xl font-bold md:hidden top-10 text-primary'>
          CarTorrent
        </h1>
        <h1 className='absolute mx-auto text-4xl font-bold top-1/4 text-foreground'>
          Login to Your Account
        </h1>
        {!session?.user ? <SignInForm /> : 'already in'}
        {session?.user?.email}
        <p className='absolute bottom-[20%] md:hidden'>
          Not an existing user?
          <Link
            href='/user/signup'
            className='mx-2 transition-all  hover:opacity-80 text-primary'
          >
            Sign Up
          </Link>
        </p>
      </section>
    </main>
  );
};

export default SignInPage;
