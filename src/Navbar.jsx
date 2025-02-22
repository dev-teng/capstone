import { Outlet, Link } from "react-router-dom";
import Logo from "./images/logo.jpg"
import fbicon from "./images/fbicon.webp";
import "./Header.css";
import { useNavigate } from "react-router-dom";
function Navbar () {
  let navigate = useNavigate()

  const handleNavigation = (route) => {
    navigate(route)
    window.scrollTo(0, 0);
  }
  return(
    <>
     <nav className="navbar navbar-expand-lg bg-dark fixed-top">
      <div className="container-fluid bg-dark p-1">
        <Link to="/" onClick={handleNavigation} className="navbar-brand text-light fw-bold"><img className="img-fluid rounded-circle" src={Logo} style={{width: "2.9rem"}} /></Link>
        <button className="navbar-toggler collapsed bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/about" onClick={handleNavigation} className="nav-link active fw-bold text-light fs-5" aria-current="page">About Us </Link>
            </li>
            <li className="nav-item">
              <Link to="/menu" onClick={handleNavigation} className="nav-link active fw-bold text-light fs-5" aria-current="page">Menu </Link>
            </li>
          
           
          </ul>
        </div>
      </div>
    </nav>
    <Outlet />
    <footer className='p-3 text-center footer mt-auto fw-bold text-white bg-dark'>Copyright Allserved <a className="link-underline link-underline-opacity-0 text-light" href="https://www.facebook.com/profile.php?id=61552058284454&sk=photos"><img className="img-fluid" src={fbicon} style={{width: "2rem"}} />Campgyup</a> 2025</footer>
    </>
  )
}

export default Navbar