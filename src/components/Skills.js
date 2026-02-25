import React from "react";

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="cards">
        <div className="card">
          <h3>Programming</h3>
          <p>C, C++, Java, Python</p>
        </div>
        <div className="card">
          <h3>Web</h3>
          <p>HTML, CSS, JavaScript, React</p>
        </div>
        <div className="card">
          <h3>CS Fundamentals</h3>
          <p>DSA, OS, DBMS, CN, OOPs</p>
        </div>
        <div className="card">
          <h3>Tools</h3>
          <p>Git, GitHub, VS Code</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;