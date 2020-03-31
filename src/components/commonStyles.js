import styled from 'styled-components';

export const Button = styled.div`
  text-align: center;
  width: 10rem;
  margin: 3rem auto;
  padding: 1rem 3rem;
  background-image: linear-gradient(
    to right,
    rgba(${props => props.theme.mainColor}, 0.9),
    rgba(${props => props.theme.secondaryColor}, 0.7)
  );
  background-size: 200%;
  font-size: 1.3rem;
  cursor: pointer;
  color: rgb(${props => props.theme.backgroundColor});
  box-shadow: 10px 0 10px rgb(0, 0, 0, 0.2);
  transition: color 0.3s ease-in-out, background-position 0.5s ease-in-out,
    box-shadow 0.6s ease-in-out;

  &:hover {
    color: black;
    background-position: 100%;
    box-shadow: -10px 0 10px rgb(0, 0, 0, 0.2);
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => (props.register ? '40rem' : '20rem')};
  margin-top: 1rem;
  position: relative;
`;

export const Form = styled.form`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-flow: ${props => (props.row ? 'row' : 'column')} wrap;
`;

export const Input = styled.input`
  color: rgb(${props => props.theme.backgroundColor});
  background: transparent;
  margin: 1rem auto;

  border-width: 2px;
  border-style: solid;
  border-image: linear-gradient(
      -270deg,
      rgba(${props => props.theme.mainColor}, 1),
      70%,
      rgba(${props => props.theme.secondaryColor}, 1)
    )
    round;
  border-image-slice: 1;
  width: 15rem;
  padding: 0.5rem 1.5rem;
  outline: none;
  font-size: 1.2rem;
  transition: border-image-outset 0.3s ease-in-out, opacity 0.3s ease-in-out;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
  &:focus {
    border-image-outset: 3 0;
    opacity: 1;
  }
`;

export const Close = styled.div`
  width: 20px;
  height: 30px;
  cursor: pointer;
  font-size: 2rem;
  color: rgb(${props => props.theme.secondaryColor});
  position: absolute;
  top: 2rem;
  right: 0;
`;

export const Logo = styled.img`
  height: 5rem;
  width: 5rem;
  margin: 2rem auto 0 auto;
`;

export const LogoHeading = styled.div`
  text-align: center;
  color: rgb(${props => props.theme.secondaryColor});
  font-size: 2rem;
  text-shadow: 0 20px 25px rgba(0, 0, 0, 1);
`;
