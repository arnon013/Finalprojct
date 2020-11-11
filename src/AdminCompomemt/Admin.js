import React, { Component } from "react";
import { Link } from "react-router-dom";
import FadeIn from 'react-fade-in';
class Admin extends Component {
  render() {
    const status = localStorage.getItem("status");
    const name = localStorage.getItem("name");
    return (
      <div>
        
        {status == 2 ? (
          <div id="page-wrapper">
            <FadeIn>
            <div className="container">
              <h4>
                ยินดีต้อนรับ คุณ <b style={{ color: "red" }}>{name}</b>
              </h4>
              <br></br>
              <div className="row">
                <div className="col-6">
                  <h4>ร้านค้า</h4>
                </div>
                <div className="col-6">
                  <h4>การซ่อม</h4>
                </div>
              </div>
              <br></br>
              <div className="row">
                <div className="col-sm-3">
                  <Link to="/showpro">
                    <div className="card bg-light mb-3">
                      <div className="card-body">
                        <center>
                          <h3 className="card-title ">จัดการสินค้า</h3>
                        </center>
                        <center>
                          <img src="assets/img/icons/pro.png" height="150px" />
                        </center>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-sm-3">
                  <Link to="/Dashboard">
                    <div className="card bg-light mb-3">
                      <div className="card-body">
                        <center>
                          <h3 className="card-title ">แดชบอร์ด</h3>
                        </center>
                        <center>
                          <img
                            src="assets/img/icons/order.png"
                            height="150px"
                          />
                        </center>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-sm-3">
                  <Link to="Choosetech">
                    <div className="card bg-light mb-3">
                      <div className="card-body">
                        <center>
                          {" "}
                          <h3 className="card-title ">จัดการคิวซ่อม</h3>
                        </center>
                        <center>
                          <img src="assets/img/icons/qwe.png" height="150px" />
                        </center>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="col-sm-3">
                  <Link to="/status">
                    <div className="card bg-light mb-3">
                      <div className="card-body">
                        <center>
                          {" "}
                          <h3 className="card-title ">อัพเดทการซ่อม</h3>
                        </center>
                        <center>
                          <img
                            src="assets/img/icons/support.png"
                            height="150px"
                          />
                        </center>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              <hr></hr>
              <h4>บุคลากร</h4>
              <br></br>
              <div className="row">
                <div className="col-sm-3">
                  <Link to="/Mainview">
                    <div className="card bg-light mb-3">
                      <div className="card-body">
                        <center>
                          {" "}
                          <h3 className="card-title ">จัดการบุคลากร</h3>
                        </center>
                        <center>
                          <img src="assets/img/icons/user.png" height="150px" />
                        </center>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            </FadeIn>
          </div>
        ) : (
          <div>
            <center>
              <h4>คุณไม่ม่สิทธิเข้าถึงส่วนนี้..</h4>
            </center>
          </div>
          
        )}
      </div>
    );
  }
}

export default Admin;
