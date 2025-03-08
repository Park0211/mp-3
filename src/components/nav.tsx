import {Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  background-color: #34495e;
  padding: 1rem;
  width: 20%;
  @media (min-width: 750px){
    min-height: calc(100vh - 80px);
  }
  @media (max-width: 750px) { 
    width : 100%;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start; 
  @media (max-width: 750px){
    flex-direction: row;
    justify-content: center; 
  }
`;

const NavItem = styled.li``;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3498db;
  }
`;

export default function Nav() {
  return (
    <NavContainer>
    <NavList>
        <NavItem><NavLink to="/">Home</NavLink></NavItem>
        <NavItem><NavLink to="/education">Education</NavLink></NavItem>
        <NavItem><NavLink to="/experiences">Experiences</NavLink></NavItem>
        <NavItem><NavLink to="/extracurricularactivities">Extracurricular Activities</NavLink></NavItem>
        <NavItem><NavLink to="/certifications">Certifications</NavLink></NavItem>
        <NavItem><NavLink to="/projects">Projects</NavLink></NavItem>
    </NavList>
    </NavContainer>
  );
}