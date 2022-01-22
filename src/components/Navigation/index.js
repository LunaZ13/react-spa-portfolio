import React from "react";

function Nav(props) {
    const {
        contactSelected,
        setContactSelected
    } = props;
  // jsx
  return (
   <div>
       <nav> 
           <ul className="flex-row">
               <li className="mx-2">
                <a href="#aboutme">About Me</a>
                </li>
                <li className="mx-2">
                <a href="#projects">Projects</a>
                </li>
                <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                <a href="#contact">Contact</a>
                <span onClick={() => setContactSelected(true)}></span>
                </li>
                <li className="mx-2">
                <a href="contact">Resume</a>
                </li>
            </ul>
       </nav>
   </div>
  );
}

export default Nav;
