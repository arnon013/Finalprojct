import React, { Component } from "react";
import { Link } from "react-router-dom";
import Skeleton from "@material-ui/lab/Skeleton";
import { ToastContainer, toast } from "react-toastify";
import FadeIn from 'react-fade-in';
import NumberFormat from "react-number-format";
import "react-toastify/dist/ReactToastify.css";
import ShowM2 from "../../Products/ShowM2";
export default class ProductNew extends Component {
  render() {
    const productItems = this.props.products.map((product) => (
      <div className="col-lg-3 col-sm-3">
        <FadeIn>
        <div className="product-item" key={product.id}>
          <div className="thumbnail text-center">
            <div className=" parent">
              <img
                style={{ position: "absolute", width: "100px" }}
                className="imga1"
                src="assets/img/new.png"
              />
              <img
                className="imga2"
                src={`http://www.senpru.com/api/signalinfo/${product.img}`}
                alt={product.name}
              />
              <div className="pi-links">
                {/* <a href={`#${product.id}`}onClick={(e)=>this.props.handleAddToCart(e, product)}/> */}
                <Link
                  to="#"
                  className="add-card"
                  onClick={(e) => this.props.handleAddToCart(e, product)}
                >
                  <ToastContainer
                    position="top-right"
                    autoClose={1000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
                  />
                  <i className="flaticon-bag"></i>
                  <span>ADD TO CART</span>
                </Link>
              </div>
            </div>

            <b>{product.name}</b>
            <p>{product.description}</p>
            <p>
              ประเภทสินค้า: &nbsp;
              {product.category_id == 1 ? "RAM" : ""}
              {product.category_id == 2 ? "HDD" : ""}
              {product.category_id == 3 ? "SSD" : ""}
              {product.category_id == 4 ? "Mainboard" : ""}
              {product.category_id == 5 ? "M.2" : ""}
            </p>
            <b>
              {" "}
              <NumberFormat
                value={product.price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"฿ "}
              />
            </b>
            <br></br>
          </div>
        </div>
        </FadeIn>
      </div>
    ));

    return <div className="row">{productItems}</div>;
  }
}
