import React, { Component } from "react";
import ReactDOM from "react-dom";
import Products from "../CartComponent/Products";
import Cate from "./Cate";

import MainNew from "./MainNew";
import Skeleton from "@material-ui/lab/Skeleton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      size: "",
      sort: "",
      cartItems: [],
      products: [],
      filteredProducts: [],
    };
  }
  componentWillMount() {
    if (localStorage.getItem("cartItems")) {
      this.setState({
        cartItems: JSON.parse(localStorage.getItem("cartItems")),
      });
    }

    let url =
      "https://www.api.senpru.com/signalinfo/index.php/propart/fetchall";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ products: data[0].products });
        this.listProducts();
      });
  }

  handleRemoveFromCart = (e, product) => {
    this.setState((state) => {
      const cartItems = state.cartItems.filter((a) => a.id !== product.id);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return { cartItems: cartItems };
    });
  };

  handleAddToCart = (e, product) => {
    toast("เพิ่มสินค้าลงตะกร้าแล้ว..");

    this.setState((state) => {
      const cartItems = state.cartItems;
      let productAlreadyInCart = false;

      cartItems.forEach((cp) => {
        if (cp.id === product.id) {
          cp.count += 1;
          productAlreadyInCart = true;
        }
      });

      if (!productAlreadyInCart) {
        cartItems.push({ ...product, count: 1 });
      }
      console.log(cartItems.length);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return { cartItems: cartItems };
    });
  };

  listProducts = () => {
    this.setState((state) => {
      if (state.sort !== "") {
        state.products.sort((a, b) =>
          state.sort === "lowestprice"
            ? a.price > b.price
              ? 1
              : -1
            : a.price < b.price
            ? 1
            : -1
        );
      } else {
        state.products.sort((a, b) => (a.id > b.id ? 1 : -1));
      }
      if (state.size !== "") {
        return {
          filteredProducts: state.products.filter(
            (a) => a.availableSizes.indexOf(state.size.toUpperCase()) >= 0
          ),
        };
      }
      return { filteredProducts: state.products };
    });
  };
  handleSortChange = (e) => {
    this.setState({ sort: e.target.value });
    this.listProducts();
  };
  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
    this.listProducts();
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Cate />

            <h4>สินค้ามาใหม่</h4>
            <br></br>
            <MainNew />
            <hr></hr>
            <h4>สินค้าทั้งหมด</h4>

            <br></br>
            {this.state.products != "" ? (
              <Products
                products={this.state.filteredProducts}
                handleAddToCart={this.handleAddToCart}
              />
            ) : (
              <div>
                <Skeleton width="100%" />
                <Skeleton width="100%" />
                <Skeleton width="80%" />
                <Skeleton width="75%" />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
