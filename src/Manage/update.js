import React from "react";
import { Link, withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";

class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
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

  componentDidMount() {
    fetch(
      "https://www.api.senpru.com/signalinfo/index.php/member/member?id=" +
        this.props.match.params.id
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        this.setState({
          id: result.id,
          name: result.name,
          email: result.email,
          password: result.password,
          tel: result.tel,
          img_id: result.img_id,
          address: result.address,
          status: result.status,
        });
      });
  }
  handleChange(event) {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }
  handleSubmit(event) {
    event.preventDefault();
    fetch(
      "https://www.api.senpru.com/signalinfo/index.php/member/update_member",
      {
        method: "PUT",
        body: JSON.stringify({
          id: this.state.id,
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          tel: this.state.tel,
          address: this.state.address,
          img_id: this.state.img_id,
          status: this.state.status,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    ).then((response) => {
      if (response.status === 200) {
        alert("อัพเดตแล้ว");
      }
    });
  }

  render() {
    const status = localStorage.getItem("status");
    return (
      <div className="container">
        <Link to="/mainview">ย้อนกลับ</Link>
        <p />
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-6">
              <p>
                <label>Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </p>
            </div>
            <div className="col-6">
              <p>
                <label>Email</label>
                <input
                  className="form-control"
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <p>
                <label>Tel</label>
                <input
                  className="form-control"
                  type="int"
                  name="tel"
                  value={this.state.tel}
                  onChange={this.handleChange}
                />
              </p>
            </div>
            <div className="col-6">
              <p>
                <label>Address</label>
                <input
                  className="form-control"
                  type="text"
                  name="address"
                  value={this.state.address}
                  onChange={this.handleChange}
                />
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <p>
                <img
                  className="rimg2"
                  src={`http://www.senpru.com/api/signalinfo/${this.state.img_id}`}
                  width="50px"
                />
              </p>
            </div>
            <div className="col-6">
              <label>สถานะ</label>
              <select
                className="form-control"
                id="status"
                name="status"
                value={this.state.status}
                onChange={this.handleChange}
              >
                <option value={3}>ช่าง</option>
                <option value={1}>ลูกค้า</option>
                <option value={2}>Admin</option>
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
              Update
            </Button>
          </p>
        </form>
      </div>
    );
  }
}

export default Update;
