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
import "./Header.css";
function Sidedish () {
    return (
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
                      <div className="card-text">Made by steaming eggs with a few basic ingredients, resulting in a smooth, custard-like texture</div>
                  </div>
            </div>
            <AosAnimation />
        </div>
        </div>

    )
}

export default Sidedish