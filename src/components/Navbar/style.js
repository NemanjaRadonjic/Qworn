import styled from 'styled-components';

export const NavContainer = styled.div`
  height: 4rem;
  width: 100vw;
  background-color: rgb(${props => props.theme.mainColor});
`;

export const LogoContainer = styled.div`
  margin: 0 0rem 0 2rem;
  height: 2rem;
  width: 2rem;
`;

export const Logo = styled.img`
  height: 100%;
  width: 100%;
`;

export const NavSide = styled.div`
  float: left;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const NavItem = styled.div`
  margin: 0 2.5rem;
  border-bottom: 2px solid black;
  cursor: pointer;
  transition: color 0.2s ease-in-out, border-bottom 0.2s ease-in-out;

  &:hover {
    color: rgb(${props => props.theme.secondaryColor});
    border-bottom: 3px solid rgb(${props => props.theme.secondaryColor});
  }
`;

export const AuthSide = styled.div`
  float: right;
  height: 100%;
  display: flex;
  align-items: center;
`;
