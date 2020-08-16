import React, { Component } from 'react'
import React, { useState } from 'react';import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
  import {Link} from 'react-router-dom'

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand tag={Link}>reactstrap</NavbarBrand>
          <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/products">Products</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/users">Users</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
      </div>
    );
  }
  
  export default Example;