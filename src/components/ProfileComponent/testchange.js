import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import { Link } from 'react-router-dom';
class testchange extends Component {

  

  render() {
  
    return (
    
      <div>
      <div className="container">
        <center>
        <div className="row">
          <div className="col-md-12 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" method action>
                  
                  <div className="form-group">
                    <label 
                     className="col-md-4 control-label">รหัสผ่านปัจจุบัน</label>
                    <div className="col-md-6">
                      <input id="password-field" type="password" className="form-control" name="Cpass"  />
                      <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="col-md-4 control-label">รหัสผ่านใหม่</label>
                    <div className="col-md-6">
                      <input id="password-field" type="password" className="form-control" name="Npass"  />
                      <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="col-md-4 control-label">ยืนยันรหัสผ่าน</label>
                    <div className="col-md-6">
                      <input id="password-field" type="password" className="form-control" name="Compass"  />
                      <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        </center>
      </div>
      
      </div>
      
    );
    
  }
}


export default testchange;