import React from "react";
import Pizza from "../assets/search-pizza.png";
import Burger from "../assets/burger.png";
import Noodles from "../assets/chowmein.png";
import Chow from "../assets/noodles.png";
import Steak1 from "../assets/steak.png";
import sub from "../assets/sub-sandwich.png";
import "../App.css";

function Food(){
    return(
        <>
<div className="Search-food">
    <div className="Title-container">
    <h3>Search by Food</h3>
        <h4>View All<i class="fa-solid fa-angle-right"></i></h4>
       </div>
        
    </div>
    <div className="item">
            <div>
                <img src={Pizza} alt="" />
                <h5></h5>
            </div>
            <div>
                <img src={Burger} alt="" />
                <h5></h5>
            </div>
            <div>
                <img src={Chow} alt="" />
                <h5></h5>
            </div>
            <div>
                <img src={sub} alt="" />
                <h5></h5>
            </div>
            <div>
                <img src={Noodles} alt="" />
                <h5></h5>
            </div>
            <div>
                <img src={Steak1} alt="" />
                <h5></h5>
            </div>
        </div>
    </>

    );
}
export default Food;