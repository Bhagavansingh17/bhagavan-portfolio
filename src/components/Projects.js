import React from "react";

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="cards">

        {/* Banking System Project */}
        <div className="card">
          <h3>Console Banking Backend System</h3>
          <p>
            A structured banking backend built using Core Java with 
            account management, transaction tracking, and PIN-based authentication.
          </p>
          <p>
            <strong>Tech:</strong> Java 17, OOP, Collections, Maven
          </p>
          <a 
            href="https://github.com/Bhagavansingh17/banking-system" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>

        {/* Keep this temporarily */}
        <div className="card">
          <h3>ChatGPT-based Assistant</h3>
          <p>AI chatbot built using OpenAI API.</p>
          <p><strong>Tech:</strong> React, Node.js</p>
          <a 
            href="https://github.com/yourgithub" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>

        {/* Keep this temporarily */}
        <div className="card">
          <h3>Medical Image Segmentation</h3>
          <p>Deep learning model for medical image analysis.</p>
          <p><strong>Tech:</strong> Python, TensorFlow</p>
          <a 
            href="https://github.com/yourgithub" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;