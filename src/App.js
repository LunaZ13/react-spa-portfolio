import React, { useState } from "react";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Project/";
import Footer from "./components/Footer"
import "./App.css";

function App() {
  // var projects = [{name: 'Weather App'}, {name: 'Trivia Game'},{name: 'Calculator Game'}, {name: 'Click Game'}]
  const [projects, setProjects] = useState([
    { name: "Weather App" },
    { name: "Trivia Game" },
  ]);

  // const addProject = () => {
  //   setProjects([
  //     { name: "Weather App" },
  //     { name: "Trivia Game" },
  //     { name: "Calculator Game" },
  //     { name: "Click Game" },
  //   ]);
  // };

  return (
    <div>
      <Header />
      <main>
        <About></About>
        {projects.map((eachProj) => {
          return <Projects name={eachProj.name} tom={"Tutor"} />;
        })}
        <ContactForm></ContactForm>
        <Footer />
      </main>
    </div>
  );
}

export default App;
