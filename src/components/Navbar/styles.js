import styled from 'styled-components';

import { theme } from '../../styles/themes';

export const NavContainer = styled.div`
  height: 4rem;
  width: 100vw;
  background-color: rgb(${props => props.theme.mainColor});
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
  position: ${props => props.position};
  top: ${props => (props.position === 'fixed' ? '0' : 'auto')};
`;

export const LogoContainer = styled.div`
  margin-right: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Logo = styled.img`
  height: 2rem;
  width: 2rem;
`;

export const NavSide = styled.div`
  float: left;
  display: flex;
  height: inherit;
  align-items: center;
`;

export const NavItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0 3rem;
  box-shadow: inset 0 0 0 0 rgba(${props => props.theme.secondaryColor}, 0);
  height: 100%;
  transition: color 0.2s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover,
  &:active {
    color: rgb(${props => props.theme.secondaryColor});
    box-shadow: inset 0 -5px 0 rgba(${props => props.theme.secondaryColor}, 1);
  }
`;

export const navLinkActive = {
  color: `rgb(${theme.secondaryColor})`,
  boxShadow: `inset 0 -5px 0 rgba(${theme.secondaryColor}, 1)`
};

export const AuthSide = styled.div`
  float: right;
  margin-right: 1rem;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const AuthItem = styled.div`
  margin: 0 1rem;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: rgb(${props => props.theme.secondaryColor});
 // border-bottom: 3px solid rgb(${props => props.theme.secondaryColor});
  }
`;
