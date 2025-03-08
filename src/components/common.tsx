import styled from "styled-components";

export const H1 = styled.h1`
  font-size: calc(1.5rem + 1vw);
  margin-bottom: 0.5rem;
`

export const H2 = styled.h2`
  font-size: calc(1.2rem + 0.8vw);
  margin-bottom: 1rem;
`

export const P = styled.p`
  font-size: calc(0.9rem + 0.5vw);
`
export const Section = styled.section`
  background-color: #f8f9fa;
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); 
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0 2rem 0;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

export const Th = styled.th`
  background-color: #2c3e50;
  color: white;
  font-weight: bold;
  padding: 1rem;
  text-align: left;
`;

export const Td = styled.td`
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f8f9fa;
  }
  &:hover {
    background-color: #f1f3f5;
  }
`