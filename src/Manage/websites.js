import React from "react";
import { Link } from "react-router-dom";
import Viewadmin from "./viewadmin";
import JSONViewer from "react-json-viewer";
import Viewtect from "./viewtech";
class Websites extends React.Component {
  constructor(props) {
    super(props);
    this.state = { members: [] };
    this.headers = [
      { key: "id", label: "รหัส" },
      { key: "img_id", label: "รูปภาพ" },
      { key: "name", label: "ชื่อ" },
      { key: "tel", label: "เบอร์โทร" },
      { key: "status", label: "สถานะ" },
    ];
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://www.api.senpru.com/signalinfo/index.php/member/status?status=1"
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        this.setState({
          members: result,
        });
        
      });
  }

  deleteProduct(id) {
    if (window.confirm("จะลบใช่หรือไม่?")) {
      fetch(
        "https://www.api.senpru.com/signalinfo/index.php/member/delete_member/" +
          id,
        {
          method: "DELETE", //,
        }
      ).then((response) => {
        if (response.status === 200) {
          alert("ลบรายการแล้ว");

          fetch(
            "https://www.api.senpru.com/signalinfo/index.php/member/members"
          )
            .then((response) => {
              return response.json();
            })
            .then((result) => {
              console.log(result);
              this.setState({
                members: result,
              });
            });
        }
      });
    }
  }

  render() {
    const status = localStorage.getItem("status");

    return (
      <div className="container-fluid">
        <br></br>
        <h4>สมาชิกทั้งหมด</h4>
        <div className="table-responsive">
          <table className="table table-sm">
            <thead>
              <tr>
                {this.headers.map(function (h) {
                  return <th key={h.key}>{h.label}</th>;
                })}
                <th>
                  <center>ตัวเลือก</center>
                </th>
              </tr>
            </thead>
            <tbody id="myTable">
              {this.state.members.map(
                function (item, key) {
                  return (
                    <tr key={key}>
                      <td>{item.id}</td>
                      <td>
                        <img
                          width="60px"
                          src={`http://www.senpru.com/api/signalinfo/${item.img_id}`}
                        />
                      </td>
                      <td>{item.name}</td>

                      <td>{item.tel}</td>

                      <td>
                        {item.status == 3 ? (
                          <h6 style={{ color: "#E90D0D" }}>ช่าง</h6>
                        ) : item.status == 2 ? (
                          <h6 style={{ color: "#1BA825" }}>Admin</h6>
                        ) : item.status == 1 ? (
                          <h6>ลูกค้า</h6>
                        ) : (
                          <h6>Error</h6>
                        )}
                      </td>
                      <td align="center">
                        {item.status == 1 ? (
                          <Link to={`/detail/${item.id}`}>
                            {" "}
                            <button className="btn2  submit-order-btn3">
                              ดูข้อมูล
                            </button>
                          </Link>
                        ) : (
                          <Link to={`/update/${item.id}`}>
                            {" "}
                            <button className="site-btn2 submit-order-btn2">
                              แก้ไข
                            </button>
                          </Link>
                        )}
                      </td>
                    </tr>
                  );
                }.bind(this)
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Websites;
