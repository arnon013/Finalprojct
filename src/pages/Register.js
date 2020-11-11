import React, { Component } from "react";
import Alert from "@material-ui/lab/Alert";
import FadeIn from 'react-fade-in';
import { Link } from "react-router-dom";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      tel: "",
      password: "",
      status: "1",
      img_id: "",
      address: "",
      repassword: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }
  handleSubmit(event) {
    const { password, repassword } = this.state;
    // perform all neccassary validations
    if (password !== repassword) {
      alert("Password ไม่ตรงกัน");
    } else {
      event.preventDefault();
      fetch(
        "https://www.api.senpru.com/signalinfo/index.php/member/add_member",
        {
          method: "POST",
          body: JSON.stringify({
            name: this.state.name,
            email: this.state.email,
            tel: this.state.tel,
            password: this.state.password,
            img_id: "imgprofile/avatar.png",
            address: this.state.address,
            status: "1",
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      ).then((response) => {
        if (response.status === 200) {
          alert("Wellcome..");
          window.location = "/Login";
        }
      });
    }
  }

  render() {
    return (
      <section className="checkout-section spad">
        <div className="container">
        <FadeIn>
          <div className="row">
         
            <div align="center" className="col-12">
              <img src="assets/img/lgr.png" width="200px" height="200px" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3" />
            <div className="col-md-6">
              <form className="checkout-form" onSubmit={this.handleSubmit}>
             
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder="ชื่อ-นามสกุล"
                />
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="อีเมล์"
                />
               
                <input
                  type="number"
                  name="tel"
                  value={this.state.tel}
                  onChange={this.handleChange}
                  placeholder="เบอร์โทรศัพท์"
                />
                <div className="checkout-form2">
                  <textarea
                    class="textarea"
                    name="address"
                    value={this.state.address}
                    onChange={this.handleChange}
                    rows="2"
                    placeholder="ที่อยู่ที่ใช้ในการจัดส่ง"
                  ></textarea>
                </div>
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  placeholder="รหัสผ่าน"
                />
                <input
                  type="password"
                  name="repassword"
                  value={this.state.repassword}
                  onChange={this.handleChange}
                  placeholder="ยืนยันรหัสผ่าน"
                />
                {this.state.password + this.state.repassword == "" ? (
                  <div></div>
                ) : this.state.password == this.state.repassword ? (
                  <Alert style={{ fontFamily: "Sarabun" }} severity="success">
                    รหัสผ่านตรงกัน
                  </Alert>
                ) : (
                  <Alert style={{ fontFamily: "Sarabun" }} severity="warning">
                    รหัสผ่านไม่ตรงกัน
                  </Alert>
                )}
                <br></br>

                <div className="row">
                  <br />
                  <br />
                  <div className="col-12">
                    {this.state.name == "" ? (
                      <div>
                        <button
                          type="submit"
                          disabled="true"
                          value="Submit"
                          class="site-btn-disabled  submit-order-btn"
                        >
                          สมัครสมาชิก
                        </button>
                      </div>
                    ) : this.state.tel == "" ? (
                      <div>
                        <button
                          type="submit"
                          disabled="true"
                          value="Submit"
                          class="site-btn-disabled  submit-order-btn"
                        >
                          สมัครสมาชิก 
                        </button>
                      </div>
                    ) : this.state.email == "" ? (
                      <div>
                        <button
                          type="submit"
                          disabled="true"
                          value="Submit"
                          class="site-btn-disabled  submit-order-btn"
                        >
                          สมัครสมาชิก
                        </button>
                      </div>
                    ) : this.state.address == "" ? (
                      <button
                        type="submit"
                        disabled="true"
                        value="Submit"
                        class="site-btn-disabled  submit-order-btn"
                      >
                        สมัครสมาชิก
                      </button>
                    ) : this.state.password == "" ? (
                      <button
                        type="submit"
                        disabled="true"
                        value="Submit"
                        class="site-btn-disabled  submit-order-btn"
                      >
                        สมัครสมาชิก
                      </button>
                    ) : this.state.repassword == "" ? (
                      <button
                        type="submit"
                        disabled="true"
                        value="Submit"
                        class="site-btn-disabled  submit-order-btn"
                      >
                        สมัครสมาชิก
                      </button>
                    ) : (
                      <button className="site-btn submit-order-btn">
                        สมัครสมาชิก
                      </button>
                    )}
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <div>
                          หากคุณเป็นสมาชิกแล้ว
                          <Link to ="/Login" className="btn btn-link">
                            เข้าสู่ระบบ
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
               
              </form>
              
            </div>
            
          </div>
          </FadeIn>
        </div>
        
      </section>
    );
  }
}

export default Register;
{
  /*  */
}
