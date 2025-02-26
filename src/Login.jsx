import {Link } from "react-router-dom";
function Login () {

  return(
    <div className="d-flex flex-column min-vh-100">
      <div className="container-fluid p-5" style={{width: "50rem"}}>
      <div className="border p-5 m-5 rounded">
        <h1 className="text-center">Welcome to Campgyup</h1>
        <p className="text-center">Unli meats is just a click away 🤤.</p>
        <h4 className="text-secondary">Login to your account</h4>
        <label htmlFor="email">Email</label>
        <input id="email" 
          type="email" className="form-control"
        />

        <label htmlFor="password">Password</label>
        <input id="password" 
          type="password" className="form-control"
        />

        <button  className="btn btn-dark mt-3 mb-2">Login</button> 
        <br></br>
        <Link to="/register">Don't Have Account? Register Here</Link>
      </div>
    </div>
  </div>
    
    
  )
}

export default Login