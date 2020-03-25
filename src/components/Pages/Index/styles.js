import styled from 'styled-components';

export const IndexContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  width: 100vw;
`;

export const Heading = styled.h1`
  margin: 4rem auto;
  font-size: 1.8rem;
  color: rgb(${props => props.theme.textColor});
`;

export const Text = styled.div`
  margin: auto;
  text-align: center;
  font-size: 1.2rem;
`;

export const Button = styled.div`
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
