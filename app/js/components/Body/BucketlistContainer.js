import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import Menu from 'material-ui/lib/menus/menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Subheader from 'material-ui/lib/Subheader';

class BucketlistContainer extends React.Component {
  constructor() {
    super();
  }

  render() {
    let style = {
      width: '280px',
      height: '100%',
      zIndex: 0,
      position: 'relative',
      float: 'left',
      borderRight: '1px solid #ccc',
      marginRight: 0
    };

    return(
      <div id="bucketlist-container" style={style}>
        <Menu>
          <Subheader>Bucketlist Categories</Subheader>
          <MenuItem primaryText="Before 40" />
          <MenuItem>While in Andela</MenuItem>
          <MenuItem>Before Mariage</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default BucketlistContainer;
