import React, { Component } from "react";
import { Link } from "react-router-dom";
import Skeleton from "@material-ui/lab/Skeleton";
class Count extends Component {
  constructor(props) {
    super(props);
    this.state = { count:'' };
  }
  componentDidMount() {
    fetch("https://www.api.senpru.com/signalinfo/index.php/propart/count")
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log(result);
        this.setState({
          count:result[0].count+" "+"รายการ"
        });
      });
  }
  render() {
    return (
        
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-success shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                        คำสั่งซื้อทั้งหมด
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">

                      {this.state.count == "" ?
                      <div>กำลังโหลด..</div> :
    <div>{this.state.count}</div>
                       }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
    );
  }
}

export default Count;
