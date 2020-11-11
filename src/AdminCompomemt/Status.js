import React, { Component } from "react";
import { Link } from "react-router-dom";
class Status extends Component {
  constructor(props) {
    super(props);
    this.state = { websites: [] };

    this.headers = [
      { key: "id", label: "รหัสการซ่อม" },
      { key: "name", label: "ชื่อรุ่น" },
      { key: "statusfix", label: "สถานะการซ่อม" },
      { key: "cashpledge", label: "เงินมัดจำ" },
      { key: "statuscash", label: "สถานะมัดจำ" },
      { key: "price", label: "ราคาทั้งหมด" },
      { key: "statusprice", label: "สถานะทั้งหมด" },
      { key: "datefix", label: "วันที่คาดว่าซ่อมเสร็จ" },
      { key: "waranty", label: "ประกันเครื่อง" },
    ];
    this.deleteWebsite = this.deleteWebsite.bind(this);
  }
  valueId(e) {
    this.setState({ keyword: e.target.value });
    console.log("key2=" + e.target.value);
  }

  componentDidMount() {
    fetch("https://www.api.senpru.com/signalinfo/index.php/booking/bookings")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        this.setState({
          websites: result,
        });
      });
  }

  deleteWebsite(id) {
    if (window.confirm("ต้องการยกเลิกการซ่อมใช่หรือไม่")) {
      fetch(
        "https://www.api.senpru.com/signalinfo/index.php/booking/delete_booking/" +
          id,
        {
          method: "DELETE", //,
          //mode: 'no-cors',
          /*headers : {
					'Access-Control-Allow-Origin': '*',
					'Content-Type' : 'text/plain'
				}*/
        }
      ).then((response) => {
        if (response.status === 200) {
          alert("ยกเลิกการซ่อมแล้วค่ะ");

          fetch(
            "https://www.api.senpru.com/signalinfo/index.php/booking/bookings"
          )
            .then((response) => {
              return response.json();
            })
            .then((result) => {
              console.log(result);
              this.setState({
                websites: result,
              });
            });
        }
      });
    }
  }
  render() {
    const status = localStorage.getItem("status");
    return (
      <div>
        <div className="">
          <div className="container"></div>
        </div>
        <br />
        <div className="container">
          {status == 2 ? (
            <div>
              {" "}
              <h4>จัดการสถานะการซ่อม</h4>
              <input
                class="form-control"
                id="myInput2"
                type="text"
                placeholder="ค้นหา.."
              />{" "}
              <table class="table table-striped">
                <thead>
                  <tr>
                    {this.headers.map(function (h) {
                      return (
                        <th width="150px" key={h.key}>
                          {h.label}
                        </th>
                      );
                    })}

                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody id="myTable">
                  {this.state.websites.map(
                    function (item, key) {
                      return (
                        <tr key={key}>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>
                            {item.statusfix == "ซ่อมเสร็จแล้ว" ? (
                              <b style={{ color: "#4caf50" }}>ซ่อมเสร็จแล้ว</b>
                            ) : item.statusfix == "กำลังซ่อม" ? (
                              <b style={{ color: "#ffc107" }}>กำลังซ่อม</b>
                            ) : item.statusfix == "รออะไหล่" ? (
                              <b style={{ color: "#ff3d00" }}>รออะไหล่</b>
                            ) : (
                              <b style={{ color: "#2979ff" }}>ส่งมอบแล้ว</b>
                            )}
                          </td>
                          <td>{item.cashpledge}</td>
                          <td>
                            {item.statuscash == "ยังไม่ชำระ" ? (
                              <p style={{ color: "#ff3d00" }}>
                                &nbsp;ยังไม่ชำระ
                              </p>
                            ) : (
                              <p style={{ color: "#4caf50" }}>&nbsp;ชำระแล้ว</p>
                            )}
                          </td>
                          <td>{item.price}</td>
                          <td>
                            {item.statusprice == "ยังไม่ชำระ" ? (
                              <p style={{ color: "#ff3d00" }}>
                                &nbsp;ยังไม่ชำระ
                              </p>
                            ) : (
                              <p style={{ color: "#4caf50" }}>&nbsp;ชำระแล้ว</p>
                            )}
                          </td>
                          <td>{item.datefix}</td>
                          <td>{item.waranty}</td>

                          <td>
                            <Link to={`/Editfix/${item.id}`}>
                              <button type="button" class="btn btn-success">
                                อัพเดท
                              </button>
                            </Link>
                            <Link to={`/Fixinfo/${item.id}`}>
                              <button type="button" class="btn btn-info">
                                พิมพ์ใบเสร็จ
                              </button>
                            </Link>
                            <a
                              href="javascript:void(0);"
                              onClick={this.deleteWebsite.bind(this, item.id)}
                            >
                              <button type="button" class="btn btn-danger">
                                ยกเลิก
                              </button>
                            </a>
                          </td>
                        </tr>
                      );
                    }.bind(this)
                  )}
                </tbody>
              </table>
            </div>
          ) : (
            <div>คุณไม่มีสิทธิ์เข้าถึงหน้านี้</div>
          )}
        </div>
      </div>
    );
  }
}

export default Status;
