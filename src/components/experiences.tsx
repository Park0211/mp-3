import styled from 'styled-components';
import { H2,Table, Td, Th, Tr } from './common';
import { headerContext } from '../contexts/headerContext';
import { useContext } from 'react';

const ExperiencesSection = styled.section`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const TaskList = styled.ul`
  margin: 0;
  padding-left: 1.2rem; /* Add padding for nested lists */
`;

export default function Experiences() {
  const {setHeader} = useContext(headerContext);
  setHeader("Experiences","Professional and Academic Experiences");
  return (
    <ExperiencesSection>
      <H2>Work Experience</H2>
      <Table>
        <thead>
          <Tr>
            <Th>Period</Th>
            <Th>Company</Th>
            <Th>Position</Th>
            <Th>Location</Th>
            <Th>Description</Th>
          </Tr>
        </thead>
        <tbody>
          <Tr>
            <Td>Summer 2021</Td>
            <Td>Media Company</Td>
            <Td>Sales Intern</Td>
            <Td>Seoul, South Korea</Td>
            <Td>
              <TaskList>
                <li>Supported the preparation of sales presentations and promotional materials</li>
                <li>Assisted the sales team in identifying and reaching out to potential clients</li>
              </TaskList>
            </Td>
          </Tr>
        </tbody>
      </Table>

      <H2>Academic Projects</H2>
      <Table>
        <thead>
          <Tr>
            <Th>Year</Th>
            <Th>Project</Th>
            <Th>Technologies</Th>
            <Th>Description</Th>
          </Tr>
        </thead>
        <tbody>
          <Tr>
            <Td>2025</Td>
            <Td>Portfolio Website</Td>
            <Td>HTML, CSS, JavaScript</Td>
            <Td>Designed and developed a personal portfolio website</Td>
          </Tr>
        </tbody>
      </Table>
    </ExperiencesSection>
  );
}