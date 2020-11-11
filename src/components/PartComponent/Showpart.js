import React, { Component } from 'react';
import Partdetail from './Partdetail';
import Propart from '../../Propart/Propart';
class Showpart extends Component {

  render() {
    return (
      <div className="col-12">
        <Partdetail/>
       <Propart/>
      }      
</div>

    );
  }
}

export default Showpart;