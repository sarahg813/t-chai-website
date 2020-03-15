import Layout from "../components/Layout";
import PortfolioNavbar from "../components/PortfolioNavbar";

export default () => (
  <Layout title="Fashion Portfolio">
    <div className="pageContainer">
      <div className="pageTitleContainer">
        <h3 className="pageTitle">Portfolio</h3>
      </div>
      <PortfolioNavbar />
      <div></div>
    </div>
  </Layout>
);
