import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
class Editstatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      date: "",
      name: "",
      breakdown: "",
      breakdowntech: "",
      price: "" ,
      imagePreviewUrl : ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://www.api.senpru.com/signalinfo/index.php/booking/book?id=" +
        this.props.match.params.id
    )
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log(result);
        this.setState({
          id: result.id,
          date: result.date,
          name: result.name,
          breakdown: result.breakdown,
          breakdowntech: result.breakdowntech,
          price: result.price,
          imagePreviewUrl:'http://www.senpru.com/api/signalinfo/'+result.book_img
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
      "https://www.api.senpru.com/signalinfo/index.php/booking/update_booking",
      {
        method: "PUT",
        body: JSON.stringify({
          id: this.state.id,
          date: this.state.date,
          name: this.state.name,
          breakdown: this.state.breakdown,
          breakdowntech: "รอช่างตรวจสอบ",
          book_img:(this.state.imagePreviewUrl),
          price: "รอช่างตรวจสอบ"
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }
    ).then(response => {
      if (response.status === 200) {
        alert("แก้ไขข้อมูลการจองเรียบร้อยแล้วค่ะ.");
        window.location.href = "/bookmain";
      }
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

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img width="120px" src={imagePreviewUrl}  />);
    } else {
      $imagePreview = (<div className="previewText"> <li color="red">
    รูปสินค้า
    </li></div>);
    }
    return (
      <div className="">
        <div className="container">
          <h4>แก้ไขข้อมูลการจองคิว</h4>
        </div>

        <form className="checkout-form" onSubmit={this.handleSubmit}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="col-12">
                  <br />
                  <br />
                  <input type="hidden" name="id" value={this.state.id} />
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
                    />
                  </div>
                  <br />
                  <br />
                  <div className="checkout-form2">
                    <textarea
                      class="textarea"
                      name="breakdown"
                      value={this.state.breakdown}
                      onChange={this.handleChange}
                      rows="3"
                    ></textarea>
                  </div>
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
                  <div className="col-12">
                    <button className="site-btn submit-order-btn">
                      บันทึกการแก้ไข
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <br></br>
      </div>
    );
  }
}
export default Editstatus;
