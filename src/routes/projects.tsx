import projects from "@data/projects";
import Header from "../components/header";
import ProjectCard from "../components/project/project-card";

export default function Projects() {
  return (
    <>
      <Header>Projects</Header>
      <div className="flex flex-wrap gap-[32px] mx-auto justify-center">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}
