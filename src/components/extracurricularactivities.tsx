import styled from 'styled-components';
import { H2, Table, Th, Td, Tr } from './common';
import { headerContext } from '../contexts/headerContext';
import { useContext } from 'react';

const ActivitiesSection = styled.section`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;


export default function ExtracurricularActivities() {
  const {setHeader} = useContext(headerContext);
  setHeader("Extracurricular Activities","Personal Projects and Activities");
  return (
    <ActivitiesSection>
      <H2>Volunteering & Social Contribution Activities</H2>
      <Table>
        <thead>
          <Tr>
            <Th>Year</Th>
            <Th>Organization</Th>
            <Th>Description</Th>
          </Tr>
        </thead>
        <tbody>
          <Tr>
            <Td>2020</Td>
            <Td>NGO Activities</Td>
            <Td>Participation in environmental, educational, and volunteer organizations</Td>
          </Tr>
          <Tr>
            <Td>2022</Td>
            <Td>Korea Church Bible School Volunteer</Td>
            <Td>Volunteer</Td>
          </Tr>
        </tbody>
      </Table>

      <H2>Other Activities</H2>
      <Table>
        <thead>
          <Tr>
            <Th>Date</Th>
            <Th>Title</Th>
            <Th>Type</Th>
            <Th>Awards</Th>
          </Tr>
        </thead>
        <tbody>
          <Tr>
            <Td>2020</Td>
            <Td>Jiu-Jitsu Competition</Td>
            <Td>Jiu-Jitsu</Td>
            <Td>3rd Place in Jiu-Jitsu Competition</Td>
          </Tr>
          <Tr>
            <Td>2012</Td>
            <Td>Art Competition</Td>
            <Td>Art</Td>
            <Td>1st Place in Korea Times Art Award</Td>
          </Tr>
        </tbody>
      </Table>
    </ActivitiesSection>
  );
}