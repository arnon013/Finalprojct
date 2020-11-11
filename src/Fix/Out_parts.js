import React, { Component } from 'react';
class Out_parts extends Component {
  render() {
    return (
      
      <div id="">
       <div className="container">
       <center>
         <br/>
        <h3>แจ้งอะไหล่หมด</h3>
        <form className="checkout-form">
      
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="Email">หมวดหมู่</label>
              <select className="select">
                <option>หมวดหมู่</option>
                <option>CPU</option>
                <option>RAM</option>
                <option>HDD</option>
                <option>SSD</option>
                <option>MAINBAND</option>
              </select>
            </div>
          <div className="form-group col-md-6">
          <label htmlFor="Password">ชื่ออะไหล่</label>
          <input type="text" placeholder="ชื่ออะไหล่" />
          </div>
          </div>
            <div className="form-group">
              <label htmlFor="date">วันที่</label>
             <div>
       
         </div>
         </div>
    
        </form>
        <a href="/Widen1" className="btn btn-success">ยืนยันการแจ้งอะไหล่หมด</a> &nbsp;
        <a href="/Widen1" className="btn btn-danger">ยกเลิกแจ้งอะไหล่หมด</a> &nbsp;
      </center>

      <div>
        </div>
       </div>
      </div>
    );
  }
}

export default Out_parts;