import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({projects}) {

  const projItem=projects.map((projObj) => {
    return <ProjectItem id={projObj.id} key={projObj.id} name={projObj.name} about={projObj.about} technologies={projObj.technologies} />
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">  {projItem}</div>
    </div>
  );
}

export default ProjectList;
