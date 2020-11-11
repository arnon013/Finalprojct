import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <ul className="product-filter-menu">
          <li>
            <a href="#">RAM</a>
          </li>
          <li>
            <a href="#">SSD</a>
          </li>
          <li>
            <a href="#">HDD</a>
          </li>
          <li>
            <a href="#">Mainboard</a>
          </li>
          <li>
            <a href="#">CPU</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
