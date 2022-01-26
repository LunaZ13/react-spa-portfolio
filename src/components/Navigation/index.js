import React from "react";

function Nav(props) {
    const {
        contactSelected,
        setContactSelected,
        setResumeSelected
    } = props;
    console.log(props)
  // jsx
  return (
   <div>
       <nav> 
           <ul className="flex-row">
               <li className="mx-2">
                {/* <a href="#aboutme">About Me</a> */}
                <span onClick={() => {

                }}>About Me</span>
                </li>
                <li className="mx-2">
                {/* <a href="#projects" onClick={() => setContactSelected(false)}>Projects</a> */}
                <span onClick={() => {
                    setContactSelected(false)
                    setResumeSelected(false)
                    }}>Project</span>
                </li>
                <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                {/* <a href="#contact">Contact</a> */}
                <span onClick={() => {
                    setContactSelected(true)
                    setResumeSelected(false)
                    }}>Contact</span>
                </li>
                <li className="mx-2">
                {/* <a href="contact">Resume</a> */}
                <span onClick={() => {
                    setResumeSelected(true)
                    setContactSelected(false)
                    }}>Resume</span>
                </li>
            </ul>
       </nav>
   </div>
  );
}

export default Nav;
