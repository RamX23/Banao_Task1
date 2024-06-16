import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div>
      <div class="card mb-3 ">
  <img src={props.banner} class="card-img-top" alt="..." style={{height:'13.75rem',objectFit:'cover'}}/>
  <div class="card-body">
    <div className="r1" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
    <h5 class="card-title"> <img src={props.im1} alt="" srcset="" /> {props.title}</h5>
    <div class="dropdown">
  <button class="btn btn-light fs-3" style={{paddingTop:0,marginBottom:'1rem'}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
   ...
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button">Edit</button></li>
    <li><button class="dropdown-item" type="button">Report</button></li>
    <li><button class="dropdown-item" type="button">Action 3</button></li>
  </ul>
  </div>
</div>
    <p class="card-text">{props.heading}</p>
    <p class="card-text"><small class="text-body-secondary">{props.para}</small></p>
    
    <div className="card-footer d-flex justify-content-between">
        <div className="fleft d-flex align-items-center gap-2">
        <img className='prf rounded-circle' src={props.prf} alt="" srcset="" />
        
        <p style={{paddingTop:'1rem'}}>{props.name}</p>
 
        </div>
        <div className="fright d-flex gap-5" style={{paddingTop:'1rem'}}>
            <p className='views'>1.4k views</p>
            
            <a href='' className='btn btn-light'><i class="fa-solid fa-share-nodes"></i></a>
        </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Card
