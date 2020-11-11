import React from "react";
import All from "./All";
import ShowRam from "./ShowRam";
import ShowSSD from "./ShowSSD";
import ShowM2 from "./ShowM2";
import { Link } from "react-router-dom";
class ShowPro extends React.Component {
  render() {
    const status = localStorage.getItem("status");
    return (
      <div>
        {status == 2 ? (
          <div className="container">
            <Link to="/Admin"> &larr; ย้อนกลับ</Link>
            <br />
            <br />
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  All
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
                  Ram
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="contact-tab"
                  data-toggle="tab"
                  href="#contact"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  SSD
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="contact-tab"
                  data-toggle="tab"
                  href="#contact1"
                  role="tab"
                  aria-controls="contact1"
                  aria-selected="false"
                >
                  M.2
                </a>
              </li>
            </ul>
            <br></br>
            <div className="tab-content" id="myTabContent">
              <br></br>
              <input
                class="form-control"
                id="myInput"
                type="text"
                placeholder="ค้นหา.."
              />
              <br></br>
              <br></br>
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <All />
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <ShowRam />
              </div>
              <div
                className="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                <ShowSSD />
              </div>
              <div
                className="tab-pane fade"
                id="contact1"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                <ShowM2 />
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

export default ShowPro;
