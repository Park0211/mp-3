import styled from "styled-components"
import Home from "./home";
import Education from "./education";
import Experiences from "./experiences";
import ExtraCurricularActivities from "./extracurricularactivities";
import Certifications from "./certifications";
import Projects from "./projects";
import { Routes, Route } from "react-router-dom";

const MainDiv = styled.div`
    flex: 1;
    padding: 2rem;
    margin: 0 auto;
    background-color : white;
    @media (max-width: 750px){
        width: 100%;
    }
`


export default function Main(){
    return (
        <MainDiv>
            <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/education" element={<Education/>}></Route>
                    <Route path="/experiences" element={<Experiences/>}></Route>
                    <Route path="/extracurricularactivities" element={<ExtraCurricularActivities/>}></Route>
                    <Route path="/certifications" element={<Certifications/>}></Route>
                    <Route path="/projects" element={<Projects/>}></Route>
            </Routes>
        </MainDiv>
    )
}
