import { useState } from 'react';

type Swap = {
  checkedElement: React.ReactNode;
  uncheckedElement: React.ReactNode;
  isChecked?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Swap = ({
  checkedElement,
  uncheckedElement,
  isChecked,
  onClick,
  ...props
}: Swap) => {
  return (
    <button
      className='p-2 transition rounded-lg hover:bg-accent active:scale-90'
      // onClick={() => setActive(!active)}
      onClick={onClick}
    >
      <span className='text-2xl transition text-destructive'>
        {isChecked ? checkedElement : uncheckedElement}
      </span>
    </button>
  );
};

export default Swap;
