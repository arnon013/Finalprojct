import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Skeleton from "@material-ui/lab/Skeleton";
import NumberFormat from "react-number-format";
class ShowRam extends Component {
  constructor(props) {
    super(props);
    this.state = { order: [] };
    this.headers = [
      { key: "img", label: "รูป" },
      { key: "name", label: "ชื่อสินค้า" },
      { key: "cate", label: "หมวดหมู่" },
      { key: "price", label: "ราคา(บาท)" },
      { key: "action", label: "ตัวเลือก" },
    ];
  }
  componentDidMount() {
    fetch("https://www.api.senpru.com/signalinfo/index.php/propart/fetchRam")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        this.setState({
          order: result[0].products,
        });
      });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="card  mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                <Link to="/add">
                  <button type="button" class="btn btn-primary">
                    เพิ่มสินค้า
                  </button>
                </Link>
              </h6>
            </div>

            <div className="card-body">
              <div className="table-responsive">
                {this.state.order != "" ? (
                  <table
                    className="table table-striped table-sm "
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
                              <td>
                                {" "}
                                <img
                                  width="75px"
                                  src={`http://www.senpru.com/api/signalinfo/${item.img}`}
                                />
                              </td>
                              <td>{item.name}</td>
                              <td>{item.category_id}</td>
                              <td>
                                <NumberFormat
                                  value={item.price}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                  prefix={""}
                                />
                              </td>
                              <td>
                                <Link to={`/editpd/${item.id}`}>
                                  <button type="button" class="btn btn-warning">
                                    แก้ไขข้อมูลสินค้า
                                  </button>
                                </Link>
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

export default ShowRam;
