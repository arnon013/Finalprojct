import React from 'react';
import Cate from '../components/MainComponent/Cate';
class Showdata extends React.Component {
    render(){
      
        var data = this.props.DataRecords;
        console.log("data:"+data);
        return (<div><Cate/>
          <div className="container">
            <div className="row">
  {data.map(function (obj,i) {
    return (
      <div className="col-lg-3 col-sm-6">
        <div className="product-item" key={i}>
          <div className="pi-pic">
          <a href="/Product"><img src={obj.img} alt="" /></a>
            <div className="pi-links">
              <a href="/Cart" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
              &nbsp;
            </div>
          </div>
          <div className="pi-text">
            <h6>{obj.price}&nbsp;฿</h6>
            <p>{obj.name}</p>
            <p> ประเภทสินค้า: &nbsp;
            {obj.category_id == 1?'RAM':''}
            {obj.category_id == 2?'HDD':''}
            {obj.category_id == 3?'SSD':''}
            {obj.category_id == 4?'Mainboard':''}
            {obj.category_id == 5?'M.2':''}
            </p>
          </div>
        </div>
        <br></br>
      </div>
    )
 })                              
}
      
   </div>      
  </div>
 </div> 
        );
    }
        }

export default Showdata;
