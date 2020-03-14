import Layout from "../components/Layout";
import homeTilesData from "../components/homeTilesData";

export default () => (
  <Layout title="Tiffany Chai's Portfolio">
    <div className="pageContainer row">
      <div className="homeTileDiv container row col-md-6 col-sm-12">
        {homeTilesData.map(tile => (
          <div key={tile.title} className="homeTiles col-lg-6 col-sm-4">
            <img
              src={tile.img}
              alt={tile.title}
              className="img-fluid homeTileImage"
            />
          </div>
        ))}
      </div>
      <div className="container d-flex align-items-center col-md-6 col-sm-12">
        <div className="container d-flex flex-column">
          <div>
            <img
              src="/images/creative-creature-lg.png"
              alt="creative creature sign"
              className="img-fluid creatureSignImg"
            />
          </div>
          <div className="homeTextDiv d-flex justify-content-center">
            <h4 className="homeText">
              Fashion Designer &amp; <br /> Illustrator
            </h4>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);
