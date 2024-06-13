import "./Navbar.css";
import logo from "../../assets/logoNav.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      {/* <nav>
       <NavLink className="active" to="/">
          <img
            src={logo}
            className="logoImg"
            alt="logo"
            width="140px"
            height="70px"
          />
       </NavLink>
        <div>
          <ul className="navbar">
            
             <NavLink to="/">Home</a>
           
            
             <NavLink to="/about">About us</a>
           
            
             <NavLink to="/learning">Learning Modules</a>
           
            
             <NavLink to="/services">Services</a>
           
            
             <NavLink to="/contact">Contact Us</a>
           
            
             <NavLink to="/">Book Online</a>
           
            
             <NavLink to="/pagenotfound"></a>
           
          </ul>
        </div>
      </nav> */}

      <nav>
        <div className="logo">
          <img
            src={logo}
            className="logoImg"
            alt="logo"
            // width="140px"
            height="65px"
          />
        </div>
        <input type="checkbox" id="click" />

        <label htmlFor="click" className="check">
          <div className="menu n-b">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </label>
        <div className="un">
          <ul>
            <NavLink to="/" className="liv">
              Home
            </NavLink>

            <NavLink to="/about" className="liv">
              About us
            </NavLink>

            <NavLink to="/learning" className="liv">
              Learning Modules
            </NavLink>

            <NavLink to="/services" className="liv">
              Services
            </NavLink>

            <NavLink to="/contact" className="liv">
              Contact Us
            </NavLink>

            {/* <NavLink to="/" className="liv">
              Book Online
            </NavLink> */}

            {/*<NavLink to="/pagenotfound" className="liv"></a> */}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
