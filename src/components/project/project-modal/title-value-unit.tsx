export default function TitleValueUnit({
  title,
  value,
  unit,
}: {
  title: string;
  value: string;
  unit: string;
}) {
  return (
    <div className="w-fit h-fit">
      <h3
        className="text-lg text-center font-bold"
        style={{ color: "var(--text-color)" }}
      >
        {title}
      </h3>
      <p
        className="text-7xl text-center"
        style={{ color: "var(--text-color)" }}
      >
        {value}
      </p>
      <p className="text-sm text-center" style={{ color: "var(--text-color)" }}>
        {unit}
      </p>
    </div>
  );
}
