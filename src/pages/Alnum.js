import React, { Component } from "react";
import { Link } from "react-router-dom";
class Alnum extends Component {
  constructor(props) {
    super(props);
    this.state = { member: [] };
    //this.state = {ids:''};
    this.headers = [{ key: "id", label: "OrderID" }];
    this.deleteWebsite = this.deleteWebsite.bind(this);
  }
  valueId(e) {
    this.setState({ keyword: e.target.value });
    console.log("key2=" + e.target.value);
  }

  componentDidMount() {
    const id = localStorage.getItem("id");

    fetch(
      "https://www.api.senpru.com/signalinfo/index.php/order/member?member_id=" +
        id
    )
      .then(response => {
        return response.json();
      })
      .then(result => {
        this.setState({
          member: result
        });
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

          fetch(
            "https://www.api.senpru.com/signalinfo/index.php/booking/cus?cus=" +
              id
          )
            .then(response => {
              return response.json();
            })
            .then(result => {
              console.log(result);
              this.setState({
                websites: result
              });
            });
        }
      });
    }
  }

  render() {
    return (
      <section className="cart-section spad">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="cart-table">
                {this.headers.map(function(h) {
                  return <th></th>;
                })}

                {this.state.member.map(
                  function(item, key) {
                    return (
                      <tr key={key}>
                        <td>
                          <h5>
                            หมายเลขพัสดุของการสั่งซื้อหมายเลข
                            <Link to="/purchase">
                              {" "}
                              ORDER{item.orderid}
                            </Link>{" "}
                            ของคุณคือ
                            <a
                              target="_blank"
                              href={`https://th.kerryexpress.com/th/track/?track=${item.number}`}
                            >
                              {item.number == "" ? (
                                <h5 style={{ color: "red" }}>
                                  ยังไม่ได้จัดส่ง
                                </h5>
                              ) : (
                                <h5 style={{ color: "#1ea63a" }}>
                                  {item.number}
                                </h5>
                              )}
                            </a>
                          </h5>
                        </td>
                        <hr></hr>
                        <hr />
                      </tr>
                    );
                  }.bind(this)
                )}
                <br></br>
                <div className="total-cost">
                  <h6>Signal Info ขอบคุณที่ใช้บริการ</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Alnum;
