import { react, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoImage from './assets/logo.png';

import pages from '../pages/pages';

const navLinks = Array.from(pages.values()).filter(page => page.linkable);

const Header = () => {
    const { pathname } = useLocation();
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <header className="border-b-2 border-darkgreen">
          <nav className="grid min-h-24 auto-cols-auto max-w-[61.625rem] w-[90%] mx-auto my-auto">
            <Link className="col-start-1 justify-self-start self-center leading-none" to={pages.get('home').path}>
              <img className="max-w-[15.625rem] p-1" src={logoImage} alt="Little Lemon logo" />
            </Link>
            <button 
              className="col-start-2 hidden cursor-pointer text-darkGreen transition-colors duration-500 hover:text-lemon" 
              type="button" 
              onClick={() => setIsNavExpanded(!isNavExpanded)}
            >
              {isNavExpanded ?
                <FontAwesomeIcon icon={faXmark} size="2x" /> : 
                <FontAwesomeIcon icon={faBars} size="2x" />}
            </button>
            <ul 
              className={`col-start-3 flex justify-end h-full pr-1.5 list-none gap-x-2.5
                            transition-left duration-300 ${isNavExpanded ? 'left-0' : ''}`}
              onClick={() => setIsNavExpanded(!isNavExpanded)}
            >
              {navLinks.map((navLink, index) => 
                <li key={index} className='flex'>
                  <Link 
                    className={`my-auto ${pathname === navLink.path ? 'bg-lemon' : ''}`} 
                    to={navLink.path}
                  >
                    {navLink.name}
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </header>
      );

}

export default Header;