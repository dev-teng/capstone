function Promo () {
  return (
     <div className="bg-success-subtle d-flex flex-column min-vh-100">
          <div className="row g-0 mt-5">
            <div className="col-md-6 text-center">
              <img className="img-fluid" style={{width: "30rem"}} src="/images/promo.png"/>
              <img className="img-fluid" style={{width: "25rem"}} src="/images/discount.png" />
            </div>
            <div className="col-md-6 mt-5 text-center">
              <h1>✅ For more than 10pax are entitled of 5% discount</h1>
            </div>
          </div>
        </div>
  )
}

export default Promo