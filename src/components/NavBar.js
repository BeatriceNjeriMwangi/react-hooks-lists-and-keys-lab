import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkElements = links.map((link, index) => {
    console.log(index, link);
    let url = `#${link}`
    console.log(url);
    return <a key={index} href={url}>{link}</a>
  });

  return <nav>
    {linkElements}
    
    </nav>;
}

export default NavBar;
