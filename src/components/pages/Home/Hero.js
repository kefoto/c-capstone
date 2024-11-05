import { Link } from 'react-router-dom';
import restaurantFoodImage from './assets/restaurant-food.jpg';
import pages from '../pages';

const Hero = () => {
  return (
    <section className="pt-7 bg-darkGreen">
      <div className="max-w-[61.625rem] w-[90%] mx-auto grid grid-cols-2 gap-[3.5rem] mb-[9.375rem]">
        <div className="col-start-1">
          <h1 className='text-lemon text-4xl'>Little Lemon</h1>
          <h2 className='text-white text-2xl'>Chicago</h2>
          <p className='mt-6 text-white'>
            We are a family owned Mediterranean restaurant, 
            focused on traditional recipes served with a modern twist.
          </p>
          <Link className="btn-custom inline-block mt-8 hover:text-lemon focus:text-lemon" to={pages.get('bookings').path}>
            Reserve a table
          </Link>
        </div>
        <img 
          className="col-start-2 w-full h-96 mb-[-4.375rem] justify-self-end rounded-lg object-cover" 
          src={restaurantFoodImage} 
          alt="Restaurant food" 
        />
      </div>
    </section>
  );
};

export default Hero;