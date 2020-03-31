import React, { useContext } from 'react';

import Login from '../Login';
import Register from '../Register';

import { BannerStatusContext } from '../../contexts/BannerStatusContext';

import {
  BannerContainer,
  HeaderContainer,
  LogoContainer,
  Logo,
  Header
} from './styles';

import logo from '../../images/logo.png';

const Banner = () => {
  const { bannerStatus } = useContext(BannerStatusContext);

  const banner = () => {
    if (bannerStatus === 'login') {
      return <Login />;
    } else if (bannerStatus === 'register') {
      return <Register />;
    }
    return (
      <>
        <LogoContainer>
          <Logo src={logo} alt="logo" />
        </LogoContainer>
        <Header>Qworn</Header>
      </>
    );
  };

  return (
    <BannerContainer id="banner">
      <HeaderContainer>{banner()}</HeaderContainer>
    </BannerContainer>
  );
};

export default Banner;
