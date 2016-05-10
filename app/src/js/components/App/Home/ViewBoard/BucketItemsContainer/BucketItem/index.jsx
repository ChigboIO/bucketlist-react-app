import React, { Component } from 'react';
import { Link } from 'react-router';

class BucketItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>card item says { this.props.item}
          <Link to="/signin">signin</Link>
        </p>
      </div>
    );
  }
}

export default BucketItem;
