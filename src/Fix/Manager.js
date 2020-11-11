import React, { Component } from 'react';


class Manager extends Component {
  render() {
    return (
      <div id="page-wrapper">
        <div className="container-fluid">
    

        <div>
     
        <br />
        <h3 align="center">ผู้จัดการ</h3>
        <center>
          <form>
            <div className="form-group">
              <div className="col-3">
                <label htmlFor="email">อีเมล</label>
                <input type="email" className="form-control"  />
              </div>
            </div>
            <div className="form-group">
              <div className="col-3">
                <label htmlFor="password">รหัสผ่าน</label>
                <input type="password" className="form-control"  /><br />
              </div>
            </div>
            
            <a href="/widen2" className="btn btn-success">เข้าสู่ระบบ</a>
            <a href="#">ลืมรหัสผ่าน</a>
          </form>
        </center>
      </div>
    
        </div>
       
      </div>
    );
  }
}

export default Manager;