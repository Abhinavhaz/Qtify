import React from "react";
import LogoImage from "../../Assets/assets/logo.png"
import style from "./Logo.css"

export default function Logo(){
    return <img className="logo" src={LogoImage} alt="logo" width={67} />
}