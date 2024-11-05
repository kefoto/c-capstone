import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UnderConstruction = () => {
  return (
    <div className="max-w-[61.625rem] w-[90%] mx-auto 
                    flex gap-4 px-8 text-center flex-col min-h-[31.25rem]">
      <FontAwesomeIcon icon={faPersonDigging} size="3x" />
      <h2>Page under construction</h2>
    </div>
  );
};

export default UnderConstruction;