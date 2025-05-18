import IconEye from "~icons/mdi/eye-outline";
import { useState, useRef, useEffect } from "react";

export default function ObfuscationDisclaimer() {
  const [selected, setSelected] = useState(false);
  const [isRightSide, setIsRightSide] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatePosition = () => {
      if (componentRef.current) {
        const rect = componentRef.current.getBoundingClientRect();
        const windowMiddle = window.innerWidth / 2;
        setIsRightSide(rect.left > windowMiddle);
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  return (
    <div ref={componentRef}>
      <button onClick={() => setSelected(true)} className="cursor-pointer">
        <IconEye
          className="pt-1 px-1"
          style={{ color: "var(--text-color)", height: "30px", width: "30px" }}
        />
      </button>
      {selected && (
        <>
          {isRightSide ? (
            <div className="rounded-lg grid grid-cols-[1fr_32px] relative">
              <p style={{ color: "var(--text-color)" }}>
                Project Name Censored for Privacy
              </p>
              <IconEye
                className="pt-1 px-1"
                style={{
                  color: "var(--text-color)",
                  height: "28px",
                  width: "28px",
                }}
              />
            </div>
          ) : (
            <div className="rounded-lg grid grid-cols-[32px_1fr] relative">
              <IconEye
                className="pt-1 px-1"
                style={{
                  color: "var(--text-color)",
                  height: "28px",
                  width: "28px",
                }}
              />
              <p style={{ color: "var(--text-color)" }}>
                Project Name Censored for Privacy
              </p>
            </div>
          )}
          <div
            className="absolute top-0 left-0 w-full h-full"
            onClick={() => setSelected(false)}
          ></div>
        </>
      )}
    </div>
  );
}
