import styled from 'styled-components';
import { useContext } from 'react';
import { headerContext } from '../contexts/headerContext';

const HeaderContainer = styled.header`
  background-color: #2c3e50;
  color: white;
  padding: 2rem;
  padding-left: 5rem;
  width: 100%;
  text-align: center;

  @media (min-width: 750px) {
    text-align: left;
  }
`;

const Title = styled.h1`
  font-size: calc(1.5rem + 1vw);
  margin-bottom: 0.5rem;
`;

const Explain = styled.p`
  font-size: calc(1.2rem + 0.8vw);
`;


export default function Header() {
  const {title, explain} = useContext(headerContext);

  return (
    <HeaderContainer>
      <Title>{title}</Title>
      <Explain>{explain}</Explain>
    </HeaderContainer>
  )
}