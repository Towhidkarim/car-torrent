'use client';

import React, { useRef, useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { signIn } from 'next-auth/react';
import { ImSpinner9 } from 'react-icons/im';
import ErrorText from './ErrorText';

const SignInForm = () => {
  const mail = useRef('');
  const pass = useRef('');
  const [errorText, setErrorText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const inputClasses = 'p-6 mt-1 rounded-full';

  const formOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (mail.current === '' || pass.current === '') {
      setErrorText('All fields are required');
      return;
    } else setErrorText('');

    setIsLoading(true);
    const res = await signIn('credentials', {
      email: mail.current,
      password: pass.current,
      redirect: true,
      callbackUrl: '/',
    });
    // console.log(res?.ok);
  };

  return (
    <form className='max-w-[80%] w-[380px]' onSubmit={formOnSubmit}>
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
          onChange={(e) => (pass.current = e.target.value)}
        />
        <p className='hidden mt-2 ml-2 text-sm text-destructive peer-invalid/password:block'>
          Password must be 6-16 characters long
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
          'Sign In'
        )}
      </Button>
    </form>
  );
};

export default SignInForm;
