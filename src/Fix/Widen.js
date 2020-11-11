import React, { Component } from 'react';

class Widen extends Component {
  render() {
    const status = localStorage.getItem('status');
    const name = localStorage.getItem('name');
    return (
     
      <div id="page-wrapper">
         {status == 3 ?  <div className="container-fluid">
    <br/>
       <div className="container">
       <h4>ยินดีต้อนรับ<b style={{color:'red'}}>ช่าง{name}</b></h4>
       <br></br>
      <div className="row">
      <div className="col-sm-6 ">
        <a href="/Updatebook">
         <div className="card bg-light mb-3" style={{maxWidth: '45rem', height: '27rem'}}>
           <div className="card-body">
           <center> <h3 className="card-title ">ตรวจสอบอาการ</h3></center>
              <center><img src="assets/img/icons/qwe.png" height="300px"/></center>
            </div>
          </div>
          </a>
        </div>
        </div>
        </div>
       </div> :  (<div>
    <center> 
       <h4>คุณไม่ม่สิทธิเข้าถึงส่วนนี้..</h4>
    </center>
</div>)}
      
      </div>
    );
  }
}

export default Widen;