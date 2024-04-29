import React from "react";
import HeroImage from "../../Assets/assets/hero_headphones.png"
import  styles from "./Hero.css"
function Hero(){

return(
    <>
    <div className="hero">

        <div>
        <h1>100 Thousand Songs,add free </h1>
        <h1>Over thousands podcast  episodes </h1>

        </div>

    <div>
    <img width={212}   src={HeroImage} />
   </div>
    
    </div>
    </>
)
}
export default Hero