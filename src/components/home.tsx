import styled from 'styled-components';
import Image from '../assets/img1.jpeg';
import { H2,P,Section } from './common';
import { Link } from 'react-router-dom';
import { headerContext } from '../contexts/headerContext';
import { useContext } from 'react';

const ProfileImage = styled.img`
  max-width: 200px;
  border-radius: 50%;
  margin: 1rem 0;
`;

const SkillsList = styled.ul`
    list-style: none;
    padding-left:0;
    display: flex;
    align-items : flex-start;
    flex-wrap: wrap;
    gap: 1rem;
`;

const SkillItem = styled.li`
    background-color: #3498db;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
`;


export default function Home() {
  const {setHeader} = useContext(headerContext);
  setHeader("Chanho Park's Portfolio","Journey of a Computer Science Student");
  return (
    <>
      <Section>
        <H2>Introduction</H2>
        <ProfileImage src={Image} alt="Profile" />
        <P>Hello! I'm Chanho Park, studying Computer Science at Boston University.</P>
      </Section>

      <Section>
        <H2>Technical Skills</H2>
        <SkillsList>
          <SkillItem>HTML/CSS/JavaScript</SkillItem>
          <SkillItem>Python</SkillItem>
          <SkillItem>Java</SkillItem>
        </SkillsList>
      </Section>

      <Section>
        <H2>Contact</H2>
        <P>Email: Parkch@bu.edu</P>
        <P>GitHub: <Link to={"https://github.com/Park0211/MP-1"} target='_blank'>github.com/Park0211</Link></P>
      </Section>
    </>
  );
}