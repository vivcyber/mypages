import React from 'react'

function Navbar() {
  return (
    <>
     <ul className="nav justify-content-center bg-dark text-white py-2">
  <li className="nav-item">
    <a className="nav-link text-white" aria-current="page" href="#">HOME</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-white" href="#">FRONT END</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-white" href="#">UIUX</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-white" href="#">OTHERS</a>
  </li>
  
</ul>
    </>
  )
}

export default Navbar