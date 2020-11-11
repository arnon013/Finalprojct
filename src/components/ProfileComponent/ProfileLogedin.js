import React, { Component } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { Link } from 'react-router-dom';
class ProfileLogedin extends Component {
  constructor(props) {
		super(props);
    this.state = { id: "", name: "", email: "", tel: "", password: "", img_id:''};
  }
  
  componentDidMount() {
    const id = localStorage.getItem("id");
    fetch(
      "https://www.api.senpru.com/signalinfo/index.php/member/member?id=" + id
    )
      .then(response => {
        return response.json(); 
      })
      .then(result => {
        console.log(result);
        this.setState({
          id: result.id,
          name: result.name,
          email: result.email,
          tel: result.tel,
          password: result.password,
          img_id:"http://www.senpru.com/api/signalinfo/"+ result.img_id,
          address: result.address,
          status: result.status
        });
      });
  }
  render() {
    const id = localStorage.getItem('id');
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const tel = localStorage.getItem('tel');
    const address = localStorage.getItem('address');
    const img_id = localStorage.getItem('img_id');
    return (
      <div>
        {this.state.img_id ?
               
               (  <section className="checkout-section spad">
               <div className="container">
                 <center>
                 <h4>ข้อมูลส่วนตัว</h4>
                 </center>
               </div>
             <br></br>
               <div className="container">
                 <div className="row">
                   <div align="center" className="col-12">
                     <img className="rimg2" src={this.state.img_id} />
                   </div>
                 </div>
                 <div className="row">
                   <div className="col-md-12"><br /><br />
                     <div>
                       <h5>ชื่อ :  {this.state.name}</h5>
                       <hr></hr>
                       <h5> อีเมล์ :  {this.state.email}</h5>
                       <hr></hr>
                       <h5> เบอร์โทรศัพท์ :  {this.state.tel}</h5>
                       <hr></hr>
                       <h5>  ที่อยู่ :  {this.state.address}</h5>
                     </div><br /><br />
                     <div className="row">
                       <div className="col-12">
                       <Link to={`/Edit?id=${id}`} className="site-btn submit-order-btn">แก้ไขโปรไฟล์</Link>
               
                       </div>
                       
                     </div> 
                   </div>
                  
                 </div>
           
               </div>
             </section>)
              :(
               
                <div>
                  <Skeleton width="100%" />
                  <Skeleton width="100%" />
                 </div>
               
              )}
           
     
    </div>
    );
  }
}

export default ProfileLogedin;