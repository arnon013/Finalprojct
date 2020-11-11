import React, { Component } from 'react';

class Cart extends Component {
  render() {
    return (
     
      <section className="cart-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="cart-table">
                <h3>ตะกร้าของคุณ</h3>
                <div className="cart-table-warp" tabIndex={1} style={{overflow: 'hidden', outline: 'none', touchAction: 'none'}}>
                  <table>
                    <thead>
                      <tr>
                        <th className="product-th">สินค้า</th>
                        <th className="quy-th">จำนวน</th>
                    
                        <th className="total-th">ราคา</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="product-col">
                          <img src="assets/img/product/p6.png" alt="" />
                          <div className="pc-title">
                            <h4>SSD SATA3 Intenso 240GB</h4>
                            <p>990฿</p>
                          </div>
                        </td>
                        <td className="quy-col">
                          <div className="quantity">
                            <div className="pro-qty"><span className="dec qtybtn">-</span>
                              <input type="text" defaultValue={1} />
                              <span className="inc qtybtn">+</span></div>
                          </div>
                        </td>
                        <td className="total-col"><h4>990฿</h4></td>
                      </tr>
                      <tr>
                        <td className="product-col">
                          <img src="assets/img/product/p11.png" alt="" />
                          <div className="pc-title">
                            <h4>RAM HyperX</h4>
                            <p>1200฿</p>
                          </div>
                        </td>
                        <td className="quy-col">
                          <div className="quantity">
                            <div className="pro-qty"><span className="dec qtybtn">-</span>
                              <input type="text" defaultValue={2} />
                              <span className="inc qtybtn">+</span></div>
                          </div>
                        </td>
                        <td className="total-col"><h4>2400฿</h4></td>
                      </tr>
                     
                    </tbody>
                  </table>
                </div>
                <div className="total-cost">
                  <h6>ราคารวม<span>3390 บาท</span></h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 card-right">
              <form className="promo-code-form">
                <input type="text" placeholder="ใส้รหัสส่วนลด" />
                <button>ยืนยัน</button>
              </form>
              <a href="/Pay" className="site-btn">ชำระเงิน</a>
              <a href="Home" className="site-btn sb-dark">ซื้อสินค้าต่อ</a>
            </div>
          </div>
        </div>
      </section>

    );
  }
}

export default Cart;