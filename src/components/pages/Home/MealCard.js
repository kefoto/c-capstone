import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
// import './MealCard.css';
import pages from "../pages";

const MealCard = ({ meal }) => {
  return (
    <article className="col-auto row-start-2 min-h-[31.25rem] pb-10 flex flex-col rounded-lg overflow-hidden bg-[#EDEFEE]">
      <div
        className="transition-all ease-in-out duration-200 hover:scale-110"
      >
        <img
          className="w-full h-[12.5rem] object-cover mb-[0.9375rem]"
          src={meal.image}
          alt={meal.name}
        />
      </div>
      <div className="flex gap-[1.25rem] justify-between mb-[1.875rem] px-2 items-center">
        <h3 className="text-xl">{meal.name}</h3>
        <span className="font-bold text-[#EE9972]">{meal.price}</span>
      </div>
      <div className="flex flex-col justify-between h-full px-4 gap-[1.25rem] mb-[1.875rem] ">
        <p>{meal.description}</p>
        <Link to={pages.get("orderOnline").path} className="font-bold flex justify-between items-center">
          <span>Order a delivery</span> <FontAwesomeIcon className="" icon={faMotorcycle} />
        </Link>
      </div>
    </article>
  );
};

export default MealCard;
