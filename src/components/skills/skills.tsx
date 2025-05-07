import Skill from "./skill";
import SkillCategory from "./skill-category";
import {
  languageSkills,
  cloudSkills,
  databaseSkills,
  technologySkills,
} from "../../data/skills";
import Header from "../header";

export default function Skills() {
  const categories = [
    { name: <>Languages</>, skills: languageSkills },
    { name: <>Cloud Providers</>, skills: cloudSkills },
    { name: <>Databases</>, skills: databaseSkills },
    {
      name: (
        <>
          Frameworks/
          <wbr />
          Technologies
        </>
      ),
      skills: technologySkills,
    },
  ];

  return (
    <>
      <Header>My Skills</Header>
      <div className="flex flex-wrap justify-center gap-[32px]">
        {categories.map((category, index) => (
          <SkillCategory key={index} name={category.name}>
            {category.skills.map((skill) => (
              <Skill key={skill.id} skill={skill} />
            ))}
          </SkillCategory>
        ))}
      </div>
    </>
  );
}
