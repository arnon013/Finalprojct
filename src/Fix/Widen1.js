import React, { Component } from 'react';
import Partdetail from '../components/PartComponent/Partdetail';
import Propart from '../Propart/Propart';
class Widen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {id: '',name:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
        fetch('https://www.api.senpru.com/signalinfo/index.php/booking/booking?id=' + this.props.match.params.id)
            .then(response => {
                return response.json();
            }).then(result => {
                console.log(result);
                this.setState({
                    id:result.id,
                   
                    name:result.name
                    
                });
            });
      }
      handleChange(event) {
          const state = this.state
          state[event.target.name] = event.target.value
          this.setState(state);
      }
      handleSubmit(event) {
          event.preventDefault();
          fetch('https://www.api.senpru.com/signalinfo/index.php/booking/update_booking', {
                method: 'PUT',
                body: JSON.stringify({
                  id: this.state.id,
                  
                name: this.state.name
               
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then(response => {
                    if(response.status === 200) {
                        alert("บันทึกการเบิกอะไหล่เรียบร้อยแล้วค่ะ.");
                    }
                });
      }
  render() {
    return (
      
      <div id="">
       <div className="container">
       <center>
         <br/>
        <h3>ใบรายการเบิก อะไหล่</h3>
        <form className="checkout-form" onSubmit={this.handleSubmit}>
      
          <div className="form-row">
           
          <input type="hidden" name="datepart" value={this.state.id}/>
          <div className="form-group col-md-6">
              <label htmlFor="Email">หมวดหมู่</label>
              <select className="select">
                <option>หมวดหมู่</option>
                <option>CPU</option>
                <option>RAM</option>
                <option>HDD</option>
                <option>SSD</option>
                <option>MAINBAND</option>
              </select>
            </div>
            <div className="form-group col-md-6">
          <label htmlFor="Password">ชื่อรุ่นสินค้า</label>
          <input type="text" name="name" value={this.state.name}  />
        </div>
        <div className="form-group col-md-6">
        <label htmlFor="Email">อะไหลที่ต้องเบิก</label>
                    
 <Partdetail/>


        </div>
            <div className="form-group col-md-6">
              <label htmlFor="date">วันที่</label>
              <input type="date" name="date" value={this.state.datefix} onChange={this.handleChange}  placeholder="ชื่อรุ่น" />
             <div>
           
         </div>
         </div>

          
          </div> 
          <div className="form-group">
            <label htmlFor="Address">รายละเอียด</label>
                <textarea class="textarea" rows="3"placeholder="รายละเอียด"></textarea>
          </div>
        </form>
        <a href="/Check" className="btn btn-success">ยืนยันการเบิก</a> &nbsp;
        <a href="/Check" className="btn btn-danger">ยกเลิกการเบิก</a> &nbsp;
      </center>

      <div>
        </div>
       </div>
      </div>
    );
  }
}

export default Widen1;