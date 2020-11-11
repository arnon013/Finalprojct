import React, { Component } from "react";
import Cartdetail from "./Cartdetail";
import FadeIn from 'react-fade-in';
import Main from "../MainComponent/Main";
class Cart extends Component {
  render() {
    const id = localStorage.getItem("id");
    return (
      <FadeIn>
      <div className="col-12">{id !== "" ? <Cartdetail /> : <Main />}</div>
      </FadeIn>
    );
  }
}

export default Cart;
