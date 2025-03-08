import styled from 'styled-components';
import { H2, Table, Td, Th, Tr } from './common';
import { headerContext } from '../contexts/headerContext';
import { useContext } from 'react';
const CertificationsSection = styled.section`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

export default function Certifications() {
  const {setHeader} = useContext(headerContext);
  setHeader("Certifications","Professional Certifications and Licenses");
  return (
    <CertificationsSection>
      <H2>Language Certifications</H2>
      <Table>
        <thead>
          <Tr>
            <Th>Date</Th>
            <Th>Certification</Th>
            <Th>Organization</Th>
            <Th>Score</Th>
          </Tr>
        </thead>
        <tbody>
          <Tr>
            <Td>2021</Td>
            <Td>TOEFL</Td>
            <Td>TOEFL</Td>
            <Td>100/120</Td>
          </Tr>
          <Tr>
            <Td>2020</Td>
            <Td>IELTS</Td>
            <Td>IELTS</Td>
            <Td>6.5/9.0</Td>
          </Tr>
        </tbody>
      </Table>

      <H2>Additional Qualifications</H2>
      <Table>
        <thead>
          <Tr>
            <Th>Year</Th>
            <Th>Qualification</Th>
            <Th>Institution</Th>
            <Th>Description</Th>
          </Tr>
        </thead>
        <tbody>
          <Tr>
            <Td>2019</Td>
            <Td>Korean History Certification</Td>
            <Td>The National Institute of Korean History</Td>
            <Td>Level 2 of the Korean History Proficiency Test</Td>
          </Tr>
          <Tr>
            <Td>2016</Td>
            <Td>Taekwondo</Td>
            <Td>Kukkiwon</Td>
            <Td>Taekwondo 4th Dan Black Belt Certification</Td>
          </Tr>
        </tbody>
      </Table>
    </CertificationsSection>
  );
}