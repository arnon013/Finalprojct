import React, { Component } from "react";
import FixUnLogin from "./FixUnLogin";
import FixLogedin from "./FixLogedin";
import FadeIn from 'react-fade-in';
import { Link } from "react-router-dom";
class Fix extends Component {
  constructor(props) {
    super(props);
    this.state = { names: "" };
    this.state = { ids: "" };
  }

  componentDidMount() {
    const name = localStorage.getItem("name");
    const id = localStorage.getItem("id");
    this.setState({ names: name });
    this.setState({ ids: id });
  }
  render() {
    return (
      <div className="container">
        {this.state.ids ? <FadeIn><FixLogedin /></FadeIn> :<FadeIn> <FixUnLogin /></FadeIn>}
      </div>
    );
  }
}

export default Fix;
