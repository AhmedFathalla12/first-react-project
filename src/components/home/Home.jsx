import "./home.css";
import Me from "../../assets/me.ahmed.png";
import Cv from "../../assets/cv.pdf";
import HomeSocials from "./HomeSocials";

const Home = () => {
  return (
    <div className="home">
      <div className="container home_container">
        <h4>Hello I&apos;m</h4>
        <h1>Ahmed Fathalla</h1>
        <h4 className="text-light">Frontend Developer</h4>
        <div className="btns">
          <a href={Cv} className="btn" download>
            Download CV
          </a>
          <a href="#contact" className="btn btn-primray">
            Lets Talk
          </a>
        </div>
        <div className="me">
          <img src={Me} alt="" />
        </div>
        <a href="#about" className="scroll_down">
          Scroll Down
        </a>
        <HomeSocials />
      </div>
    </div>
  );
};

export default Home;
