import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { GoRocket } from 'react-icons/go';
import { ImSpinner9 } from 'react-icons/im';

const Explore = () => {
  return (
    <div className='w-full h-[80vh] flex justify-center items-center'>
      <Alert className='w-2/5 shadow-md border-foreground rounded-xl'>
        <span className='inline-flex flex-row gap-4 text-lg'>
          <GoRocket />
          <span>
            <AlertTitle className='flex flex-row gap-3 font-semibold'>
              Redirecting!
              <span className='animate-spin'>
                <ImSpinner9 />
              </span>
            </AlertTitle>
            <AlertDescription className='pt-2'>
              Redirecting to All Cars section
            </AlertDescription>
          </span>
        </span>
      </Alert>
    </div>
  );
};

export default Explore;
