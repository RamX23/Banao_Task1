import React from 'react';
import './Tabs.css'
import { useState } from 'react';
import grp from '../../assets/grp.png'
const Tabs = () => {


  return (
    <div className='col-md-8 mx-auto mt-3'>
 <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">  
    <button class="navbar-toggler" style={{border:'none',outline:'none'}} data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" >
      Posts(383)
    </button>
    <div className="collapse navbar-collapse tabs" id="navbarSupportedContent" 
    >
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item mx-2">
          <a class="nav-link tab" aria-current="page" href="#">All posts</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link tab" aria-current="page" href="#">Articles</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link tab" aria-current="page" href="#">Event</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link tab" aria-current="page" href="#">Education</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link tab" aria-current="page" href="#">Job</a>
        </li>
        
       </ul>
     
       <div class="dropdown mx-2">
  <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Write a Post
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
        <button class="btn btn-primary"  type="submit">
          <img className='px-2' src={grp} alt="" />
          join Group</button>
     
    </div>
  </div>
</nav>
<hr/>
   </div>
  );
}

export default Tabs;
