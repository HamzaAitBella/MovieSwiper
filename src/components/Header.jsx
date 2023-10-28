import React from "react";
import '../css/header.css';
import NavItem from "./NavItem";
import navListData from "../data/navData";
import Search from "./Search";
import Button from "./Button";


const Header = () => {
  return (
    <header>
      <a href="/" className="logo">
        Logo
      </a>
      <ul className="nav">
        {
            navListData.map(nav => (
                <NavItem key={nav._id} nav={nav} />
            ))
        }
        
      </ul>
      <Search/>
      <Button icon={<ion-icon name="log-in-outline"></ion-icon>} name='SIGN IN'/>
    </header>
  );
};

export default Header;
