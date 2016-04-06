import React, {Component} from 'react';

import BucketListItems from './BucketListItems';
import BucketLists from './BucketLists';

export default class Body extends Component {
  render() {
    return (
      <div id='Body'>
        <div>"Body"</div>
        <BucketListItems />
        <BucketLists />
      </div>
    )
  }
}


