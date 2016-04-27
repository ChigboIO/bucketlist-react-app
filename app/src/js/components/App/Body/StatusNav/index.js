import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';

class StatusNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1
    };

    //bind all my none react methods
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    // get the current route parameter and set the activeTab
  }

  handleSelect(eventKey) {
    event.preventDefault();
    this.setState({ activeTab: eventKey });
  }

  render() {
    return (
      <Nav
        bsStyle="tabs"
        activeKey={ this.state.activeTab }
        justified
        onSelect={ this.handleSelect }
      >
        <NavItem eventKey={1} href="/home">Undone</NavItem>
        <NavItem eventKey={2} title="Item">Done</NavItem>
        <NavItem eventKey={3} >All</NavItem>
      </Nav>
    );
  }
}

export default StatusNav;
