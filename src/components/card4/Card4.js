import React from 'react'

const Card4 = (props) => {
  return (
    <div>
    <div class="card mb-3">
  <div class="card-body">
  <div className="r1" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
    <h5 class="card-title"><img src={props.im1} alt="" srcset="" /></h5>
    <div class="dropdown">
  <button class="btn btn-light fs-3" style={{padding:0,marginBottom:'1rem'}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
    <div className="tags d-flex gap-4" style={{fontWeight:'600'}}>
        <p>Innovancer Analysis pvt.limited</p>
        <p>Noida, India</p>
    </div>
    <a href="#" class="btn btn-outline-secondary container-fluid out" style={{color:'green'}}>Apply to TimeJobs</a>
  </div>
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
  )
}

export default Card4
