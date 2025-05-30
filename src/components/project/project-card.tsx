import { Project } from "@data/types";
import { useState } from "react";
import { useDevice } from "../../DeviceContext";

import IconEye from "~icons/mdi/eye-outline";
import IconArrowBack from "~icons/mdi/arrow-back";
import SkillChip from "../skill-chip";

export default function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  const [showObfMessage, setShowObfMessage] = useState(false);
  const [showExtraSkills, setShowExtraSkills] = useState(false);
  const { isMobile } = useDevice();

  const skillChips = () => {
    if (showExtraSkills) {
      return [
        <div
          key="back"
          className="px-2 py-1 text-xs inline-block rounded-xl cursor-pointer border-2 border-solid"
          style={{
            backgroundColor: "#555",
            borderColor: "#555",
          }}
          onClick={(event) => {
            event.stopPropagation();
            setShowExtraSkills(false);
          }}
        >
          <p className="inline-block" style={{ color: "#fff" }}>
            <IconArrowBack />
          </p>
        </div>,
        ...project.skills.slice(3).map((skill) => (
          <SkillChip
            key={skill.id}
            skill={skill}
            active={true}
            onClick={(event) => {
              event.stopPropagation();
            }}
          />
        )),
      ];
    }
    let skills = [...project.skills];
    // Show fewer skills on mobile to save space
    const maxSkills = isMobile ? 2 : 4;
    if (skills.length > maxSkills) {
      skills = skills.slice(0, isMobile ? 2 : 3);
    }
    const chips = skills.map((skill) => (
      <SkillChip
        key={skill.id}
        skill={skill}
        active={true}
        onClick={(event) => {
          event.stopPropagation();
        }}
      />
    ));
    if (project.skills.length > skills.length) {
      chips.push(
        <div
          key="more"
          className="px-2 py-1 text-xs inline-block rounded-xl cursor-pointer border-2 border-solid"
          style={{
            backgroundColor: "#555",
            borderColor: "#555",
          }}
          onClick={(event) => {
            event.stopPropagation();
            setShowExtraSkills(true);
          }}
        >
          <p className="inline-block" style={{ color: "#fff" }}>
            +{project.skills.length - skills.length}
          </p>
        </div>
      );
    }
    return chips;
  };

  return (
    <div
      className="max-w-[320px] w-[320px] h-[230px] rounded-lg overflow-hidden grid grid-rows-[80px_1fr] cursor-pointer"
      style={{
        background: `linear-gradient(to bottom, var(--base-color), var(--tone-1-color))`,
      }}
      onClick={onClick}
    >
      <picture className="w-full h-[80px] block">
        <source srcSet={project.imageSrcSet} type="image/webp" />
        <img
          className="w-full h-[80px] object-cover"
          src={project.imageLqip.src}
          style={{
            backgroundImage: `url("${project.imageLqip.lqip}")`,
            backgroundSize: "cover",
          }}
        />
      </picture>
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-full grid grid-rows-[32px_1fr_calc(28px+var(--spacing)*4)]">
          <div className="w-full grid grid-cols-[1fr_32px]">
            <p className="px-2 pt-2 font-medium">{project.name}</p>
            {!showObfMessage && (
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  setShowObfMessage(true);
                }}
                className="cursor-pointer"
              >
                <IconEye
                  className="pt-1 px-1"
                  style={{
                    color: "var(--text-color)",
                    height: "31px",
                    width: "31px",
                  }}
                />
              </button>
            )}
          </div>
          <div>
            <p className="px-2 pt-2">{project.summary}</p>
          </div>
          <div className="h-full w-full p-2 gap-2 flex">{skillChips()}</div>
        </div>
        {showObfMessage && (
          <div
            className="absolute top-0 left-0 w-full h-full backdrop-blur-xs bg-black/15"
            onClick={(event) => {
              event.stopPropagation();
              setShowObfMessage(false);
            }}
          >
            <IconEye
              className="pt-1 px-1 absolute top-[1px] right-[1px]"
              style={{
                color: "var(--text-color)",
                height: "31px",
                width: "31px",
              }}
            />
            <p
              className="flex items-center justify-center h-full select-none"
              style={{ color: "var(--text-color)" }}
            >
              Project Name Censored for Privacy
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
