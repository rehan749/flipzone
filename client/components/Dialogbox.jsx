// import React from 'react'
import Registration from './Registration'
import Login from './Login'



const Dialogbox = () => {
  // const isLogin= ()=>{
  //   return isLogin(false);

  // }
  // if (isLogin) {
  //   return(
  //     <Login/>
  //   )
  // } else {
  //   <Registration/>
  // }
  return (
    <div className="modal fade" id="login" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
       
        {/* <Registration/> */}
        <Login/>
      </div>
      
    </div>
  </div>
</div>
  )
}

export default Dialogbox