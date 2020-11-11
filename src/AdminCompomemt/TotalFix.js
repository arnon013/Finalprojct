import React, { Component } from "react";
import { Link } from "react-router-dom";
import Total from "./Total";
class TotalFix extends Component {
  constructor(props) {
    super(props);
    this.state = { fix:'' };
  }
  componentDidMount() {
    fetch("https://www.api.senpru.com/signalinfo/index.php/propart/fix")
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log(result);
        this.setState({
          fix:result[0].fix+" "+"รายการ"
        });
      });
  }
  render() {
    return (
        <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-info shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <Link to="/status">
                  <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                    คำสั่งซ่อมทั้งหมด
                  </div>
                </Link>
                <div className="row no-gutters align-items-center">
                  <div className="col-auto">
                    <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                     
                    {this.state.fix == "" ?
                      <div>กำลังโหลด..</div> :
    <div>{this.state.fix}</div>
                       }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    );
  }
}

export default TotalFix;
