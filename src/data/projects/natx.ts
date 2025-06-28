import { skillsMap } from "../skills";
import type { Project } from "../types";

import natxLqip from "@assets/images/crypto_trading.jpg?lqip";
import natxSrcSet from "@assets/images/crypto_trading.jpg?w=500;700;900;1200&format=webp&as=srcset";

const natx: Project = {
  id: "natx",
  name: "NatX",
  summary: "Nationally recognized exchange for digital assets",
  skills: [
    skillsMap.typescript,
    skillsMap.angular,
    skillsMap.express,
    skillsMap.aws,
  ],
  duration: {
    start: { month: 10, year: 2017 },
    end: { month: 4, year: 2018 },
  },
  team_size: 2,
  responsibilities: [
    "Overhaul existing frontend, rebuilding components for Angular 4",
    "Intergrate with third-party exchange framework, providing wallets and crypto trading",
    "Implement KYC and notification system",
  ],
  contributions: [
    { name: "Frontend", percentage: 40 },
    { name: "Backend", percentage: 60 },
  ],
  nameObfuscated: true,
  imageSrcSet: natxSrcSet,
  imageLqip: natxLqip,
  imageCredit: {
    creatorName: "Anne Nygård",
    creatorUrl:
      "https://unsplash.com/@polarmermaid?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    originName: "Unsplash",
    originUrl:
      "https://unsplash.com/photos/a-close-up-of-a-car-dashboard-t0rMooxmZc0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  },
};

export default natx;
