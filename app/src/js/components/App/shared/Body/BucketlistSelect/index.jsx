import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class BucketlistSelect extends Component {
  constructor(props) {
    super(props);
  }

  buildBucketOptions() {
    return this.props.buckets.map(function(bucket, index) {
      return (<option key={index} value={index + 1}>{bucket}</option>)
    })
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
            <select style={ selectStyle} onChange={this.props.selectionHandler}>
              { this.buildBucketOptions() }
            </select>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default BucketlistSelect;
