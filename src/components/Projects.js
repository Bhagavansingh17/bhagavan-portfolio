import React from "react";

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="cards">
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

        <div className="card">
          <h3>Mini Academic Projects</h3>
          <p>Various DSA and Web-based applications.</p>
          <p><strong>Tech:</strong> Java, C++</p>
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