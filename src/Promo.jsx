import AosAnimation from "./AosAnimtation";
function Promo () {
  return (
     <div className="bg-success-subtle d-flex flex-column min-vh-100">
          <div className="row g-0 mt-5">
            <div data-aos="fade-up" className="col-md-6 text-center">
              <img className="img-fluid" style={{width: "30rem"}} src="/images/promo.png"/>
              <img className="img-fluid" style={{width: "25rem"}} src="/images/discount.png" />
              <AosAnimation />
            </div>
            <div data-aos="fade-up" className="col-md-6 mt-5 d-flex flex-column justify-content-center">
              <h3>✅ For more than 10pax are entitled of 5% discount.</h3>
              <br />
              <h3>✅ We have 20% discount for our PWD and Senior citizens ID holder.</h3>
              <br />
              <h3>✅ Kids 2ft below are free, 3.5ft below is 100php, 4th below is 200php.</h3>
              <br />
              <h3>✅ There is a 2hours time limit, however you can extent if there is no waiting.</h3>
              <AosAnimation />
            </div>
          </div>
        </div>
  )
}

export default Promo