import React from "react";
import {ReactComponent as SearchIcon} from "../../Assets/assets/search-icon.svg"
import styles from "./Search.css"





function Search(){





    return (
        <div>

<form className="Swrapper">

<div>
<input    className="search"  placeholder="Search a song of your Choice" />
</div>


<div > 
    <button className="searchbutton">
        <SearchIcon />
    </button>
</div> 


</form>
        </div>
    )
}
export default Search