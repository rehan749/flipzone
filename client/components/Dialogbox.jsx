"use client"
// import React from 'react'
import Registration from './Registration'
import Login from './Login'
import { useState } from 'react'




const Dialogbox = () => {
  const [Showlogin, setShowLogin] = useState(true)
  const toggle = () => {
    setShowLogin(!Showlogin);
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
          Showlogin? <Login/> : <Registration/>
        }
        {/* <button onClick={toggle}>
         {Showlogin ? 'Registration' : 'Login'}
      </button> */}

      <p className="signin">{Showlogin ? 'New user Create an Account? ' : 'Already have an account? '}<a className="btn btn-link" onClick={toggle} style={{display:'contents'}}>{Showlogin ? 'Sign Up' : 'Sign In'}</a></p>

        
      </div>
      
    </div>
  </div>
</div>
  )
}

export default Dialogbox