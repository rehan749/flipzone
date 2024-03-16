import React from 'react'

const Banner = () => {
  return (
    <div className='banner'>
    <div className='container-fluid'>
    <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
  <div className="carousel-inner">
    <div className="carousel-item active">
      
      <img src="banner.webp" className='d-block w-100 img-fluid' alt="" />
    </div>
    <div className="carousel-item">
    <img src="banner1.webp" className='d-block w-100 img-fluid' alt="" />
    </div>
    <div className="carousel-item">
    <img src="banner2.webp" className='d-block w-100 img-fluid' alt="" />
    </div>
    <div className="carousel-item">
    <img src="banner3.webp" className='d-block w-100 img-fluid' alt="" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
       
    </div>
    </div>
  )
}

export default Banner