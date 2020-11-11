import React, { Component } from "react";
import { Link } from "react-router-dom";
import Total from "./Total";
import Count from "./Count";
import TotalProduct from "./TotalProduct";
import Button from "@material-ui/core/Button";
import Skeleton from "@material-ui/lab/Skeleton";
import TotalFix from "./TotalFix";
import NumberFormat from "react-number-format";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { order: [] };
    this.headers = [
      { key: "id", label: "ID" },
      { key: "date", label: "วันที่" },
      { key: "total", label: "ราคา" },
      { key: "number", label: "พัสดุ" },
    ];
    this.deleteOrder = this.deleteProduct.bind(this);
  }
  componentDidMount() {
    fetch("https://www.api.senpru.com/signalinfo/index.php/order/orders")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        this.setState({
          order: result,
        });
      });
  }

  deleteProduct(id) {
    if (window.confirm("จะลบใช่หรือไม่?")) {
      fetch(
        "https://www.api.senpru.com/signalinfo/index.php/order/delete_order/" +
          id,
        {
          method: "DELETE", //,
        }
      ).then((response) => {
        if (response.status === 200) {
          alert("ลบรายการแล้ว");

          fetch("https://www.api.senpru.com/signalinfo/index.php/order/orders")
            .then((response) => {
              return response.json();
            })
            .then((result) => {
              console.log(result);
              this.setState({
                order: result,
              });
            });
        }
      });
    }
  }

  render() {
    const totals = localStorage.getItem("totals");
    const fixcount = localStorage.getItem("fixcount");
    const statusfix = localStorage.getItem("statusfix");
    console.log(fixcount);
    return (
      <div>
        {" "}
        <div className="container">
          <Link to="/Admin"> &larr; ย้อนกลับ</Link>
          <br></br>
          <h1 className="h3 mb-2 text-gray-800">Dashboard</h1>
          <div className="row">
            <Total />
            <Count />
            <TotalFix />

            <TotalProduct />
          </div>

          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                ตารางจัดการออเดอร์
              </h6>
            </div>

            <div className="card-body">
              <div className="table-responsive">
                {this.state.order != "" ? (
                  <table
                    className="table  table-borderless table-sm "
                    id="dataTable"
                    width="100%"
                    cellSpacing={0}
                  >
                    <thead>
                      <tr>
                        {this.headers.map(function (h) {
                          return <th key={h.key}>{h.label}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.order.map(
                        function (item, key) {
                          return (
                            <tr key={key}>
                              <td>{item.orderid}</td>
                              <td>{item.date}</td>
                              <td>
                                <NumberFormat
                                  value={item.total}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                  prefix={"฿ "}
                                />
                              </td>
                              <td>
                                {item.number == "" ? (
                                  <h6 style={{ color: "#E90D0D" }}>
                                    ยังไม่ได้จัดส่ง{" "}
                                    <span class="badge badge-danger">
                                      waiting
                                    </span>
                                  </h6>
                                ) : item.number != "" ? (
                                  <h6 style={{ color: "#1BA825" }}>
                                    {item.number}&nbsp;
                                    <span class="badge badge-success">
                                      Success
                                    </span>
                                  </h6>
                                ) : (
                                  <div></div>
                                )}
                              </td>
                              <td align="right">
                                <Link to={`/editorder/${item.orderid}`}>
                                  <button type="button" class="btn btn-info">
                                    รายละเอียด
                                  </button>
                                </Link>
                                &nbsp;
                                <button type="button" class="btn btn-danger">
                                  {" "}
                                  <a
                                    style={{ color: "#fff" }}
                                    href="javascript:void(0);"
                                    onClick={this.deleteOrder.bind(
                                      this,
                                      item.orderid
                                    )}
                                  >
                                    ลบออเดอร์
                                  </a>
                                </button>
                              </td>
                            </tr>
                          );
                        }.bind(this)
                      )}
                    </tbody>
                  </table>
                ) : (
                  <div>
                    <Skeleton width="100%" />
                    <Skeleton width="100%" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
