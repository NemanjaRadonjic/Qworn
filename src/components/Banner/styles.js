import styled from 'styled-components';

export const BannerContainer = styled.div`
  height: 70vh;
  display: flex;
  background-image: linear-gradient(
      to top,
      rgba(${props => props.theme.mainColor}, 1),
      rgba(${props => props.theme.mainColor}, 0.7)
    ),
    url('https://www.incimages.com/uploaded_files/image/970x450/getty_505442827_408656.jpg');
  background-size: cover;
`;

export const HeaderContainer = styled.div`
  margin: 10rem auto;
  width: 60%;
  height: 50%;
  // background: rgba(${props => props.theme.textColor}, 0.2);
  display: flex;
  flex-direction: column;
  // border: 10px solid transparent;
  // box-shadow: 0 0 100px rgba(0, 0, 0, 0.5), inset 0 0 10px rgba(0, 0, 0, 0.2);
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
