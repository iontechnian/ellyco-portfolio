import projects from "@data/projects";
import Header from "../components/header";
import ProjectCard from "../components/project/project-card";
import { useState } from "react";
import type { Project } from "@data/types";
import ProjectModal from "../components/project/project-modal/project-modal";
export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  return (
    <>
      <Header>Projects</Header>
      <div className="flex flex-wrap gap-[32px] mx-auto justify-center">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setActiveProject(project)}
          />
        ))}
      </div>
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  );
}
