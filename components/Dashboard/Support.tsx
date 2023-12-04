'use client';
import React, { useRef, useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '../ui/button';
import { useToast } from '../ui/use-toast';

const Support = () => {
  const { toast } = useToast();
  const [supportText, setSupportText] = useState('');
  //   const supportText = useRef('');
  const handleSubmit = () => {
    if (!supportText) {
      toast({
        title: 'Uh oh! Something went wrong.',
        description: 'Invalid Input.',
        variant: 'destructive',
      });
      return;
    }
    setSupportText('');
    toast({ description: 'Your message has been sent.' });
  };

  return (
    <section className='flex items-center justify-center w-full h-full'>
      <div className='w-full p-10 md:w-3/4 rounded-xl h-1/2 bg-background'>
        <h1 className='w-full my-4 text-lg font-semibold text-center'>
          Contact Support
        </h1>
        <Textarea
          value={supportText}
          onChange={(e) => setSupportText(e.target.value)}
          placeholder='Enter your query here....'
          className='w-full h-32 my-5 '
        />
        <Button onClick={handleSubmit} className='w-full text-lg font-semibold'>
          Submit
        </Button>
      </div>
    </section>
  );
};

export default Support;
