import React from 'react';
import { useEffect } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { signOff } from '../../redux/reducers/userSlice'

export const UserMenu = () => {
  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(user)
  }, [user]);

  return (
    <Navbar.Collapse id="navbar-dark-example">
      <Nav>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title={ user ? user.username : "Not Login" }
          align={{ lg: 'end' }}
        >
          <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
            Settings
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => dispatch(signOff())}>
            Logout
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  );
}