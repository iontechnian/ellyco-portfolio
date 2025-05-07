import Color from "colorjs.io";
import { Skill } from "../data/types";

export default function SkillChip({
  skill,
  active,
  onClick,
}: {
  skill: Skill;
  active: boolean;
  onClick: () => void;
}) {
  const darkerColor = new Color(skill.color).darken(0.3).toString();

  return (
    <button
      className="px-2 py-1 text-sm inline-block rounded-xl cursor-pointer border-2 border-solid"
      style={{
        backgroundColor: active ? darkerColor : "transparent",
        borderColor: active ? darkerColor : skill.color,
      }}
      onClick={onClick}
    >
      <p
        className="inline-block"
        style={{ color: active ? "#fff" : "var(--text-color)" }}
      >
        {skill.name}
      </p>
    </button>
  );
}
