import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      lineHeight: '2em',
      backgroundColor: "#273F5C",
      position: 'absolute',
      bottom: 0,
      width: '100%',
      borderTop: "solid 0.1em #B48A60",
      color: 'white',
    };

    return(
      <div style={ style }>@emmanuelscience #bucketlist</div>
    );
  }
}

export default Footer;
