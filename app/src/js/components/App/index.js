import React from 'react';
require('../../../stylesheet/main.scss');

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const appInnerStyle = {
      height: '100%',
      display: 'relative'
    };

    const upperBody = {
      height: "25em",
      backgroundColor: "#273F5C",
      borderBottom: "solid 0.5em #B48A60",
      outline: "",
    };

    return(
      <div style={ appInnerStyle }>
        <div style={ upperBody }>
          <Header />
        </div>
        <Body />
        <Footer />
      </div>
    );
  }
}
