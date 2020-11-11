import React from "react";
import { Link, withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";

class Detail extends React.Component {
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

  render() {
    return (
      <div className="container">
        <Link to="/mainview">
          {" "}
          <button type="button" class="btn btn-warning">
            &larr;ย้อนกลับ
          </button>
        </Link>
        <p />
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-12">
              <center>
                <p>
                  <h4>รูปโปร์ไฟล์</h4>
                  <br></br>
                  <img
                    className="rimg2"
                    width="120px"
                    src={`http://www.senpru.com/api/signalinfo/${this.state.img_id}`}
                  />
                </p>
              </center>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <br />
              <br />
              <div>
                <h5>ชื่อ : {this.state.name}</h5>
                <hr></hr>
                <h5> อีเมล์ : {this.state.email}</h5>
                <hr></hr>
                <h5> เบอร์โทรศัพท์ : {this.state.tel}</h5>
                <hr></hr>
                <h5> ที่อยู่ : {this.state.address}</h5>
              </div>
              <br />
              <br />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Detail;
