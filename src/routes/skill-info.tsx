import projects from "@data/projects";
import Header from "../components/header";
import skills from "../data/skills";
import type { Route } from "./+types/skill-info";
import ProjectCard from "../components/project/project-card";

export function clientLoader({ params }: Route.ClientLoaderArgs) {
  const skill = skills.find((skill) => skill.id === params.skill);
  if (!skill) {
    throw new Response("Skill not found", { status: 404 });
  }

  return { skill };
}

export default function SkillInfo({ loaderData }: Route.ComponentProps) {
  const { skill } = loaderData;

  return (
    <div>
      <Header>{skill.name}</Header>
      <p className="text-center text-md" style={{ color: "var(--text-color)" }}>
        {skill.description}
      </p>
      <br />
      <div className="flex flex-wrap gap-[32px]">
        {projects
          .filter((project) => project.skills.includes(skill))
          .map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </div>
    </div>
  );
}
