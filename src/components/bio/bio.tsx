import IconGithub from "~icons/grommet-icons/github";
import IconLinkedin from "~icons/entypo-social/linkedin-with-circle";
import { useEffect, useState } from "react";

const iconStyle = {
  fontSize: "32px",
  color: "var(--text-color)",
  transition: "color 0.3s ease",
};

export default function Bio() {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    // Set initial height
    setWindowHeight(window.innerHeight);

    // Update height on resize
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{ minHeight: windowHeight ? `${windowHeight}px` : "100vh" }}
    >
      <h1 className="text-[64px] font-bold text-center">
        E
        <span className="ml-2" style={{ color: "var(--blue-color)" }}>
          \
        </span>
        <span style={{ color: "var(--pink-color)" }}>\</span>Y Co
      </h1>
      <div className="gap-[32px] md:gap-[64px] mt-[50px] grid grid-cols-1 md:grid-cols-2 justify-center">
        <p className="max-w-[310px] text-justify text-md mx-auto md:ml-auto md:mr-0">
          Hello! I'm Elina, a Software Engineer who's been obsessed with
          programming ever since I was nine. I have been working professionally
          in the software development industry for at least 10 years. One of my
          biggest strengths is my ability to apply knowledge I learn throughout
          coding assignments. This strength has helped me build a diverse roster
          of projects with varying tech stacks.
        </p>
        <p className="max-w-[310px] text-justify text-md mx-auto md:mx-0">
          When I work on projects, I not only contribute code, but also
          collaborate with clients to transform their business requirements into
          tangible products. With the onset of Artificial Intelligence and its
          prevalence in the industry, this remains a highly valuable skill to
          have.
        </p>
      </div>
      <div className="columns-2 gap-[22px] flex justify-center mt-[50px]">
        <a
          href="https://github.com/iontechnian"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconGithub style={iconStyle} />
        </a>
        <a
          href="https://www.linkedin.com/in/elina-garcia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconLinkedin style={iconStyle} />
        </a>
      </div>
    </div>
  );
}
