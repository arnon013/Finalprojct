import React, { Component } from 'react';

class Book extends Component {
  render() {
    return (
      <div>
      <div className="">
        <div className="container">
          <h4>Form Booking</h4>
          <h6>แบบฟอร์มการจองคิว</h6>
        </div>
      </div>
      
      <form className="checkout-form">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="col-6">
                <br /><br />
                <input type="text" placeholder="วันที่ต้องการจอง" readOnly />
                &nbsp; &nbsp; <input type="date" placeholder="เวลาที่ต้องการจอง" />
                <br /><br />
                <input type="text" placeholder="เวลาที่ต้องการจอง" />
                <input type="text" placeholder="อาการเสีย" />
                <input type="text" placeholder="ชื่อสินค้า" />
                <input type="text" placeholder="รูปหรือคลิปวิดิโอ" readOnly />
                <input type="file" name="fileupload"  id="fileupload" /> <label htmlFor="fileupload"> Select a file to upload</label>
                <br /><br />
                <div className="col-6">
                  <button className="site-btn submit-order-btn">ยืนยันการจองคิว</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    );
  }
}

export default Book;