import React from "react";
import {projects} from "../../src/data";


const Portfolio () => {
    const projects = [...];

    return (
        <section id="projects" >
            <div>
                <h1>
                    Projects I have worked on
                </h1>
            </div>
            <div>
                {projects.map((project) => (
                    <a
                    href={project.link}
                    key={project.image}>
                    <div>
                      <img
                        alt="images"
                        src={project.image}
                      />
                      <div>
                        <h1>
                          {project.title}
                        </h1>
                        <p>{project.description}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
        
        </section>
    )
};

export default Portfolio;