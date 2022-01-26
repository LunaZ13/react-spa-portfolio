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
    { name: "Capital Opulence"},
    { name: "Movie Finder"}
  ]);
  
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

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
            {projects.map((eachProject) => {
              return <Projects name={eachProject.name} />
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
