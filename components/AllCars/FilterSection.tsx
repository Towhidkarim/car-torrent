'use client';

import { useCallback, useState } from 'react';
import { Checkbox } from '../ui/checkbox';
import { Slider } from '../ui/slider';
import { BiReset } from 'react-icons/bi';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '../ui/button';
import LabeledCheckbox from './labeledcheckbox';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const FilterSection = () => {
  type SortOrder = 'asc' | 'dsc' | 'lowtohigh' | 'hightolow';

  const params = useSearchParams();
  const router = useRouter();
  const path = usePathname();
  const curentPage = Number(params.get('page') ?? 1);

  type SearchParam = {
    key: string;
    value: string;
  };
  const createQueryString = useCallback(
    (searchParams: SearchParam[]) => {
      const newparams = new URLSearchParams(params);
      searchParams.forEach((param) => {
        newparams.set(param.key, param.value);
      });

      return newparams.toString();
    },
    [params]
  );

  const [category, setCategory] = useState<string[]>([]);
  const [capacity, setCapacity] = useState<number[]>([]);
  const [sortOrder, setSortOrder] = useState<SortOrder>('lowtohigh');
  const [price, setPrice] = useState(50);

  const handleCategorySelect = (value: string) => {
    if (!category.includes(value)) setCategory((prev) => [...prev, value]);
    return;
  };
  const handleCategoryDeselect = (value: string) => {
    setCategory((prev) => prev.filter((v) => v !== value));
    // console.log(category);
  };
  const handleSlider = (value: number[]) => {
    setPrice(value[0]);
  };
  const filter = () => {
    const categoryParam = category.join(',');
    router.push(
      path +
        '?' +
        createQueryString([
          { key: 'category', value: categoryParam },
          { key: 'sort', value: sortOrder },
        ])
    );
  };

  return (
    <div className='p-4 select-none'>
      <h1 className='mt-2 mb-3 text-xs text-muted-foreground'>TYPE</h1>
      <section className='flex flex-col gap-4'>
        {['Sport', 'SUV', 'Sedan', 'Coup'].map((item, i) => (
          <LabeledCheckbox
            key={i}
            title={item}
            value={item}
            onCheck={handleCategorySelect}
            onUnCheck={handleCategoryDeselect}
          />
        ))}
      </section>
      <br />
      <h1 className='mt-6 mb-3 text-xs text-muted-foreground'>CAPACITY</h1>
      <section className='flex flex-col gap-4'>
        {[2, 4, 6, 8].map((item, i) => (
          <LabeledCheckbox
            key={i}
            value={item.toString()}
            title={`${item} ${item <= 6 ? 'Person' : 'Or More'}`}
          />
        ))}
      </section>
      <br />
      <h1 className='mt-6 text-xs text-muted-foreground'>PRICE</h1>
      <section>
        <Slider
          onValueChange={handleSlider}
          defaultValue={[price]}
          min={30}
          max={120}
          step={5}
        />
        <p className='flex gap-2 my-2'>
          Max Price:
          <span>{`$${price}`}</span>
        </p>
      </section>
      <section>
        <h1 className='mt-6 mb-3 text-xs text-muted-foreground'>SORT BY</h1>
        <Select>
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='Select sort order' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value='lowtohigh'>Low to High</SelectItem>
              <SelectItem value='hightolow'>High to Low</SelectItem>
              <SelectItem value='ascending'>Ascending</SelectItem>
              <SelectItem value='descending'>Descending</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </section>
      <section className='flex flex-row gap-2 my-5'>
        <Button
          className='w-1/5 p-3 font-semibold rounded-lg'
          onClick={() => router.push('/allcars?')}
        >
          <span className='text-2xl'>
            <BiReset />
          </span>
        </Button>
        <Button
          className='w-4/5 p-3 text-lg font-semibold rounded-lg'
          onClick={filter}
        >
          Apply Filter
        </Button>
      </section>
    </div>
  );
};

export default FilterSection;
