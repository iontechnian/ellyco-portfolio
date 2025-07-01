import { skillsMap } from "@data/skills";
import type { Project } from "@data/types";

import lighthouseLqip from "@assets/images/construction.jpg?lqip";
import lighthouseSrcSet from "@assets/images/construction.jpg?w=500;700;900;1200&format=webp&as=srcset";

const lighthouse: Project = {
  id: "lighthouse",
  name: "Lighthouse",
  summary:
    "Real estate software for managing the investments and returns of buildings",
  skills: [
    skillsMap.python,
    skillsMap.fastapi,
    skillsMap.postgresql,
  ],
  duration: {
    start: { month: 11, year: 2024 },
    end: { month: 6, year: 2025 },
  },
  team_size: 4,
  responsibilities: [
    "Worked alongside several teams to implement data entry features",
    "Implemented endpoints to calculate total costs, price per unit, and income distribution for real estate properties",
    "Developed data-driven features for tracking and indexing real estate investment opportunities",
  ],
  contributions: [
    { name: "Backend", percentage: 100 },
  ],
  imageSrcSet: lighthouseSrcSet,
  imageLqip: lighthouseLqip,
  nameObfuscated: true,
};

export default lighthouse;
