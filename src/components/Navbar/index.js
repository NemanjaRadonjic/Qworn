import React, { useContext, useState } from 'react';

import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import { BannerStatusContext } from '../../contexts/BannerStatusContext';

import { NavLink, Link } from 'react-router-dom';

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

const Navbar = () => {
  const { setBannerStatus } = useContext(BannerStatusContext);

  const [navbarPosition, setNavbarPosition] = useState('static');

  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y < -550) setNavbarPosition('fixed');
    },
    [navbarPosition]
  );

  return (
    <NavContainer position={navbarPosition}>
      <NavSide>
        <Link to="/">
          <LogoContainer>
            <Logo src={logo} alt="logo" onClick={() => setBannerStatus('')} />
          </LogoContainer>
        </Link>
        <NavLink activeStyle={navLinkActive} to="/home">
          <NavItem>Home</NavItem>
        </NavLink>
        <NavLink activeStyle={navLinkActive} to="/about">
          <NavItem>About</NavItem>
        </NavLink>
        <NavLink activeStyle={navLinkActive} to="/shop">
          <NavItem>Shop</NavItem>
        </NavLink>
      </NavSide>
      <AuthSide>
        <AuthItem
          onClick={() => {
            setBannerStatus('login');
            window.scrollTo(0, 0);
          }}
        >
          Login
        </AuthItem>
        <AuthItem
          onClick={() => {
            setBannerStatus('register');
            window.scrollTo(0, 0);
          }}
        >
          Register
        </AuthItem>
      </AuthSide>
    </NavContainer>
  );
};

export default Navbar;
