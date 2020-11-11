import React, { Component } from "react";
import { Link } from "react-router-dom";
class FixLogedin extends Component {
  constructor(props) {
    super(props);
    this.state = { names: "" };
    this.state = { ids: "" };
  }

  componentDidMount() {
    const name = localStorage.getItem("name");
    const id = localStorage.getItem("id");
    this.setState({ names: name });
    this.setState({ ids: id });
  }
  render() {
    return (
      <div>
        <h2>สวัสดีคุณ : {this.state.names}</h2>
        <br></br>
        <div className="row">
          <div className="col-sm-4 ">
            <Link to="/book">
              <div
                className="card bg-light"
                style={{ maxWidth: "45rem", height: "25rem" }}
              >
                <div className="card-body">
                  <center>
                    {" "}
                    <h3 className="card-title ">จองคิวการซ่อมโน๊ตบุ๊ค</h3>{" "}
                  </center>
                  <center>
                    <img src="assets/img/icons/support.png" />
                  </center>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-sm-4 ">
            <Link to="/bookmain">
              <div
                className="card bg-light"
                style={{ maxWidth: "45rem", height: "25rem" }}
              >
                <div className="card-body">
                  <center>
                    {" "}
                    <h3 className="card-title ">ตรวจสอบสถานะจองคิว</h3>
                  </center>
                  <center>
                    <img src="assets/img/icons/qwe.png" />
                  </center>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-sm-4 ">
            <Link to="/Statusfix">
              <div
                className="card bg-light"
                style={{ maxWidth: "45rem", height: "25rem" }}
              >
                <div className="card-body">
                  <center>
                    {" "}
                    <h3 className="card-title ">ตรวจสอบสถานะซ่อม</h3>
                  </center>
                  <center>
                    <img src="assets/img/icons/fix.png" />
                  </center>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default FixLogedin;
