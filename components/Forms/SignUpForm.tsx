'use client';

import React, { use, useRef, useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { signIn } from 'next-auth/react';
import { ImSpinner9 } from 'react-icons/im';
import ErrorText from './ErrorText';
import { UserType } from '@/lib/types';
import { useRouter } from 'next/navigation';

export const SignUpForm = () => {
  const router = useRouter();
  const mail = useRef('');
  const user = useRef('');
  const [pass, setPass] = useState('');
  const [errorText, setErrorText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const inputClasses = 'p-6 mt-1 rounded-full';

  const formOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (mail.current === '' || pass === '' || user.current === '') {
      setErrorText('All fields are required');
      return;
    } else setErrorText('');

    setIsLoading(true);
    const newUser: UserType = {
      username: user.current,
      email: mail.current,
      password: pass,
    };
    const res = await fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify(newUser),
    });
    if (res.ok) router.push('/user/signin');
    // const res = await signIn('credentials', {
    //   email: mail.current,
    //   password: pass.current,
    //   redirect: true,
    //   callbackUrl: '/',
    // });
    // console.log(res?.ok);
  };

  return (
    <form className='max-w-[80%] w-[380px]' onSubmit={formOnSubmit}>
      <div className='my-2'>
        <label htmlFor='mail' className='ml-2'>
          Username
        </label>
        <Input
          type='text'
          placeholder='Username'
          id='username'
          pattern='[a-zA-Z0-9]+.{3,16}'
          className={`${inputClasses} peer/username my-2`}
          onChange={(e) => (user.current = e.target.value)}
        />
        <p className='hidden mt-2 ml-2 text-sm text-destructive peer-invalid/email:block'>
          Invalid Username
        </p>
      </div>
      <div className='my-2'>
        <label htmlFor='mail' className='ml-2'>
          Email
        </label>
        <Input
          type='email'
          placeholder='yourmail@mail.com'
          id='mail'
          className={`${inputClasses} peer/email my-2`}
          onChange={(e) => (mail.current = e.target.value)}
        />
        <p className='hidden mt-2 ml-2 text-sm text-destructive peer-invalid/email:block'>
          Fill in with a valid email
        </p>
      </div>
      <div className='my-2'>
        <label htmlFor='password' className='ml-2'>
          Password
        </label>
        <Input
          type='password'
          placeholder='password'
          id='password'
          className={`${inputClasses} peer/password my-2`}
          pattern='[a-zA-Z0-9]+.{6,16}$'
          onChange={(e) => setPass(e.target.value)}
        />
        <p className='hidden mt-2 ml-2 text-sm text-destructive peer-invalid/password:block'>
          Password must be 6-16 characters long
        </p>
      </div>
      <div className='my-2'>
        <label htmlFor='password' className='ml-2'>
          Confirm Password
        </label>
        <Input
          type='password'
          placeholder='Confirm Password'
          id='confpassword'
          className={`${inputClasses} peer/confpassword my-2`}
          pattern={pass}
          //   onChange={(e) => (pass.current = e.target.value)}
        />
        <p className='hidden mt-2 ml-2 text-sm text-destructive peer-invalid/confpassword:block'>
          Must match the password
        </p>
      </div>
      <ErrorText errorText={errorText} />
      <Button
        className='w-full py-6 mx-auto mt-5 text-lg font-semibold rounded-full'
        // onClick={formOnSubmit}
      >
        {isLoading ? (
          <span className='text-2xl animate-spin'>
            <ImSpinner9 />
          </span>
        ) : (
          'Sign Up'
        )}
      </Button>
    </form>
  );
};
