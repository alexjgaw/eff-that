import React, { PropTypes } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../Logo/index';
import './index.css';

const TopNavbar = (props) => {
  return (
    <Navbar inverse collapseOnSelect className="eff-that-nav">
      <Navbar.Header>
        <Navbar.Brand>
          <Logo />
        </Navbar.Brand>
        { props.showNavItems ? <Navbar.Toggle /> : null }
      </Navbar.Header>
      {
        props.showNavItems ?
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem onClick={props.onSignOut}>Sign Out</NavItem>
            </Nav>
            <Nav pullRight>
              <Link to="/secret"><Navbar.Text>Secret</Navbar.Text></Link>
            </Nav>
          </Navbar.Collapse> :
          null
      }
    </Navbar>
  );
};

TopNavbar.propTypes = {
  onSignOut: PropTypes.func.isRequired,
  showNavItems: PropTypes.bool.isRequired
};

export default TopNavbar;