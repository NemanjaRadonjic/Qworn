import React from 'react';

import {
  BannerContainer,
  HeaderContainer,
  LogoContainer,
  Logo,
  Header
} from './styles';

import logo from '../../images/logo.png';

const Banner = () => {
  return (
    <BannerContainer>
      <HeaderContainer>
        <LogoContainer>
          <Logo src={logo} alt="logo" />
        </LogoContainer>
        <Header>Qworn</Header>
      </HeaderContainer>
    </BannerContainer>
  );
};

export default Banner;
