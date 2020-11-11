import React, { Component } from "react";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";
class Total extends Component {
  constructor(props) {
    super(props);
    this.state = { total: "" };
  }
  componentDidMount() {
    fetch("https://www.api.senpru.com/signalinfo/index.php/order/total")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        this.setState({
          total: result[0].total + " " + "฿",
        });
      });
  }
  render() {
    return (
      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-primary shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  ยอดขายสินค้า
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {this.state.total == "" ? (
                    <div>กำลังโหลด..</div>
                  ) : (
                    <div>
                      {" "}
                      <NumberFormat
                        value={this.state.total}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"฿ "}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Total;
