import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default () => (
  <Layout title="Contact">
    <div className="pageContainer contactContainer d-flex flex-column">
      <div className="pageTitleContainer">
        <h3 className="pageTitle">Contact</h3>
      </div>
      <div className="iconsContainer">
        <a
          href="https://www.linkedin.com/in/tiffany-chai-869110167"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="contactIcons"
            icon={["fab", "linkedin"]}
          />
        </a>
        <a
          href="https://instagram.com/the_thinkery_days"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="contactIcons"
            icon={["fab", "instagram"]}
          />
        </a>
        <a href="mailto:tiffanychai.art@gmail.com" target="_top">
          <FontAwesomeIcon className="contactIcons" icon="envelope" />
        </a>
      </div>
      <div className="d-flex justify-content-center">
        <img
          src="/images/mouse.png"
          alt="mouse drawing"
          className="img-fluid mouseImg"
        />
      </div>
    </div>
  </Layout>
);
