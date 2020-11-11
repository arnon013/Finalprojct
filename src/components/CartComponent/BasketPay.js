import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class BasketPay extends Component {
  render() {
    const { cartItems } = this.props;
    localStorage.setItem("count", cartItems.length);
    localStorage.setItem("detailpart", JSON.stringify(cartItems));
    console.log(localStorage.getItem("detail"));
    const name = localStorage.getItem("name");

    localStorage.setItem(
      "total",
      cartItems.reduce((a, c) => a + c.price * c.count, 0)
    );
    const total = localStorage.getItem("total");
    return (
      <section className="cart-section spasd">
        {cartItems.length === 0 ? (
          <div>
            <br></br>
          </div>
        ) : (
          <div>
            คุณมี {cartItems.length} รายการสั่งซื้อ <hr />
          </div>
        )}
        {cartItems.length > 0 && (
          <div>
            <ul style={{ marginLeft: 0 }}>
              {cartItems.map(item => (
                <div key={item.id}>
                  <img width="50px" src={`http://www.senpru.com/api/signalinfo/${item.img}`} />
                  <b>{item.name}</b>
                  <br />
                  {item.count} X {item.price}
                </div>
              ))}
            </ul>
            <br />
            <hr />
            <h6>
              ราคารวม {cartItems.reduce((a, c) => a + c.price * c.count, 0)}
              <br />
              <br />
            </h6>
          </div>
        )}
      </section>
    );
  }
}
