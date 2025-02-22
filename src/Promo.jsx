import promo from "./images/promo.png";
function Promo () {
  return (
     <div className="bg-success-subtle d-flex flex-column min-vh-100">
          <div className="row g-0">
            <div className="col-md-6">
              <img className="img-fluid" src={promo} alt="" />
            </div>
          </div>
              
        </div>
  )
}

export default Promo