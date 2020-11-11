import React, { Component } from "react";
import Logout from "./Logout";
import LoginBtn from "./LoginBtn";
import Menu from "../MenuComponent/Menu";
import { Link } from "react-router-dom";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { names: "" };
    this.state = { ids: "" };
  }

  componentDidMount() {
    const name = localStorage.getItem("name");
    const id = localStorage.getItem("id");
    this.setState({ names: name });
    this.setState({ ids: id });
  }

  render() {
    const status = localStorage.getItem("status");
    return (
      <div>
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 text-center text-lg-left">
                {status == 1 ? (
                  <Link to="/" className="site-logo">
                    <img src="assets/img/lghd.png" onerror="this.onerror=null; this.src='logo.png';" alt="Site Logo" />
                    
                  </Link>
                ) : status == 2 ? (
                  <Link to="/Admin" className="site-logo">
                  <img src="assets/img/lghd.png" onerror="this.onerror=null; this.src='logo.png';" alt="Site Logo" />
                  </Link>
                ) : status == 3 ? (
                  <Link to="/Widen" className="site-logo">
                <img src="assets/img/lghd.png" onerror="this.onerror=null; this.src='logo.png';" alt="Site Logo" />
                  </Link>
                ) : (
                  <Link to="/" className="site-logo">
                  <img src="assets/img/lghd.png" onerror="this.onerror=null; this.src='logo.png';" alt="Site Logo" />
                  </Link>
                )}
              </div>

              {status == 1 ? (
                <div className="col-xl-6 col-lg-5">
                  <form
                    className="header-search-form"
                    onSubmit={this.props.onSearchSubmit}
                  >
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="ค้นหา"
                      onChange={this.props.onSearchKeywordChange}
                    />
                    <button className="flaticon-search"></button>
                  </form>
                </div>
              ) : status == 2 ? (
                <div className="col"></div>
              ) : status == 3 ? (
                <div className="col"></div>
              ) : (
                <div className="col-xl-6 col-lg-5">
                  <form
                    className="header-search-form"
                    onSubmit={this.props.onSearchSubmit}
                  >
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="ค้นหา"
                      onChange={this.props.onSearchKeywordChange}
                    />
                    <button className="flaticon-search"></button>
                  </form>
                </div>
              )}
              <div className="col-xl-4 col-lg-5">
                <div className="user-panel">
                  <div className="up-item">
                    <Link to="/Avatar"></Link>
                    {this.state.names ? <Logout /> : <LoginBtn />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Menu />
        <br></br>
      </div>
    );
  }
}

export default Header;
