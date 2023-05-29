import React from "react";

function NavBar() {
  const links=["home","about","projects"];
  const mapLinks=links.map((linkObj) => {
    return <a href={"#"+linkObj} key={linkObj}>{linkObj}</a>
  })

  return <nav>{mapLinks}</nav>;
}

export default NavBar;
