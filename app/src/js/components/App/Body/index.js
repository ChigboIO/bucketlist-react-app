import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import BucketlistSelect from './BucketlistSelect';
import StatusNav from './StatusNav';

class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const bodyMainStyle = {
      width: "70%",
      height: "82%",
      margin: "auto 15%",
      marginTop: "-18em",
    };

    const bodyStyle = {
      minHeight: "89%",
      backgroundColor: "#B48A60",
      position: 'relative',
      marginTop: '2em',
      padding: "0.5em",
      borderRadius: 3,
    };

    return(
      <div style={ bodyMainStyle }>
        <BucketlistSelect />
        <div style={ bodyStyle }>
          <StatusNav />
        </div>
      </div>
    );
  }
}

export default Body;
