import projects from "@data/projects";
import Header from "../components/header";
import ProjectCard from "../components/project/project-card";
import { useState, useEffect } from "react";
import type { Project, Skill } from "@data/types";
import ProjectModal from "../components/project/project-modal/project-modal";

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [selectedSkills, setSelectedSkills] = useState<Set<Skill>>(new Set());

  const addSkill = (skill: Skill) => {
    setSelectedSkills((prev) => new Set(prev.add(skill)));
  };

  const removeSkill = (skill: Skill) => {
    setSelectedSkills((prev) => {
      const newSet = new Set(prev);
      newSet.delete(skill);
      return newSet;
    });
  };

  const toggleSkill = (skill: Skill) => {
    if (selectedSkills.has(skill)) {
      removeSkill(skill);
    } else {
      addSkill(skill);
    }
  };

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeProject]);

  return (
    <>
      <Header>Projects</Header>
      <div className="flex flex-wrap gap-[32px] mx-auto justify-center">
        {projects
          .filter((project) => {
            if (selectedSkills.size === 0) return true;
            return project.skills.some((skill) => selectedSkills.has(skill));
          })
          .map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setActiveProject(project)}
              selectedSkills={selectedSkills}
              toggleSkill={toggleSkill}
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
