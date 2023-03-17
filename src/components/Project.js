import React from 'react';

function Project({project}) {
    return (
        <div>
            <header>Portfolio</header>
            <h1>{project.name}</h1>
            <h2>{project.description}</h2>
        </div>
    );
}

export default Project;