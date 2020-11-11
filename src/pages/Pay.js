import React, { Component } from 'react';

class Pay extends Component {
  render() {
    return (
      <section className="checkout-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 order-2 order-lg-1">
            <form className="checkout-form">
              <div className="cf-title">ที่อยู่ในการจัดส่ง</div>
              <div className="row">
                <div className="col-md-7">
                  <p>*กรุณาเลือกที่อยู่การจัดส่ง</p>
                </div>
                <div className="col-md-5">
                  <div className="cf-radio-btns address-rb">
                    <div className="cfr-item">
                      <input type="radio" name="pm" id="one" />
                      <label htmlFor="one">ใช้ที่หลักในการจัดส่ง</label>
                    </div>
                    <div className="cfr-item">
                      <input type="radio" name="pm" id="two" />
                      <label htmlFor="two">ใช้ที่อยู่อื่นในการจัดส่ง</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row address-inputs">
                <div className="col-md-12">
                  <div className="checkout-form2">
                  <input type="text" placeholder="ที่อยู่"/>
                  </div>
                  
                  <input type="text" placeholder="จังหวัด" />
                </div>
                <div className="col-md-6">
                  <input type="text" placeholder="รหัสณี" />
                </div>
                <div className="col-md-6">
                  <input type="text" placeholder="เบอร์โทร" />
                </div>
              </div>
              <div className="cf-title">การจัดส่ง</div>
              <div className="row shipping-btns">
                <div className="col-6">
                  <h4>ลงทะเบียน</h4>
                </div>
                <div className="col-6">
                  <div className="cf-radio-btns">
                    <div className="cfr-item">
                      <input type="radio" name="shipping" id="ship-1" />
                      <label htmlFor="ship-1">ฟรี</label>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <h4>EMS</h4>
                </div>
                <div className="col-6">
                  <div className="cf-radio-btns">
                    <div className="cfr-item">
                      <input type="radio" name="shipping" id="ship-2" />
                      <label htmlFor="ship-2">60฿</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cf-title">การชำระเงิน</div>
              <ul className="payment-list">
                <li>โอนทางธนาคาร</li>
              </ul>
              <img src="assets/img/payacc.jpg" alt="" />
              <br></br>
              <br></br>
              <li color="red">เมื่อโอนแล้วกรุณาอัพโหลดหลักฐานการชำระเงิน</li>
              <input type="file" name="fileupload"  id="fileupload" />
              <br></br>
              <br></br>
              <button className="site-btn submit-order-btn"><a href="/Purchase">ยืนยันการสั่งซื้อ</a></button>
            </form>
          </div>
          
          <div className="col-lg-4 order-1 order-lg-2">
            <div className="checkout-cart">
              <h3>ตะกร้าของคุณ</h3>
              <ul className="product-list">
                <li>
                  <div className="pl-thumb"><img src="assets/img/product/p6.png" alt="" /></div>
                  <h6>SSD SATA3 Intenso 240GB</h6>
                  <p>990฿</p>
                </li>
                <li>
                  <div className="pl-thumb"><img src="assets/img/product/p11.png" alt="" /></div>
                  <h6>RAM HyperX</h6>
                  <p>1200฿</p>
                </li>
              </ul>
              <ul className="price-list">
                <li>รวม<span>2400฿</span></li>
                <li>การจัดส่ง<span>ฟรี</span></li>
                <li className="total">ราคารวมส่ง<span>2460฿</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
  }
}

export default Pay;