import React, { Component } from 'react';
import ViewBoard from './ViewBoard';
import { browserHistory } from 'react-router';
import BucketStore from '../../../stores/BucketStore';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: props.params.itemStatus || 'undone',
      items: BucketStore.getBucketItems(1)
    };

    //bind all my none react methods
    this.handleTabSelect = this.handleTabSelect.bind(this);
  }

  componentDidMount() {
    // this.setState({
    //   activeTab:
    // })
  }

  handleTabSelect(eventKey) {
    event.preventDefault();
    this.setState({ activeTab: eventKey });
    const bucketId = this.props.params.bucketId || 1;
    const path = "/bucket/" + bucketId + "/" + eventKey;
    browserHistory.push(path);
  }

  render() {
    return (
      <ViewBoard
        activeTab={this.state.activeTab}
        items={this.state.items}
        tabSelectionHandler={this.handleTabSelect}
      />
    );
  }
}

export default Home;


