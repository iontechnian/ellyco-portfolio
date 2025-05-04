
import Skills from "../components/skills/skills";
import Contact from "../components/contact/contact";
import Bio from "../components/bio/bio";


export default function Home() {
  return (
    <>
      <Bio />
      <Skills />
      <Contact />
      <p className="text-center text-sm mt-[70px] mb-[20px]" style={{ color: "var(--text-color)" }}>Created by Elina. EllyCo {new Date().getFullYear()}</p>
    </>
  );
}
