import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Updatebook extends Component {

  constructor(props) {
		super(props);
		this.state = {websites: []};
		this.headers = [
      { key: 'id', label: 'รหัสการจอง'},
      { key: 'cus', label: 'รหัสลูกค้า'},
          { key: 'name', label: 'ชื่อรุ่น'},
		  { key: 'breakdown', label: 'อาการเสีย'},
		  { key: 'breakdowntech', label: 'อาการเสียจากช่าง'},
		  { key: 'price', label: 'ราคา'},
			{ key: 'status', label: 'สถานะจองคิว' },
			{ key: 'สถานะการเบิกอะไหล่', label: 'สถานะการเบิกอะไหล่' }
		];
		this.deleteWebsite = this.deleteWebsite.bind(this);
	}
	valueId(e) {
        this.setState({keyword: e.target.value});
        console.log('key2='+e.target.value)
        
    }
	
	componentDidMount() {
		const nametech = localStorage.getItem('name');
		
		fetch('https://www.api.senpru.com/signalinfo/index.php/booking/tech?tech='+ nametech)
			.then(response => {
				return response.json();
			}).then(result => {
				console.log(result);
				this.setState({
					websites:result
				});
			});
	}
	
	
	deleteWebsite(id) {
		if(window.confirm("ต้องการยกเลิกการจองใช่หรือไม่")) {
			fetch('https://localhost/signalinfo/index.php/booking/delete_booking/' + id, {
				method : 'DELETE'//,
				//mode: 'no-cors',
				/*headers : {
					'Access-Control-Allow-Origin': '*',
					'Content-Type' : 'text/plain'
				}*/
			}).then(response => { 
					if(response.status === 200) {
						alert("ยกเลิกการจองแล้วค่ะ");
						
						fetch('https://localhost/signalinfo/index.php/booking/bookings')
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
	  <h4>ประเมินอาการ</h4>
	  
	</div>
  </div>
  <br />
 <div className="container">
			
			<p/>
			<table class="table table-sm">
				<thead>
					<tr>
					{
						this.headers.map(function(h) {
							return (
								<th width="150px" key = {h.key}>{h.label}</th>
							)
						})
					}
					  <th></th>
					</tr>
				</thead>
				<tbody>
					{
						this.state.websites.map(function(item, key) {
						return (
							<tr key = {key}>
							  <td>{item.id}</td>
                <td>{item.cus}</td>
							  <td>{item.name}</td>
                <td>{item.breakdown}</td>
				<td>{item.breakdowntech}</td>
				<td>{item.price}</td>
			  					<td>{item.statusbook}</td>
								  <td>{item.withdraw}</td>
							  <td>
							 
			  
			  
			  
			  <Link to={`/Editbook/${item.id}`}>
	<button type="button" class="btn btn-info">ระบุอาการ</button>&nbsp;
	</Link>
	
							  </td>



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


export default Updatebook ;