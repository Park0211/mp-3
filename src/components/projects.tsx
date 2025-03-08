import { useState } from 'react';
import styled from 'styled-components';
import { H2, Section } from './common';
import { Link } from 'react-router-dom';
import { headerContext } from '../contexts/headerContext';
import { useContext } from 'react';

const ProjectsSection = styled.section`
  margin-bottom: 2rem;
`;

const CalculatorSection = styled.section`
  margin-top: 2rem;
  background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d);
  padding: 3rem;
  border-radius: 15px;
  color: white;
`;

const CalculatorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`;

const Calculator = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  width: 100%;
  max-width: 400px;
`;

const CalcInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  background: rgba(255, 255, 255, 0.9);
  color: black;
  border: none;
  border-radius: 10px;
  font-size: calc(1rem + 0.3vw);
  font-family: 'Noto Sans', sans-serif;
  &:focus{
    outline: none;   /* focus 시 아웃라인 외곽을 정리하는 용도 */
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
  }
`;

const CalculatorResult = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  min-height: 3.5rem;
  display: flex;    
  align-items: center;
  justify-content: flex-end;  
`

const CalcOutput = styled.h3`
  font-size: calc(1.2rem + 0.5vw);
  margin: 0;
  color: #333;
`;

const NegativeOutput = styled(CalcOutput)`
  color: #ff5252;
`;

const CalculatorButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

const Button = styled.button`
  padding: 1rem;
  font-size: calc(1.2rem + 0.3vw);
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Noto Sans', sans-serif;

  &:hover {
    background: rgba(255, 255, 255, 1);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

export default function Projects() {
  const {setHeader} = useContext(headerContext);
  setHeader("Projects","My Software Development Projects");

  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState('');

  const calculate = (operation : string) => {
    const num1 = Number(firstNumber);
    const num2 = Number(secondNumber);
    let calcResult;

    switch (operation) {
      case 'add':
        calcResult = num1 + num2;
        break;
      case 'subtract':
        calcResult = num1 - num2;
        break;
      case 'multiply':
        calcResult = num1 * num2;
        break;
      case 'divide':
        calcResult = num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
        break;
      case 'power':
        calcResult = Math.pow(num1, num2);
        break;
      default:
        break;
    }

    setResult(String(calcResult));
  };

  const clearCalculator = () => {
    setFirstNumber('');
    setSecondNumber('');
    setResult('');
  };

  return (
    <main>
      <ProjectsSection>
        <H2>My Projects</H2>
        <Section className="projects-list">
          <ul>
            <li><strong>Project:</strong> Personal Website</li>
            <li><strong>Description:</strong> Built a portfolio website using HTML, CSS, and JavaScript</li>
            <li><strong>GitHub:</strong> <Link to={"https://github.com/Park0211/MP-1"} target="_blank" rel="noopener noreferrer">View on GitHub</Link></li>
          </ul>
        </Section>

        <CalculatorSection>
          <H2>JavaScript Calculator</H2>
          <CalculatorContainer>
            <Calculator>
              <CalcInput
                type="number"
                placeholder="First Number"
                value={firstNumber}
                onChange={(e) => setFirstNumber(e.target.value)}
              />
              <CalcInput
                type="number"
                placeholder="Second Number"
                value={secondNumber}
                onChange={(e) => setSecondNumber(e.target.value)}
              />
              <CalculatorResult>
                <CalcOutput>
                  {result !== '' && (Number(result) < 0 ? <NegativeOutput>{result}</NegativeOutput> : result)}
                </CalcOutput>
              </CalculatorResult>
              <CalculatorButtons>
                <Button onClick={() => calculate('add')}>+</Button>
                <Button onClick={() => calculate('subtract')}>-</Button>
                <Button onClick={() => calculate('multiply')}>×</Button>
                <Button onClick={() => calculate('divide')}>÷</Button>
                <Button onClick={() => calculate('power')}>**</Button>
                <Button onClick={clearCalculator}>C</Button>
              </CalculatorButtons>
            </Calculator>
          </CalculatorContainer>
        </CalculatorSection>
      </ProjectsSection>
    </main>
  );
}