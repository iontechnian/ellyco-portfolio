import { Project } from "@data/types";
import ProjectContributions from "../project-contributions";
import ImageContainer from "./image-container";
import TitleValueUnit from "./title-value-unit";
import moment from "moment";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose?: () => void;
}) {
  const endDate = project.duration.end
    ? moment({
        day: 1,
        month: project.duration.end.month - 1,
        year: project.duration.end.year,
      }).add(1, "month")
    : moment();
  console.log(endDate.toISOString());
  const durationMonths: number = endDate.diff(
    moment({
      day: 1,
      month: project.duration.start.month - 1,
      year: project.duration.start.year,
    }),
    "months"
  );
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black/40 overflow-y-auto"
      onClick={onClose}
    >
      <div className="min-h-full flex items-center justify-center p-4">
        <ImageContainer project={project} onClose={onClose}>
          <h1
            className="text-2xl font-bold text-center mb-10"
            style={{ color: "white" }}
          >
            {project.name}
          </h1>
          <div className="w-full h-full flex flex-wrap items-center justify-center gap-10">
            <div
              className="w-fit h-fit px-2 py-6 rounded-lg"
              style={{ backgroundColor: "var(--base-color)" }}
            >
              <ProjectContributions contributions={project.contributions} />
            </div>
            <div
              className="w-fit min-h-[296px] px-6 py-6 rounded-lg flex flex-wrap gap-10"
              style={{ backgroundColor: "var(--base-color)" }}
            >
              <div className="m-auto">
                <TitleValueUnit
                  title="Duration"
                  value={durationMonths.toString()}
                  unit="Months"
                />
              </div>
              <div className="m-auto">
                <TitleValueUnit
                  title="Team Size"
                  value={project.team_size.toString()}
                  unit="People"
                />
              </div>
              <div className="m-auto max-w-[550px]">
                <h3
                  className="text-lg font-bold text-center"
                  style={{ color: "var(--text-color)" }}
                >
                  Responsibilities
                </h3>
                <ul
                  className="list-disc list-inside"
                  style={{ color: "var(--text-color)" }}
                >
                  {project.responsibilities.map((responsibility, index) => (
                    <li key={index} className="pl-6 -indent-6">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {project.imageCredit && (
            <p className="text-xs mt-10" style={{ color: "var(--text-color)" }}>
              Photo By{" "}
              <a
                className="underline"
                href={project.imageCredit.creatorUrl}
                target="_blank"
              >
                {project.imageCredit.creatorName}
              </a>{" "}
              on{" "}
              <a
                className="underline"
                href={project.imageCredit.originUrl}
                target="_blank"
              >
                {project.imageCredit.originName}
              </a>
            </p>
          )}
        </ImageContainer>
      </div>
    </div>
  );
}
