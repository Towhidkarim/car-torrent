import AllCarsSection from '@/components/AllCars/AllCarsSection';
import PaginationControls from '@/components/AllCars/PaginationControls';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import { Checkbox } from '@/components/ui/checkbox';

export default function AllCars({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <main className=' bg-secondary scroll-smooth'>
      <Navbar />
      <div className='container flex flex-col items-center justify-center w-full mx-auto'>
        <AllCarsSection searchParams={searchParams} />
        {/* <PaginationControls /> */}
        <br />
        <br />
      </div>
      <Footer />
    </main>
  );
}
