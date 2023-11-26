import React from 'react';
import { SimpleTooltip } from '../ui/simpleTooltip';

const CarTag = ({
  info,
  tooltipText,
  icon,
}: {
  info: string;
  tooltipText: string;
  icon: React.ReactNode;
}) => {
  return (
    <SimpleTooltip tooltipText={tooltipText}>
      <section className='flex items-center justify-center gap-1 cursor-pointer text-muted-foreground'>
        <span className='text-lg'>{icon}</span>
        <span className='text-sm'>{info}</span>
      </section>
    </SimpleTooltip>
  );
};

export default CarTag;
