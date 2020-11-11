import React from "react";
import Booking from "./Booking";
import Bookings from "./Bookings";
import BookWait from './BookWait';
import FadeIn from 'react-fade-in';
class Bookmain extends React.Component {
  render() {
    const status = localStorage.getItem("status");
    return (
      <div>
        {status == 1 ? (
          <div className="container">
              
            <ul className="nav nav-tabs" id="myTab" role="tablist">
          
               <li className="nav-item">
                <a
                  className="nav-link active"
                  id="tech-tab"
                  data-toggle="tab"
                  href="#tech"
                  role="tab"
                  aria-controls="tech"
                  aria-selected="true"
                >
                  รอตรวจสอบ
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  รอยืนยัน
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  ยืนยันแล้ว
                </a>
              </li>
            </ul>
            <div className="">
              <div className="container">
                <br></br>
                <h4>ตรวจสอบสถานะการจองคิว</h4>
              </div>
            </div>
            <br></br> <br></br>
            <input
              class="form-control"
              id="myInput"
              type="text"
              placeholder="ค้นหา.."
            />
            <div className="tab-content" id="myTabContent">
            <div
                className="tab-pane fade show active"
                id="tech"
                role="tabpanel"
                aria-labelledby="tech-tab"
              >
              <BookWait/>
              </div>
              <div
                className="tab-pane fade"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <Booking />
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <Bookings />
              </div>
            </div>
            <br></br>
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

export default Bookmain;
