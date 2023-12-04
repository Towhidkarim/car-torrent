'use client';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { ImSpinner9 } from 'react-icons/im';

const MakePayment = ({
  value,
  id,
  duration,
}: {
  value: string;
  id: string;
  duration: number;
}) => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { toast } = useToast();
  const initiateRent = async () => {
    const res = await fetch(`/api/payment?id=${id}&duration=${duration}`, {
      method: 'POST',
    });
    setLoading(true);
    if (res.ok) {
      toast({
        title: 'Payment Successful!',
        description: 'Redirecting to Dashboard',
      });
      router.refresh();
      router.replace('/user/dashboard');
    }
  };

  return (
    <Button onClick={initiateRent} className='w-full' disabled={loading}>
      {loading ? (
        <span className='text-lg animate-spin'>
          <ImSpinner9 />
        </span>
      ) : (
        value
      )}
    </Button>
  );
};

export default MakePayment;
