import React, { Component } from "react";
import { ReloadComponent } from "react-reload-component";
import { Link } from "react-router-dom";
import Basket from '../CartComponent/Basket';
class Logout extends Component {
  

  logout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.clear();
    window.location.href = "/";
  };

  constructor(props) {
    super(props);
    this.state = { names: "" };
    this.state = { ids: "" };
this.state = {counts:""}
   
  }

  componentDidMount() {
    const name = localStorage.getItem("name");
    this.setState({ names: name });
    const id = localStorage.getItem("id");
    this.setState({ ids: id });
    const count = localStorage.getItem("count")
this.setState({counts:count});
  }
   

  render() {
 
    const count = localStorage.getItem("count"); 
    const status = localStorage.getItem("status");
    return (
      <div>
        {status == 3 ? (
          <Link to="/Avatar">
            <i className="fa fa-cogs" aria-hidden="true"></i>&nbsp;
            {this.state.names}
          </Link>
        ) : status == 2 ? (
          <Link to="/Avatar">
            <i className="fa fa-user-circle" aria-hidden="true"></i>&nbsp;
            {this.state.names}
          </Link>
        ) : (
          <Link to="/Avatar">
            <i className="fa fa-user" aria-hidden="true"></i>&nbsp;
            {this.state.names}
          </Link>
        )}
        &nbsp; | &nbsp;
        <Link to="" onClick={this.logout}>
          ออกจากระบบ
        </Link>
        &nbsp;&nbsp;
        {status == 1 ? (
          <div className="up-item">
            <Link to="/Cart">
              <div className="shopping-card">
                <i className="flaticon-bag"></i>
        {/* <span className="number_product">{this.state.counts}</span> */}
              </div>
              &nbsp;ตะกร้าสินค้า
            </Link>
          </div>
        ) : (
          <div className="up-item"></div>
        )}
      </div>
    );
  }
}
export default Logout;
