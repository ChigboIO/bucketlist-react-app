import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import BucketItemsContainer from './BucketItemsContainer';

class ViewBoard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <Tabs
        activeKey={this.props.activeTab}
        onSelect={this.props.tabSelectionHandler}
        justified
        id="controlled-tab-example"
      >
        <Tab eventKey={'undone'} title="Undone">
          <BucketItemsContainer items={this.props.items}/>
        </Tab>
        <Tab eventKey={'done'} title="Done">Tab 2 content</Tab>
        <Tab eventKey={'all'} title="All">Tab 3 content</Tab>
      </Tabs>
    );
  }
}

export default ViewBoard;
