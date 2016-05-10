import { EventEmitter } from 'events';
import Constants from 'constants/AppConstants'
import Dispatcher from 'dispatcher/AppDispatcher';

class BucketStore extends EventEmitter {
  constructor() {
    super();

    this.buckets = [];

    // this.buckets = [
    //   "All",
    //   "While in Andela",
    //   "In my Career as a Software developer",
    //   "Before 40",
    //   "Before Death",
    //   "...add new bucket"
    // ];

    // this.items = ["Today", "Tomorrow", "Yesterday", "Forever"];

    Dispatcher.register(this.handleActions.bind(this));
  }

  setInitialBuckets(buckets) {
    this.buckets = buckets.concat(["Add a new bucket"]);
    this.emit('change');
  }

  getAllBuckets() {
    return this.buckets;
  }

  getBucketItems(bucketId) {
    return this.buckets.slice(bucketId, bucketId + 1);
  }

  createBucket(bucketTitle) {
    this.buckets.splice(this.buckets.length - 1, 0, bucketTitle);

    this.emit('change');
  }

  handleActions(action) {
    console.log(action)
    switch(action.type) {
      case Constants.CREATE_BUCKET: {
        this.createBucket(action.data.title);
        break;
      }
      case Constants.INITIALIZE_BUCKETS: {
        this.setInitialBuckets(action.data.buckets)
        break;
      }
    }
  }
}

export default new BucketStore;
