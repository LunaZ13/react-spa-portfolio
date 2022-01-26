import React from "react";
import Nav from '../Navigation/index'
import coverImage from "../../assets/cover/cover-image.png";


function Header(props) {
    console.log(props)
  // jsx
  return (
    <section className="flex-row my-2 space-between">
        <h1 className="mx-2"> Inmar Luna </h1>
        <Nav setContactSelected={props.setContactSelected}
        setResumeSelected={props.setResumeSelected} />
        
        {props.contactSelected || props.resumeSelected ? '' : (   <img src={coverImage} style={ {width: "100%"} }></img>)}
     
    </section>
  );
}

export default Header;
