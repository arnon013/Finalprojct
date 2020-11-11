import React, { Component } from 'react';

class Login extends Component {

  render() {
		return (
			<section className="checkout-section spad">
			<div className="container">
			  <div className="row">
				<div align="center" className="col-12">
				  <img src="assets/img/lgr.png" width="150px"  height={150} />
				</div>
			  </div>
			  <div className="row">
				<div className="col-md-3" />
				<div className="col-md-6">
				  <form className="checkout-form">
					<input type="text" placeholder="ชื่อผู้ใช้หรืออีเมล์" />
					<input type="text" placeholder="รหัสผ่าน" />	
					<div className="row">
					  <div className="col-6">
					  <a href="/Avatar" className="site-btn submit-order-btn">เข้าสู่ระบบ</a>
					  </div>
					  <br /><br />
					  <div className="col-6">
					  <a href="/Register" className="site-btn submit-order-btn">สมัครสมาชิก</a>
					  </div>
					</div>
					<div align="left">
					  <button className="btn btn-link">ลืมรหัสผ่าน</button>     
					</div>          
				  </form></div>
				<div className="col-md-3" />
			  </div>
			</div>
		  </section>
		);
	}
}

export default Login;