import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Checkbox from 'material-ui/lib/checkbox';
import Subheader from 'material-ui/lib/Subheader';

class ListItemContainer extends React.Component {
  constructor(props) {
    super(props);

    this.style = {
      width: '68%',
      zIndex: 0,
      position: 'relative',
      float: 'left',
      borderLeft: '1px solid #ccc',
      marginLeft: 0
    };
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return(
      <div id="listitems-container" style={this.style}>
        <List>
          <Subheader>Before 40</Subheader>
          <ListItem leftCheckbox={<Checkbox />}>Spend some time in Paris</ListItem>
          <ListItem leftCheckbox={<Checkbox />}>Be the Man Behind a Popular app</ListItem>
          <ListItem leftCheckbox={<Checkbox />}>Date an Indian Girl</ListItem>
          <ListItem leftCheckbox={<Checkbox />}>Have Sex on Air</ListItem>
          <ListItem leftCheckbox={<Checkbox />}>Work With Google</ListItem>
        </List>
      </div>
    );
  }
}

export default ListItemContainer;
