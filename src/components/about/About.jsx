import "./about.css";
import ImageMe from "../../assets/me.ahmed.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="top_section">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
      </div>
      <div className="container about_container">
        <div className="about_me2">
          <div className="about_me">
            <div className="about_me_image">
              <img src={ImageMe} alt="" />
            </div>
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <div className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1+ years working</small>
            </div>
            <div className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>200+ worldwide</small>
            </div>
            <div className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </div>
          </div>
          <p>
            My name is Ahmed Fathalla and I am a Frontend web developer I
            specialize in frontend development, creating beautiful and
            responsive websites I have a strong background in HTML, CSS,
            JavaScript and Reactjs
          </p>
          <a href="#contact" className="btn btn-primray">
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
