import React, { Component } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
class Choosetech extends Component {
  constructor(props) {
    super(props);
    this.state = { websites: [] };
    this.headers = [
      { key: "id", label: "รหัสการจอง" },
      { key: "cus", label: "รหัสลูกค้า" },
      { key: "name", label: "ชื่อรุ่น" },
      { key: "breakdown", label: "อาการเสีย" },
      { key: "tech", label: "ช่างผู้รับผิดชอบ" }
    ];
    this.deleteWebsite = this.deleteWebsite.bind(this);
  }

  componentDidMount() {
    fetch("https://www.api.senpru.com/signalinfo/index.php/booking/bookings")
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log(result);
        this.setState({
          websites: result
        });
      });
  }

  deleteWebsite(id) {
    if (window.confirm("ต้องการยกเลิกการจองใช่หรือไม่")) {
      fetch(
        "https://www.api.senpru.com/signalinfo/index.php/booking/delete_booking/" +
          id,
        {
          method: "DELETE" //,
          //mode: 'no-cors',
          /*headers : {
					'Access-Control-Allow-Origin': '*',
					'Content-Type' : 'text/plain'
				}*/
        }
      ).then(response => {
        if (response.status === 200) {
          alert("ยกเลิกการจองแล้วค่ะ");

          fetch(
            "https://www.api.senpru.com/signalinfo/index.php/booking/bookings"
          )
            .then(response => {
              return response.json();
            })
            .then(result => {
              console.log(result);
              this.setState({
                websites: result
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
          <p />
          <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  {this.headers.map(function(h) {
                    return (
                      <TableCell align="right" key={h.key}>
                        {h.label}
                      </TableCell>
                    );
                  })}
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.websites.map(
                  function(item, key) {
                    return (
                      <TableRow key={key}>
                        <TableCell align="right">{item.id}</TableCell>
                        <TableCell align="right">{item.cus} </TableCell>
                        <TableCell align="right">{item.name} </TableCell>
                        <TableCell align="right">{item.breakdown} </TableCell>
                        <TableCell align="right">{item.tech} </TableCell>
                        <TableCell>
                          <Link to={`/Editchoose/${item.id}`}>
                            <button type="button" class="btn btn-info">
                              เลือกช่างซ่อม
                            </button>
                            &nbsp;
                          </Link>
                        </TableCell>
                      </TableRow>
                    );
                  }.bind(this)
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    );
  }
}

export default Choosetech;
