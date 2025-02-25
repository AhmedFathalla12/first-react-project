import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const HomeSocials = () => {
  return (
    <div className="home_social">
      <a
        href="https://www.linkedin.com/in/ahmed-fathalla-624677255/"
        target="_blank"
      >
        <FaLinkedin />
      </a>
      <a href="https://www.facebook.com/ahmed.fathalla.370515" target="_blank">
        <FaFacebook />
      </a>
      <a href="https://github.com/AhmedFathalla12" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default HomeSocials;
