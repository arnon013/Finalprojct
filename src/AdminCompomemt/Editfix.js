import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
class Editfix extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      statusfix: "",
      cashpledge: "",
      statuscash: "",
      price: "",
      statusprice: "",
      datefix: "",
      waranty: "",
      warantypro: "",
      date: "",
      datepro: "",
      breakdown: "",
      breakdowntech: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://www.api.senpru.com/signalinfo/index.php/booking/booking?id=" +
        this.props.match.params.id
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        this.setState({
          id: result[0].id,
          name: result[0].bookname,
          statusfix: result[0].statusfix,
          cashpledge: result[0].cashpledge,
          statuscash: result[0].statuscash,
          price: result[0].price,
          statusprice: result[0].statusprice,
          datefix: result[0].datefix,
          waranty: result[0].waranty,
          warantypro: result[0].warantypro,
          date: result[0].date,
          datepro: result[0].datepro,
          breakdown: result[0].breakdown,
          breakdowntech: result[0].breakdowntech,
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
      "https://www.api.senpru.com/signalinfo/index.php/booking/update_bookingfix",
      {
        method: "PUT",
        body: JSON.stringify({
          id: this.state.id,
          name: this.state.name,
          statusfix: this.state.statusfix,
          cashpledge: this.state.cashpledge,
          statuscash: this.state.statuscash,
          price: this.state.price,
          statusprice: this.state.statusprice,
          datefix: this.state.datefix,
          waranty: this.state.waranty,
          warantypro: this.state.warantypro,
          date: this.state.date,
          datepro: this.state.datepro,
          breakdown: this.state.breakdown,
          breakdowntech: this.state.breakdowntech,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    ).then((response) => {
      if (response.status === 200) {
        alert("อัพเดทข้อมูลการซ่อมเรียบร้อยแล้วค่ะ.");
        window.location.href = "/Status";
      }
    });
  }

  render() {
    return (
      <div className="">
        <div className="container">
          <h4>อัพเดทข้อมูลการซ่อม</h4>
        </div>

        <form className="checkout-form" onSubmit={this.handleSubmit}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="col-12">
                  <br />
                  <br />
                  <input type="hidden" name="id" value={this.state.id} />
                  <h5>รุ่นสินค้า</h5>
                  &nbsp; &nbsp;
                  <input type="text" name="name" value={this.state.name} />
                  <h5>สถานะการซ่อม</h5>
                  &nbsp; &nbsp;
                  <div class="form-group">
                    <select
                      id="statusfix"
                      name="statusfix"
                      value={this.state.statusfix}
                      onChange={this.handleChange}
                    >
                      <option>รออะไหล่</option>
                      <option>กำลังซ่อม</option>
                      <option>ซ่อมเสร็จแล้ว</option>
                      <option>ส่งมอบแล้ว</option>
                    </select>
                  </div>
                  <h5>เงินมัดจำ</h5>
                  &nbsp; &nbsp;
                  <input
                    type="text"
                    name="cashpledge"
                    value={this.state.cashpledge}
                    onChange={this.handleChange}
                  />
                  <h5>สถานะมัดจำ</h5>
                  &nbsp; &nbsp;
                  <div class="form-group">
                    <select
                      id="statuscash"
                      name="statuscash"
                      value={this.state.statuscash}
                      onChange={this.handleChange}
                    >
                      <option>ยังไม่ชำระ</option>
                      <option>ชำระแล้ว</option>
                    </select>
                  </div>
                  <h5>ราคาทั้งหมด</h5>
                  &nbsp; &nbsp;
                  <input
                    type="text"
                    name="price"
                    value={this.state.price}
                    onChange={this.handleChange}
                  />
                  <h5>สถานะราคาทั้งหมด</h5>
                  &nbsp; &nbsp;
                  <div class="form-group">
                    <select
                      id="status"
                      name="statusprice"
                      value={this.state.statusprice}
                      onChange={this.handleChange}
                    >
                      <option>ยังไม่ชำระ</option>
                      <option>ชำระแล้ว</option>
                    </select>
                  </div>
                  <h5>วันที่คาดว่าจะซ่อมเสร็จ</h5>
                  &nbsp; &nbsp;{" "}
                  <div>
                    <input
                      type="date"
                      name="datefix"
                      value={this.state.datefix}
                      onChange={this.handleChange}
                    />
                  </div>
                  <br />
                  <br />
                  <h5>ประกันเครื่อง</h5>
                  &nbsp; &nbsp;
                  <input
                    type="text"
                    name="waranty"
                    value={this.state.waranty}
                    onChange={this.handleChange}
                  />
                  <br />
                  <br />
                  <h5>ประกันอะไหล่</h5>
                  &nbsp; &nbsp;
                  <input
                    type="text"
                    name="warantypro"
                    value={this.state.warantypro}
                    onChange={this.handleChange}
                  />
                  <br />
                  <br />
                  <h5>วันที่ลูกค้าจอง</h5>
                  &nbsp; &nbsp;{" "}
                  <div>
                    <input type="date" name="date" value={this.state.date} />
                  </div>
                  <br />
                  <br />
                  <h5>วันที่นำสินค้ามาซ่อม</h5>
                  &nbsp; &nbsp;{" "}
                  <div>
                    <input
                      type="date"
                      name="datepro"
                      value={this.state.datepro}
                      onChange={this.handleChange}
                    />
                  </div>
                  <br />
                  <br />
                  <h5>อาการเสียจากลูกค้า</h5>
                  &nbsp; &nbsp;
                  <div className="checkout-form2">
                    <textarea
                      class="textarea"
                      name="breakdown"
                      value={this.state.breakdown}
                      rows="3"
                    ></textarea>
                  </div>
                  <h5>อาการเสียจากช่าง</h5>
                  &nbsp; &nbsp;
                  <div className="checkout-form2">
                    <textarea
                      class="textarea"
                      name="breakdowntech"
                      value={this.state.breakdowntech}
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="col-4">
                    <button className="site-btn submit-order-btn">
                      อัพเดทการซ่อม
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <br></br>
      </div>
    );
  }
}
export default Editfix;
