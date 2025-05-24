import { skillsMap } from "@data/skills";
import type { Project } from "@data/types";

import confrenceLqip from "@assets/images/web_meeting.jpg?lqip";
import confrenceSrcSet from "@assets/images/web_meeting.jpg?w=500;700;900;1200&format=webp&as=srcset";

const confrence: Project = {
  id: "confrence",
  name: "Confrence",
  summary: "Platform for creating online events with conversation tables",
  skills: [
    skillsMap.typescript,
    skillsMap.nestjs,
    skillsMap.googleCloud,
  ],
  duration_months: 8,
  team_size: 2,
  responsibilities: [
    "Built system for online conferencing",
    "Utilized Firebase for realtime seating list",
    "Implemented moderation tools for event hosts",
  ],
  contributions: [
    { name: "Backend", percentage: 75 },
    { name: "Frontend", percentage: 25 },
  ],
  imageSrcSet: confrenceSrcSet,
  imageLqip: confrenceLqip,
  imageCredit: {
    creatorName: "visuals",
    creatorUrl:
      "https://unsplash.com/@visuals?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    originName: "Unsplash",
    originUrl:
      "https://unsplash.com/photos/black-and-white-pug-and-brown-and-white-long-coated-small-dog-sW_BS0OVgv0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  },
  nameObfuscated: true,
};

export default confrence;
