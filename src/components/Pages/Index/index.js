import React, { useContext } from 'react';

import { BannerStatusContext } from '../../../contexts/BannerStatusContext';

import { Link } from 'react-router-dom';

import { IndexContainer, Heading, Text, Button } from './styles';

const Index = () => {
  const { setBannerStatus } = useContext(BannerStatusContext);
  return (
    <>
      <IndexContainer>
        <Heading>What is Qworn</Heading>
        <Text>
          Qworn is a place for buying and selling computer hardware. <br />
          From complete computers to all different kinds of computer components,
          you can find anything hardware related at Qworn
        </Text>
        <Heading>Getting Started</Heading>
        <Text>
          If you just wanna take a look at products you can do that in{' '}
          <Link to="/shop">
            <b>Shop</b>
          </Link>
          <br />
          If you want to join our community and buy or sell products you have to
          create an accout
          <Button
            href="#banner"
            onClick={() => {
              setBannerStatus('register');
              window.scrollTo(0, 0);
            }}
          >
            Create an accout
          </Button>
        </Text>
      </IndexContainer>
    </>
  );
};

export default Index;
