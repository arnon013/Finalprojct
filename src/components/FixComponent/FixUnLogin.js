import React, { Component } from "react";
import LoginBtn from "../HeaderComponent/LoginBtn";
import { Link } from "react-router-dom";
class FixUnLogin extends Component {
  render() {
    return (
      <center>
        <h1>
          <br />
        </h1>
        <h4>คุณยังไม่ได้เข้าสู่ระบบ</h4>
        <h5>
          <Link to="/Login"></Link>
        </h5>
      </center>
    );
  }
}

export default FixUnLogin;
