import React, { Component } from "react";

class TrackingF extends Component {
  render() {
    return (
      <div>
        <div className="">
          <div className="container">
            <h4>Status Fix</h4>
            <h6>สถานะการซ่อม</h6>
          </div>
        </div>
        <br />
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">&nbsp; &nbsp;ชื่อสินค้า</th>
              <th scope="col">เงินมัดจำ</th>
              <th scope="col">ราคาทั้งหมด</th>
              <th scope="col">อะไหล่ที่ต้องใช้</th>
              <th scope="col">ช่างผู้ดูแล</th>
              <th scope="col">สถานะการซ่อม</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">&nbsp; &nbsp;lenovo</th>
              <td>600 บาท</td>
              <td>1200 บาท</td>
              <td>Kington Ram4GB</td>
              <td>วิศรุต</td>
              <td>รออะไหล่</td>
            </tr>
            <tr>
              <th scope="row">&nbsp; &nbsp;acer nitro</th>
              <td>900 บาท</td>
              <td>1860 บาท</td>
              <td>GALAX GAMER SSD L 120GB</td>
              <td>ต่าย เขาย้อย</td>
              <td>กำลังซ่อม</td>
            </tr>
            <tr>
              <th scope="row">&nbsp; &nbsp;acer nitro</th>
              <td>900 บาท</td>
              <td>1860 บาท</td>
              <td>GALAX GAMER SSD L 120GB</td>
              <td>ต่าย เขาย้อย</td>
              <td>ซ่อมเสร็จแล้ว</td>
            </tr>
            <tr>
              <th scope="row">&nbsp; &nbsp;acer nitro</th>
              <td>900 บาท</td>
              <td>1860 บาท</td>
              <td>GALAX GAMER SSD L 120GB</td>
              <td>ต่าย เขาย้อย</td>
              <td>ส่งมอบแล้ว</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default TrackingF;
