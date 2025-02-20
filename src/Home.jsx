import Allview from "./images/allview.jpg";
import beef from "./images/beef.png";
import pork from "./images/pork.png";
import chicken from "./images/chicken.avif";
function Home() {
  return (
    <div className="bg-secondary-subtle d-flex flex-column min-vh-100 m-0">
      <div className="row g-0 mt-5">
        <div className="col-md-6 mt-5">
          <img className="img-fluid w-100 rounded" src={Allview} />
        </div>
        <div className="col-md-6 text-center">
          <h2 className="m-5">Camping + Samgyup</h2>
          <h4 className="bg-light p-4 border border-dark m-5 lh-base">Grill, chill, and enjoy the thrill—camping meets samgyupsal for the perfect 
            bonding experience with family, friends, or loved ones.</h4>
          <h5 className="bg-dark p-5 rounded-circle m-5 lh-base text-white">For only 399 pesos per head, enjoy unlimited servings of beef, pork, 
            and chicken! A feast of tender, perfectly grilled meats just for you!</h5>
          <button className="btn btn-success btn-lg ">Reserve Now</button>
        </div>
        <div className="bg-dark p-2 mt-5 text-center text-light fw-bold fs-4">Main Dishes</div>
         <div className="row mt-5 mb-5 g-0">

          <div className="col-md-4">
            <div className="card h-100" >
              <img className="img-fluid" src={beef} />
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