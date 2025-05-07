import { JSX } from "react";

export default function SkillCategory({
  name,
  children,
}: {
  name: JSX.Element;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 max-w-[420px] mt-2">
      <h2
        className="text-[36px] text-center break-words overflow-hidden"
        style={{ color: "var(--pink-color)" }}
      >
        {name}
      </h2>
      <div className="flex flex-wrap justify-center gap-[12px] items-center">
        {children}
      </div>
    </div>
  );
}
