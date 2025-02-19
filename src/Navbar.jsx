import { Outlet, Link } from "react-router-dom";
function Navbar () {
  return(
    <>
     <nav className="navbar navbar-expand-lg bg-body-secondary">
      <div className="container-fluid bg-dark p-3">
        <Link to="/" className="navbar-brand text-light fw-bold">ReVibe</Link>
        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/cart" className="nav-link active fw-bold text-light fs-4" aria-current="page">Cart <span className="text-success">0</span></Link>
            </li>
          
           
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-light" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    <Outlet />
    <footer className='p-3 text-center footer mt-auto fw-bold text-white bg-dark'>Copyright Allserved 2025</footer>
    </>
  )
}

export default Navbar