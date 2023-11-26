import CarCard from '../CarCard/CarCard';
import { Checkbox } from '../ui/checkbox';
import { CarData } from '@/lib/types';
import { getCarDataByFilter, getCarDataFromDB } from '@/lib/mongodb/database';
import PaginationControls from './PaginationControls';
import FilterSection from './FilterSection';
import { categories } from '@/lib/constants';

const AllCarsSection = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const pageNo = searchParams['page'] ?? '1';
  const categoryString = searchParams['category'];
  let categoryArray: string[] | undefined = [];
  if (typeof categoryString === 'string')
    categoryArray = categoryString.split(',');
  if (
    categoryString === '' ||
    categoryString === null ||
    categoryString == undefined
  )
    categoryArray = categories;
  const perPage = 12;
  const skip = (Number(pageNo) - 1) * perPage;

  const { data, entryCount } = await getCarDataByFilter({
    skip,
    limit: perPage,
    categoryArray,
  });
  data.sort((a, b) => a.currentRent - b.currentRent);

  return (
    <>
      <section className='flex flex-row w-full gap-4 my-10'>
        <aside className='hidden w-1/4 p-4 mt-1 mr-2 rounded-xl bg-background md:block'>
          <FilterSection />
        </aside>
        <main className='grid items-center justify-around mx-auto overflow-hidden sm:grid-cols-2 xl:grid-cols-3 gap-x-5'>
          {data.map((item, i) => (
            <CarCard {...item} key={i} />
          ))}
        </main>
      </section>
      <PaginationControls entryCount={entryCount} />
    </>
  );
};

export default AllCarsSection;
