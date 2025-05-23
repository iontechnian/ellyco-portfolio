import { skillsMap } from "../skills";
import type { Project } from "../types";

import photoboothLqip from "@assets/images/photobooth.jpg?lqip";
import photoboothSrcSet from "@assets/images/photobooth.jpg?w=500;700;900;1200&format=webp&as=srcset";

const photobooth: Project = {
  id: "photobooth",
  name: "Photobooth",
  summary: "Rentable service for photo booths at events",
  skills: [
    skillsMap.typescript,
    skillsMap.python,
    skillsMap.express,
    skillsMap.aws,
  ],
  duration_months: 12,
  team_size: 2,
  responsibilities: [
    "Built infrastructure for face recognition",
    "Proposed price-concious architecture for image processing",
    "Implemented automated image moderation",
  ],
  contributions: [
    { name: "Backend", percentage: 70 },
    { name: "Infrastructure", percentage: 30 },
  ],
  nameObfuscated: true,
  imageSrcSet: photoboothSrcSet,
  imageLqip: photoboothLqip,
  imageCredit: {
    creatorName: "Polly",
    creatorUrl:
      "https://unsplash.com/@solotravel_photalkgraphy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    originName: "Unsplash",
    originUrl:
      "https://unsplash.com/photos/black-and-white-coffee-shop-fGqEXnEfQls?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  },
};

export default photobooth;
