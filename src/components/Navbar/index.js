import React from 'react';
import {
  NavContainer,
  LogoContainer,
  Logo,
  NavSide,
  AuthSide,
  NavItem
} from './style';

import logo from '../../images/logo.png';

const Navbar = () => {
  return (
    <NavContainer>
      <NavSide>
        <LogoContainer>
          <Logo src={logo} alt="logo" />
        </LogoContainer>
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Products</NavItem>
      </NavSide>
      <AuthSide>
        <NavItem>Authenticate</NavItem>
      </AuthSide>
    </NavContainer>
  );
};

export default Navbar;
