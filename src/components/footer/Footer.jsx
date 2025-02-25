import "./footer.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {

  return (
    <footer>
      <a href="#" className="footer_logo">
        AhmedFathalla
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a
          href="https://www.facebook.com/ahmed.fathalla.370515"
          target="_blank"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/ahmed_fathalla121/?hl=en"
          target="_blank"
        >
          <FaInstagram />
        </a>
        <a href="https://x.com/AhmedFa12072793" target="_blank">
          <FaXTwitter />
        </a>
      </div>
      <div className="footer_copyright">
        <small>
          &copy; <a href="#">AhmedFathalla</a> All right reserved
        </small>
      </div>
    </footer>
  );
};

export default Footer;
