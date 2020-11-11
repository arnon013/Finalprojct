import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      price: "",
      category_id: "",
      qty: "",
      waranty: "",
      imagePreviewUrl: "",
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
    fetch(
      "https://www.api.senpru.com/signalinfo/index.php/product/add_product",
      {
        method: "POST",
        body: JSON.stringify({
          name: this.state.name,
          description: this.state.description,
          price: this.state.price,
          category_id: this.state.category_id,
          qty: this.state.qty,
          waranty: this.state.waranty,
          img: JSON.stringify(this.state.imagePreviewUrl),
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    ).then((response) => {
      if (response.status === 200) {
        alert("เพิ่มสินค้าเรียบร้อยแล้ว");
      }
    });
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

  render() {
    setTimeout(() => {
      console.log(new Date().toLocaleString());
    }, 5000);

    const status = localStorage.getItem("status");
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} />;
    } else {
      $imagePreview = (
        <div className="previewText">
          {" "}
          <li color="red">อัพโหลดรูปสินค้า</li>
        </div>
      );
    }
    return (
      <div className="container">
        <h4>Add Product</h4>
        <h6>เพิ่มสินค้า</h6>

        <p />
        <form onSubmit={this.handleSubmit}>
          <input
            className="form-control"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="ชื่อ"
          />
          <br />
          <input
            className="form-control"
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            placeholder="รายละเอียด"
          />
          <br />
          <input
            className="form-control"
            type="text"
            name="price"
            value={this.state.price}
            onChange={this.handleChange}
            placeholder="ราคา"
          />
          <br />
          <select
            className="form-control"
            id="status"
            name="category_id"
            value={this.state.category_id}
            onChange={this.handleChange}
          >
            <option value={1}>Ram</option>
            <option value={2}>HHD</option>
            <option value={3}>SSD</option>
            <option value={4}>Mainboard</option>
            <option value={5}>M.2</option>
          </select>

          <input
            className="form-control"
            type="text"
            name="qty"
            value={this.state.qty}
            onChange={this.handleChange}
            placeholder="จำนวน"
          />
          <br />

          <input
            className="form-control"
            type="text"
            name="waranty"
            value={this.state.waranty}
            onChange={this.handleChange}
            placeholder="ประกัน"
          />
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
          <p>
            <Button
              type="submit"
              value="Submit"
              variant="contained"
              color="primary"
            >
              Add
            </Button>

            <Link to="/all">
              {" "}
              <button className="btn btn-warning">ย้อนกลับ</button>
            </Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Add;
