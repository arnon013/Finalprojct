import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      
      <header className="header-section">
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 text-center text-lg-left">
                
                <a href="/" className="site-logo">
                  <img src="assets/img/lghd.png" alt=""/>
                </a>
              </div>
              <div className="col-xl-6 col-lg-5">
                <form className="header-search-form">
                  <input type="text" placeholder="ค้นหา"/>
                  <a href="www.google.com"> <button><i className="flaticon-search"></i></button></a>
                </form>
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="user-panel">
                  <div className="up-item">
                    <i className="flaticon-profile"></i>
                    <a href="/Register">  ล๊อคอิน | สมัคสมาชิก</a>
                  </div>
                  <div className="up-item">
                    <div className="shopping-card">
                      <i className="flaticon-bag"></i>
                      <span>3</span>
                    </div>
                    <a href="/Cart"> ตะกร้าสินค้า</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="main-navbar">
          
        </nav>
      </header>
    
      
    )
  }
}
export default Header;