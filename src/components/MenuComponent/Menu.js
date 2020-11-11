import React, { Component } from 'react';
import MenuLogedin from './MenuLogedin'
import MenuAdmin from './MenuAdmin';
import MenuUnlogin from './MenuUnlogin';
class Menu extends Component {

  constructor(props) {
		super(props);
    this.state = {names:''};
  }
  
  
  render() {
    const status = localStorage.getItem('status');
    return (
      <div>
        {
      status == 1 ?
         (<MenuLogedin/>)
          :  
            status == 2 ?
               (<MenuAdmin/>)
                : status == 3 ?
               
                  (<MenuAdmin />)

                  :(<MenuUnlogin />)
                }
          
     
      </div>
    );
  }
}

export default Menu;
