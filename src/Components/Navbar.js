import React from "react";

const Navbar=()=>{
return(
    <div className="navbar">
        <h1>BookStore</h1>
    <form>
        <input type="text" placeholder="Search for the book you want and read it now" className="input-search"></input>
        <button className="search-btn">Search</button>
    </form>
    </div>
)
}

export default Navbar;