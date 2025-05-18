import { skillsMap } from "../skills";
import type { Project } from "../types";

import kaleidoscopeLqip from "@assets/images/presentation.jpg?lqip";
import kaleidoscopeSrcSet from "@assets/images/presentation.jpg?w=500;700;900;1200&format=webp&as=srcset";

const kaleidoscope: Project = {
  id: "kaleidoscope",
  name: "Kaleidoscope",
  summary: "Platform for creating immersive events and presentations",
  skills: [
    skillsMap.typescript,
    skillsMap.graphql,
    skillsMap.nestjs,
    skillsMap.angular,
    skillsMap.aws,
  ],
  duration_months: 12,
  team_size: 2,
  responsibilities: [
    "Developed project's backend with NestJS and GraphQL",
    "Architectured graph-based representation of event content",
    "Built Backoffice with Angular 8",
  ],
  contributions: [
    { name: "Backend", percentage: 70 },
    { name: "Infrastructure", percentage: 20 },
    { name: "Frontend", percentage: 10 },
  ],
  nameObfuscated: true,
  imageSrcSet: kaleidoscopeSrcSet,
  imageLqip: kaleidoscopeLqip,
  imageCredit: {
    creatorName: "Kwynett Bragado",
    creatorUrl:
      "https://unsplash.com/@kwynettbrgdo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    originName: "Unsplash",
    originUrl:
      "https://unsplash.com/photos/a-group-of-people-standing-in-front-of-a-display-of-paintings-FSPPPpLNlas?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  },
};

export default kaleidoscope;
