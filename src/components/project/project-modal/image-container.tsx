import type { Project } from "@data/types";
import IconClose from "~icons/mdi/close";

export default function ImageContainer({
  project,
  children,
  onClose,
}: {
  project: Project;
  children: React.ReactNode;
  onClose?: () => void;
}) {
  return (
    <div
      className="relative w-fit h-fit rounded-2xl overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      <picture className="absolute top-0 left-0 w-full h-full block rounded-2xl">
        <source srcSet={project.imageSrcSet} type="image/webp" />
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={project.imageLqip.src}
          style={{
            backgroundImage: `url("${project.imageLqip.lqip}")`,
            backgroundSize: "cover",
          }}
        />
      </picture>
      <div
        className="absolute top-0 left-0 w-full h-full bg-black/20 backdrop-blur-[4px] rounded-2xl"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgb(from var(--base-color) r g b / 0), rgb(from var(--base-color) r g b / 1))",
        }}
      ></div>
      <button
        className="absolute top-0 right-0 m-4 cursor-pointer"
        onClick={onClose}
      >
        <IconClose className="w-10 h-10" style={{ color: "white" }} />
      </button>
      <div className="relative w-fit h-fit m-10">{children}</div>
    </div>
  );
}
