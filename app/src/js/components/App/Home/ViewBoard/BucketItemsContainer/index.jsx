import React, { Component } from 'react';
import BucketItem from './BucketItem';

class BucketItemsContainer extends Component {
  constructor(props) {
    super(props);

    // bind non-react functions to `this`
    this.buildItems = this.buildItems.bind(this);
  }

  buildItems() {
    return this.props.items.map((item, index) => {
      return <BucketItem key={index} item={item} />
    });
  }

  render() {
    const containerStyle = {
      width: '100%',
    };

    return (
      <div>
        { this.buildItems() }
      </div>
    );
  }
}

export default BucketItemsContainer;
