import "./services.css";
import { MdDesignServices } from "react-icons/md";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import { FaCode } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services">
      <div className="top_section">
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </div>
      <div className="container container_services">
        <article className="card">
          <MdDesignServices className="icon"/>
          <h3>Web Design</h3>
          <p className="text-light">
            web design focuses on UI, UX, typography, color scheme, navigation,
            responsiveness, wireframes, prototypes, SEO
          </p>
        </article>
        <article className="card">
          <HiMiniRocketLaunch className="icon"/>
          <h3>Fast Performance</h3>
          <p className="text-light">
            Fast performance relies on optimization, caching, minification, lazy
            loading, CDN, compression, efficient coding
          </p>
        </article>
        <article className="card">
          <FaCode className="icon"/>
          <h3>Clean Code</h3>
          <p className="text-light">
            Clean code emphasizes readability, simplicity, modularity,
            maintainability
          </p>
        </article>
      </div>
    </section>
  );
};

export default Services;
