import { skillsMap } from "@data/skills";
import type { Project } from "@data/types";

import putterLqip from "@assets/images/golf.jpg?lqip";
import putterSrcSet from "@assets/images/golf.jpg?w=500;700;900;1200&format=webp&as=srcset";

const putter: Project = {
  id: "putter",
  name: "Putter",
  summary: "Booking platform for reserving indoor golf putting ranges",
  skills: [skillsMap.typescript, skillsMap.nestjs, skillsMap.aws],
  duration: {
    start: { month: 11, year: 2023 },
    end: { month: 4, year: 2024 },
  },
  team_size: 2,
  responsibilities: [
    "Built an entirely new backend for a second iteration",
    "Defined architecture for new app",
    "Implemented system for using data from existing CRM",
  ],
  contributions: [
    { name: "Backend", percentage: 50 },
    { name: "Infrastucture", percentage: 50 },
  ],
  imageSrcSet: putterSrcSet,
  imageLqip: putterLqip,
  imageCredit: {
    creatorName: "Ranjith Alingal",
    creatorUrl:
      "https://unsplash.com/@align_all?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    originName: "Unsplash",
    originUrl:
      "https://unsplash.com/photos/people-walking-on-gray-concrete-pathway-during-daytime-IjuC-ZRfn5U?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  },
  nameObfuscated: true,
};

export default putter;
