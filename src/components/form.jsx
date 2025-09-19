import React from "react";
import "../App.css";


function Myform(){
    return(
        <form className="form-container">
            <div className="primary-button">
                <button className="delivery-button">Delivery</button>
                <button className="pickup-button">Pickup</button>
                
            </div>
            <div>
          
             <input type="text" className="input-search" placeholder="Enter your Address"/>
             <button className="find-food">Find food</button>
             </div>
            
          
        </form>
    );

}
export default Myform;