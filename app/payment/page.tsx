import Navbar from '@/components/Navbar/Navbar';
import React, { useState } from 'react';
import Footer from '@/components/Footer/Footer';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import connectMongoDB from '@/lib/mongodb/database';
import { Input } from '@/components/ui/input';
import { FaDotCircle } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { FaCreditCard } from 'react-icons/fa';
import MakePayment from './MakePayment';
import { Cars } from '@/lib/mongodb/dbmodels';
import { CarData } from '@/lib/types';

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const session = await getServerSession();
  if (!session) redirect('/user/signin');
  const id = searchParams['id'];
  let duration: number;
  try {
    duration = Number(searchParams['duration']);
  } catch (error) {
    duration = 2;
  }
  await connectMongoDB();
  const carData: CarData | null = await Cars.findById(id);
  if (!carData)
    return (
      <main className='w-full bg-secondary scroll-smooth'>
        <Navbar />
        <h1 className='text-2xl text-center'>Invalid Credentials</h1>
      </main>
    );

  const totalCheckout = carData.currentRent * duration;
  const discountedCheckout = totalCheckout - totalCheckout * 0.15;

  return (
    <main className=' bg-secondary scroll-smooth'>
      <Navbar />
      <div className='container flex flex-col items-center justify-center w-11/12 gap-4 py-4 mx-auto md:flex-row'>
        <div className='w-3/4 p-6 rounded-md bg-background'>
          <h1 className='text-xl font-semibold '>Biller Information</h1>
          <small className='text-muted-foreground'>
            Enter your Billing information
          </small>
          <section className='flex flex-row items-center justify-between w-full gap-5 py-8'>
            <label className='w-11/12'>
              <b className='my-2'>User Name</b>
              <Input
                value={session.user?.name || 'User Name'}
                className='py-5 my-3 bg-background'
                disabled
              />
            </label>
            <label className='w-11/12'>
              <b className='my-2'>Email Address</b>
              <Input
                value={session.user?.email || 'Email Address'}
                className='py-5 my-3 bg-background'
                disabled
              />
            </label>
          </section>
          <h1 className='w-full text-xl font-semibold'>Payment Information</h1>
          <small className='text-muted-foreground'>
            Fill your payment method
          </small>
          <h1 className='flex flex-row items-center justify-start gap-2 py-4 font-bold cursor-pointer'>
            <span className='text-primary'>
              <FaDotCircle />
            </span>
            Credit Card
            <span className=''>
              <FaCreditCard />
            </span>
          </h1>
          <section className='flex flex-row items-center justify-between w-full gap-5 pt-2'>
            <label className='w-11/12'>
              <b className='my-2'>Name on Card</b>
              <Input
                // value={session.user?.name || 'User Name'}
                className='py-5 my-3 bg-background'
                value={session.user?.name || 'User Name'}
              />
            </label>
            <label className='w-11/12'>
              <b className='my-2'>Card Number</b>
              <Input
                // value={session.user?.email || 'Email Address'}
                className='py-5 my-3 bg-background'
                value='4242 4242 4242 4242'
              />
            </label>
          </section>
          <section className='flex flex-row items-center justify-between w-full gap-5 pb-8'>
            <label className='w-11/12'>
              <b className='my-2'>CCV</b>
              <Input
                // value={session.user?.name || 'User Name'}
                className='py-5 my-3 bg-background'
                value='424'
              />
            </label>
            <label className='w-11/12'>
              <b className='my-2'>Card Holder</b>
              <Input
                // value={session.user?.email || 'Email Address'}
                className='py-5 my-3 bg-background'
                placeholder={session.user?.name || 'User Name'}
                value={session.user?.name || 'User Name'}
              />
            </label>
          </section>
          <MakePayment
            value='Make Payment'
            duration={duration}
            id={id?.toString() || ''}
          />
        </div>
        <div className='w-1/4 p-6 rounded-xl bg-background'>
          <h1 className='my-4 text-xl font-bold'>{carData.carName}</h1>
          <div className='flex flex-row items-center justify-between'>
            <span className='font-semibold'>Sub Total :</span>
            <span className='text-lg font-bold'>${totalCheckout}</span>
          </div>
          <div className='flex flex-row items-center justify-between'>
            <span className='font-semibold'>Total (with discount) :</span>
            <span className='text-lg font-bold'>${discountedCheckout}</span>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Page;
