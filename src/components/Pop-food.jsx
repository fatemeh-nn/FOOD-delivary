import React from "react";
import "../App.css";
import Hamberger from "../assets/cheese-burger.png";
import BigPancake from "../assets/toffes-cake.png";
import Pancake from "../assets/dancake.png";
import Crispysandwich from "../assets/crispy-sandwitch.png";
import Soup from "../assets/thai-soup.png";
import Location from "../assets/location.png";

function MyPopFood(){
return(
<div className="Pop-food">
    <h2>Popular items</h2>
<div className="card-carousel">
<div>
    <img src={Hamberger}/>
    <h4>Cheese Burger</h4>
    <h5>Burger Arena</h5>
    <h6>$3.88</h6>
    <button>Order Now</button>
    </div>
<div>
    <img src={BigPancake}/>
    <h4>Toffe's Cake</h4>
    <h5>Top Sticks</h5>
    <h6>$3.88</h6>
    <button>Order Now</button>
    </div>
<div>
    <img src={Pancake}/>
    <h4>Dancake</h4>
    <h5>Cake World</h5>
    <h6>$1.99</h6>
    <button>Order Now</button>
    
    </div>
<div>
    <img src={Crispysandwich}/>
    <h4>Crispy Sandwitch</h4>
    <h5>Fastfood Dine</h5>
    <h6>$3.00</h6>
    <button>Order Now</button>
    </div>
<div>
    <img src={Soup}/>
    <h4>Thai Soup</h4>
    <h5>Foody Man</h5>
    <h6>$2.79</h6>
    <button>Order Now</button>
    </div>
</div>
</div>
);
}
export default MyPopFood;