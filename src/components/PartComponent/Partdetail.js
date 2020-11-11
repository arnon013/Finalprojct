import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Basketpart from '../PartComponent/Basketpart';

class Partdetail extends Component {
  constructor() {
    super();
    this.state = {
      size: "",
      sort: "",
      partItems: [],
      products: [],
      filteredProducts: []
    };
  }
  componentWillMount() {
    if (localStorage.getItem("partItems")) {
      this.setState({
        partItems: JSON.parse(localStorage.getItem("partItems"))
        
      });
    }
  
      let url = "https://www.api.senpru.com/signalinfo/index.php/propart/fetchall";
  
      fetch(url)
          .then(res => res.json())
          .then(data => {
            this.setState({ products:data[0].products });
            this.listProducts();
          });
    // fetch("http://localhost:8000/products")
    //   .then(res => res.json())
    //   .catch(err =>
    //     fetch("../db.json")
    //       .then(res => res.json())
    //       .then(data => data.products)
    //   )
    //   .then(data => {
    //     this.setState({ products: data });
    //     this.listProducts();
    //   });
  }

  handleRemoveFromCart = (e, product) => {
    this.setState(state => {
      const partItems = state.partItems.filter(a => a.id !== product.id);
      localStorage.setItem("partItems", JSON.stringify(partItems));
      return { partItems: partItems };
    });
  };

  handleAddToCart = (e, product) => {
    this.setState(state => {
      const partItems = state.partItems;
      let productAlreadyInCart = false;

      partItems.forEach(cp => {
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
    this.setState(state => {
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
            a => a.availableSizes.indexOf(state.size.toUpperCase()) >= 0
          )
        };
      }
      return { filteredProducts: state.products };
    });
  };
  handleSortChange = e => {
    this.setState({ sort: e.target.value });
    this.listProducts();
  };
  handleSizeChange = e => {
    this.setState({ size: e.target.value });
    this.listProducts();
  };


  render() {
    return (
      
      <Basketpart
      partItems={this.state.partItems}
      handleRemoveFromCart={this.handleRemoveFromCart}
    />
   
    );
  }
}

export default Partdetail;


