import { Outlet, Link } from "react-router-dom";
import "./Header.css";
function Navbar () {
  return(
    <>
     <nav className="navbar navbar-expand-lg bg-body-secondary">
      <div className="container-fluid bg-dark p-3">
        <Link to="/" className="navbar-brand text-light fw-bold">Campgyup</Link>
        <button className="navbar-toggler collapsed bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/cart" className="nav-link active fw-bold text-light fs-4" aria-current="page">About </Link>
            </li>
          
           
          </ul>
        </div>
      </div>
    </nav>
    <Outlet />
    <footer className='p-3 text-center footer mt-auto fw-bold text-white bg-dark'>Copyright Allserved @ReVibe 2025</footer>
    </>
  )
}

export default Navbar