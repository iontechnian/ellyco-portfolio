import { Link } from "react-router";

export default function Skill({
  icon,
  text,
  skillPath,
}: {
  icon: React.ReactNode;
  text: string;
  skillPath?: string;
}) {
  return (
    <Link to={`skill/${skillPath || text.toLowerCase().replace(" ", "-")}`}>
      <div className="flex items-center gap-[12px] w-[200px] pl-[32px]">
        <div className="text-[30px] flex items-center justify-center w-[32px]">
          {icon}
        </div>
        <span className="text-[16px]" style={{ color: "var(--text-color)" }}>
          {text}
        </span>
      </div>
    </Link>
  );
}
