import React, { Component } from "react";
import Productpart from "../components/PartComponent/Productpart";
import Basketpart from "../components/PartComponent/Basketpart";
import NumberFormat from "react-number-format";
class Part extends Component {
  constructor() {
    super();
    this.state = {
      size: "",
      sort: "",
      partItems: [],
      products: [],
      filteredProducts: [],
    };
  }

  componentWillMount() {
    if (localStorage.getItem("partItems")) {
      this.setState({
        partItems: JSON.parse(localStorage.getItem("partItems")),
      });
    }

    let url =
      "https://www.api.senpru.com/signalinfo/index.php/propart/fetchall";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ products: data[0].products });
        console.log(this.state.products);
        this.listProducts();
      });
  }

  handleRemoveFromCart = (e, product) => {
    this.setState((state) => {
      const partItems = state.partItems.filter((a) => a.id !== product.id);
      localStorage.setItem("partItems", JSON.stringify(partItems));
      return { partItems: partItems };
    });
  };

  handleAddToCart = (e, product) => {
    this.setState((state) => {
      const partItems = state.partItems;
      let productAlreadyInCart = false;

      partItems.forEach((cp) => {
        if (cp.id === product.id) {
          cp.count += 1;
          productAlreadyInCart = true;
        }
      });

      if (!productAlreadyInCart) {
        partItems.push({ ...product, count: 1 });
      }
      localStorage.setItem("partItems", JSON.stringify(partItems));
      return { partItems: partItems };
    });
  };

  listProducts = () => {
    this.setState((state) => {
      if (state.sort !== "") {
        state.products.sort((a, b) =>
          state.sort === "lowestprice"
            ? a.price > b.price
              ? 1
              : -1
            : a.price < b.price
            ? 1
            : -1
        );
      } else {
        state.products.sort((a, b) => (a.id > b.id ? 1 : -1));
      }
      if (state.size !== "") {
        return {
          filteredProducts: state.products.filter(
            (a) => a.availableSizes.indexOf(state.size.toUpperCase()) >= 0
          ),
        };
      }
      return { filteredProducts: state.products };
    });
  };
  handleSortChange = (e) => {
    this.setState({ sort: e.target.value });
    this.listProducts();
  };
  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
    this.listProducts();
  };

  render() {
    return (
      <div className="container">
        <h4>เลือกอะไหล่</h4> <br />
        <div className="row">
          <div className="col-md-9">
            <input
              class="form-control"
              id="myInput"
              type="text"
              placeholder="ค้นหา.."
            />
            <table class="table">
              <thead>
                <tr>
                  <th width="250px">สินค้า</th>
                  <th width="250px">รายละเอียด</th>
                  <th width="250px">ราคา(บาท)</th>
                  <th width="250px">หมวดหมู่</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
            <Productpart
              products={this.state.filteredProducts}
              handleAddToCart={this.handleAddToCart}
            />
          </div>
          <div className="col-md-3">
            <button
              className="btn btn-success"
              onClick={this.props.history.goBack}
            >
              ตกลง
            </button>{" "}
            &nbsp;
            <button
              className="btn btn-info"
              onClick={this.props.history.goBack}
            >
              ย้อนกลับ
            </button>{" "}
            &nbsp;
            <Basketpart
              partItems={this.state.partItems}
              handleRemoveFromCart={this.handleRemoveFromCart}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Part;
