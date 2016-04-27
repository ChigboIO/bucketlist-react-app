import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class BucketlistSelect extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const selectStyle = {
      width: '100%',
      height: '100px'
    };

    return (
      <Grid>
        <Row>
          <Col>
            <select style={ selectStyle }>
              <option>All</option>
              <option>While in Andela</option>
              <option>In my Career</option>
              <option>Before I turn 40</option>
              <option>Before I die</option>
            </select>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default BucketlistSelect;
