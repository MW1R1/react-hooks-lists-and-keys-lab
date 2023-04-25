import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ProjectList from "./ProjectList";
import ProjectItem from "./ProjectItem";
import user from "../data/user";

function App() {
  return (
    <div>
      <NavBar links={['Home', 'About', 'ProjectList']} />
      <Home username={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} links={user.links} />
      <ProjectList projects={user.projects} />
    </div>
  );
}

function NavBar({ links }) {
  return (
    <nav>
      {links.map((link, index) => (
        <a key={index} href={`#${link.toLowerCase()}`}>{link}</a>
      ))}
    </nav>
  );
}

function ProjectList({ projects }) {
  return (
    <div>
      {projects.map((project) => (
        <ProjectItem key={project.id} {...project} />
      ))}
    </div>
  );
}

function ProjectItem({ technologies, ...project }) {
  return (
    <div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div>
        {technologies.map((technology, index) => (
          <span key={index}>{technology}</span>
        ))}
      </div>
    </div>
  );
}

export default App;
