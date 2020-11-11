import React from "react";
import { Link, withRouter } from "react-router-dom";
import JSONViewer from "react-json-viewer";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import Paper from "@material-ui/core/Paper";
import ModalImage from "react-modal-image";
class EditOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderid: "",
      number: "",
      member_id: "",
      date: "",
      name: "",
      address: "",
      email: "",
      tel: "",
      total: "",
      cname:"",
      ordermember: []
    };
    this.headers = [
      { key: "productid", label: "รหัสสินค้า" },
      { key: "name", label: "ชื่อสินค้า" },
      { key: "image", label: "รูปสินค้า" },
      { key: "price", label: "ราคา" },
      { key: "count", label: "จำนวน" }
    ];
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://www.api.senpru.com/signalinfo/index.php/order/order?orderid=" +
        this.props.match.params.id
    )
      .then(response => {
        return response.json();
      })
      .then(result => {
        this.setState({
          ordermember: result,
          order_img:"http://www.senpru.com/api/signalinfo/"+result[0].order_img,
          number: result[0].number,
          orderid: result[0].orderid,
          member_id: result[0].member_id,
          date: result[0].date,
          cname:result[0].cname,
          address: result[0].address,
          email: result[0].email,
          tel: result[0].tel,
          total: result[0].total

        });
      });
  }
  handleChange(event) {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }
  handleSubmit(event) {
    event.preventDefault();
    fetch(
      "https://www.api.senpru.com/signalinfo/index.php/order/update_order",
      {
        method: "PUT",
        body: JSON.stringify({
          orderid: this.state.orderid,
          number: this.state.number,
          member_id: this.state.member_id,
          date: this.state.date,
          address: this.state.address,
          email: this.state.email,
          tel: this.state.tel,
          total: this.state.total
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }
    ).then(response => {
      if (response.status === 200) {
        alert("อัพเดตแล้ว");
      }
    });
  }

  render() {
    const status = localStorage.getItem("status");
    return (
      <div className="container">
       
        <p />
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-12">
              {this.state.number ? (
                <Alert style={{ fontFamily: "Sarabun" }} severity="success">
                  จัดส่งแล้ว
                </Alert>
              ) : (
                <Alert style={{ fontFamily: "Sarabun" }} severity="warning">
                  ถ้าจัดส่งสินค้าแล้วอย่าลืมกรอกหมายเลขพัสดุนะ
                </Alert>
              )}

              <p>
                <label>หมายเลขพัสดุ เช่น K123456789TH</label>
                <input
                  className="form-control"
                  type="text"
                  name="number"
                  value={this.state.number}
                  onChange={this.handleChange}
                />
              </p>
            </div>
            <div className="col-12">

           
              <div className="invoice-box">
                <p>
                  <h4>รายละเอียดออเดอร์</h4>
                  <br></br>
                
                 <div align="center" style={{height:"50%"}}>
                  
                  <ModalImage
                  align="center"
  small={this.state.order_img}
  large={this.state.order_img}
  alt="สลิปโอนเงินจากลูกค้า"
/></div> 
<p align="center">สลิปโอนเงินจากลูกค้า</p>

                  <p align="right">
                    วันที่ซื้อ :<b>{this.state.date}</b>
                  </p>
                  <p align="right">
                    ชื่อลูกค้า :<b>{this.state.cname}</b>
                  </p>
                  <p align="right">
                    ที่อยู่ :<b>{this.state.address}</b>
                  </p>
                  <br />
                    
                  <hr class="style6"></hr>
                  <table
                    className="table table-sm"
                    id="dataTable"
                    cellSpacing={0}
                  >
                    <thead>
                      <tr>
                        {this.headers.map(function(h) {
                          return <th key={h.key}>{h.label}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.ordermember.map(function(item, key) {
                        return (
                          <tr key={key}>
                            <td>{item.product_id}</td>
                            <td>{item.name}</td>
                            <td>
                              <img
                                style={{ width: "100px" }}
                                src={`http://www.senpru.com/api/signalinfo/${item.img}`}
                              />
                            </td>
                            <td>{item.price}</td>
                            <td>{item.count}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                    <tfoot style={{ backgroundColor: "#E3E2E1" }}>
                      <tr>
                        <td style={{ fontWeight: "400" }}>ราคารวม</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{this.state.total}</td>
                      </tr>
                    </tfoot>
                  </table>
                </p>
              </div>
            </div>
          </div>
          <br></br>
          <p>
            <Button
              type="submit"
              value="Submit"
              variant="contained"
              color="primary"
            >
              Update
            </Button>{" "}
            <Link to="/dashboard"><button className="btn btn-dark">ย้อนกลับ</button></Link>
          </p>
        </form>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default EditOrder;
