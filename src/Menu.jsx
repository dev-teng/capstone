import "./Header.css";
import Meats from "./Meat";
import Sidedish from "./Sidedish";
import Drinks from "./Drinks";
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
          <Meats />


          <div data-aos="fade-up" className="row mt-3 g-0">
            <div className="col-md-12">
              <h3 className="bg-dark text-light p-3 text-center">S I D E - D I S H E S</h3>
            </div>
            <AosAnimation />
          </div>
          <Sidedish />

       
          <div data-aos="fade-up" className="row mt-3 g-0">
            <div className="col-md-12">
              <h3 className="bg-dark text-light p-3 text-center">D R I N K S</h3>
            </div>
            <AosAnimation />
          </div>
          <Drinks />

        
        
        
           
        


    
    </div>
  )
}

export default Menu