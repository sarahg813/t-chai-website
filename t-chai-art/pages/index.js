import Layout from "../components/Layout";
import homeTilesData from "../components/homeTilesData";

export default () => (
  <Layout title="Tiffany Chai's Portfolio">
    <div className="pageContainer row">
      <div className="homeTileDiv container row col-md-6 col-sm-12">
        {homeTilesData.map(tile => (
          <div key={tile.img} className="homeTiles col-lg-6 col-sm-4">
            <img
              src={tile.img}
              alt={tile.title}
              className="img-fluid homeTileImage"
            />
          </div>
        ))}
      </div>
      <div className="container col-md-6 col-sm-12">
        <div className="homeTextDiv d-flex justify-content-center">
          <h4 className="homeText">
            Fashion Designer &amp; <br /> Illustrator
          </h4>
        </div>
      </div>
    </div>
  </Layout>
);
