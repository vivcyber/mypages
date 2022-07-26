import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="">
        <ul className="nav justify-content-center bg-dark text-white py-2">
          <li className="nav-item ">
            <Link className="nav-link text-white" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link text-white" to="/frontend">
              FrontEnd
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link text-white" to="/uiux">
              UIUX
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link text-white" to="/others">
              Others
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
