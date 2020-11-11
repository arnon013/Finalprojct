import React, { Component } from "react";
import { Link } from "react-router-dom";
class CartEmpty extends Component {
  render() {
    return (
      <section className="cart-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="cart-table">
                <h3>ตะกร้าของคุณ :</h3>
                <div
                  className="cart-table-warp"
                  tabIndex={1}
                  style={{
                    overflow: "hidden",
                    outline: "none",
                    touchAction: "none"
                  }}
                >
                  <table>
                    <tbody>
                      <tr>
                        <td className="product-col">
                          <img src="assets/img/product/p6.png" alt="" />
                          <div className="pc-title"></div>
                        </td>
                        <td className="quy-col">
                          <div className="quantity">
                            {" "}
                            <div className="pro-qty"></div>{" "}
                          </div>{" "}
                        </td>{" "}
                        <td className="total-col"></td>{" "}
                      </tr>{" "}
                    </tbody>
                  </table>{" "}
                </div>{" "}
                <div className="total-cost"></div>
              </div>
            </div>
            <div className="col-lg-4 card-right">
              <a href="/Pay" className="site-btn">
                ชำระเงิน
              </a>
              <a href="Home" className="site-btn sb-dark">
                ซื้อสินค้าต่อ
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CartEmpty;
