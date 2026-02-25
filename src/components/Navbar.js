import React from "react";

function Navbar() {
  const toggleTheme = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <nav className="navbar">
      <h3>B Bhagavan Singh</h3>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <button onClick={toggleTheme}>🌙</button>
      </div>
    </nav>
  );
}

export default Navbar;