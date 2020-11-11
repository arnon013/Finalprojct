import React from "react";
import Websites from "./websites";
import ViewAdmin from "./viewadmin";
import { Link } from "react-router-dom";
import Viewtect from "./viewtech";
import Viewadmin from "./viewadmin";
class Mainview extends React.Component {
  render() {
    const status = localStorage.getItem("status");
    return (
      <div>
        {status == 2 ? (
          <div className="container">
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
                  ลูกค้า
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
                  Admin
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
                  ช่าง
                </a>
              </li>
            </ul>
            <br></br>
            <div className="tab-content" id="myTabContent">
              <Link to="/admin">
                {" "}
                <button type="button" class="btn btn-warning">
                  &larr;ย้อนกลับ
                </button>
              </Link>{" "}
              <Link to="/create">
                {" "}
                <button type="button" class="btn btn-info">
                  &#43;เพิ่มบุคลากร
                </button>
              </Link>
              <br></br>
              <br></br>
              <input
                class="form-control"
                id="myInput"
                type="text"
                placeholder="ค้นหา.."
              />
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <Websites />
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <Viewadmin />
              </div>
              <div
                className="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                <Viewtect />
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

export default Mainview;
