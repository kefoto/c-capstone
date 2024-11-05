import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import logoWhiteImage from "./assets/logo-white.png";
import pages from "../pages/pages";

const contacts = [
  { icon: faLocationDot, info: "678 Pisa Ave, Chicago, IL 60611" },
  { icon: faPhone, info: "(312) 593-2744" },
  { icon: faEnvelope, info: "customer@littlelemon.com" },
];

const socials = [
  { icon: faFacebook, name: "facebook" },
  { icon: faTwitter, name: "twitter" },
  { icon: faInstagram, name: "instagram" },
  { icon: faYoutube, name: "youtube" },
];

const navLinks = Array.from(pages.values()).filter((page) => page.linkable);

const Footer = () => {
  return (
    <footer className="text-white bg-darkGreen">
      <div className="max-w-[61.625rem] w-[90%] mx-auto grid grid-cols-4 auto-rows-auto pt-10 pb-10">
        <img
          className="col-start-1 min-w-[6rem] w-[6rem]"
          src={logoWhiteImage}
          alt="Little Lemon"
        />
        <nav className="col-start-2">
          <h4 className="mb-4">Sitemap</h4>
          <ul className="list-none">
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <Link
                  to={navLink.path}
                  className="transition-colors duration-500 text-white focus:text-lemon hover:focus:text-lemon"
                >
                  {navLink.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="col-start-3">
          <h4 className="mb-4">Contact us</h4>
          <address>
            {contacts.map((contact, index) => (
              <p key={index} className="mb-2">
                <FontAwesomeIcon icon={contact.icon} className="mr-1"/> {contact.info}
              </p>
            ))}
          </address>
        </div>
        <div className="col-start-4">
          <h4 className="mb-4">Connect with us</h4>
          {socials.map((social, index) => (
            <a
              key={index}
              href={`https://www.${social.name}.com`}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={social.icon} size="lg" className="mr-1"/>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
