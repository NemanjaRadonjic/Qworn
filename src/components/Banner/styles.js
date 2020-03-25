import styled from 'styled-components';

export const BannerContainer = styled.div`
  height: 70vh;
  width: 100vw;
  display: flex;
  background-image: linear-gradient(
      to top,
      rgba(${props => props.theme.mainColor}, 1),
      rgba(${props => props.theme.mainColor}, 0.1)
    ),
    linear-gradient(
      to right,
      rgba(${props => props.theme.mainColor}, 0.7),
      rgba(${props => props.theme.secondaryColor}, 0.7)
    ),
    url('https://aws.boxofficebuz.com/articles/2018/10/02/background-board-card-825262.jpg');
  background-size: cover;
`;

export const HeaderContainer = styled.div`
  margin: 10rem auto;
  width: 60%;
  height: 50%;
  display: flex;
  flex-direction: column;
`;

export const LogoContainer = styled.div`
  height: 10rem;
  width: 10rem;
  margin: auto;
`;

export const Logo = styled.img`
  height: 10rem;
  width: 10rem;
`;

export const Header = styled.div`
  margin: auto;
  font-size: 5rem;
  color: rgb(${props => props.theme.secondaryColor});
  text-shadow: 0 10px 15px rgba(0, 0, 0, 0.7);
  background-color: transparent;
`;
