import "./Header.css";
import pork from "./images/pork.png";
import porkSaltPepper from "./images/porkSaltPepper.png";
import porkBulgogi from "./images/porkBulgogi.png";
import beefPlain from "./images/beefPlain.webp";
import beef from "./images/beef.png";
import beefBulgogi from "./images/beefBulgogi.png";
import chickenPlain from "./images/chickenPlain.webp";
function Menu () {
  return (
    <div className="bg-secondary-subtle d-flex flex-column min-vh-100 mt-5">
          <div className="row g-0 menus">
            <div className="col-md-12 text-center d-flex flex-column justify-content-center">
              <h1 className="m-5 text-light d-1">UNLIMITED MENU</h1>
              <h4 className="text-light">✅ 9 Different Meats</h4>
              <br />
              <h4 className="text-light">✅ 10 Side Dishes</h4>
              <br />
              <h4 className="text-light">✅ 2 Drinks</h4>
              <br />
              <h4 className="text-light">For only 399 per head you can enjoy unlimited servings.</h4>
            </div>
          </div>

          <div className="row mt-3 g-0">
            <div className="col-md-12">
              <h3 className="bg-dark text-light p-3 text-center">M E A T S</h3>
            </div>
          </div>

          <div className="row g-0">
                <div className="col-6 col-md-3">
                  <div className="card h-100" >
                    <img className="img-fluid" src={pork} />
                    <div className="card-body d-flex flex-column justify-content-between">
                        <div className="card-title fw-bold">Pork plain</div>
                        <div className="card-text">Savor endless servings of delicious, tender pork grilled to perfection.</div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="card h-100" >
                    <img className="img-fluid" src={porkSaltPepper} />
                    <div className="card-body d-flex flex-column justify-content-between">
                        <div className="card-title fw-bold">Pork Salt and Peper</div>
                        <div className="card-text">Slices of pork belly, marinated with a blend of salt, soy sauce, and sesame oil.</div>
                    </div>
                  </div>
                </div>
              
              <div className="col-6 col-md-3">
                <div className="card h-100" >
                      <img className="img-fluid" src={porkSaltPepper} />
                      <div className="card-body d-flex flex-column justify-content-between">
                          <div className="card-title fw-bold">Pork Garlic and Peper</div>
                          <div className="card-text">Slices of pork belly, marinated with a special blend of garlic, soy sauce.</div>
                      </div>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="card h-100" >
                      <img className="img-fluid" src={porkBulgogi} />
                      <div className="card-body d-flex flex-column justify-content-between">
                          <div className="card-title fw-bold">Pork Bulgogi</div>
                          <div className="card-text">thinly sliced pork belly with the rich flavors of bulgogi marinade.</div>
                      </div>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="card h-100" >
                      <img className="img-fluid" src={beefPlain} />
                      <div className="card-body d-flex flex-column justify-content-between">
                          <div className="card-title fw-bold">Beef Plain</div>
                          <div className="card-text">thinly sliced beef with a tender texture and a burst of flavor.</div>
                      </div>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="card h-100" >
                      <img className="img-fluid" src={beef} />
                      <div className="card-body d-flex flex-column justify-content-between">
                          <div className="card-title fw-bold">Beef Salt and Peper</div>
                          <div className="card-text">thinly sliced beef marinated with a blend of salt, soy sauce, and sesame oil.</div>
                      </div>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="card h-100" >
                      <img className="img-fluid" src={beef} />
                      <div className="card-body d-flex flex-column justify-content-between">
                          <div className="card-title fw-bold">Beef Garlic and Peper</div>
                          <div className="card-text">thinly sliced beef marinated with a special blend of garlic, soy sauce.</div>
                      </div>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="card h-100" >
                      <img className="img-fluid" src={beefBulgogi} />
                      <div className="card-body d-flex flex-column justify-content-between">
                          <div className="card-title fw-bold">Beef Bulgogi</div>
                          <div className="card-text">thinly sliced beef marinated with a special blend of garlic, soy sauce.</div>
                      </div>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="card h-100" >
                      <img className="img-fluid" src={chickenPlain} />
                      <div className="card-body d-flex flex-column justify-content-between">
                          <div className="card-title fw-bold">Chicken Plain</div>
                          <div className="card-text">tender and juicy pieces of chicken, grilled to perfection for a light and savory flavor</div>
                      </div>
                </div>
              </div>
              
          </div>
    
    </div>
  )
}

export default Menu