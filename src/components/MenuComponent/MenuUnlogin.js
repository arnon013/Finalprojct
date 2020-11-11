import React, { Component } from "react";
import { Link } from "react-router-dom";
class MenuLogedin extends Component {
  render() {
    return (
      <nav className="main-navbar">
        <div className="container">
          <div className="slicknav_menu">
            <ul
              className="slicknav_nav slicknav_hidden"
              aria-hidden="true"
              role="menu"
              style={{ display: "none" }}
            >
              <li>
                <Link to="/">หน้าหลัก</Link>
              </li>
              <li>
                <Link to="/fix">
                  การสั่งซ่อม<span className="new">ร้านซ่อม</span>
                </Link>
              </li>
              <li>
                <Link to="/">ติดต่อ</Link>
              </li>
            </ul>
          </div>
          <ul className="main-menu">
            <li>
              <Link to="/">หน้าหลัก</Link>
            </li>
            <li>
              <Link to="/fix">
                การสั่งซ่อม<span className="new">ร้านซ่อม</span>
              </Link>
            </li>
            <li>
              <Link to="/">ติดต่อ</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default MenuLogedin;
