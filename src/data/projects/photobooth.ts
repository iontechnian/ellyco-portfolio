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
  duration: {
    start: { month: 7, year: 2018 },
    end: { month: 3, year: 2019 },
  },
  team_size: 2,
  responsibilities: [
    "Built system for face recognition using python libraries and AWS Lambda",
    "Proposed price-concious infrastructure for image processing, using serverless architecture",
    "Implemented automated image moderation using AWS Rekognition",
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
