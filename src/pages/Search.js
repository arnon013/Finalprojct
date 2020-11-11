import React from "react";
export default class Search extends React.Component {
  render() {
    var _data = this.props.DataRecords;
    let status = this.props.status;

    return status !== true ? (
      <div className="container">
        <br></br>
        <div className="alert alert-danger text-center ">
          <i className="fa fa-close"></i> ไม่พบข้อมูล
        </div>
      </div>
    ) : (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>เลขพัสดุ</th>
            </tr>
          </thead>
          <tbody>
            {_data.map(function(obj, i) {
              return (
                <tr key={i}>
                  <td>{obj.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
