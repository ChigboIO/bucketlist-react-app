import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import MenuItem from 'material-ui/lib/menus/menu-item';

class Header extends React.Component {
  render() {
    return(
      <div id="app-header">
        <AppBar title="Title"/>
      </div>
    );
  }
}

export default Header;
