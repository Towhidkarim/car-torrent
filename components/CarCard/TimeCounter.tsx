'use client';

import { useEffect, useState } from 'react';

const TimeCounter = ({ timeHours }: { timeHours: number }) => {
  const [hours, setHours] = useState(timeHours);

  useEffect(() => {
    const interval = setInterval(() => {
      let currentHours = hours - 1 / 60;
      setHours(currentHours);
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <time>{`${Math.floor(hours / 24)} days ${
      Math.floor(hours) % 24
    } hours `}</time>
  );
};

export default TimeCounter;
