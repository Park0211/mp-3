import Header from "./components/header";
import Nav from "./components/nav";
import Main from "./components/main";
import Footer from "./components/footer";
import styled from "styled-components";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { headerContext } from "./contexts/headerContext";

const AppDiv = styled.div`
  font-family: 'Noto Sans', sans-serif;
  line-height: 1.6; 
  color: #333;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  min-width: 100vw;
  min-height: 100vh;
`

function Root(){
    return (
        <>
          <Header/>
          <Nav/>
          <Main/>
          <Footer/>
        </>
    )
}
const router = createBrowserRouter([{path:"*", Component: Root},]);

export default function App(){
    const [title, setTitle] = useState("Chanho Park's Portfolio")
    const [explain, setExplain] = useState("Journey of a Computer Science Student")
    
    function setHeader(title: string, explain: string){
        setTitle(title);
        setExplain(explain);
    }
    
    return(
      <headerContext.Provider value={{title, explain, setHeader}}>
        <AppDiv>
          <RouterProvider router={router}>
          </RouterProvider>
        </AppDiv>
      </headerContext.Provider>
    )
}