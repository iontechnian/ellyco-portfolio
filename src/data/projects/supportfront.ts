import { skillsMap } from "@data/skills";
import type { Project } from "@data/types";

import supportfrontLqip from "@assets/images/sms.jpg?lqip";
import supportfrontSrcSet from "@assets/images/sms.jpg?w=500;700;900;1200&format=webp&as=srcset";

const supportfront: Project = {
  id: "supportfront",
  name: "SupportFront",
  summary: "Text messaging inbox for business support teams.",
  skills: [
    skillsMap.typescript,
    skillsMap.nestjs,
    skillsMap.aws,
  ],
  duration: {
    start: { month: 7, year: 2023 },
    end: { month: 10, year: 2023 },
  },
  team_size: 2,
  responsibilities: [
    "Lead technicial decision-making, prioritizing under time constraints",
    "Implemented event-driven API architecture using Kafka",
    "Utilized Cerbos for handling user RBAC",
  ],
  contributions: [
    { name: "Backend", percentage: 70 },
    { name: "Infrastructure", percentage: 30 },
  ],
  imageSrcSet: supportfrontSrcSet,
  imageLqip: supportfrontLqip,
  imageCredit: {
    creatorName: "Samuel Angor",
    creatorUrl:
      "https://unsplash.com/@sammysays?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    originName: "Unsplash",
    originUrl:
      "https://unsplash.com/photos/a-close-up-of-a-cell-phone-with-a-keyboard-qbwGUYHiYnI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  },
  nameObfuscated: true,
};

export default supportfront;
