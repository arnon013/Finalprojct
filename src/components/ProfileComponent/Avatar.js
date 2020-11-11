import React, { Component } from "react";
import ProfileLogedin from "./ProfileLogedin";
import FadeIn from 'react-fade-in';
import ProfileUnlogin from "./ProfileUnlogin";
import { Link } from "react-router-dom";
class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = { names: "" };
    this.state = { ids: "" };
    this.state = {
      id: "",
      name: "",
      email: "",
      tel: "",
      password: "",
      img_id: "",
    };
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
        <FadeIn>
        {
          (this.state.ids = this.state.ids ? (
            <ProfileLogedin />
          ) : (
            <ProfileUnlogin />
          ))
        }
        </FadeIn>
      </div>
    );
  }
}

export default Avatar;
