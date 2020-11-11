import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Hook from "./Hook";
import Partdetail from "../components/PartComponent/Partdetail";
import Propart from "../Propart/Propart";
import Cartdetail from "../components/CartComponent/Cartdetail";
import ModalImage from "react-modal-image";
import NumberFormat from "react-number-format";
class Editbook extends Component {
  clearpart = () => {
    localStorage.removeItem("part1");
  };
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      date: "",
      name: "",
      breakdown: "",
      breakdowntech: "",
      price: "",
      datefix: "",
      service: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const total = localStorage.getItem("total");

    fetch(
      "https://www.api.senpru.com/signalinfo/index.php/booking/book?id=" +
        this.props.match.params.id
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        this.setState({
          id: result.id,
          cus: result.cus,
          date: result.date,
          name: result.name,
          breakdown: result.breakdown,
          breakdowntech: result.breakdowntech,
          datefix: result.datefix,
          book_img: "http://www.senpru.com/api/signalinfo/" + result.book_img,
          price: Number(total) + 250,
          service: result.service,
        });
      });
  }
  handleChange(event) {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
    console.log(this.state.datefix);
  }
  handleSubmit(event) {
    const total = localStorage.getItem("total");
    const detailpart = localStorage.getItem("detailpart");
    console.log("detailpart" + JSON.parse(detailpart));
    event.preventDefault();
    fetch(
      "https://www.api.senpru.com/signalinfo/index.php/booking/update_booktech",
      {
        method: "PUT",
        body: JSON.stringify({
          id: this.state.id,
          date: this.state.date,
          name: this.state.name,
          breakdown: this.state.breakdown,
          breakdowntech: this.state.breakdowntech,
          datefix: this.state.datefix,
          withdraw: "รอแอดมินยืนยัน",
          detail: JSON.parse(detailpart),
          booking_id: this.props.match.params.id,
          price: this.state.price,
          service: "250",
          statusbook: "รอการยืนยัน",
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    ).then((response) => {
      if (response.status === 200) {
        alert("แก้ไขข้อมูลการจองเรียบร้อยแล้วค่ะ.");
        localStorage.removeItem("partItems");
        this.clearpart;
        window.location.reload();
        window.location.href = "/Updatebook";
      }
    });
  }

  render() {
    
    return (
      <div className="">
        <div className="container">
          <h4>ระบุอาการให้ลูกค้า</h4>
        </div>
        <br></br>
        <form className="checkout-form" onSubmit={this.handleSubmit}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <input type="hidden" name="id" value={this.state.id} />
                <h5>&nbsp;&nbsp;&nbsp;รุ่นสินค้า</h5>
                <br />
                <input type="text" name="name" value={this.state.name} />
                <h5>&nbsp;&nbsp;&nbsp;วันที่ลูกค้านัด</h5>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="date"
                  name="date"
                  value={this.state.date}
                  placeholder="ชื่อรุ่น"
                />
                <br />
                <br />
                <div className="checkout-form2">
                  <h5>&nbsp;&nbsp;&nbsp;อาการเสียจากลูกค้า</h5>
                  <br />
                  <textarea
                    className="textarea"
                    name="breakdown"
                    value={this.state.breakdown}
                    rows="3"
                  ></textarea>
                </div>
                <div className="checkout-form2">
                  <h5>&nbsp;&nbsp;&nbsp;อาการเสียจากช่าง</h5>
                  <br />
                  <textarea
                    className="textarea"
                    name="breakdowntech"
                    value={this.state.breakdowntech}
                    onChange={this.handleChange}
                    rows="3"
                  ></textarea>
                  <h4>รูปภาพ</h4>
                  <br></br>
                  <div width={"50px"}>
                    <ModalImage
                      small={this.state.book_img}
                      large={this.state.book_img}
                      alt="รูปอาการเสียจากลูกค้า"
                    />
                  </div>
                  <br></br>

                  <h5>&nbsp;&nbsp;&nbsp;รายละเอียดอะไหล่ที่ต้องใช้</h5>
                  <br />
                  <div>
                    <Link to={`/Part`}>
                      &nbsp;&nbsp;&nbsp;
                      <button type="button" className="btn btn-info">
                        เลือกอะไหล่
                      </button>
                      <br />
                    </Link>
                  </div>
                  <div>
                    <div className="col-12">
                      <Partdetail />
                    </div>
                  </div>
                  <h5>&nbsp;&nbsp;&nbsp;ค่าบริการ</h5>
                  <br />
                  <input
                    type="text"
                    name="service"
                    value="250"
                    onChange={this.handleChange}
                  />
                </div>
                <h5>&nbsp;&nbsp;&nbsp;ราคาโดยประมาณ (บาท)</h5>
                <br />
                <input
                  type="text"
                  name="price"
                  value={this.state.price}
                  onChange={this.handleChange}
                />
                <div className="col-12">
                  <h5>&nbsp;&nbsp;&nbsp;วันที่คาดว่าจะซ่อมเสร็จ</h5>
                  &nbsp;&nbsp;&nbsp;
                  <input
                    type="date"
                    min="10-5-2020"
                    name="datefix"
                    value={this.state.datefix}
                    onChange={this.handleChange}
                    placeholder="ชื่อรุ่น"
                  />
                  <br />
                  <br />
   
                </div>
                {this.state.breakdowntech === "รอช่างตรวจสอบ" ? 
                 <button disabled class="site-btn-disabled  submit-order-btn">แจ้งอาการ</button>
                :  this.state.datefix === "0000-00-00"?
                <button disabled class="site-btn-disabled  submit-order-btn">แจ้งอาการ</button>
                 :

                <button className="site-btn submit-order-btn">แจ้งอาการ</button>
                }
              
              </div>
            </div>
          </div>
        </form>
        <br></br>
      </div>
    );
  }
}
export default Editbook;
