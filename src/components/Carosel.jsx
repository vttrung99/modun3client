import React from 'react'
import './Carosel.scss'

export default function Carosel() {
 
  return (

    <div>
      <div
  id="carouselExampleControls"
  className="carousel slide"
  data-mdb-ride="carousel"
>
  <div className="carousel-inner">
    <div   className="carousel-item active">
     <div style={{width:'60%',height:'700px',margin:'auto'}}>
     <img
        src="https://vakits.com/sites/default/files/imagecache/product_full/ARDUINO_NANO_03.png"
        className="d-block w-100"
        
        alt="Wild Landscape"
      />
     </div>
    </div>
    <div  className="carousel-item">
     <div style={{width:'60%',height:'700px',margin:'auto'}}>
     <img
        src="https://tse4.mm.bing.net/th?id=OIP.MnEVMzPNkkhmgLGYnHJXzwHaEg&pid=Api&P=0&h=180"
        className="d-block w-100"
        
        alt="Camera"
      />
     </div>
    </div>
    <div   className="carousel-item">
      <div style={{width:'60%',height:'700px',margin:'auto'}}>
      <img
      
      src="http://blog.tkjelectronics.dk/wp-content/uploads/2011/11/arduino-due.jpg"
      className="d-block w-100"
      alt="Exotic Fruits"
    />
      </div>

    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-mdb-target="#carouselExampleControls"
    data-mdb-slide="prev"
  >
    <span style={{color:'black'}} className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-mdb-target="#carouselExampleControls"
    data-mdb-slide="next"
  >
    <span style={{color:'black'}} className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
  )
}
