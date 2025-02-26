import {Link } from "react-router-dom";
function Register () {

  return (
  <div className="container-fluid p-5" style={{width: "50rem"}}>
      <div className="border p-5 m-5 rounded">
          <h3 className="text-center">Create an Account</h3>
          <p className="text-center mb-5 fs-5">Sign up here⬇️</p>
          <div className="row mb-4">
              <div className="col-md-12">
                <label htmlFor="displayname">Name</label>
                <input id="displayname"
                  type="text" className="form-control"
                />
              </div>

          </div>

          <div>
              <label htmlFor="email">Email</label>
              <input id="email" 
                type="email" className="form-control mb-3"
              />

              <label htmlFor="password">Password</label>
              <input id="password"
                type="password" className="form-control mb-3"
              />

              <label htmlFor="confirmpassword">Confirm password</label>
              <input id="confirmpassword" 
                type="password" className="form-control mb-3"
              />

              <button className="btn btn-dark mt-3 mb-2">Create Account</button>
              <br></br>
              <Link to="/login">Already Have an Account? Login Here</Link>
          </div>
      </div>
  </div>
  )
}

export default Register