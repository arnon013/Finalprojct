import React, { Component } from 'react';

import { Link } from 'react-router-dom';
class Widen2 extends Component {
  render() {
    return (
   <div>
    
       <br/>
       <div className="container">
      <div className="row">
        <div className="col-sm-6 ">
        <a href="Check_parts">
         <div className="card bg-light mb-3" style={{maxWidth: '45rem', height: '27rem'}}>
           <div className="card-body">
                <center> <h3 className="card-title ">ตรวจสอบคำร้อง</h3></center>
              <center><img src="assets/img/icons/rty.png" height="300px"/></center>
            </div>
          </div>
          </a>
        </div>

        <div className="col-sm-6 ">
        <a href="/Websites">
         <div className="card bg-light mb-3" style={{maxWidth: '45rem', height: '27rem'}}>
           <div className="card-body">
          
                <center> <h3 className="card-title ">จัดการอะไหล่</h3></center>
            
              <center><img src="assets/img/icons/que.png" height="300px"/></center>
            </div>
          </div>
          </a>
        </div>
        </div>

    
        </div>
       </div>
      
      
    );
  }
}

export default Widen2;