import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ratingLevels = { 0.5: faStarHalfStroke, 1: faStar };

const TestimonialCard = ({ customer }) => {
  return (
    <article className="col-auto row-start-2 min-h-[22.75rem] flex flex-col items-center justify-center h-full px-4 bg-white rounded-lg">
      <img
        className="w-[8rem] mx-auto mb-[0.5rem] rounded-full"
        src={customer.image}
        alt={customer.fullName}
      />
      <h4 className="mx-auto mb-1">{customer.fullName}</h4>
      <span className="text-lemon mx-auto flex mb-2">
        {customer.rating.map((ratingPoint, index) => (
          <FontAwesomeIcon
            key={index}
            icon={ratingLevels[ratingPoint]}
            size="xs"
          />
        ))}
      </span>
      <blockquote>
        <p>"{customer.says}"</p>
      </blockquote>
    </article>
  );
};

export default TestimonialCard;
