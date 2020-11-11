import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Propart2 from '../Propart/Propart2';
class Editchoose extends Component {
    constructor(props) {
        super(props);
        this.state = {id: '',  tech: ''};
       
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

     

      componentDidMount() {
        fetch('https://www.api.senpru.com/signalinfo/index.php/booking/book?id=' + this.props.match.params.id)
            .then(response => {
                return response.json();
            }).then(result => {
                console.log(result);
                this.setState({
                    id:result.id,
                    tech:result.tech
                                  
                });
                console.log(this.state.tech)
            });
      }
      handleChange(event) {
          const state = this.state
          state[event.target.name] = event.target.value
          this.setState(state);
      }
      handleSubmit(event) {
          event.preventDefault();
          fetch('https://www.api.senpru.com/signalinfo/index.php/booking/update_tech', {
                method: 'PUT',
                body: JSON.stringify({
                  id: this.state.id,
                  tech: this.state.tech
               
               
                
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then(response => {
                    if(response.status === 200) {
                        alert("เลือกช่างซ่อมเรียบร้อยแล้วค่ะ.");
                        window.location.href = "/Choosetech";
                    }
                });
      }

render() {
  var data = this.props.DataRecords;
    return (

<div className="">
<div className="container">

  <h4>ระบุช่างซ่อม</h4>
  
</div>
<br></br>
<form className="checkout-form" onSubmit={this.handleSubmit}>
  	
<div className="container">
  <div className="row">
    <div className="col-12">
        	
        <h5>&nbsp;&nbsp;&nbsp;รหัสสินค้า</h5><br/>
        <input type="text" name="id" value={this.state.id}  />
        <h5>&nbsp;&nbsp;&nbsp;เลือกช่าง</h5>
        &nbsp;&nbsp;&nbsp;
        <select  id="tech" name="tech"value={this.state.tech} onChange={this.handleChange}>
       
        <option>ช่างวิศรุต</option>
        <option>ช่างอานนท์</option>
        <option>ช่างต่าย</option>
  </select>
        {/* <Propart2 /> */}
        
        <br /><br />
       
          <button className="site-btn submit-order-btn">ระบุช่างซ่อม</button>
        
      </div>
    </div>

  </div>

</form>
<br>
</br>
</div>
   );
}
}
export default Editchoose;