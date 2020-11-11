import React, { Component } from "react";
import CartPay from "./CartPay";
import FadeIn from 'react-fade-in';
import Alert from "@material-ui/lab/Alert";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
class Pay extends Component {
  clearitem = () => {
    localStorage.removeItem("cartItems");
    toast("กรุณารอสักครู่...");
  };

  constructor(props) {
    super(props);
    this.state = {
      member_id: "",
      name: "",
      address: "",
      email: "",
      tel: "",
      total: "",
      number: "",
      detail: "",
      file: '',
      imagePreviewUrl: ''
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();
    const address = localStorage.getItem("address");
    const email = localStorage.getItem("email");
    const name = localStorage.getItem("name");
    const id = localStorage.getItem("id");
    const total = localStorage.getItem("total");
    const detail = localStorage.getItem("detail");
      console.log("detail"+JSON.parse(detail))
    fetch("https://www.api.senpru.com/signalinfo/index.php/order/add_order", {
      method: "POST",
      body: JSON.stringify({
        member_id: id,
        name: name,
        address: this.state.address,
        email: email,
        tel: this.state.tel,
        total: total,
        number: "",
        img:(JSON.stringify(this.state.imagePreviewUrl)),
        detail: JSON.parse(detail)
      }),

      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(function(response) {
      setTimeout(function() {
        swal({
          title: "สั่งซื้อสำเร็จ",
          text: "ขอบคุณที่ใช้บริการ",
          icon: "success",
        
        });
      
      }, 4200);
      setTimeout(function() {
        window.location.href = "/alnum";
      }, 6500);
    }).then((data) => {
     
    });
  }
  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }
  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result });
        console.log(this.state.imagePreviewUrl);
    };

    reader.readAsDataURL(file);
  }
  handleCheckClick = () => {
    const address = localStorage.getItem("address");
    const tel = localStorage.getItem("tel");
    this.setState({ address: address });
    this.setState({ tel: tel });
  };
  handleCheckClick2 = () => {
    this.setState({ address: "กรอกที่อยู่ที่ท่านต้องการจัดส่ง" });
    this.setState({ tel: "ระบุเบอร์โทร" });
  };
  

  render() {
    const count = localStorage.getItem("count");
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText"> <li color="red">
      เมื่อโอนแล้วกรุณาอัพโหลดหลักฐาน
    </li></div>);
    }
    console.log(this.state.checked);
    return (
      <div>
        {count != 0 ? (
          <section className="checkout-section spad">
            <div className="container">
              <FadeIn>
              <div className="row">
                <div className="col-lg-8 order-2 order-lg-1">
                  <form encrypt="multipart/form-data" className="checkout-form" onSubmit={this.handleSubmit}>
                    <div className="cf-title">ที่อยู่ในการจัดส่ง</div>
                    <div className="row">
                      <div className="col-md">
                        <p>*กรุณาเลือกที่อยู่การจัดส่ง</p>
                      </div>
                      <div className="col-md">
                        <div className="cf-radio-btns address-rb">
                          <div className="cfr-item">
                            <input
                              onChange={this.handleCheckClick2}
                              type="radio"
                              checked={this.state.address}
                              name="address"
                              id="two"
                            />

                            <label htmlFor="one">ใช้ที่หลักในการจัดส่ง</label>
                          </div>
                          <div className="cfr-item">
                            <input
                              type="radio"
                              onChange={this.handleCheckClick}
                              checked={this.state.address}
                              name="address"
                              id="one"
                            />
                            <label htmlFor="two">
                              ใช้ที่อยู่อื่นในการจัดส่ง
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    {this.state.address === "" ?
                          <Alert style={{ fontFamily: "Sarabun" }} severity="warning">
                          กรอกที่อยู่ที่ท่านต้องการจัดส่ง
                        </Alert>
                        :
                        <Alert style={{ fontFamily: "Sarabun" }} severity="success">
                        กรอกที่อยู่แล้ว
                      </Alert>
                        }
                        <br></br>
                    <div className="row address-inputs">
                      <div className="col-md-12">
                        <div className="checkout-form2">
                          <textarea
                            class="textarea"
                            name="address"
                            rows="3"
                            placeholder={this.state.address}
                            value={this.state.address}
                            onChange={this.handleChange}
                          ></textarea>
                        </div>
                       
                      </div>
                      <div className="col-md-12">
                        <input
                          type="text"
                          name="tel"
                          placeholder="เบอร์โทร"
                          value={this.state.tel}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="cf-title">การชำระเงิน</div>
                    <ul className="payment-list">
                      <li>โอนทางธนาคาร</li>
                    </ul>
                    <img
                      src="assets/img/tmb.png"
                      alt=""
                      height="50px"
                      width="50px"
                    />
                    <p>เลขบัญชี :</p> <b>532-2-30548-2</b> <p>ชื่อบัญชี</p>{" "}
                    <b>วิศรุต ดอกไม้กุล</b>
                    <br></br>
                    <br></br>
                   
                    <br></br>
                    <div className="checkout-cart2">
                    <div className="previewComponent">
                      <center>    <img src="/static/media/UploadIcon.1cedb6e9.svg" class="uploadIcon" alt="Upload Icon"/>
                      <div className="custom-file">
          <input className="custom-file-input"
            type="file" 
            onChange={(e)=>this._handleImageChange(e)} /></div></center>
                
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
      </div>
                    <br></br>
                    {this.state.imagePreviewUrl == '' ?  <button 
                      type="submit"
                      onClick={this.clearitem}
                      disabled={true}
                      value="Submit"
                      className="site-btn-disabled  submit-order-btn"
                    >
                      <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl
                        pauseOnVisibilityChange
                        draggable
                        pauseOnHover
                      />
                      ยืนยันการสั่งซื้อ
                    </button>
                     : this.state.address == "" ? 
                     
                     <button 
                      type="submit"
                      onClick={this.clearitem}
                      disabled={true}
                      value="Submit"
                      className="site-btn-disabled  submit-order-btn"
                    >
                      <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl
                        pauseOnVisibilityChange
                        draggable
                        pauseOnHover
                      />
                      ยืนยันการสั่งซื้อ
                    </button>
                     :

                     <button 
                     type="submit"
                     onClick={this.clearitem}
                     disabled={false}
                     value="Submit"
                     className="site-btn submit-order-btn"
                   >
                     <ToastContainer
                       position="top-center"
                       autoClose={5000}
                       hideProgressBar={false}
                       newestOnTop={false}
                       closeOnClick
                       rtl
                       pauseOnVisibilityChange
                       draggable
                       pauseOnHover
                     />
                     ยืนยันการสั่งซื้อ
                   </button>
                   }
                   
                  </form>
                </div>

                <div className="col-lg-4 order-1 order-lg-2">
                  <div className="checkout-cart">
                    <h3>รายการสั่งซื้อ</h3>
                    <ul className="product-list">
                      <CartPay />
                    </ul>
                  </div>
                </div>
              </div>
              </FadeIn>
            </div>
          </section>
        ) : (
          <div>
            <center>คุณยังไม่มีสินค้าในตะกร้า</center>
            <Link to="/"> &larr; กลับไปซื้อสินค้าต่อ</Link>
          </div>
        )}
      </div>
    );
  }
}

export default Pay;
