import React, { Component } from "react";
import { Link } from "react-router-dom";

class Cate extends Component {
  render() {
    return (
      <div className="container">
        <ul className="product-filter-menu">
          <li>
            <Link to="/">All</Link>
          </li>
          <li>
            <Link to="/ram">RAM</Link>
          </li>
          <li>
            <Link to="/ssd">SSD</Link>
          </li>
          <li>
            <Link to="/hdd">HDD</Link>
          </li>

          <li>
            <Link to="/m2">M.2</Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default Cate;
