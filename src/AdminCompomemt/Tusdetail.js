import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Tusdetail extends Component {
    constructor(props) {
        super(props);
        this.state = {id: '', name: '',date: '',datepro: '', breakdown: '', breakdowntech: '', waranty: '', warantypro: '', tech: '' };
       
      }
      
      componentDidMount() {
        fetch('https://www.api.senpru.com/signalinfo/index.php/booking/booking?id=' + this.props.match.params.id)
            .then(response => {
                return response.json();
            }).then(result => {
                console.log(result);
                this.setState({
                    id:result.id,
                   
                    name:result.name,
                    date:result.date,
                    datepro:result.datepro,
                    breakdown:result.breakdown,
                    breakdowntech:result.breakdowntech,
                    waranty:result.waranty,
                    warantypro:result.warantypro,
                    tech:result.tech
                });
            });
      }
    
   

   

render() {

  return (

<div className="">
<div className="container">

<h5>รายละเอียดข้อมูลการจองคิว</h5>


</div>

<form className="checkout-form" >
<div className="container">
<div className="row">
  <div className="col-12">
    <div className="col-12">
      <br /><br />
      <input type="hidden" name="id" value={this.state.id}/>
     
      <div className="row">
<h4>ชื่อรุ่นสินค้า</h4>
     </div>
      
      <div className="row">
      <h5>{this.state.name} </h5>
      </div>
      <br /><br />

      <div className="row">
<h4>วันเวลาที่ลูกค้านัด</h4>
     </div>
     

      <div className="row">
      <h5>{this.state.date} </h5>
      </div>
      <br /><br />

      <div className="row">
<h4>วันที่นำสินค้ามาซ่อม</h4>
     </div>
     

      <div className="row">
      <h5>{this.state.datepro} </h5>
      </div>
      <br /><br />
    
      <div className="row">
<h4>อาการเสียจากลูกค้า</h4>
     </div>
     

      <div className="row">
      <h5>{this.state.breakdown} </h5>
      </div>
      <br /><br />
   
      <div className="row">
<h4>อาการเสียจากช่าง</h4>
     </div>
     

      <div className="row">
      <h5>{this.state.breakdowntech} </h5>
      </div>
      <br /><br />
      
      <div className="row">
<h4>ประกันเครื่อง</h4>
     </div>
     

      <div className="row">
      <h5>{this.state.waranty} </h5>
      </div>
      <br /><br />

      <div className="row">
<h4>ประกันอะไหล่</h4>
     </div>
     

      <div className="row">
      <h5>{this.state.warantypro} </h5>
      </div>
      <br /><br />
     
     

      <div className="row">
<h4>ช่างผู้รับผิดชอบ</h4>
     </div>
     

      <div className="row">
      <h5>{this.state.tech} </h5>
      </div>
      <br /><br />
      <div className="row">
        <div className="col-3">
          <Link to={`/Status`}>
          <button type="button" class="site-btn5 submit-order-btn">ย้อนกลับ</button>
          </Link>
          </div>
        </div>
    </div>
        
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
export default Tusdetail;