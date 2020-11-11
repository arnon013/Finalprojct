import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      tel: "",
      img_id: "",
      address: "",
      status: "",
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
    event.preventDefault();
    fetch("https://www.api.senpru.com/signalinfo/index.php/member/add_member", {
      method: "POST",
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        tel: this.state.tel,
        img_id: "avatar.png",
        address: this.state.address,
        status: this.state.status,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => {
      if (response.status === 200) {
        alert("เพิ่มสมาชิกเรียบร้อยแล้ว");
        window.location = "/mainview";
      }
    });
  }
  render() {
    const status = localStorage.getItem("status");
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
          <div className="col-6">
          <label>ชื่อ-นามสกุล</label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="วิชา ซอฟแวร์"
          />
          </div>
          <br />
          <div className="col-6">
          <label>อีเมล์</label>
          <input
            className="form-control"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="example@gmail.com"
          />
          </div>
          </div>
          <br />
          <div className="row">
          <div className="col-6">
          <label>เบอร์โทรศัพท์</label>
          <input
            className="form-control"
            type="number"
            name="tel"
            value={this.state.tel}
            onChange={this.handleChange}
            placeholder="0987654321"
          />
          </div>
          <br />
          <div className="col-6">
          <label>รหัสผ่าน</label>
          <input
            className="form-control"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="รหัสผ่าน"
          />
          </div>
          </div>
          <br />
          <div className="row">
          <div className="col-6">
          <label>ยืนยันรหัสผ่าน</label>
          <input
            className="form-control"
            type="password"
            name="repassword"
            value={this.state.repassword}
            onChange={this.handleChange}
            placeholder="ยืนยันผ่าน"
          />
          <br />
          </div>
          <div className="col-6">
          <label>สถานะผู้ใช้</label>
          <select
            className="form-control"
            id="status"at
            name="status"
            value={this.state.stus}
            onChange={this.handleChange}
          >
            <option value={1}>ลูกค้า</option>
            <option value={2}>Admin</option>
            <option value={3}>ช่าง</option>
          </select>
          </div>
          </div>
          <p>
            <Button
              type="submit"
              value="Submit"
              variant="contained"
              color="primary"
            >
              Add
            </Button>
            <Link to="/mainview">
              {" "}
              <button className="btn btn-warning">ย้อนกลับ</button>
            </Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Create;
