import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import Paper from 'material-ui/lib/paper';

class CenterContaner extends React.Component {
  constructor() {
    super();
  }

  render() {
    let style = {
      minHeight: "10em",
      width: "100%",
    };

    return(
      <div id="app-center-container">
        <Paper style={style} zDepth={2}>
          {this.props.children}
          <div class="clear-fix"></div>
        </Paper>
      </div>
    );
  }
}

export default CenterContaner;
