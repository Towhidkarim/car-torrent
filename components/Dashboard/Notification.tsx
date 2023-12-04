import React from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const Notification = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Alert className='w-full mx-auto my-2 mb-4 transition shadow-sm hover:shadow-md cursor-pointer select-none active:scale-[99%]'>
      <AlertTitle className='text-lg font-bold'>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
};

export default Notification;
