import React, { Component } from 'react';
import LoginBtn  from '../HeaderComponent/LoginBtn';
class FixLogedin extends Component {
  constructor(props) {
		super(props);
    this.state = {names:''};
    this.state = {ids:''};
   
	}

  componentDidMount(){
    const name = localStorage.getItem('name');
    const id = localStorage.getItem('id');
    this.setState({ids:id})
  }
  render() {
    return (
      
      <center>
      <h1><br/></h1>
<h1>คุณยังไม่ได้เข้าสู่ระบบ</h1>
<h2><LoginBtn/></h2>
</center>

    );
  }
}

export default FixLogedin;