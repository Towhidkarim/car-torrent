import { cn } from '@/lib/utils';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

type Rating = {
  rating: 1 | 2 | 3 | 4 | 5;
  className?: string;
};

const Rating = ({ rating, className }: Rating) => {
  const ratingNumber = Math.max(1, Math.floor(rating));
  let ratingString = [];
  for (let i = 1; i <= ratingNumber; i++)
    ratingString.push(<AiFillStar className='text-[#FBAD39]' key={i} />);
  for (let i = 5; i > ratingNumber; i--)
    ratingString.push(<AiOutlineStar className='text-[#FBAD39]' key={i} />);

  return (
    <div>
      <div className={cn('inline-flex text-xl', className)}>{ratingString}</div>
    </div>
  );
};

export default Rating;
