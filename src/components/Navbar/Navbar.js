import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
const Navbar = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg  rounded " aria-label="Thirteenth navbar example">
      <div class="container-fluid nav" style={{height:'2rem'}}>
      <button class="navbar-toggler" className='togglebt navbar-toggler' type="button"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler d-flex gap-1"><i class="fa-solid fa-square"></i>
      <i class="fa-solid fa-circle"></i>
      <i class="bi bi-caret-down-fill secondary"></i></span>
    </button>


        <div class="collapse navbar-collapse d-lg-flex d-flex justify-content-around pcnav" id="navbarsExample11">
          <img src={logo}  className='logo' alt="" srcset=""  style={{height:'1rem'}}/>
          <div class="navbar-nav col-lg-6 justify-content-lg-center">

        <input class="form-control me-2 w-50 inp" style={{marginLeft:'12rem'}} type="search" placeholder=" Search for your favourite groups in ATG" aria-label="Search"/>
     
          </div>
          <div class="d-lg-flex col-lg-3 justify-content-lg-end align-items-center pt-2 px-3">
          <div class="btn-group">
  <button class="btn btn-sm dropdown-toggle acc" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Create accout.<a href=''>It's free</a>
  </button>

</div>

          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
