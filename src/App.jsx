// import "./App.css";
import Portfolio from "./components/Portfolio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MySections } from "./components/Portfolio Components/MySections";
import { NavbarMain } from "./components/Portfolio Components/NavbarMain";
import EducationHistory from "./components/Portfolio Components/EducationHistory";
import ProfessionalSkills from "./components/Portfolio Components/ProfessionalSkills";
import Projects from "./components/Portfolio Components/Projects";
import Hobbies from "./components/Portfolio Components/Hobbies";
import Ambitions from "./components/Portfolio Components/Ambitions";
import EffortsForCountry from "./components/Portfolio Components/EffortsForCountry";
function App() {
  return (
    <>
      {/* <UserDetails />
    <DisplayUsers /> */}
      {/* <TestComponent /> */}
      <BrowserRouter>
        <NavbarMain />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/mysec" element={<MySections />} />
          <Route path="/Educational-History" element={<EducationHistory />} />
          <Route path="/professional" element={<ProfessionalSkills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/ambitions" element={<Ambitions />} />
          <Route path="/efforts-for-country" element={<EffortsForCountry />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
