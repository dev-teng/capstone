import "./Header.css";
import pork from "./images/pork.png";
import porkSaltPepper from "./images/porkSaltPepper.png";
import porkBulgogi from "./images/porkBulgogi.png";
import beefPlain from "./images/beefPlain.webp";
import beef from "./images/beef.png";
import beefBulgogi from "./images/beefBulgogi.png";
import chickenPlain from "./images/chickenPlain.webp";
import porkSisig from "./images/porkSisig.png";
import fishCake from "./images/fishCake.png";
import enoki from "./images/enoki.png";
import kimchi from "./images/kimchi.png";
import hotdog from "./images/hotdog.png";
import cucumber from "./images/cucumber.png";
import lettuce from "./images/lettuce.png";
import rice from "./images/rice.webp";
import corn from "./images/corn.webp";
import steamEgg from "./images/steamEgg.png";
import AosAnimation from "./AosAnimtation";
function Menu () {
  return (
    <div className="bg-success-subtle d-flex flex-column min-vh-100 mt-5">
          <div className="row g-0 menus">
            <div data-aos="fade-up" className="col-md-12 text-center d-flex flex-column justify-content-center">
              <h1 className="m-5 text-light d-1">UNLIMITED MENU</h1>
              <h4 className="text-light">✅ 9 Different Meats</h4>
              <br />
              <h4 className="text-light">✅ 10 Side Dishes</h4>
              <br />
              <h4 className="text-light">✅ 2 Drinks</h4>
              <br />
              <h4 className="text-light">For only 399 per head you can enjoy unlimited servings.</h4>
              <AosAnimation />
            </div>
          </div>

          <div data-aos="fade-up" className="row mt-3 g-0">
            <div className="col-md-12">
              <h3 className="bg-dark text-light p-3 text-center">M E A T S</h3>
            </div>
          </div>

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

          <div className="row mt-3 g-0">
            <div className="col-md-12">
              <h3 className="bg-dark text-light p-3 text-center">S I D E - D I S H E S</h3>
            </div>
          </div>

          <div className="row g-0">
                <div data-aos="fade-up" className="col-6 col-md-3">
                      <div className="card h-100" >
                            <img className="img-fluid" src={porkSisig} />
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div className="card-title fw-bold">Pork Sisig</div>
                                <div className="card-text">This dish made from crispy and tender pieces of pork, perfectly seasoned with a savory blend of spices, onions, and chilies.</div>
                            </div>
                      </div>
                      <AosAnimation />
                </div>

                <div data-aos="fade-up" className="col-6 col-md-3">
                    <div className="card h-100" >
                          <img className="img-fluid" src={fishCake} />
                          <div className="card-body d-flex flex-column justify-content-between">
                              <div className="card-title fw-bold">Fish Cake</div>
                              <div className="card-text">This dish combines the delicate flavors of fish with a smoky, grilled finish.</div>
                          </div>
                    </div>
                    <AosAnimation />
                </div>

                <div data-aos="fade-up" className="col-6 col-md-3">
                    <div className="card h-100" >
                          <img className="img-fluid" src={enoki} />
                          <div className="card-body d-flex flex-column justify-content-between">
                              <div className="card-title fw-bold">Enoki Mushroom</div>
                              <div className="card-text">Nutty flavor and tender texture</div>
                          </div>
                    </div>
                    <AosAnimation />
                </div>

                <div data-aos="fade-up" className="col-6 col-md-3">
                    <div className="card h-100" >
                          <img className="img-fluid" src={kimchi} />
                          <div className="card-body d-flex flex-column justify-content-between">
                              <div className="card-title fw-bold">Kimchi</div>
                              <div className="card-text">Side dish that's the perfect balance of spicy, tangy, and umami.</div>
                          </div>
                    </div>
                    <AosAnimation />
                </div>

                <div data-aos="fade-up" className="col-6 col-md-3">
                    <div className="card h-100" >
                          <img className="img-fluid" src={hotdog} />
                          <div className="card-body d-flex flex-column justify-content-between">
                            <br />
                              <div className="card-title fw-bold">Hotdog</div>
                              <div className="card-text">Crispy on the outside while still juicy inside and grilling a hot dog alongside pork belly slices on a hot grill.</div>
                          </div>
                    </div>
                    <AosAnimation />
                </div>

                <div data-aos="fade-up" className="col-6 col-md-3">
                    <div className="card h-100" >
                          <img className="img-fluid" src={cucumber} />
                          <div className="card-body d-flex flex-column justify-content-between">
                              <div className="card-title fw-bold">Cucumber</div>
                              <div className="card-text">Salted briefly to remove excess moisture, giving the dish a crisp and crunchy texture that complements heavier main dishes like grilled meats or stews</div>
                          </div>
                    </div>
                    <AosAnimation />
                </div>

                <div data-aos="fade-up" className="col-6 col-md-3">
                    <div className="card h-100" >
                          <img className="img-fluid" src={lettuce} />
                          <div className="card-body d-flex flex-column justify-content-between">
                          <br />
                          <br />
                              <div className="card-title fw-bold">Lettuce</div>
                              <div className="card-text">The cool, crisp leaves are perfect for wrapping pork belly slices</div>
                          </div>
                    </div>
                    <AosAnimation />
                </div>

                <div data-aos="fade-up" className="col-6 col-md-3">
                    <div className="card h-100" >
                          <img className="img-fluid" src={rice} />
                          <div className="card-body d-flex flex-column justify-content-between">
                              <div className="card-title fw-bold">Rice</div>
                              <div className="card-text">This is a soft, fluffy grains. It's often served with a variety of dishes like curries, stews, or grilled meats</div>
                          </div>
                    </div>
                    <AosAnimation />
                </div>

                <div data-aos="fade-up" className="col-6 col-md-3">
                    <div className="card h-100" >
                          <img className="img-fluid" src={corn} />
                          <div className="card-body d-flex flex-column justify-content-between">
                              <div className="card-title fw-bold">Rice</div>
                              <div className="card-text">This is a soft, fluffy grains. It's often served with a variety of dishes like curries, stews, or grilled meats</div>
                          </div>
                    </div>
                    <AosAnimation />
                </div>

                <div data-aos="fade-up" className="col-6 col-md-3">
                    <div className="card h-100" >
                          <img className="img-fluid" src={steamEgg} />
                          <div className="card-body d-flex flex-column justify-content-between">
                              <div className="card-title fw-bold">Korean Steam Egg</div>
                              <div className="card-text">made by steaming eggs with a few basic ingredients, resulting in a smooth, custard-like texture</div>
                          </div>
                    </div>
                    <AosAnimation />
                </div>
          </div>

        
           
        


    
    </div>
  )
}

export default Menu