import Allview from "./images/allview.jpg";
import beefPlain from "./images/beefPlain.webp";
import pork from "./images/pork.png";
import chicken from "./images/chicken.avif";
import "./Header.css";
function Home() {
  return (
    <div className="bg-secondary-subtle d-flex flex-column min-vh-100 m-0">
      <div className="row g-0 mt-5">
        <div className="col-md-6">
          <img className="img-fluid w-100 rounded" src={Allview} />
        </div>
        <div className="col-md-6 text-center">
          <h2 className="mt-5">Camping + Samgyup</h2>
          <h4 className="p-4 m-2 lh-base grill-chill">Grill, chill, and enjoy the thrill—camping meets samgyupsal for the perfect 
            bonding experience with family, friends, or loved ones.</h4>
          <h5 className="bg-dark p-5 rounded-circle m-2 lh-base text-white">For only 399 pesos per head, enjoy unlimited servings of beef, pork, 
            and chicken! A feast of tender, perfectly grilled meats just for you!</h5>
          <button className="btn btn-success btn-lg mt-3">Reserve Now</button>
        </div>
        <div className="bg-dark p-2 mt-5 text-center text-light fw-bold fs-4">Main Dishes</div>
         <div className="row mt-5 mb-5 g-0">

          <div className="col-md-4">
            <div className="card h-100" >
              <img className="img-fluid" src={beefPlain} />
              <div className="card-body d-flex flex-column justify-content-between">
                <div className="card-title fw-bold">Unlimited Beef</div>
                <div className="card-text">thinly sliced beef with a tender texture and a burst of flavor</div>
                <hr/>
                <button className="btn btn-success">Reserve now</button>
              </div>
            </div>
          </div>

          <div className="col-md-4" >
            <div className="card h-100" >
              <img className="img-fluid" src={pork} />
              <div className="card-body d-flex flex-column justify-content-between">
                <div className="card-title fw-bold">Unlimited Pork</div>
                <div className="card-text">Savor endless servings of delicious, tender pork grilled to perfection.</div>
                <hr/>
                <button className="btn btn-success">Reserve now</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100" >
              <img className="img-fluid" src={chicken} />
              <div className="card-body d-flex flex-column justify-content-between">
                <div className="card-title fw-bold">Unlimited Chicken</div>
                <div className="card-text">Enjoy endless servings of juicy, perfectly grilled chicken for a mouthwatering feast."</div>
                <hr/>
                <button className="btn btn-success">Reserve now</button>
              </div>
            </div>
          </div>
         </div>

      </div>
    </div>

  )
}

export default Home