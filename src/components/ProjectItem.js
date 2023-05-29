import React from "react";

function ProjectItem({id,name,about,technologies}) {
  const tech=technologies.map((techObj) => {
    return <span key={techObj}>{techObj}</span>
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {tech}
      </div>
    </div>
  );
}

export default ProjectItem;
