import React, { Component } from "react";
import { Link } from "react-router-dom";
import ModalImage from "react-modal-image";

class Bookwaitdetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      statusbook: "",
      name: "",
      date: "",
      breakdown: "",
      breakdowntech: "",
      service: "",
      price: "",
      datefix: "",
      detailpart: "",
      tech: "",
      book_img:'',
      bookpart:[]
    };
    this.headers = [
      { key: "productid", label: "รหัสสินค้า" },
      { key: "name", label: "ชื่อสินค้า" },
      { key: "image", label: "รูปสินค้า" },
      { key: "price", label: "ราคา" },
      { key: "count", label: "จำนวน" }
    ];
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteWebsite = this.deleteWebsite.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://www.api.senpru.com/signalinfo/index.php/booking/book?id=" +
        this.props.match.params.id
    )
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log(result);
        this.setState({
          bookpart: result,
          id: result.id,
          statusbook: result.statusbook,
          name: result.bookname,
          date: result.date,
          breakdown: result.breakdown,
          breakdowntech: result.breakdowntech,
          service: result.service,
          price: result.bookprice,
          datefix: result.datefix,
          detailpart: result.detailpart,
          tech: result.tech,
          book_img:"http://www.senpru.com/api/signalinfo/"+ result.book_img,
          bookprice:result.bookprice
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
      "https://www.api.senpru.com/signalinfo/index.php/booking/update_statusbook",
      {
        method: "PUT",
        body: JSON.stringify({
          id: this.state.id,
          statusbook: "ยืนยันแล้ว",
          name: this.state.name,
          date: this.state.date,
          breakdown: this.state.breakdown,
          breakdowntech: this.state.breakdowntech,
          service: this.state.service,
          price: this.state.price,
          datefix: this.state.datefix,
          detailpart: this.state.detailpart,
          tech: this.state.tech
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }
    ).then(response => {
      if (response.status === 200) {
        alert("ยืนยันข้อมูลการจองเรียบร้อยแล้วค่ะ.");
        window.location.href = "/bookmain";
      }
    });
  }

  deleteWebsite(id) {
    if (window.confirm("ต้องการยกเลิกการจองใช่หรือไม่")) {
      fetch(
        "https://www.api.senpru.com/signalinfo/index.php/booking/delete_booking/" +
          id,
        {
          method: "DELETE"
        }
      ).then(response => {
        if (response.status === 200) {
          alert("ยกเลิกการจองแล้วค่ะ");
          window.location.href = "/bookmain";
        }
      });
    }
  }

  render() {
    return (
      <div className="">
        <div className="container">
          <h4>รายละเอียดข้อมูลการจองคิว</h4>
        </div>

        <form className="checkout-form" onSubmit={this.handleSubmit}>
          <div className="container">
            <div className="row">
              <div className="col-12">
          
                  <input type="hidden" name="id" value={this.state.id} />

                  <div className="row">
                    <div className="col-12">
                      <h4>ชื่อรุ่นสินค้า</h4>

                      <h5>{this.state.name} </h5>
                    </div>

                   

                    <div className="col-12">
                      <h4>วันเวลาที่ลูกค้านัด</h4>
                      <h5>{this.state.date} </h5>
                    </div>
                  </div>
               

                  <div className="row">
                    <div className="col-12">
                      <h4>อาการเสียจากลูกค้า</h4>

                      <h5>{this.state.breakdown} </h5>
                    </div>
                    

                    <div className="col-12">
                      <h4>อาการเสียจากช่าง</h4>

                      <h5>{this.state.breakdowntech} </h5>
                    </div>
                  </div>
                  <br />
                  <br />

                  <div className="row">
                    <div className="col-12">
                      <h4>ค่าบริการ</h4>

                      <h5>{this.state.service} </h5>
                    </div>
                    
                    <div className="col-12">
                      <h4>ราคาโดยประมาณ</h4>

                      <h5>{this.state.price} </h5>
                    </div>
                  </div>
                 

                  <div className="row">
                    <div className="col-12">
                      <h4>รายละเอียดอะไหล่ที่ต้องใช้</h4>
                      <table
                    className="table table-sm"
                    id="dataTable"
                    cellSpacing={0}
                  >
                    <thead>
                      <tr>
                        {this.headers.map(function(h) {
                          return <th key={h.key}>{h.label}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.bookpart.map(function(item, key) {
                        return (
                          <tr key={key}>
                            <td>{item.product_id}</td>
                            <td>{item.name}</td>
                            <td>
                              <img
                                style={{ width: "100px" }}
                                src={`../../${item.img}`}
                              />
                            </td>
                            <td>{item.price}</td>
                            <td>{item.count}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                    <tfoot style={{ backgroundColor: "#E3E2E1" }}>
                      <tr>
                        <td style={{ fontWeight: "400" }}>ราคารวม</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{this.state.bookprice}</td>
                      </tr>
                    </tfoot>
                  </table>
                  
                    </div>
                    <br />
                    <br />

                    <div className="col-12">
                      <h4>วันที่คาดว่าจะซ่อมเสร็จ</h4>

                      <h5>{this.state.datefix} </h5>
                    </div>
                  </div>
                  <br />
                  <br />

                  <div className="row">
                    <div className="col-12">
                      <h4>ช่างผู้รับผิดชอบ</h4>

                      <h5>{this.state.tech} </h5>
                    </div>
                    <div className="col-12">
                      <h4>รูปภาพ</h4>
<br></br>

<ModalImage
  small={this.state.book_img}
  large={this.state.book_img}
  alt="รูปอาการเสียจากลูกค้า"
/>
                             
                            
                    </div>
                  </div>
                  <br />
                  <br />
                  {this.state.statusbook == "รอการยืนยัน" ? (
                    <div className="row">
                      <div className="col-6">
                        <button className="site-btn4 submit-order-btn">
                          ยืนยันจองคิว
                        </button>
                      </div>
                      <div className="col-6">
                        <a
                          href="javascript:void(0);"
                          onClick={this.deleteWebsite.bind(this, this.state.id)}
                        >
                          <button
                            type="button"
                            class="site-btn submit-order-btn btn-block"
                          >
                            ยกเลิกจองคิว
                          </button>
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="row">
                      <div className="col-12">
                        <Link to={`/Bookmain`}>
                          <button
                            type="button"
                            class="site-btn5 submit-order-btn btn-block"
                          >
                            ย้อนกลับ
                          </button>
                        </Link>
                      </div>
                    </div>
                  )}
              
              </div>
            </div>
          </div>
        </form>
        <br></br>
      </div>
    );
  }
}
export default Bookwaitdetail;
