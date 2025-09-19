import React from "react";
import Egg from "../assets/food-world.png";
import Pizzahub from "../assets/pizza-hub.png";
import Pancakehub from "../assets/donuts-hut.png";
import Cupcake from "../assets/donuthut.png";
import "../App.css";
import Ruby from "../assets/ruby-tuesday.png";
import Friedchicken from "../assets/kuakata.png";
import Firedsoup from "../assets/red-square.png";
import Eggbaken from "../assets/taco-bell.png";
 function Featured(){
    return(
<div className="Featured">
    <h2>Featured Restaurants</h2>
    <div className="f-row1">
        <div>
            <img src={Egg}/>
            <h4>Food World</h4>
            <button className="close-btn">Opens Tomarrow</button>
        </div>
        <div >
        <img src={Pizzahub}/>
        <h4>Pizzahub</h4>
        <button className="close-btn">Opens Tomarrow</button>
        </div>
        <div>
        <img src={Pancakehub}/>
        <h4>Donuts Hut</h4>
        <button className="Open-btn">Open Now</button>
        </div>
        <div >
        <img src={Cupcake}/>
        <h4>Donuts Hut</h4>
        <button className="Open-btn">Open Now</button>
        </div>

    </div>
    <div className="F-row2">
        <div>
            <img src={Ruby} alt="" />
            <h4>Rub tuesday</h4>
            <button>Open now</button>
        </div>
        <div>
            <img src={Friedchicken} alt="" />
            <h4>Kuakata Fried Chicken</h4>
            <button>Open now</button>
        </div>
        <div>
            <img src={Firedsoup} alt="" />
            <h4>Kuakata Fried Chicken</h4>
            <button>Open now</button>
        </div>
        <div>
            <img src={Eggbaken} alt="" />
            <h4>Taco Bell</h4>
            <button>Open now</button>
        </div>

    </div>
    
        <button className="btn-View">
            View All <i class="fa-solid fa-angle-right"></i>
        </button>

</div>
    );
 }
 export default Featured;