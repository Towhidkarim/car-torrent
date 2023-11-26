import CarCard from '@/components/CarCard/CarCard';
import CarDetails from '@/components/CarPoster/CarDetails';
import CarPoster from '@/components/CarPoster/CarPoster';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import PopularSection from '@/components/PopularSection/PopularSection';
import { getCarById } from '@/lib/mongodb/database';
import { CarData } from '@/lib/types';

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getCarById(params.slug);
  if (data === null)
    return (
      <main className=' bg-secondary'>
        <Navbar />
        <section className='container flex flex-col items-center justify-center w-full mx-auto'>
          <h1 className='text-2xl font-bold'>Error 404 not found</h1>
          <br />
          <br />
        </section>
      </main>
    );
  else
    return (
      <main className='w-full mx-auto bg-secondary'>
        <Navbar />
        <br />
        <section className='container flex flex-col items-center justify-center w-full mx-auto'>
          <CarPoster {...data} />
          <PopularSection />
          <br />
          <br />
        </section>
        <Footer />
      </main>
    );
}
