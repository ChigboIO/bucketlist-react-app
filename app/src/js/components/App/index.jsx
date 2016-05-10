import React from 'react';
require('../../../stylesheet/main.scss');

import Header from './shared/Header';
import Body from './shared/Body';
import Footer from './shared/Footer';
import AppActions from 'actions/AppActions';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    AppActions.getAllBuckets();
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
        <Body params={this.props.params}>
          { this.props.children }
        </Body>
        <Footer />
      </div>
    );
  }
}
