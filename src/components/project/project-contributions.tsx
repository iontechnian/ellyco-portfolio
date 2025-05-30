import { Project } from "@data/types";
import { PieChart, Pie, Cell, Legend } from "recharts";

const colors = ["#ec8398", "#2f9fca", "#c77c35", "#6e2594"];

export default function ProjectContributions({
  contributions,
  width,
  height,
}: {
  contributions: Project["contributions"];
  width?: number;
  height?: number;
}) {
  const _width = width || 250;
  const _height = height || 220;

  return (
    <div className="w-fit h-fit">
      <h3
        className="text-lg font-bold text-center"
        style={{ color: "var(--text-color)" }}
      >
        Contributions
      </h3>
      <PieChart
        width={_width}
        height={_height}
        style={{
          outline: "none",
          userSelect: "none",
          WebkitUserSelect: "none",
          MozUserSelect: "none",
          msUserSelect: "none",
        }}
      >
        <Pie
          data={contributions}
          dataKey="percentage"
          nameKey="name"
          paddingAngle={5}
          innerRadius={45}
          outerRadius={70}
          style={{ outline: "none" }}
        >
          {contributions.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              fill={colors[index % colors.length]}
              stroke=""
              style={{ outline: "none" }}
            />
          ))}
        </Pie>
        <Legend
          verticalAlign="bottom"
          height={36}
          iconType="circle"
          layout="horizontal"
        />
      </PieChart>
    </div>
  );
}
