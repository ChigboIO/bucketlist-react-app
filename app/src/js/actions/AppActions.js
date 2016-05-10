import Dispatcher from 'dispatcher/AppDispatcher';
import Constants from 'constants/AppConstants';
import AppApi from 'lib/AppApi'

class AppActions {

  getAllBuckets() {
    Dispatcher.dispatch({
      type: Constants.LOADING_BUCKETS,
    });

    AppApi.getAllBuckets(this.handleAllBucketsResult.bind(this));
  }

  handleAllBucketsResult(successStatus, apiResponse) {
    if(successStatus) {
      switch(apiResponse.status) {
        case 200: {
          Dispatcher.dispatch({
            type: Constants.INITIALIZE_BUCKETS ,
            data: {
              buckets: apiResponse.data.map((bucket) => { return bucket.name; })
            }
          });
          break;
        }
        default: {
          Dispatcher.dispatch({
            type: Constants.LOAD_ERROR,
            data: {
              message: "Error loading buckets"
            }
          });
          break;
        }
      }
    } else {
      console.log(apiResponse.error)
    }
  }

  createBucket(title) {
    Dispatcher.dispatch({
      type: Constants.CREATE_BUCKET,
      data: {
        title //this is same as `title: title`
      }
    })
  }
}

export default new AppActions
