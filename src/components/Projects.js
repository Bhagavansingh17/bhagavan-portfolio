import React from "react";

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="cards">

        {/* Spring Boot Banking API */}
        <div className="card">
          <h3>Banking System REST API</h3>
          <p>
            A backend banking system built using Spring Boot that supports
            account creation, deposits, withdrawals, fund transfers, and
            transaction history with pagination.
          </p>
          <p>
            <strong>Tech:</strong> Java, Spring Boot, MySQL, JPA, Swagger
          </p>
          <a
            href="https://github.com/Bhagavansingh17/banking-api"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>

        {/* Core Java Banking System */}
        <div className="card">
          <h3>Console Banking Backend System</h3>
          <p>
            A structured banking backend built using Core Java with account
            management, transaction tracking, and PIN-based authentication.
            Demonstrates OOP principles and modular architecture.
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

        {/* Portfolio Website */}
        <div className="card">
          <h3>Developer Portfolio Website</h3>
          <p>
            Personal portfolio website showcasing projects, GitHub repositories,
            and contact information. Built with React and deployed using GitHub Pages.
          </p>
          <p>
            <strong>Tech:</strong> React, HTML, CSS, GitHub Pages
          </p>
          <a
            href="https://github.com/Bhagavansingh17"
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