import React from 'react';

import { NavLink, Link } from 'react-router-dom';

import { theme } from '../../styles/themes';

import {
  NavContainer,
  LogoContainer,
  Logo,
  NavSide,
  AuthSide,
  NavItem,
  navLinkActive,
  AuthItem
} from './styles';

import logo from '../../images/logo.png';

const Navbar = props => {
  console.log(props);
  return (
    <NavContainer>
      <NavSide>
        <Link to="/">
          <LogoContainer>
            <Logo src={logo} alt="logo" />
          </LogoContainer>
        </Link>
        <NavLink activeStyle={navLinkActive} to="/home">
          <NavItem active="true">Home</NavItem>
        </NavLink>
        <NavLink activeStyle={navLinkActive} to="/about">
          <NavItem>About</NavItem>
        </NavLink>
        <NavLink activeStyle={navLinkActive} to="/shop">
          <NavItem>Shop</NavItem>
        </NavLink>
      </NavSide>
      <AuthSide>
        <AuthItem>Login</AuthItem>
        <AuthItem>Register</AuthItem>
      </AuthSide>
    </NavContainer>
  );
};

export default Navbar;
