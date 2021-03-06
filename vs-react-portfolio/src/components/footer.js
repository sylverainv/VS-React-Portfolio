import React from "react";
// import { Container, Row, Col } from "react-bootstrap";


function Footer() {
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/",
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/vanessa-sylverain-mhsa-lnha-b0b0a67a/",
    },
  ];
  return (
    <footer className="flex-row px-1">
      {icons.map((icon) => (
        <a
          href={icon.link}
          key={icon.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={icon.name}></i>
        </a>
      ))}
    </footer>
  );
}

export default Footer;
