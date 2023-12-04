import Notification from './Notification';
import { GoDotFill } from 'react-icons/go';

const Notifications = () => {
  return (
    <div className='my-2 '>
      <h1 className='flex flex-row items-center gap-2 my-4 text-xl font-bold'>
        <GoDotFill />
        Notifications
      </h1>
      <br />
      <section className='ml-2'>
        <Notification
          title='Rent Now!'
          description='Make a rent now to get a 15% discount!'
        />
        <Notification
          title='Offer!'
          description='One extra reservation available'
        />
      </section>
    </div>
  );
};

export default Notifications;
