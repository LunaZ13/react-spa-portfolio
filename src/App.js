import React, { useState } from "react";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Project/";
import Resume from "./components/Resume/index";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([
    { name: "Weather App" },
    { name: "Trivia Game" },
  ]);

  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  console.log("Contact seclted state!!!! tre or false flag", contactSelected);
  console.log('REsume state!!', resumeSelected)

  return (
    <div>
      <Header
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      />
      <main>
        {contactSelected || resumeSelected ? (
          ""
        ) : (
          <>
            <About />
            {projects.map((eachProj) => {
              return <Projects name={eachProj.name} tom={"Tutor"} />;
            })}
          </>
        )}

        {contactSelected ? (
          <>
            <ContactForm />
          </>
        ) : null}

        {resumeSelected ? (
          <>
            <Resume />
          </>
        ) : null}

        <Footer />
      </main>
    </div>
  );
}

export default App;
