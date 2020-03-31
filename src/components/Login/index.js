import React from 'react';

import {
  FormContainer,
  Form,
  Input,
  Button,
  Logo,
  LogoHeading
} from '../commonStyles';

import logo from '../../images/logo.png';

const Login = () => {
  return (
    <FormContainer>
      <Logo src={logo} alt="logo" />
      <LogoHeading>Qworn</LogoHeading>
      <Form margin="true">
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <Button>Login</Button>
      </Form>
    </FormContainer>
  );
};

export default Login;
