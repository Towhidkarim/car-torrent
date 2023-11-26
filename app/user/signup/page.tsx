import waveBg from '@/Assets/wavebg.svg';
import { SignUpForm } from '@/components/Forms/SignUpForm';
import Image from 'next/image';
import Link from 'next/link';
import { FaQuoteLeft } from 'react-icons/fa';
import { SiToyota } from 'react-icons/si';
import { SiFord } from 'react-icons/si';
import { SiVolvo } from 'react-icons/si';

const SignUpPage = () => {
  return (
    <main className='flex flex-row w-full h-[100dvh]'>
      <section className='relative flex items-center justify-center w-full md:w-3/5'>
        <Link
          href='/'
          className='absolute mx-auto text-3xl font-bold top-[5%] text-primary'
        >
          CarTorrent
        </Link>
        <h1 className='absolute mx-auto text-2xl lg:text-3xl font-bold top-[15%] text-foreground'>
          Creat Your CarTorrent Account
        </h1>
        <SignUpForm />
      </section>
      <section className='relative hidden w-2/5 md:block bg-primary'>
        <Image
          src={waveBg}
          alt=''
          className='absolute h-full -translate-x-1/2 -z-10'
        />
        <section className='flex items-center justify-center w-full h-full'>
          <article className='flex flex-col w-4/5 mx-auto h-4/5'>
            <h1 className='text-3xl font-extrabold text-primary-foreground place-self-start mb-[20%]'>
              CarTorrent
            </h1>

            <span className='my-4 text-4xl text-primary-foreground'>
              <FaQuoteLeft />
            </span>
            <p className='text-xl font-semibold tracking-wide lg:text-2xl text-primary-foreground place-self-end'>
              "Exceptional experience with CarTorrent. Seamless booking process,
              competitive rates, and a wide selection of vehicles. The
              user-friendly interface made my trip planning stress-free. Highly
              recommended!"
            </p>
            <h1 className='mt-8 mb-2 text-2xl font-bold text-right lg:text-3xl text-primary-foreground '>
              - John Dave
            </h1>
            <small className='text-right text-primary-foreground'>
              CEO - Ultrasafe LTD
            </small>
            <section>
              <p className='text-center text-lg text-primary-foreground mt-[15%]'>
                Trusted By
              </p>
              <div className='flex flex-row items-center w-full mt-4 text-6xl justify-evenly text-primary-foreground'>
                <SiToyota />
                <SiFord />
                <SiVolvo />
              </div>
            </section>
          </article>
        </section>
      </section>
    </main>
  );
};

export default SignUpPage;
