import React, { Component } from "react";
import { Link } from "react-router-dom";
import FadeIn from 'react-fade-in';
class Statusfix extends Component {
  constructor(props) {
    super(props);
    this.state = { websites: [] };

    this.headers = [
      { key: "id", label: "รหัสการซ่อม" },
      { key: "name", label: "ชื่อรุ่น" },
      { key: "statusfix", label: "สถานะการซ่อม" },
      { key: "cashpledge", label: "เงินมัดจำ" },
      { key: "statuscash", label: "สถานะมัดจำ" },
      { key: "price", label: "ราคาสุทธิ" },
      { key: "statusprice", label: "สถานะทั้งหมด" },
      { key: "datefix", label: "วันที่คาดว่าซ่อมเสร็จ" },
      { key: "waranty", label: "ประกันเครื่อง" },
      { key: "warantypro", label: "ประกันอะไหล่" },
    ];
  }
  valueId(e) {
    this.setState({ keyword: e.target.value });
    console.log("key2=" + e.target.value);
  }

  componentDidMount() {
    const id = localStorage.getItem("id");

    fetch(
      "https://www.api.senpru.com/signalinfo/index.php/booking/cus?cus=" + id
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        this.setState({
          websites: result,
        });
      });
  }

  render() {
    return (
      <div>
        <div className="">
          <div className="container">
          
            <h4>ตรวจสอบสถานะการซ่อม</h4>
          </div>
        </div>
        <br />
        <div className="container">
          <input
            class="form-control"
            id="myInput2"
            type="text"
            placeholder="ค้นหา.."
          />
             <FadeIn>
          <table class="table table-hover" id="example">
         
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
                        {item.statuscash == "ชำระแล้ว" ? (
                          <b style={{ color: "#4caf50" }}>ชำระแล้ว</b>
                        ) : (
                          <b style={{ color: "red" }}>ยังไม่ชำระ</b>
                        )}
                      </td>
                      <td>{item.price}</td>
                      <td>
                        {item.statusprice == "ชำระแล้ว" ? (
                          <b style={{ color: "#4caf50" }}>ชำระแล้ว</b>
                        ) : (
                          <b style={{ color: "red" }}>ยังไม่ชำระ</b>
                        )}
                      </td>
                      <td>{item.datefix}</td>
                      <td>{item.waranty}</td>
                      <td>{item.warantypro}</td>

                      <td>
                        <Link to={`/Statusdetail/${item.id}`}>
                          <button
                            type="button"
                            class="btn btn-warning"
                            data-toggle="modal"
                            data-target=".bd-example-modal-xl"
                          >
                            รายละเอียด
                          </button>
                          &nbsp;
                        </Link>
                      </td>
                    </tr>
                  );
                }.bind(this)
              )}
            </tbody>
         
          </table>
          </FadeIn>
        </div>
      </div>
    );
  }
}

export default Statusfix;
