import React from "react";
import "./NavBar.css";

import {Link} from "react-router-dom"
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaYoutube ,FaTrash ,FaPlus,FaSearch,FaEdit, FaSignOutAlt, FaBars } from 'react-icons/fa';
const Navbar = () => {
  return (
    <div >
     
     <div className="dropdown">
        <button className="dropbtn"><FaBars size={30}/>  </button>
        <div className="dropdown-content">
          <Link to="Home">Home</Link>
          <Link to="Home">Contact</Link>
          <Link to="Help">Help</Link>
        </div>
        </div>
    
    <nav>
       
      
       
        <ul className="menu">
        <li><button className="but"><Link to="Post"><FaPlus />  Post</Link></button></li>
        <li><button className="but"><Link to="Get"><FaSearch />  Get</Link></button></li>
        <li><button className="but"><Link to="Put"><FaEdit />  Put</Link></button></li>
        <li><button className="but"><Link to="Delete"> <FaTrash />  Delete </Link></button></li>
        <li><button className="but"><Link to="Signin"><FaSignOutAlt size={15} /></Link></button></li>
      </ul>
    
    </nav>
   <div>
   
   <div className="company"> </div>
   </div>
   <br /><br /><br />
 
  
   <div className="about">
   
    <p><center>
      "The best part of Technology is what the world does with it"<br />
      --Anonymous
      </center>
    </p>
    <br /><br />
    <br /> <br /> <br /><br /> <br /> <br />
    <br />  <h2 className="texth2">About Us:</h2>
    <h3 className="texth4"><i>Data is an essential resource that can be used to boost decision-making processes for your business. 
      Proper data management processes help enterprises effectively gather, store, and utilize large amounts of data.<br />
       Within the well-orchestrated management framework, businesses can easily get access to their data records at any time 
       as well as be sure that their data is securely stored.<br />
       Our solutions help your organisation to unlock insights about your business and customers by extracting data from your 
       organisations systems, spreadsheets and documents, enriching it with external data and creating a single source of truth.
       </i></h3>
       <br />
<div className="gridimg">
       <div className="aboutimg"></div>
       <div className="aboutimg1"></div>
       <div className="aboutimg2"></div>
       </div><br /><br />
     <center>  <div className="text">Trusted by more than 80 million users globally... </div></center>
   </div>

   <div className="footer">
      <div className="social-icons">
        <a href="https://www.instagram.com/"><FaInstagram /></a>
        <a href="https://twitter.com/"><FaTwitter /></a>
        <a href="https://www.linkedin.com/"><FaLinkedin /></a>
       <a href="https://www.facebook.com/"> <FaFacebook /></a>
       <a href="https://www.youtube.com/"> <FaYoutube /><br /></a>
      </div>
      <h6>© 2023 Copyright: Company.com</h6>
    </div>
  

    </div>
  );
};

export default Navbar;
