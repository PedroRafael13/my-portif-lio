import { Route, Routes } from "react-router-dom"
import Home from "./../page/Home"
import AboutMe from "../page/AboutMe"
import Project from "../page/Project"
import Skiils from "../page/Skills"
import DefaultLayout from "../layout/DefaultLayout"

function Router(){
  return(
    <Routes>
      <Route element={<DefaultLayout />} >
          <Route path="/" element={<Home />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Skiils" element={<Skiils />} />
      </Route>  
    </Routes>
  )
}

export default Router