import cucumberLemonade from "./images/cucumberLemonade.png";
import fourSeason from "./images/fourSeason.webp";
import AosAnimation from "./AosAnimtation";
import "./Header.css";
function Drinks () {
    return (
      <div className="row g-0">
      <div data-aos="fade-up" className="col-6 col-md-3">
          <div className="card h-100" >
                <img className="img-fluid" src={cucumberLemonade} />
                <div className="card-body d-flex flex-column justify-content-between">
                    <div className="card-title fw-bold">Cucumber Lemonade</div>
                    <div className="card-text">Refreshing and tangy drink that combines the crisp, cool flavor of cucumber with the zesty, tartness of lemonade.</div>
                </div>
          </div>
          <AosAnimation />
      </div>

      <div data-aos="fade-up" className="col-6 col-md-3">
          <div className="card h-100" >
                <img className="img-fluid" src={fourSeason} />
                <div className="card-body d-flex flex-column justify-content-between">
                    <div className="card-title fw-bold">Four Season</div>
                    <div className="card-text">Refreshing smooth, comforting, and warming tastes, making it the ultimate beverage.</div>
                </div>
          </div>
          <AosAnimation />
      </div>
</div>
    )
}

export default Drinks