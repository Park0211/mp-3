import React from 'react';
import styled from 'styled-components';
import { P } from './common';

const FooterContainer = styled.footer`
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 1rem;
  width: 100%;
`;

const FooterLink = styled.a`
  color: #3498db;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <P>&copy; 2025 Chanho Park. All rights reserved. <FooterLink href="credits.html">Credits</FooterLink></P>
    </FooterContainer>
  );
}