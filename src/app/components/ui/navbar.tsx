import React, { Component } from "react";
import { navitems } from "./MenuData";
import "./NavBarStyle.css";
export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar sticky top-0 z-10000 flex justify-center items-center p-4">
        <div className="bg-black bg-opacity-50 rounded-lg p-2 pb-4 pr-4 pl-4">
          <ul className="navmen z-100 grid grid-cols-3 gap-5">
            {navitems.map((item, index) => (
              <li key={index} className="nav-item z-1000">
                <a href={item.url} className={item.cname}>
                  <i className={item.icon}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}



export default Navbar;
