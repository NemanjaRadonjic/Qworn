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

const Register = () => {
  return (
    <FormContainer register="true">
      <Logo src={logo} alt="logo" />
      <LogoHeading>Qworn</LogoHeading>
      <Form row="true">
        <Input placeholder="Username" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <Input placeholder="Repeat Password" type="password" />
        <Button>Register</Button>
      </Form>
    </FormContainer>
  );
};

export default Register;
