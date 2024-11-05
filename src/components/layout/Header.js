import { react, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import logoImage from './assets/logo.png';

import pages from '../pages/pages';

const navLinks = Array.from(pages.values()).filter(page => page.linkable);

const Header = () => {
    const { pathname } = useLocation();
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <header>
          <nav className=" grid min-h-24 auto-cols-auto max-w-[61.625rem] w-[90%] mx-auto">
            <Link className="col-start-1 justify-self-start self-center leading-none" to={pages.get('home').path}>
              <img className="max-w-[15.625rem]" src={logoImage} alt="Little Lemon logo" />
            </Link>
            <button 
              className="col-start-2 hidden cursor-pointer text-[#495E57] transition-colors duration-500 hover:text-[#F4CE14]" 
              type="button" 
              onClick={() => setIsNavExpanded(!isNavExpanded)}
            >
              {isNavExpanded ?
                <FontAwesomeIcon icon={faXmark} size="2x" /> : 
                <FontAwesomeIcon icon={faBars} size="2x" />}
            </button>
            <ul 
              className={`col-start-3 flex justify-end my-0 px-0 list-none transition-left duration-300 ${isNavExpanded ? 'left-0' : ''}`}
              onClick={() => setIsNavExpanded(!isNavExpanded)}
            >
              {navLinks.map((navLink, index) => 
                <li key={index} className='flex'>
                  <Link 
                    className={pathname === navLink.path ? 'bg-[#F4CE14]' : ''} 
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