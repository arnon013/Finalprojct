import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <section className="product-section">
        <div className="container">
          <div className="back-link">
            <a href="/Home"> &lt;&lt; Back to Category</a>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="product-pic-zoom">
                <img
                  className="product-big-img"
                  src="assets/img/product/p2.png"
                  alt=""
                />
              </div>
              <div
                className="product-thumbs"
                tabIndex={1}
                style={{ overflow: "hidden", outline: "none" }}
              >
                <div className="product-thumbs-track">
                  <div
                    className="pt active"
                    data-imgbigurl="assets/img/product/p2.png"
                  >
                    <img src="assets/img/product/p2.png" alt="" />
                  </div>
                  <div
                    className="pt"
                    data-imgbigurl="assets/img/product/p2.png"
                  >
                    <img src="assets/img/product/p2.png" alt="" />
                  </div>
                  <div className="pt" data-imgbigurl="img/single-product/3.jpg">
                    <img src="img/single-product/thumb-3.jpg" alt="" />
                  </div>
                  <div className="pt" data-imgbigurl="img/single-product/4.jpg">
                    <img src="img/single-product/thumb-4.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 product-details">
              <h2 className="p-title">Sandisk SSD 250GB</h2>
              <h3 className="p-price">970 ฿</h3>
              <h4 className="p-stock">
                สินค้า: <span>มีของในสต๊อก</span>
              </h4>
              <div className="quantity">
                <p>เลือกจำนวน</p>
                <td className="quy-col">
                  <div className="quantity">
                    <div className="pro-qty">
                      <span className="dec qtybtn">-</span>
                      <input type="text" defaultValue={1} />
                      <span className="inc qtybtn">+</span>
                    </div>
                  </div>
                </td>
              </div>
              <a href="#" className="site-btn">
                ซื้อเลย
              </a>
              <div id="accordion" className="accordion-area">
                <div className="panel">
                  <div className="panel-header" id="headingOne">
                    <button
                      className="panel-link active"
                      data-toggle="collapse"
                      data-target="#collapse1"
                      aria-expanded="true"
                      aria-controls="collapse1"
                    >
                      รายละเอียดสินค้า
                    </button>
                  </div>
                  <div
                    id="collapse1"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div className="panel-body">
                      <p>
                        Hard Drive INTENSO 3832440 256 GB SSD 2.5 "SATA
                        IIIในราคาที่ถูกที่สุด 'Intenso 3832440 ประสิทธิภาพภายใน
                        SSD 256 GB M.2 SATA III" ประมาณขนาด: 2,2x8x0,4 ซม. SATA
                        III
                      </p>
                      <p>ประเภท: SSD</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Product;
