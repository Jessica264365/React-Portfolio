import React from "react";
import "./Portfolio.css";
import ProjectCard from "../../components/Project/Project";

const Portfolio = () => {
  return (
    <main className="container mt-3">
      <h1>Portfolio</h1>
      <hr />

      <ProjectCard />
    </main>
  );
};
export default Portfolio;
