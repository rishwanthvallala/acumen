import { Component } from "react";
import { navitems } from "./MenuData";
import "./NavBarStyle.css";

class Navbar  {
    render() {
      return (
        <nav className="navbar">
          <ul className="navmen">
            {navitems.map((items) => {
              return (
                <li>
                  <a href={items.url} className={items.cname}>
                    <i className={items.icon}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      );
    }
  }
  
export default Navbar;