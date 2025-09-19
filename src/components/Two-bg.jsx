import React from "react";
import Bg11 from "../assets/cta-two-bg.png";
import "../App.css"
function Bg(){
    return(
<>
<div className="bg-two">
<img src={Bg11} style={{width:"100%"}} />
<h1>Are You Ready To Order <br />With the best deals?</h1>
<button>Proceed To Order</button>
</div>
</>
    );
}
export default Bg; 