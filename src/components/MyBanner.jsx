import React from "react";
import MyNavbar from "./Navbar";
import Headerimage from "../assets/hero-bg.png"
import HeroHeaderImage from "../assets/hero-header.png";
import Myform from "./form";
import "../App.css";
import discount1 from "../assets/discount-item-1.png";
import discount2 from "../assets/discount-item-2.png";
import discount3 from  "../assets/discount-item-3.png";
import discount4 from "../assets/discount-item-4.png";
import Mylocation from "../assets/location.png";
import Myorder from "../assets/order.png";
import Mypay from "../assets/pay.png";
import Mymeals from "../assets/meals.png";
import MyPopFood from "./Pop-food";
import Featured from "./FeaturedRe";
import Food from "./SearchFood";
import Bg from "./Two-bg";
import Myfooter from "./Footer";
function MyBanner() {
  return (
    <div className="home-container">
      <MyNavbar />
<div className="home-bannerImage-container">
  <img src={Headerimage} style={{width:"100%", height:"100vh"}} />
  <h1 >Are you starving?</h1>
  <h4 >Within a few clicks, find meals thatare accessible near you</h4>
  
</div>
<div className="heroimage">
<img src={HeroHeaderImage}  />
</div>
<Myform/>
<div className="card-container">
  <div>
  <img src={discount1} alt="" />
  <h4 className="headline-img">Flat Hill Slingback</h4>
  <button className="button-img">6 Days remaining</button>
  </div>
  <div>
  <img src={discount2} alt="" />
  <h4 className="headline-img">Ocean Blue Ring</h4>
  <button className="button-img">6 Days remaining</button>
  </div>
  <div>
  <img src={discount3} alt="" />
  <h4 className="headline-img">Brown Leatherd Wallet</h4>
  <button className="button-img">6 Days remaining</button>
  </div>
  <div>
  <img src={discount4} alt="" />
<h4 className="headline-img">Silverside Wristwatch</h4>
<button className="button-img">6 Days remaining</button>
  </div>
<div className="how-does-container">
<p className="HW-HEADLINE">How does it work</p>
<div className="hw-row">
<div>
  <img src={Mylocation} alt="" />
  <h3>Select location</h3>
</div>
<div>
  <img src={Myorder} alt="" />
  <h3>Choose order</h3>
</div>
<div>
<img src={Mypay} alt="" />
<h3>Pay advanced</h3>
</div>
<div>
  <img src={Mymeals} alt="" />
  <h3>Enjoy meals</h3>
</div>
</div>
<MyPopFood/>
<Featured/>
<Food/>
<Bg/>
<Myfooter />
</div>

</div>


    </div>
  );
}

export default MyBanner;
