import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log( technologies);
  let technologyMap = technologies.map(technology=>{
    return <span key={technology}>{technology}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologyMap}
      </div>
    </div>
  );
}

export default ProjectItem;
