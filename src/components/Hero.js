import React from "react";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        
        {/* Left Content */}
        <div className="hero-text">
          <h1>Hi, I'm B Bhagavan Singh</h1>
          <h3>Computer Science Engineering Student | Software Developer</h3>
          <p>
            Aspiring Software & Web Developer passionate about problem solving 
            and building impactful projects.
          </p>

          <button onClick={() => window.location="#projects"}>
            View Projects
          </button>

          <a href="/resume.pdf" download>
            <button style={{ marginLeft: "10px" }}>
              Download Resume
            </button>
          </a>
        </div>

        {/* Right Image */}
        <div className="hero-image">
          <img src="/profile.jpg" alt="Bhagavan Singh" />
        </div>

      </div>
    </section>
  );
}

export default Hero;