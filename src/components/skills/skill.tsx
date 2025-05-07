import { Link } from "react-router";
import { Skill as SkillType } from "../../data/types";

export default function Skill({ skill }: { skill: SkillType }) {
  const IconComponent = skill.icon;

  return (
    <Link to={`skill/${skill.id}`}>
      <div className="flex items-center gap-[12px] w-[200px] pl-[32px]">
        <div className="text-[30px] flex items-center justify-center w-[32px]">
          <IconComponent data-use-text-color={skill.useTextColor} />
        </div>
        <span className="text-[16px]" style={{ color: "var(--text-color)" }}>
          {skill.name}
        </span>
      </div>
    </Link>
  );
}
