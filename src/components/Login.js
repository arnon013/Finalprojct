import React, { Component } from "react";
import swal from 'sweetalert';
import FadeIn from 'react-fade-in';
import { Link } from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", name: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
   
  };
  handleChange(event) {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();
    
    fetch(
      "https://www.api.senpru.com/signalinfo/index.php/member/login_member",
      {
        method: "POST",
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }
    )
      .then(response => {
        return response.json();
      })
      .then(result => {
        if (result[0].status == "1") {

          
          setTimeout(function() {
            swal("ยินดีต้อนรับ" + " " + result[0].name, "สู่ Signalinfo", "success");
        },1000);
     
          localStorage.setItem("id", result[0].id);
          localStorage.setItem("name", result[0].name);
          localStorage.setItem("email", result[0].email);
          localStorage.setItem("tel", result[0].tel);
          localStorage.setItem("address", result[0].address);
          localStorage.setItem("status", result[0].status);
          localStorage.setItem("img_id","http://www.senpru.com/api/signalinfo/"+ result[0].img_id); 
          this.props.history.push("/");
          setTimeout(function() {
            window.location.reload();
        },4000);
        
         
        } else if (result[0].status == "2") {
          alert("ยินดีต้อนรับ" + " " + result[0].name);
          localStorage.setItem("id", result[0].id);
          localStorage.setItem("name", result[0].name);
          localStorage.setItem("email", result[0].email);
          localStorage.setItem("tel", result[0].tel);
          localStorage.setItem("address", result[0].address);
          localStorage.setItem("status", result[0].status);
          localStorage.setItem("img_id", result[0].img_id);
          window.location.href = "/Admin";
        } else if (result[0].status == "3") {
          alert("ยินดีต้อนรับ" + " " + result[0].name);
          localStorage.setItem("id", result[0].id);
          localStorage.setItem("name", result[0].name);
          localStorage.setItem("email", result[0].email);
          localStorage.setItem("tel", result[0].tel);
          localStorage.setItem("address", result[0].address);
          localStorage.setItem("status", result[0].status);
          localStorage.setItem("img_id", result[0].img_id);
          this.props.history.push("/Widen");
        } else {
          swal("ชื่อผู้ใช้หรือรหัสผ่านผิด", "กด OK เพื่อลองอีกครั้ง", "error");
         
        }

   
      });
  }
  render() {
    
    return (
      <section className="checkout-section spad">
       <FadeIn>
        <div className="container">
          <div className="row">
            <div align="center" className="col-12">
              <img src="assets/img/lgr.png" width="150px" height={150} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3" />
            <div className="col-md-6">
              <form className="checkout-form " onSubmit={this.handleSubmit}>
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="อีเมล์"
                />
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  placeholder="รหัสผ่าน"
                />
                <div className="row">
                  <div className="col-12">
                    {this.state.name + this.state.password !== "" ? (
 <button
 onClick="history.go(0)"
 className="site-btn submit-order-btn"
>
 เข้าสู่ระบบ
</button> 
                    ):(   <button
                      type="submit"
                      disabled="true"
                      value="Submit"
                      class="site-btn-disabled  submit-order-btn"
                    >
                      เข้าสู่ระบบ
                    </button>)}
                   
                  </div>
                  <br />
                  <br />
                  <br />
                </div>
                <div align="left">
                  หากคุณยังไม่ได้เป็นสมาชิก
                  <Link to="/Register" className="btn btn-link">
                    สมัครสมาชิก
                    </Link>
                </div>
              </form>
            </div>
            <div className="col-md-3" />
          </div>
        </div>
        </FadeIn>
      </section>
    );
  }
}

export default Login;
