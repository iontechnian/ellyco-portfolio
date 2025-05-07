import { useState } from "react";
import SkillChip from "./components/skill-chip";
import { Skill } from "./data/types";
import skills from "./data/skills";

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
    </>
  );
}

export default App;
