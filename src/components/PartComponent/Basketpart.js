import React, { Component } from "react";
import { colors } from "@material-ui/core";
import NumberFormat from "react-number-format";
export default class Basketpart extends Component {
  render() {
    const { partItems } = this.props;
    localStorage.setItem("detailpart", JSON.stringify(partItems));
    console.log(localStorage.getItem("detailpart"));
    localStorage.setItem(
      "total",
      partItems.reduce((a, c) => a + c.price * c.count, 0)
    );
    const total = localStorage.getItem("total");

    return (
      <div className="container">
        <section className="cart-section spad">
          <div className="col-lg-12">
            <div
              className="cart-table-warp"
              tabIndex={1}
              style={{
                overflow: "hidden",
                outline: "none",
                touchAction: "none",
              }}
            >
              {partItems.length === 0 ? (
                <div>
                  <br></br>
                  <div className="cart-table">
                    <center>
                      <h4>ไม่มีรายการที่เลือก</h4>
                    </center>
                    <br></br>
                  </div>
                </div>
              ) : (
                <div>
                  คุณมี {partItems.length} รายการที่เลือก <hr />
                </div>
              )}
              {partItems.length > 0 && (
                <div className="cart-table">
                  <br />
                  <ul style={{ paddingButtom: 100 }}>
                    {partItems.map((item) => (
                      <div key={item.id}>
                        <img
                          width="50px"
                          src={`http://www.senpru.com/api/signalinfo/${item.img}`}
                        />
                        <b>{item.name}</b>
                        <button
                          style={{ float: "right" }}
                          className="btn btn-danger btn-xs"
                          onClick={(e) =>
                            this.props.handleRemoveFromCart(e, item)
                          }
                        >
                          X
                        </button>
                        &nbsp; จำนวน {item.count} X{" "}
                        <NumberFormat
                          value={item.price}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={""}
                        />
                        <br />
                        <br></br>
                      </div>
                    ))}
                  </ul>

                  <hr />
                  <h6>
                    ราคารวม{" "}
                    <NumberFormat
                      value={partItems.reduce(
                        (a, c) => a + c.price * c.count,
                        0
                      )}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={""}
                    />
                    <br />
                    <br />
                  </h6>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
