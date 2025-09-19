import React from "react";
import "../App.css";


function Myfooter(){
    return(
        <>
        <div className="Footer-table">
            <div className="row1">
<ul>
    <h2>COMPANY</h2>
    <li>About Us</li>
    <li>Team</li>
    <li>Careers</li>
    <li>blog</li>
   
</ul>
</div>
<div  className="row2">
    <ul>
    <h2>CONTACT</h2>
    <li>Help & Support</li>
    <li>Partner with us</li>
    <li>Ride with us</li>
   
</ul>
</div>
<div  className="row3">
<ul>
    <h2>LEGAL</h2>
    <li>Terms & Conditions</li>
    <li>Refund & Cancellation</li>
    <li>Privacy Policy</li>
    <li>Cookie Policy</li>
   
</ul>

</div>

        </div>
        </>
    );
}
export default Myfooter;