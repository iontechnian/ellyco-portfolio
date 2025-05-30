import { useState } from "react";
import SkillChip from "./components/skill-chip";
import { Skill } from "./data/types";
import skills from "./data/skills";
import projects from "./data/projects";
import ProjectModal from "./components/project/project-modal/project-modal";
function App() {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);

  return (
    <>
      {skills.map((skill) => (
        <SkillChip
          key={skill.id}
          skill={skill}
          active={activeSkill ? activeSkill?.id === skill.id : true}
          onClick={() =>
            activeSkill == skill ? setActiveSkill(null) : setActiveSkill(skill)
          }
        />
      ))}
      <ProjectModal project={projects[4]} />
    </>
  );
}

export default App;
