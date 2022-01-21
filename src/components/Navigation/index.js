import React from "react";

function Nav() {
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
                <li className="mx-2">
                <a href="#contact">Contact</a>
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
