import { skillsMap } from "../skills";
import type { Project } from "../types";

import retailsyncLqip from "@assets/images/online_shopping.jpg?lqip";
import retailsyncSrcSet from "@assets/images/online_shopping.jpg?w=500;700;900;1200&format=webp&as=srcset";

const retailsync: Project = {
  id: "retailsync",
  name: "RetailSync",
  summary:
    "Service for synchronizing shopify products with Google's Retail API",
  skills: [
    skillsMap.typescript,
    skillsMap.nestjs,
    skillsMap.react,
    skillsMap.googleCloud,
  ],
  duration_months: 12,
  team_size: 2,
  responsibilities: [
    "Collaborated with client to build microservice architecture",
    "Built pipeline for syncing Shopifyproducts with Google's Retail API",
    "Implemented realtime synchronization of inventory",
  ],
  contributions: [
    { name: "Backend", percentage: 70 },
    { name: "Infrastructure", percentage: 20 },
    { name: "Frontend", percentage: 10 },
  ],
  imageCredit: {
    creatorName: "CardMapr.nl",
    creatorUrl:
      "https://unsplash.com/@cardmapr?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    originName: "Unsplash",
    originUrl:
      "https://unsplash.com/photos/black-android-smartphone-on-brown-wooden-table-KEMb3TSbZBc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  },
  imageSrcSet: retailsyncSrcSet,
  imageLqip: retailsyncLqip,
  nameObfuscated: true,
};

export default retailsync;
