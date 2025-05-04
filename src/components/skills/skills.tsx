import Skill from "./skill";
import SkillCategory from "./skill-category";
import {
  languageSkills,
  cloudSkills,
  databaseSkills,
  technologySkills,
} from "../../data/skills";

export default function Skills() {
  const categories = [
    { name: "Languages", skills: languageSkills },
    { name: "Cloud Providers", skills: cloudSkills },
    { name: "Databases", skills: databaseSkills },
    { name: "Frameworks/Technologies", skills: technologySkills },
  ];

  return (
    <>
      <h1
        className="text-[45px] text-center mt-[100px] mb-[20px]"
        style={{ color: "var(--blue-color)" }}
      >
        My Skills
      </h1>
      <div className="flex flex-wrap justify-center gap-[32px]">
        {categories.map((category) => (
          <SkillCategory key={category.name} name={category.name}>
            {category.skills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <Skill
                  key={skill.id}
                  icon={<IconComponent />}
                  text={skill.name}
                />
              );
            })}
          </SkillCategory>
        ))}
      </div>
    </>
  );
}
