"use client"
// import React from 'react'
import Registration from './Registration'
import Login from './Login'
import { useState } from 'react'




const Dialogbox = () => {
  const [showLogin, setshowLogin] = useState(true)
  const toggle = () => {
    setshowLogin(!showLogin);
  };
  
  return (
    <div className="modal fade" id="login" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
       
       
        {
          showLogin? <Login/> : <Registration/>
        }
        {/* <button onClick={toggle}>
         {showLogin ? 'Registration' : 'Login'}
      </button> */}

      <p className="signin">{showLogin ? 'New user Create an Account? ' : 'Already have an account? '}<a className="btn btn-link" onClick={toggle} style={{display:'contents'}}>{showLogin ? 'Sign Up' : 'Sign In'}</a></p>

        
      </div>
      
    </div>
  </div>
</div>
  )
}

export default Dialogbox