import React from 'react';
// import RaisedButton from 'material-ui/lib/raised-button';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

export default class App extends React.Component {
  render() {
    return(
      <div id="app-inner">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}
