import React from "react";

var year = new Date().getFullYear();

function Footer() {
  return (
    <div>
      <footer>
        <p>Copyright © {year}</p>
      </footer>
    </div>
  );
}

export default Footer;
