import React, { Component } from "react";
import JSONViewer from "react-json-viewer";
class Purchase extends Component {
  constructor(props) {
    super(props);
    this.state = { member: [] };
    this.headers = [{ key: "id", label: "OrderID" }];
  }
  valueId(e) {
    this.setState({ keyword: e.target.value });
    console.log("key2=" + e.target.value);
  }

  componentDidMount() {
    const id = localStorage.getItem("id");

    fetch(
      "https://www.api.senpru.com/signalinfo/index.php/order/member_id?member_id=" +
        id
    )
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log(result[0].date);
        this.setState({
          member: result,
          date: result[0].date,
          orderid: result[0].orderid
        });
      });
  }

  render() {
    return (
      <div>
        <div className="container">
          <h4>ประวัติการสั่งซื้อของคุณ</h4>
        </div>
        <br></br>
        <section className="checkout-section spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="checkout-cart">
                  {this.headers.map(function(h) {
                    return <div></div>;
                  })}

                  {this.state.member.map(
                    function(item, key) {
                      return (
                        <div key={key}>
                          <div className="row">
                            <h5>หมายเลขการสั่งซื้อ </h5>&nbsp;
                            <h5 style={{ color: "red" }}>
                              ODERS{item.orderid}
                            </h5>
                          </div>
                          <label>เวลาที่สั่งซื้อ</label>
                          <h5>{item.date}</h5>
                          <br></br>
                          <label>ที่อยู่ในการจัดส่ง</label>{" "}
                          <h5>
                            {item.address} {item.tel}
                          </h5>
                          <br></br>
                          <h5>รายละเอียดการสั่งซื้อ</h5>
                          <div className="container">
                            {item.name}
                            <br />
                            <b>จำนวน {item.count} ชิ้น</b>
                            <br />
                            <img
                              style={{ width: "100px" }}
                              src={`http://www.senpru.com/api/signalinfo/${item.img}`}
                            />
                          </div>
                          <hr></hr>
                        </div>
                      );
                    }.bind(this)
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Purchase;
