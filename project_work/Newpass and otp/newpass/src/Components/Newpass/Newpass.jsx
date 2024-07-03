import React from 'react'
import logo from "../../assets/Logo.png"
import "../../App.css"
function Newpass() {
  return (
    <div className="container">
      <img src={logo} alt="" className="img-fluid mb-4" />
      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control custom-width"
          id="newPassword"
          placeholder="New password *"
          style={{ boxShadow: "none", outline: "none" }}
        />
        <label htmlFor="newPassword">New Password</label>
      </div>
      <div className="form-floating mb-4">
        <input
          type="password"
          className="form-control custom-width"
          id="confirmPassword"
          placeholder="Confirm password *"
          style={{ boxShadow: "none", outline: "none" }}
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
      </div>
      <div className="w-100">
        <button className='btn btn-primary w-100 fw-bold text-capitalize' style={{ boxShadow: "none", outline: "none" }} >Continue</button>
      </div>
    </div>
  
)
}

export default Newpass