import customer1Image from "./assets/customer1.jpg";
import customer2Image from "./assets/customer2.jpg";
import customer3Image from "./assets/customer3.jpg";
import customer4Image from "./assets/customer4.jpg";
import TestimonialCard from "./TestimonialCard";

const customers = [
  {
    fullName: "Maria Sanchez",
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: "Antony Clifton",
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: "Tamika Jackson",
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: "Brandon Ming",
    image: customer4Image,
    rating: [1, 1, 1, 1],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];

const Testimonials = () => {
  return (
    <section className="px-1 py-4 bg-darkGreen">
      <div className="grid grid-cols-4 grid-rows-[auto_auto] gap-x-[1.25rem] px-3">
        <h2 className="col-start-1 col-span-4 row-start-1 mb-[1.875rem] text-white text-xl">
          What people say about us!
        </h2>
        {customers.map((customer, index) => (
          <TestimonialCard key={index} customer={customer} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
