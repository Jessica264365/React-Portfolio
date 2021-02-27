import React from "react";
import "./Portfolio.css";
import ProjectCard from "../../components/Project/Project";

const Portfolio = () => {
  return (
    <main className="container mt-3 text-center ">
      <h1
        className="text-white portfolio bg-dark text-lg-center"
        id="portfolio"
      >
        Portfolio
      </h1>
      <hr />

      <ProjectCard className="text-white" />
    </main>
  );
};
export default Portfolio;
