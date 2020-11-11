import React, { Component } from 'react';

class Updatefix extends Component {
  render() {
    return (
      <div>
      <div className="">
        <div className="container">
       
        
          <h4>อัพเดทการซ่อม</h4>
          
        </div>
      </div>
      <br />
      <div className="container">
      <form method="GET" id="my_forms"></form>
      <table class="table table-sm">
  <thead>
    <tr>
      <th scope="col">ลำดับ</th>
      <th scope="col">ชื่อรุ่น</th>
      <th scope="col">สถานะการจอง</th>
      <th scope="col">สถานะการซ่อม</th>
      <th scope="col">ชื่อลูกค้า</th>
      <th scope="col">วันที่ซ่อมเสร็จ</th>
      <th scope="col"></th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>lenovo</td>
      <td><p><font color="green
">ยืนยันแล้ว</font></p>
             </td>
      <td><select className="form-control">
                
                <option>รออะไหล่</option>
                <option>กำลังซ่อม</option>
                <option>ซ่อมเสร็จแล้ว</option>
                <option>ส่งมอบแล้ว</option>
              </select></td>
      <td>ต่าย เขาย้อย</td>
      <td><input type="date" name="price" form="my_forms" /></td>
      <td>
        <button type="button" class="btn btn-warning" data-toggle="modal" data-target=".bd-example-modal-xl">อัพเดทการจอง</button>&nbsp;
        </td> <td><button type="button" class="btn btn-success">อัพเดทการซ่อม</button></td>
        
      <div class="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl" role="document">
    <div class="modal-content">
    <form method="GET" id="my_form"></form>
    <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ลำดับ</th>
              <th scope="col">ชื่อรุ่น</th>
             
              <th scope="col">ราคาโดยประมาณ</th>
              <th scope="col">วันเวลาที่ลูกค้านัด</th> 
              <th scope="col">วันเวลาที่ร้านสะดวก</th> 
              <th scope="col">ช่างผู้รับผิดชอบ</th> 
              
              <th scope="col">การยืนยัน</th>
            </tr>
          </thead>
         
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>lenovo</td>
              
              <td><input type="text" name="price" form="my_form" /></td>
              <td>20/02/2563 9.00AM</td>
              <td><input type="date" name="datefix" form="my_form" /></td>
              <td> <select className="form-control">
                
                <option>วิสรุต</option>
                <option>อานนท์</option>
              </select></td>
              
           
              <td><button type="button" class="btn btn-success">อัพเดทการจองคิว</button></td>
            </tr>
           
          </tbody>
        </table>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">ปิด</button>
        
      </div>
    </div>
  </div>
</div>
    </tr>


    <tr>
      <th scope="row">2</th>
      <td>Acer nitro5</td>
      <td><p><font color="red
">รอการยืนยัน</font></p>
             </td>
      <td><select className="form-control">
                
                <option>รออะไหล่</option>
                <option>กำลังซ่อม</option>
                <option>ซ่อมเสร็จแล้ว</option>
                <option>ส่งมอบแล้ว</option>
              </select></td>
      <td>ต่าย ป่าโมก</td>
      <td><input type="date" name="price" form="my_forms" /></td>
      <td>
        <button type="button" class="btn btn-warning" data-toggle="modal" data-target=".bd-example-modal-xl">อัพเดทการจอง</button>&nbsp;
        </td> <td><button type="button" class="btn btn-success">อัพเดทการซ่อม</button></td>
        
      <div class="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl" role="document">
    <div class="modal-content">
    <form method="GET" id="my_form"></form>
    <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ลำดับ</th>
              <th scope="col">ชื่อรุ่น</th>
             
              <th scope="col">ราคาโดยประมาณ</th>
              <th scope="col">วันเวลาที่ลูกค้านัด</th> 
              <th scope="col">วันเวลาที่ร้านสะดวก</th> 
              <th scope="col">ช่างผู้รับผิดชอบ</th> 
              
              <th scope="col">การยืนยัน</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">2</th>
              <td>Acer nitro5</td>
              
              <td><input type="text" name="price" form="my_form" /></td>
              <td>20/02/2563 9.00AM</td>
              <td><input type="date" name="datefix" form="my_form" /></td>
              <td> <select className="form-control">
                
                <option>วิศรุต</option>
                <option>อานนท์</option>
              </select></td>
              
           
              <td><button type="button" class="btn btn-success">อัพเดทการจองคิว</button></td>
            </tr>
           
          </tbody>
        </table>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">ปิด</button>
        
      </div>
    </div>
  </div>
</div>
    </tr>
  
  </tbody>
</table>
      </div>
    </div>
    );
  }
}

export default Updatefix ;