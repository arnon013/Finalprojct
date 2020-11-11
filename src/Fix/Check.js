import React, { Component } from 'react';
import { Link } from 'react-router-dom';

  
class Check extends Component {
	
  constructor(props) {
		super(props);
		this.state = {websites: []};
		this.headers = [
			{ key: 'id', label: 'รหัสการซ๋อม'},
	        { key: 'name', label: 'ชื่อรุ่น'},
			{ key: 'status', label: 'สถานะการซ่อม' }
		];
		this.deleteWebsite = this.deleteWebsite.bind(this);
		
	}
	valueId(e) {
        this.setState({keyword: e.target.value});
        console.log('key2='+e.target.value)
        
    }

componentDidMount() {
		fetch('https://www.api.senpru.com/signalinfo/index.php/booking/bookings')
			.then(response => {
				return response.json();
			}).then(result => {
				
				this.setState({
					websites:result
					
				});
			});
	}
	
	
	deleteWebsite(idbook) {
		if(window.confirm("ต้องการยกเลิกการจองใช่หรือไม่")) {
			fetch('https://www.api.senpru.com/signalinfo/index.php/booking/delete_booking/' + idbook, {
				method : 'DELETE'//,
				//mode: 'no-cors',
				/*headers : {
					'Access-Control-Allow-Origin': '*',
					'Content-Type' : 'text/plain'
				}*/
			}).then(response => { 
					if(response.status === 200) {
						alert("ยกเลิกการจองแล้วค่ะ");
						
						fetch('https://www.api.senpru.com/signalinfo/index.php/booking/cus?cus=27')
						.then(response => {
							return response.json();
						}).then(result => {
							console.log(result);
							this.setState({
								websites:result
							});
						});
					} 
			 });
		}
	}
	
  render() {
    return (
		<div>
		<div className="">
	<div className="container">
		
	  <h4>ตรวจสอบสถานะ</h4>
	  
	</div>
  </div>
  <br />
 <div className="container">
			
			<p/>
			<table className="table table-sm">
				<thead>
					<tr>
					{
						this.headers.map(function(h) {
							return (
								<th width="150px" key = {h.key}>{h.label}</th>
							)
						})
					}
					  <th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{
						this.state.websites.map(function(item, key) {
						return (
							<tr key = {key}>
							  <td>{item.id}</td>
							  <td>{item.name}</td>
			  					<td>{item.status}</td>
								 
							  <td>
							 
			  <button type="button" class="btn btn-warning" data-toggle="modal" data-target=".bd-example-modal-xl">รายละเอียด</button> &nbsp;

			  <Link to={`/widen1/${item.id}`}>
	<button type="button" class="btn btn-success">เบิกอะไหล่</button> 
	</Link> 
			
	
  </td>


<div className="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
<div className="modal-dialog modal-xl" role="document">
<div className="modal-content">
<table className="table table-hover">
	  <thead>
		<tr>
		  <th scope="col">รหัสการซ่อม</th>
		  <th scope="col">ชื่อรุ่น</th>
		  <th scope="col">วันเวลาที่ลูกค้านัด</th> 
		  <th scope="col">อาการเสียจากลูกค้า</th>
		  <th scope="col">อาการเสียจากช่างคาดการ</th> 
		  <th scope="col">ราคาโดยประมาณ</th>
		  <th scope="col">วันที่คาดว่าจะซ่อมเสร็จ</th>
		  <th scope="col">ช่างผู้ตรวจสอบอาการ</th> 
		  
		  
		</tr>
	  </thead>
	  <tbody>
		  
					{
						this.state.websites.map(function(item, key) {
						return (
							<tr key = {key}>
							  <td>{item.id}</td>
							  <td>{item.name}</td>
			  					<td>{item.date}</td>
								  <td>{item.breakdown}</td>
								  <td>{item.breakdowntech}</td>
								  <td>{item.price}</td>
								  <td>{item.datefix}</td>
								  <td>{item.tech}</td>
							  		
							</tr>
										)
						}.bind(this))
					}
				</tbody>
	</table>
	<div className="modal-footer">
  <a href="">
  <button type="button" class="btn btn-danger" data-dismiss="modal">คืนอะไหล่</button></a> &nbsp;
	<button type="button" class="btn btn-secondary" data-dismiss="modal">ปิด</button>
  </div>
</div>
</div>
</div>
							</tr>
										)
						}.bind(this))
					}

		
				</tbody>
			</table>
			</div>
    </div>
	
    );
  }
}

export default Check;