import React, { Component } from 'react';


class Check1 extends Component {
  render() {
    return (
      <div id="page-wrapper">
        <div className="container-fluid">
        <div>
      
       <div className="container"><br/>
        <h4>เช็ดสถานะ</h4><br/>
        </div>
      </div>
      <div className="container">
      <table class="table table-sm">
        <thead>
          <tr>
          <th>ลำดับ</th>
              <th>ประเภทแบบฟอร์ม</th>
              <th>หมวดหมู่</th>
              <th>ชื่ออะไหล่</th>
              <th>จำนวน</th>
              <th>วันที่</th>
              <th>รายละเอียด</th>
              <th></th>
          </tr>
          </thead>
          <td>1</td>
          <td>การเบิก</td>   
          <td>Ram</td>
          <td>kingston hyper x ddr4 2400</td>
          <td>1</td>
          <td>01/02/2563</td>
          <td>นำไปติดตั้ง Acer</td>
          <td>
            <button type="button" class="btn btn-warning" data-toggle="modal" data-target=".bd-example-modal-xl">รายละเอียด</button>&nbsp;
          </td>
          
          <div class="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl" role="document">
    <div class="modal-content">
    <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ลำดับ</th>
              <th scope="col">ประเภทแบบฟอร์ม</th>
              <th scope="col">หมวดหมู่</th>
              <th scope="col">ชื่ออะไหล่</th>
              <th scope="col">จำนวน</th>
              <th scope="col">วันเที่เบิกอะไหล่</th> 
              <th scope="col">รายละเอียด</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>การเบิก</td>
          <td>Ram</td>
          <td>kingston hyper x ddr4 2400</td>
          <td>1</td>
          <td>01/02/2563</td>
              <td>นำไปติดตั้ง Acer Nitro 5</td>
              <td><button type="button" class="btn btn-success">อนุมัติ</button></td>
              <td><button type="button" class="btn btn-danger">ไม่อนุมัติ</button></td>
            </tr>
          </tbody>
        </table>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">ปิด</button>
        
      </div>
    </div>
  </div>
  </div>
  

      </table>
        
    
        </div>
       </div>
      </div>
    );
  }
}

export default Check1;