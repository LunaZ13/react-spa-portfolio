import React from "react";
import Nav from '../Navigation/index'

function Header() {
  // jsx

  var styleObj = {
      title: {
          color: 'Red',
          float: 'left'
      }
  }
  return (
    <section>
        <h1 className="headerTitle"> Inmar Luna </h1>
     <Nav />
    </section>
  );
}

export default Header;
