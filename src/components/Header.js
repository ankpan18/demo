import React, { useState } from 'react';
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
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><span className='headlogo'><img src='/images/codebeat.svg' alt=''/></span></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Product</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Technology
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Gadgets
                </DropdownItem>
                <DropdownItem>
                  Review
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                About
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Our Story
                </DropdownItem>
                <DropdownItem>
                  Privacy Policy
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Achievements
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Partner</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;