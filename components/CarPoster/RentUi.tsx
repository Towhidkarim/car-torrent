import { useState } from 'react';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { usePathname, useRouter } from 'next/navigation';

const RentUI = ({
  carName,
  _id,
  currentRent,
  imageUrl,
}: {
  carName: string;
  _id?: string;
  currentRent: number;
  imageUrl?: string;
}) => {
  const [rentDuration, setRentDuration] = useState(1);
  const currentDiscount = 0.15;
  const path = usePathname();
  const router = useRouter();

  const handleClick = () => {
    router.push('/payment' + '?' + `id=${_id}&duration=${rentDuration}`);
  };
  return (
    <DialogContent className='sm:max-w-[425px]'>
      <DialogHeader>
        <DialogTitle className='mb-5 text-lg'>Rent {carName}</DialogTitle>
        <DialogDescription className=' text-foreground'>
          <div className='flex items-center justify-between w-full px-2 py-2 my-2 mb-4 border rounded-lg'>
            <div>
              <small>Totay Days</small>
              <Select
                defaultValue={rentDuration.toString()}
                onValueChange={(value) => setRentDuration(Number(value))}
              >
                <SelectTrigger className='mx-2 my-1 w-36 text-foreground'>
                  <SelectValue placeholder='Rent Duration' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Days</SelectLabel>
                    {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                      <SelectItem key={index} value={item.toString()}>
                        {item + (item < 2 ? ' Day' : ' Days')}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <small>Sub Total</small>
              <h1 className='my-1 text-lg font-semibold'>{`$${
                rentDuration * currentRent
              }`}</h1>
            </div>
          </div>
          <div className='flex items-center justify-between w-full px-2 py-2 my-4 border rounded-lg'>
            <div>
              <small>Discount Applied</small>
              <p className='mx-2 text-lg font-semibold'>{`${
                currentDiscount * 100
              }%`}</p>
            </div>
            <div>
              <small>Total Amount</small>
              <p className='my-1 text-xl font-semibold'>
                {`$${
                  rentDuration * currentRent -
                  currentDiscount * (rentDuration * currentRent)
                }`}
              </p>
            </div>
          </div>
        </DialogDescription>
      </DialogHeader>
      <div className='grid gap-4 py-4'></div>
      <DialogFooter>
        <Button onClick={handleClick} className='w-full rounded-lg'>
          Proceed To Payment
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default RentUI;
