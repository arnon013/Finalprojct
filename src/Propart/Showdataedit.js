import React from 'react';
class Showdataedit extends React.Component {
    render(){
        var data = this.props.DataRecords;
        console.log("data:"+data);
        return (
<div>
<input type="text" list="data" onChange={this._onChange} />

  <datalist id="data">
    {data.map((obj, i) =>
      <option key={i} value={obj.name} onChange={this.handleChange} />
    )}
  </datalist>
</div>
)
}
}
export default Showdataedit;
