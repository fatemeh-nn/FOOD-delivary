import React from "react";
import "../App.css";
import Mylocation from "../assets/location.png";
import Mylogo from "../assets/logo.svg";


function MyNavbar(){
  return(
     <nav className="nav-container">
 <div className="nav-logo">
          <h3><img src={Mylogo} style={{paddingRight:"5px",alignItems:"center"}}  />FoodWagen</h3>
          
 </div>
 
 <div className="nav-links">
  <ul>
    <li>
      <a href="">
        <p><strong>Deliver to:</strong> <img src={Mylocation}  style={{ width: "10px", height: "auto" }} /> Current Location <strong>Mirpur 1 Bus Stand,Dhaka</strong></p>
      </a>
    </li>
    
  </ul>

 </div>
 <div className="nav-input">
 
        <input type="search" placeholder="Search Food"/>

      
 </div>
 <div >
  
    <button className="nav-button"> Login</button>
 
 </div>
 



     </nav>
  );
}
export default MyNavbar;