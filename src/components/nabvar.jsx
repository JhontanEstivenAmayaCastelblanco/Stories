import React from "react";
import img from '../img/marvel.png';
import slider1 from '../img/slider1.jpg';
import slider2 from '../img/slider2.jpg'
import slider3 from'../img/slider3.jpg'
import { Outlet,Link } from "react-router-dom";

export const NabVar = () => {
  return (


<div className="bg-dark " >
  <div  className="bg-dark d-flex justify-content-center  " >
    <img   src={img} alt="logo" />
  </div>
   
  <div>
   <ul class="nav justify-content-center">
  <li class="nav-item">
    <Link to="/a" class="nav-link text-white h5 " >Comics</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link text-white h5" >Historias</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link text-white h5" >Series</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link text-white h5" >Imagenes</Link>
  </li>
</ul>
      </div>
      <div className='border border-dark h-100'>
       
       
       <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={slider1} class="d-block w-100" alt="slide1"/>
    </div>
    <div class="carousel-item">
      <img src={slider2} class="d-block w-100" alt="slide2"/>
    </div>
    <div class="carousel-item">
      <img src={slider3} class="d-block w-100" alt="slide3"/>
    </div>
  </div>
</div>
      
      </div>
<Outlet/>
 </div>
  );
}

export default NabVar;
