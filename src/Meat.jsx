import pork from "./images/pork.png";
import porkSaltPepper from "./images/porkSaltPepper.png";
import porkBulgogi from "./images/porkBulgogi.png";
import beefPlain from "./images/beefPlain.webp";
import beef from "./images/beef.png";
import beefBulgogi from "./images/beefBulgogi.png";
import chickenPlain from "./images/chickenPlain.webp";
import AosAnimation from "./AosAnimtation";
import "./Header.css";
function Meats () {
  return (

    
    <div data-aos="fade-up" className="row g-0">
                <div className="col-6 col-md-3">
                  <div className="card h-100" >
                    <img className="img-fluid" src={pork} />
                    <div className="card-body d-flex flex-column justify-content-between">
                        <div className="card-title fw-bold">Pork plain</div>
                        <div className="card-text">Savor endless servings of delicious, tender pork grilled to perfection.</div>
                    </div>
                  </div>
                  <AosAnimation />
                </div>

                <div data-aos="fade-up" className="col-6 col-md-3">
                  <div className="card h-100" >
                    <img className="img-fluid" src={porkSaltPepper} />
                    <div className="card-body d-flex flex-column justify-content-between">
                        <div className="card-title fw-bold">Pork Salt and Peper</div>
                        <div className="card-text">Slices of pork belly, marinated with a blend of salt, soy sauce, and sesame oil.</div>
                    </div>
                  </div>
                  <AosAnimation />
                </div>
              
              <div data-aos="fade-up" className="col-6 col-md-3">
                <div className="card h-100" >
                      <img className="img-fluid" src={porkSaltPepper} />
                      <div className="card-body d-flex flex-column justify-content-between">
                          <div className="card-title fw-bold">Pork Garlic and Peper</div>
                          <div className="card-text">Slices of pork belly, marinated with a special blend of garlic, soy sauce.</div>
                      </div>
                </div>
                <AosAnimation />
              </div>

              <div data-aos="fade-up" className="col-6 col-md-3">
                <div className="card h-100" >
                      <img className="img-fluid" src={porkBulgogi} />
                      <div className="card-body d-flex flex-column justify-content-between">
                          <div className="card-title fw-bold">Pork Bulgogi</div>
                          <div className="card-text">Thinly sliced pork belly with the rich flavors of bulgogi marinade.</div>
                      </div>
                </div>
                <AosAnimation />
              </div>

              <div data-aos="fade-up" className="col-6 col-md-3">
                <div className="card h-100" >
                      <img className="img-fluid" src={beefPlain} />
                      <div className="card-body d-flex flex-column justify-content-between">
                          <div className="card-title fw-bold">Beef Plain</div>
                          <div className="card-text">Thinly sliced beef with a tender texture and a burst of flavor.</div>
                      </div>
                </div>
                <AosAnimation />
              </div>

              <div data-aos="fade-up" className="col-6 col-md-3">
                <div className="card h-100" >
                      <img className="img-fluid" src={beef} />
                      <div className="card-body d-flex flex-column justify-content-between">
                          <div className="card-title fw-bold">Beef Salt and Peper</div>
                          <div className="card-text">Thinly sliced beef marinated with a blend of salt, soy sauce, and sesame oil.</div>
                      </div>
                </div>
                <AosAnimation />
              </div>

              <div data-aos="fade-up" className="col-6 col-md-3">
                <div className="card h-100" >
                      <img className="img-fluid" src={beef} />
                      <div className="card-body d-flex flex-column justify-content-between">
                          <div className="card-title fw-bold">Beef Garlic and Peper</div>
                          <div className="card-text">Thinly sliced beef marinated with a special blend of garlic, soy sauce.</div>
                      </div>
                </div>
                <AosAnimation />
              </div>

              <div data-aos="fade-up" className="col-6 col-md-3">
                <div className="card h-100" >
                      <img className="img-fluid" src={beefBulgogi} />
                      <div className="card-body d-flex flex-column justify-content-between">
                          <div className="card-title fw-bold">Beef Bulgogi</div>
                          <div className="card-text">Thinly sliced beef marinated with a special blend of garlic, soy sauce.</div>
                      </div>
                </div>
                <AosAnimation />
              </div>

              <div data-aos="fade-up" className="col-6 col-md-3">
                <div className="card h-100" >
                      <img className="img-fluid" src={chickenPlain} />
                      <div className="card-body d-flex flex-column justify-content-between">
                          <div className="card-title fw-bold">Chicken Plain</div>
                          <div className="card-text">Tender and juicy pieces of chicken, grilled to perfection for a light and savory flavor.</div>
                      </div>
                </div>
                <AosAnimation />
              </div>
              
          </div>
  )
}

export default Meats