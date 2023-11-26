import { footerContent as content } from '@/lib/constants';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='w-full bg-background'>
      <div className='container pt-16 mx-auto'>
        <div className='flex flex-col items-start gap-10 justify-evenly sm:flex-row'>
          <section className='w-72 md:mr-20'>
            <h1 className='mb-5 text-2xl font-bold capitalize sm:text-3xl text-primary'>
              {content.title}
            </h1>
            <p className='text-muted-foreground'>{content.description}</p>
          </section>
          <section className='flex justify-between w-full sm:min-w-2/5 sm:max-w-1/2'>
            <ul>
              <li className='mb-5 text-lg font-semibold'>About</li>
              {content.about.map((value, i) => (
                <li
                  className='mb-5 text-sm transition text-muted-foreground hover:opacity-80'
                  key={i}
                >
                  <Link href={value.url}>{value.title}</Link>
                </li>
              ))}
            </ul>
            <ul>
              <li className='mb-5 text-lg font-semibold'>Community</li>
              {content.community.map((value, i) => (
                <li
                  className='mb-5 text-sm transition text-muted-foreground hover:opacity-80'
                  key={i}
                >
                  <Link href={value.url}>{value.title}</Link>
                </li>
              ))}
            </ul>
            <ul>
              <li className='mb-5 text-lg font-semibold'>Socials</li>
              {content.socials.map((value, i) => (
                <li
                  className='mb-5 text-sm transition text-muted-foreground hover:opacity-80'
                  key={i}
                >
                  <Link href={value.url}>{value.title}</Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <hr className='w-full my-5 bg-muted-foreground' />
        <section className='flex items-center justify-between w-full gap-2 my-5'>
          <h1 className='text-sm font-bold'>
            {`©${new Date().getFullYear()} ${
              content.title
            }. All rights reserved`}
          </h1>
          <span className='text-right'>
            <Link
              href={content.privacy.url}
              className='mr-4 text-sm font-bold  hover:opacity-80'
            >
              Privacy Policy
            </Link>

            <Link
              href={content.terms.url}
              className='text-sm font-bold  hover:opacity-80'
            >
              Terms and Condition
            </Link>
          </span>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
