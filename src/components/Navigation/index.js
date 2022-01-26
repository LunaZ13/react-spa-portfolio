import React from "react";

function Nav(props) {
    const {
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
                <span onClick={() => {
                setContactSelected(false)
                setResumeSelected(false)
                }}>About Me</span>
                </li>
                <li className="mx-2">
                <span onClick={() => {
                    setContactSelected(false)
                    setResumeSelected(false)
                    }}>Project</span>
                </li>
                <li className="mx-2">
                <span onClick={() => {
                    setContactSelected(true)
                    setResumeSelected(false)
                    }}>Contact</span>
                </li>
                <li className="mx-2">
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
