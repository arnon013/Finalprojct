import React, { Component } from "react";

import Skeleton from "@material-ui/lab/Skeleton";
import NumberFormat from "react-number-format";
export default class Productpart extends Component {
  render() {
    <input
      class="form-control"
      id="myInput"
      type="text"
      placeholder="ค้นหา.."
    />;

    const productItems = this.props.products.map((product) => (
      <table class="table table-sm">
        <tbody id="myTable">
          <tr>
            <th width="250px">
              <img
                width="250px"
                src={`http://www.senpru.com/api/signalinfo/${product.img}`}
              />
              {product.name}
            </th>

            <td width="275px">{product.description}</td>
            <td width="150px">
              <NumberFormat
                value={product.price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={""}
              />
            </td>
            <td width="150px">
              {product.category_id == 1 ? "RAM" : ""}
              {product.category_id == 2 ? "HDD" : ""}
              {product.category_id == 3 ? "SSD" : ""}
              {product.category_id == 4 ? "Mainboard" : ""}
              {product.category_id == 5 ? "M.2" : ""}
            </td>

            <td align="right">
              <a
                href="#"
                className="btn btn-success"
                onClick={(e) => this.props.handleAddToCart(e, product)}
              >
                <span>เพิ่ม</span>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    ));

    return <div className="row">{productItems}</div>;
  }
}
