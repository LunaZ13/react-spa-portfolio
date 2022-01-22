import React, { useState } from "react";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Project/";
import Resume from "./components/Resume";
import Footer from "./components/Footer"
import "./App.css";

function App() {
  const [projects, setProjects] = useState([
    { name: "Weather App" },
    { name: "Trivia Game" },
  ]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Header />
      <main>
        {!contactSelected ? (
        <>
        <About />
        {projects.map((eachProj) => {
          return <Projects name={eachProj.name} tom={"Tutor"} />;
        })}
        </>
        ) : (
        <ContactForm />
        )}
        <Resume />
        <Footer />
      </main>
    </div>
  );
}

export default App;
