import React from 'react'

function Navbar() {
  return (
    <>
     <ul className="nav justify-content-center bg-dark text-white py-2">
  <li className="nav-item">
    <a className="nav-link text-white" aria-current="page" >HOME</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-white" >FRONT END</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-white" >UIUX</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-white" >OTHERS</a>
  </li>
  
</ul>
    </>
  )
}

export default Navbar