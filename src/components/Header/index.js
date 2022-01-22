import React from "react";
import Nav from '../Navigation/index'
import coverImage from "../../assets/cover/cover-image.png";

function Header() {
  // jsx
  return (
    <section className="flex-row my-2">
        <h1 className="mx-2"> Inmar Luna </h1>
        <Nav />
        <img src={coverImage}></img>
    </section>
  );
}

export default Header;
