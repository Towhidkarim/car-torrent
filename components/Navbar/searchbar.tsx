'use client';
import React, { useEffect, useState } from 'react';
import { Input } from '../ui/input';
import { FiSearch } from 'react-icons/fi';
import { Button } from '../ui/button';
import { CarData } from '@/lib/types';
import carImg from '@/Assets/image 7.png';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const Searchbar = ({ className }: { className?: string }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const [searchData, setSeachData] = useState<CarData[]>([]);

  const setSearchText = (value: string) => {
    let text = value;
    text = text.replace(/\s+/g, ' ').trim();
    setSearchQuery(text);
  };
  const querySearch = async () => {
    if (searchQuery !== '' && searchQuery !== undefined) {
      const searchResult = await fetch(`/api/search?keyword=${searchQuery}`, {
        method: 'GET',
      });
      setSeachData(await searchResult.json());
      // console.log(searchData);
    }
  };
  useEffect(() => {
    const debounce = setTimeout(querySearch, 500);

    return () => {
      clearTimeout(debounce);
    };
  }, [searchQuery]);

  return (
    <label
      className={cn(
        'relative flex flex-row items-center justify-center w-full gap-0 group',
        className
      )}
    >
      <Input
        type='text'
        className='rounded-3xl '
        placeholder='Search'
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Button
        variant='ghost'
        className='p-2 text-2xl -translate-x-full border border-l-0 rounded-l-none rounded-r-3xl text-primary'
      >
        <FiSearch />
      </Button>
      <ul className='absolute left-0 z-50 hidden w-11/12 transition border rounded-lg top-full bg-background group-focus-within:block'>
        {searchData.length !== 0 &&
        /[a-zA-Z0-9 ]/gi.test(searchQuery) &&
        searchQuery.length > 2 ? (
          searchData.map((item, i) => (
            <li className='' key={i}>
              <Link
                href={`/car/${item._id}`}
                className='flex items-center justify-start h-10 rounded-lg hover:bg-primary text-foreground hover:text-primary-foreground gap-x-2'
              >
                <figure className='flex items-center w-16 h-auto'>
                  <Image src={carImg} alt={item.carName} />
                </figure>
                {item.carName}
              </Link>
            </li>
          ))
        ) : (
          <ul className='h-10 p-2 text-muted-foreground'>
            {searchQuery.length > 0
              ? 'No Results Found'
              : 'Enter your text to search'}
          </ul>
        )}
      </ul>
    </label>
  );
};

export default Searchbar;
