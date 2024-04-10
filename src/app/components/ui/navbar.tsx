import React, { Component } from "react";
import { navitems } from "./MenuData";
import "./NavBarStyle.css";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar sticky top-0 z-10000 ">
        <ul className="navmen z-100">
          {navitems.map((item, index) => (
            <li key={index} className="nav-item z-1000">
              <a href={item.url} className={item.cname}>
                <i className={item.icon}></i>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}



export default Navbar;
