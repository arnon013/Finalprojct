import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Basket extends Component {
  render() {

    const { cartItems } = this.props;
    localStorage.setItem("count", cartItems.length);
    localStorage.setItem("detail", JSON.stringify(cartItems));
    const id = localStorage.getItem("id");
    localStorage.setItem(
      "total",
      cartItems.reduce((a, c) => a + c.price * c.count, 0)
    );
    const total = localStorage.getItem("total");


    return (
      <section className="cart-section spasd">
        <div className="col-lg-12">
          <Link to="/"> &larr; กลับไปซื้อสินค้าต่อ</Link>

          {cartItems.length === 0 ? (
            <div>
              <br></br>
              <div className="cart-table">
                <center>
                  <h4>ไม่มีสินค้าในตะกร้า</h4>
                </center>
                <br></br>
              </div>
            </div>
          ) : (
            <div>
              คุณมี {cartItems.length} รายการในตะกร้าสินค้า <hr />
            </div>
          )}
          {cartItems.length > 0 && (
            <div className="cart-table">
              <ul style={{ marginLeft: 0 }}>
                {cartItems.map(item => (
                  <div key={item.id}>
                    <img width="50px" src={`http://www.senpru.com/api/signalinfo/${item.img}`} />
                    <b>{item.name}</b>
                    <button
                      style={{ float: "right" }}
                      className="btn btn-danger btn-xs"
                      onClick={e => this.props.handleRemoveFromCart(e, item)}
                    >
                      X
                    </button>
                    <br />
                    <div className="quantity"></div>
    
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
              <div className="total-cost">
                {id === null? (
                  <Link to ="/Login">
                    <button className="site-btn2">ชำระเงิน</button>
                  </Link>
                ) : (
                  <Link to="/pay">
                    <button className="site-btn2">ชำระเงิน</button>
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }
}
