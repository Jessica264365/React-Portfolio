import React from "react";
import project from "../../project.json";
import "./Project.css";

function ProjectCard() {
  const projectDiv = project.project.map((item) => (
    <div
      className="card col-md-3 mb-4 mx-2 justify-content-center text-center"
      key={item.title}
    >
      <div className="row justify-content-center" >
        <h5 className="mt-2">{item.title}</h5>
      </div>
      <img src={item.src} className="card-img mx-auto " alt={item.title} />

      <p className="card-text text-center">{item.about}</p>
      <div className="card-footer d-flex justify-content-center">
        <a class="btn btn-primary mx-1" href={item.repo} role="button">
          Repository
        </a>
        <a class="btn btn-primary mx-1" href={item.deployment} role="button">
          Deployed
        </a>
      </div>
    </div>
  ));
  return <div className="row d-flex justify-content-center">{projectDiv}</div>;
}

export default ProjectCard;
