import React, { Component } from "react";
import ImageUploader from "react-images-upload";
import FadeIn from 'react-fade-in';
class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cus: "",
      date: "",
      breakdown: "",
      name: "",
      statusbook: "",
      breakdowntech: "",
      price: "",
      tech: "",
      withdraw: "",
      detailpart: "",
      service: "",
      file: "",
      imagePreviewUrl: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const id = localStorage.getItem("id");
    this.setState({ cuss: id });
  }
  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log("handle uploading-", this.state.file);
  }
  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
      console.log(this.state.imagePreviewUrl);
    };

    reader.readAsDataURL(file);
  }
  handleChange(event) {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }
  handleSubmit(event) {
    event.preventDefault();
    fetch(
      "https://www.api.senpru.com/signalinfo/index.php/booking/add_booking",
      {
        method: "POST",
        body: JSON.stringify({
          cus: this.state.cuss,
          date: this.state.date,
          breakdown: this.state.breakdown,
          name: this.state.name,
          statusbook: "รอช่างตรวจสอบ",
          breakdowntech: "รอช่างตรวจสอบ",
          price: "รอช่างตรวจสอบ",
          tech: "รอแอดมินจัดการ",
          withdraw: "รอช่างตรวจสอบ",
          service: "รอช่างตรวจสอบ",
          booking_img: JSON.stringify(this.state.imagePreviewUrl),
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    ).then((response) => {
      if (response.status === 200) {
        alert("ระบบจองคิวแล้วค่ะ");
        window.location.href = "/bookmain";
      }
    });
  }

  render() {
    const count = localStorage.getItem("count");
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} />;
    } else {
      $imagePreview = (
        <div className="previewText">
          {" "}
          <li color="red">กรุณาอัพโหลดรูปภาพ</li>
        </div>
      );
    }
    return (
      <div>
        <div className="container">
          <h4>แบบฟอร์มการจองคิว</h4>
        </div>
        <form className="checkout-form" onSubmit={this.handleSubmit}>
        <FadeIn>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="col-12">
                  <br />
                  <br />
                  <select  id="name" name="name"value={this.state.name} onChange={this.handleChange}>
       
        <option>ACER</option>
        <option>ASUS</option>
        <option>HP</option>
        <option>LENOVO</option>
        
  </select>
                  <h5>วันเวลาที่ต้องการจอง</h5>
                  &nbsp; &nbsp;{" "}
                  <div>
                    <input
                      type="date"
                      name="date"
                      value={this.state.date}
                      onChange={this.handleChange}
                      placeholder="วันที่"
                    />
                  </div>
   
                  <br />
                  <br />

                  <h4>{this.state.date}</h4>
                  <div className="checkout-form2">
                    <textarea
                      class="textarea"
                      name="breakdown"
                      value={this.state.breakdown}
                      onChange={this.handleChange}
                      rows="3"
                      placeholder="อาการเสีย"
                    ></textarea>
                  </div>
                  <h6>อัพโหลดรูปภาพ</h6>
                  <br></br>
                  <div className="checkout-cart2">
                    <div className="previewComponent">
                      <center>
                        {" "}
                        <img
                          src="/static/media/UploadIcon.1cedb6e9.svg"
                          class="uploadIcon"
                          alt="Upload Icon"
                        />
                        <div className="custom-file">
                          <input
                            className="custom-file-input"
                            type="file"
                            onChange={(e) => this._handleImageChange(e)}
                          />
                        </div>
                      </center>

                      <div className="imgPreview">{$imagePreview}</div>
                    </div>
                  </div>
                  <br />
                  <div className="col-12">
                    {this.state.breakdown == "" ? 
                    
                    <button
                    type="submit"
                    onClick={this.clearitem}
                    disabled={true}
                    value="Submit"
                    className="site-btn-disabled  submit-order-btn"
                  >
                    กรุณากรอกข้อมูลให้ครบ
                  </button>
                
                    : this.state.date === "" ? 
                    
                    <button
                    type="submit"
                    onClick={this.clearitem}
                    disabled={true}
                    value="Submit"
                    className="site-btn-disabled  submit-order-btn"
                  >
                   กรุณากรอกข้อมูลให้ครบ
                  </button>
                    : this.state.imagePreviewUrl == "" ? 
                    <button
                    type="submit"
                    onClick={this.clearitem}
                    disabled={true}
                    value="Submit"
                    className="site-btn-disabled  submit-order-btn"
                  >
                    กรุณากรอกข้อมูลให้ครบ
                  </button>
                    :

                    <button
                    type="submit"
                    onClick={this.clearitem}
                    disabled={false}
                    value="Submit"
                    className="site-btn submit-order-btn"
                  >
                    ยืนยันการจองคิว
                  </button>

                    

                    }
                    {/* {this.state.imagePreviewUrl == "" ? (
                      <button
                        type="submit"
                        onClick={this.clearitem}
                        disabled={true}
                        value="Submit"
                        className="site-btn-disabled  submit-order-btn"
                      >
                        ยืนยันการจองคิว
                      </button>
                    ) : (
                      <button
                        type="submit"
                        onClick={this.clearitem}
                        disabled={false}
                        value="Submit"
                        className="site-btn submit-order-btn"
                      >
                        ยืนยันการจองคิว
                      </button>
                    )} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          </FadeIn>
        </form>
        <br></br>
      </div>
    );
  }
}

export default Book;
