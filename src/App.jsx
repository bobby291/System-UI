import Layouts from "./Layouts/Layouts"
import Company from "./Pages/Company"
import Features from "./Pages/Features"
import Resources from "./Pages/Resources"
import { Routes, Route } from "react-router-dom"
import Solution from "./Pages/Solution"


export default function App() {
  return (
      <Routes>
        <Route path="/"  element={<Layouts />}/>
        <Route path="/company" element={<Company />}/>
        <Route path="/resources" element={<Resources />}/>
        <Route path="/features" element={<Features />}/>
        <Route path="/solution" element={<Solution />}/>
      </Routes>
  )
}