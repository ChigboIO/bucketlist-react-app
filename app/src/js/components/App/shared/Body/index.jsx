import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import BucketlistSelect from './BucketlistSelect';
import { browserHistory } from 'react-router';
import BucketStore from 'stores/BucketStore';
import AppActions from 'actions/AppActions';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBucket: props.params.bucketId || 1,
      buckets: BucketStore.getAllBuckets()
    }

    // bind non-react functions to `this`
    this.handleBucketSeletion = this.handleBucketSeletion.bind(this);
    this.bucketStoreChangeListener = this.bucketStoreChangeListener.bind(this);
  }

  bucketStoreChangeListener() {
    this.setState({
      buckets: BucketStore.getAllBuckets()
    })
  }

  componentWillMount() {
    BucketStore.on('change', this.bucketStoreChangeListener)
  }

  componentWillUnmount() {
    BucketStore.removeListener('change', this.bucketStoreChangeListener);
  }

  componentDidMount() {
  }

  handleBucketSeletion(event) {
    event.preventDefault();
    let selected = event.target.options[event.target.selectedIndex].value;
    selected = parseInt(selected);

    if(selected == event.target.options.length) {
      const title = prompt("What is the title of the new Bucket?");
      AppActions.createBucket(title);
    }

    const status = this.props.params.itemStatus || 'undone';

    this.setState({ selectedBucket: selected });
    const path = "/bucket/" + selected + "/" + status;
    browserHistory.push(path);
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
        <BucketlistSelect
          buckets={this.state.buckets}
          selectedBucket={this.state.selectedBucket}
          selectionHandler={this.handleBucketSeletion}
        />
        <div style={ bodyStyle }>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default Body;
