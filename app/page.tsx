import Footer from '@/components/Footer/Footer';
import Hero from '@/components/Hero/Hero';
import Navbar from '@/components/Navbar/Navbar';
import PickDrop from '@/components/PickDrop/PickDrop';
import PopularSection from '@/components/PopularSection/PopularSection';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className=' bg-secondary'>
      <Navbar />
      <div className='container flex flex-col items-center justify-center w-full mx-auto'>
        <Hero />
        <PickDrop />
        <PopularSection />
        <br />
        <br />
      </div>
      <Footer />
    </main>
  );
}
