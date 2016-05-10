import axios from 'axios';

class AppApi {
  constructor() {
  }

  getAllBuckets(callback) {
    return axios.get(
      'http://localhost:3000/api/v1/bucketlists/',
      {
        headers: {
          'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0LCJleHAiOjE0NjI5NDUxNzl9.eiv9FuRVMJ2PrAbd_TrIFkA6Mu7IWXhb7uMXeb_LLjU'
        }
      }
    ).then(function(response) {
      // console.log(response)
      // console.log("Succeful :=: " + response.data[0].name);
      callback(true, response)
    }).catch(function(response) {
      callback(false, response)
    })
  }
}

export default new AppApi;

