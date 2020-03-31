import React from 'react';

import useInput from '../../hooks/useInput';

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
  const [input, onChange] = useInput({
    username: '',
    email: '',
    password: '',
    repeatPassword: ''
  });
  return (
    <FormContainer register="true">
      <Logo src={logo} alt="logo" />
      <LogoHeading>Qworn</LogoHeading>
      <Form row="true">
        <Input
          name="username"
          onChange={onChange}
          value={input.username}
          placeholder="Username"
        />
        <Input
          name="email"
          onChange={onChange}
          value={input.email}
          placeholder="Email"
          type="email"
        />
        <Input
          name="password"
          onChange={onChange}
          value={input.password}
          placeholder="Password"
          type="password"
        />
        <Input
          name="repeatPassword"
          onChange={onChange}
          value={input.repeatPassword}
          placeholder="Repeat Password"
          type="password"
        />
        <Button>Register</Button>
      </Form>
    </FormContainer>
  );
};

export default Register;
