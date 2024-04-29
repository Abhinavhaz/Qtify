import React from "react";
// import {Link} from "react-router-dom"
import Button from "../Button/Button"
import { AppBar, Toolbar } from '@mui/material';
// import { InputBase } from '@mui/material';
import styles from "./Navbar.css"

import Logo from "../Logo/Logo"
import Search from "../Seach/Search";
import Buttonfn from "../Button/Button"

function Navbar(){
    return (
<>


<nav className="navbar" >
<Logo />


<Search />


<Buttonfn />

</nav>

</>
    )
}

export default Navbar



