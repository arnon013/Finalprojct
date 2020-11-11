import React, { Component } from 'react';
import FadeIn from 'react-fade-in';
class Fix extends Component {
  render() {
    return (
     
      <div className="container">
      <div className="row">
        <div className="col-sm-4 ">
        <a href="/book">
         <div className="card bg-light mb-3" style={{maxWidth: '45rem', height: '22rem'}}>
           <div className="card-body">
                <center> <h3 className="card-title ">จองคิวซ่อม</h3></center>
              <center><img src="assets/img/icons/support.png"/></center>
            </div>
          </div>
          </a>
        </div>

        <div className="col-sm-4 ">
        <a href="/booking">
         <div className="card bg-light mb-3" style={{maxWidth: '45rem', height: '22rem'}}>
           <div className="card-body">
                <center> <h3 className="card-title ">จองคิวซ่อม</h3></center>
              <center><img src="assets/img/icons/que.png"/></center>
            </div>
          </div>
          </a>
        </div>

        <div className="col-sm-4 ">
        <a href="/trackingF">
         <div className="card bg-light mb-3" style={{maxWidth: '45rem', height: '22rem'}}>
           <div className="card-body">
                <center> <h3 className="card-title ">จองคิวซ่อม</h3></center>
              <center><img src="assets/img/icons/status.png"/></center>
            </div>
          </div>
          </a>
        </div>
       
      </div>
    </div>
    );
  }
}

export default Fix;