import { NavLink } from "react-router";

export default function SideNav({ to, name }: { to: string; name: string }) {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <div
          className="w-[64px] mb-8 relative"
          style={{
            backgroundImage: isActive
              ? "linear-gradient(to right, rgb(from var(--text-color) r g b / 0.08), rgb(from var(--text-color) r g b / 0) 50%)"
              : "none",
          }}
        >
          <div
            className="w-[32px] h-[2px] "
            style={{ backgroundColor: "var(--text-color)" }}
          ></div>
          <p
            className={
              isActive
                ? "text-[32px] ml-4 mt-5 mb-5"
                : "text-[32px] m-auto mt-5 mb-5"
            }
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            {name}
          </p>
          <div
            className="w-[32px] h-[2px]"
            style={{ backgroundColor: "var(--text-color)" }}
          ></div>
          {isActive && (
            <div
              className="w-[4px] h-[64px] absolute top-[calc(50%-32px)] left-0"
              style={{ backgroundColor: "var(--text-color)" }}
            ></div>
          )}
        </div>
      )}
    </NavLink>
  );
}
