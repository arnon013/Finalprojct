import React, { Component } from "react";
import { Link } from "react-router-dom";
class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = { id: "", name: "", email: "", tel: "", password: "", file: '',
    imagePreviewUrl: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  componentDidMount() {
    const id = localStorage.getItem("id");
    fetch(
      "https://www.api.senpru.com/signalinfo/index.php/member/member?id=" + id
    )
      .then(response => {
        return response.json(); 
      })
      .then(result => {
        console.log(result);
        this.setState({
          id: result.id,
          name: result.name,
          email: result.email,
          tel: result.tel,
          password: result.password,
          img_id: result.img_id,
          address: result.address,
          status: result.status
        });
      });
  }

  handleChange(event) {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }
  handleSubmit(event) {
    const status = localStorage.getItem("status");
    const ids = localStorage.getItem("id");
    event.preventDefault();
    fetch(
      "https://www.api.senpru.com/signalinfo/index.php/member/update_member",
      {
        method: "PUT",
        body: JSON.stringify({
          id: this.state.id,
          name: this.state.name,
          email: this.state.email,
          tel: this.state.tel,
          password: this.state.password,
          img_id: (JSON.stringify(this.state.imagePreviewUrl)),
          address: this.state.address,
          status: status,
          member_id:ids
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }
    ).then(response => {
      if (response.status === 200) {
        localStorage.setItem("id", this.state.id);
        localStorage.setItem("name", this.state.name);
        localStorage.setItem("email", this.state.email);
        localStorage.setItem("tel", this.state.tel);
        localStorage.setItem("address", this.state.address);
        localStorage.setItem("status", this.state.status);
        localStorage.removeItem("img_id");
        localStorage.setItem("img_id","http://www.senpru.com/api/signalinfo/"+ this.state.img_id);
        alert("บันทึกข้อมูลข้อมูลเรียบร้อยแล้ว" + " " + this.state.name);
        this.props.history.push("/Avatar");
        window.location.reload();
      }
    });
  }
  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText"> <li color="red">
      รูปโปรไฟล์
    </li></div>);
    }
    return (
      <div>
        <section className="checkout-section spad">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>แก้ไขข้อมูลส่วนตัว</h2>
              </div>
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
            <br></br>
            <div className="row">
              <div className="col-12">
                <form className="checkout-form" onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    placeholder="ชื่อ-นามสกุล"
                  />
                  <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    placeholder="อีเมล์"
                  />
                  <input
                    type="text"
                    name="tel"
                    value={this.state.tel}
                    onChange={this.handleChange}
                    placeholder="เบอร์โทรศัพท์"
                  />
                  <div className="checkout-form2">
                    <textarea
                      class="textarea"
                      name="address"
                      value={this.state.address}
                      onChange={this.handleChange}
                      rows="3"
                      placeholder="ที่อยู่"
                    ></textarea>
                  </div>

                  <div className="row">
                    <div className="col-6">
                      <button className="site-btn submit-order-btn">
                        บันทึก
                      </button>
                    </div>
                    <div className="col-6">
                      <Link to={`/Avatar`}>
                        <button type="button" class="site-btn3">
                          ย้อนกลับ
                        </button>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Edit;
