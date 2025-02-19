import { Link } from "react-router-dom"

function Home () {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid bg-dark p-3">
        <a className="navbar-brand text-light fw-bold" href="#">ReVibe</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="cart" className="nav-link active fw-bold text-light" aria-current="page" href="#">Cart 0</Link>
            </li>
          
           
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-light" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Home