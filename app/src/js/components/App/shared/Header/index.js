import React from 'react';
import { Navbar } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    const navStyle = {
      borderRadius: 0,
      border: 'none',
      background: 'none',
      backgroundColor: "rgba(80, 80, 80, 0.3)",
      boxShadow: 'none'
    };

    return(
      <Navbar style={ navStyle }>
        <Navbar.Header style={{  }}>
          <Navbar.Brand>
            <a href="#" style={{ color: '#ccc' }}>Bucketlist</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Text>
            Signed in as: <Navbar.Link href="#">Emmanuel Science</Navbar.Link>
          </Navbar.Text>
          <Navbar.Text pullRight>
            Never loose track of your wishes!
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
