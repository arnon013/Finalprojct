import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (

		<nav className="main-navbar">
        <div className="container">
          {/* menu */}
          <ul className="main-menu">
            <li><a href="/">หน้าหลัก</a></li>
            <li><a href="/fix">การสั่งซ่อม<span className="new">ร้านซ่อม</span></a></li>
		                            
            <li><a href="/alnum">เลขพัสดุ</a></li>
            <li><a href="/Purchase">ประวัติการซื้อ</a></li>
			<li><a href="#">ติดต่อ</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Main;
