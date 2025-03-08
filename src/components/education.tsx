import styled from 'styled-components';
import { H2, Table, Td, Th, Tr } from './common';
import { headerContext } from '../contexts/headerContext';
import { useContext } from 'react';


const EducationSection = styled.section`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;


const CourseList = styled.ul`
  margin: 0;
  padding-left: 1.2rem; /* Add padding for nested lists */
`;

export default function Education() {
  const {setHeader} = useContext(headerContext);
  setHeader("Education","Details about my academic background");
  return (
    <EducationSection>
      <H2>Academic History</H2>
      <Table>
        <thead>
          <Tr>
            <Th>Period</Th>
            <Th>Institution</Th>
            <Th>Degree</Th>
            <Th>Major</Th>
            <Th>Status</Th>
          </Tr>
        </thead>
        <tbody>
          <Tr>
            <Td>2021 - Present</Td>
            <Td>Boston University</Td>
            <Td>Bachelor of Computer Science</Td>
            <Td>Computer Science</Td>
            <Td>In Progress</Td>
          </Tr>
        </tbody>
      </Table>

      <H2>Key Courses</H2>
      <Table>
        <thead>
          <Tr>
            <Th>Category</Th>
            <Th>Courses</Th>
          </Tr>
        </thead>
        <tbody>
          <Tr>
            <Td>Programming</Td>
            <Td>
              <CourseList>
                <li>Data Structures and Algorithms</li>
                <li>Object-Oriented Programming</li>
              </CourseList>
            </Td>
          </Tr>
          <Tr>
            <Td>Systems</Td>
            <Td>
              <CourseList>
                <li>Operating Systems</li>
                <li>Computer Networks</li>
              </CourseList>
            </Td>
          </Tr>
          <Tr>
            <Td>Applications</Td>
            <Td>
              <CourseList>
                <li>Web Programming</li>
              </CourseList>
            </Td>
          </Tr>
        </tbody>
      </Table>
    </EducationSection>
  );
}