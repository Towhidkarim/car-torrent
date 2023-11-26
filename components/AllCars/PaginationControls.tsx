'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Button } from '../ui/button';
import { useCallback } from 'react';

const PaginationControls = ({ entryCount }: { entryCount: number }) => {
  const params = useSearchParams();
  const router = useRouter();
  const path = usePathname();
  const curentPage = Number(params.get('page') ?? 1);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const newparams = new URLSearchParams(params);
      newparams.set(name, value);

      return newparams.toString();
    },
    [params]
  );

  type ButtonType = {
    variant: 'default' | 'outline';
    onClick: () => void;
  };
  let buttons: ButtonType[] = [];
  for (let i = 1; i <= Math.ceil(entryCount / 12); i++)
    buttons.push({
      variant: i === curentPage ? 'default' : 'outline',
      onClick: () => {
        router.push(path + '?' + createQueryString('page', String(i)), {
          scroll: true,
        });
      },
    });

  return (
    <div className='flex flex-row items-center justify-center gap-2 mx-auto'>
      {buttons.map((item, i) => (
        <Button
          variant={item.variant}
          onClick={item.onClick}
          key={i}
          className='text-lg font-bold'
        >
          {i + 1}
        </Button>
      ))}
    </div>
  );
};

export default PaginationControls;
