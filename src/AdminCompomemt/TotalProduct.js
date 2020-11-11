import React, { Component } from "react";
import { Link } from "react-router-dom";
import Total from "./Total";
class TotalProduct extends Component {
  constructor(props) {
    super(props);
    this.state = { cpro:'' };
  }
  componentDidMount() {
    fetch("https://www.api.senpru.com/signalinfo/index.php/propart/cpro")
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log(result);
        this.setState({
          cpro:result[0].cpro+" "+"ชิ้น"
        });
      });
  }
  render() {
    return (
        <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-warning shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <Link to="/all">
                        <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">
                          จำนวนสินค้าในคลัง
                        </div>
                      </Link>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                      
                      {this.state.cpro == "" ?
                      <div>กำลังโหลด..</div> :
    <div>{this.state.cpro}</div>
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

export default TotalProduct;
