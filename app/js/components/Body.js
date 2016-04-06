import React from 'react';
import CenterContainer from './Body/CenterContainer';
import BucketlistContainer from './Body/BucketlistContainer';
import ListItemContainer from './Body/ListItemContainer';

class Body extends React.Component {
  render() {
    return(
      <div id="app-body">
        <CenterContainer>
          <BucketlistContainer />
          <ListItemContainer />
        </CenterContainer>
      </div>
    );
  }
}

export default Body;
