'use client';

import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cities } from '@/lib/constants';
import { DatePicker } from './datePicker';
import { LocationPicker } from './locationPicker';
import { Button } from '../ui/button';

const InputSection = ({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactElement;
}) => {
  const [location, setLocation] = useState<string>('');
  const [date, setDate] = useState<Date>();

  return (
    <section className='w-full lg:w-[45%] rounded-lg bg-background p-6 shadow-md'>
      <h1 className='text-foreground text-lg mb-2 font-semibold flex gap-2'>
        <span className='text-lg font-semibold text-primary rounded-full border border-primary p-1'>
          {icon}
        </span>
        {title}
      </h1>
      <div className='flex flex-row'>
        <div className='flex flex-col items-center gap-1 w-1/2 px-2 border-r-2'>
          <h1 className='text-foreground font-bold'>Locations</h1>
          <LocationPicker setLocation={setLocation} />
        </div>

        <div className='flex flex-col items-center gap-1 w-1/2 px-2'>
          <h1 className='text-foreground font-bold'>Date</h1>
          <DatePicker selectDate={setDate} />
        </div>
      </div>
    </section>
  );
};

export default InputSection;
