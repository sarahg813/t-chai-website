import React, { useState } from "react";
import {
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
} from "reactstrap";

const MainNavbar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="mainNav align-items-end" expand="md" role="navigation">
      <NavbarBrand className="align-self-end h1" href="/">
        T i f f a n y &nbsp; C h a i
      </NavbarBrand>

      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="float-right ml-auto " navbar>
          <NavItem>
            <NavLink className="mainNavText" href="/about">
              About
            </NavLink>
          </NavItem>

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret className="mainNavText">
              Portfolio
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <NavLink href="/fashion">Fashion</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="/digital">Digital</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="/traditional">Traditional</NavLink>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink className="mainNavText" href="/resume">
              Resume
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="mainNavText" href="/contact">
              Contact
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default MainNavbar;
