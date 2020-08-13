import React from 'react';
import {Link} from "react-router-dom";

function Header(){
    return <header style = {headerStyle}><h1>TODO List</h1> 
    <Link to="/" style={LinkStyle}>HOME</Link> | <Link to="/about" style={LinkStyle}>ABOUT</Link>
    </header>;
}

const headerStyle = {
    background:"teal",
    color: "#fff",
    textAlign:"center",
    padding: "10px"
}

const LinkStyle ={
    color: "#fff",
    textDecoration: "None"
}

export default Header;