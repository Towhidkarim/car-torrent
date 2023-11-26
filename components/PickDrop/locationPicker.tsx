import { Dispatch, SetStateAction, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cities } from '@/lib/constants';

export const LocationPicker = ({
  setLocation,
}: {
  setLocation: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <Select onValueChange={(value) => setLocation(value)}>
      <SelectTrigger className='w-[90%]'>
        <SelectValue placeholder='Location' className='text-muted-foreground' />
      </SelectTrigger>
      <SelectContent>
        {cities.map((value, i) => (
          <SelectItem key={i} value={value}>
            {value}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
