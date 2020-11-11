import React, { Component } from "react";
import { Link } from "react-router-dom";
class LoginBtn extends Component {
  constructor(props) {
    super(props);
    this.state = { counts: "" };
  }
  componentDidMount() {
    
  }
  render() {
    const count = localStorage.getItem("count");
 
    return (
      <div>
        <Link to="/Login">&nbsp;เข้าสู่ระบบ</Link> |
        <Link to="/Register">&nbsp;สมัครสมาชิก</Link>
        <div className="up-item">
          <div className="shopping-card">
            <i className="user"></i>
            &nbsp;
          </div>
          <Link to="/Cart">
            <div className="shopping-card">
              <i className="flaticon-bag"></i>
              <span>{count}</span>
            </div>
            &nbsp;ตะกร้าสินค้า
          </Link>
        </div>
      </div>
    );
  }
}
export default LoginBtn;
