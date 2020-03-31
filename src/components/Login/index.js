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

const Login = () => {
  const [input, onChange] = useInput({ email: '', password: '' });

  return (
    <FormContainer>
      <Logo src={logo} alt="logo" />
      <LogoHeading>Qworn</LogoHeading>
      <Form margin="true">
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
        <Button>Login</Button>
      </Form>
    </FormContainer>
  );
};

export default Login;
