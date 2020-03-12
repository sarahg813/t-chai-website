import Layout from "../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default () => (
  <Layout title="Contact">
    <div className="pageContainer">
      <div className="pageTitleContainer">
        <h3 className="pageTitle">Contact</h3>
      </div>
      <div className="iconsContainer">
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="contactIcons"
            icon={["fab", "linkedin"]}
          />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="contactIcons"
            icon={["fab", "instagram"]}
          />
        </a>
        <a href="https://gmail.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="contactIcons" icon="envelope" />
        </a>
      </div>
    </div>
  </Layout>
);
