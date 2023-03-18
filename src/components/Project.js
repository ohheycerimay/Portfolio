import React from 'react';

function Project({project}) {
    return (
        <div>
            <header>Web Application</header>
            <h1>{project.name}</h1>
            <img src={project.image_url}/>
            <h2>{project.loom}</h2> 
            <h2>{project.description}</h2>
            <h2>{project.github}</h2>
            <h3>{project.tech}</h3>
        </div>
    );
}

export default Project;