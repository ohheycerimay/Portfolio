import React from 'react';
import Project from './Project'

function ProjectContainer({projects}) {
    return (
        <div>
            {
            projects.map((project) => <Project key={project.id} project={project} />)    
            }
        </div>
    );
}

export default ProjectContainer;