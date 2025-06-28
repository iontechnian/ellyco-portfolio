import { skillsMap } from "../skills";
import type { Project } from "../types";

import excaliburLqip from "@assets/images/money_growth.jpg?lqip";
import excaliburSrcSet from "@assets/images/money_growth.jpg?w=500;700;900;1200&format=webp&as=srcset";

const excalibur: Project = {
  id: "excalibur",
  name: "Excalibur",
  summary: "Platform for startups to manage their crypto seed rounds",
  skills: [
    skillsMap.typescript,
    skillsMap.solidity,
    skillsMap.nestjs,
    skillsMap.terraform,
    skillsMap.aws,
  ],
  duration: {
    start: { month: 11, year: 2020 },
    end: { month: 9, year: 2021 },
  },
  team_size: 4,
  responsibilities: [
    "Architectured project and integration with multisig wallets",
    "Created Smart Contracts for handling tokenomics (ERC20-based vesting contract)",
    "Created system for parsing transactions within ethereum-based chains",
  ],
  contributions: [
    { name: "Infrastructure", percentage: 60 },
    { name: "Smart Contracts", percentage: 30 },
    { name: "Backend", percentage: 10 },
  ],
  imageCredit: {
    creatorName: "Marcel Strauß",
    creatorUrl:
      "https://unsplash.com/@martzzl?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    originName: "Unsplash",
    originUrl:
      "https://unsplash.com/photos/eight-round-gold-coins-on-white-surface-5gJZZe48BS4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  },
  imageSrcSet: excaliburSrcSet,
  imageLqip: excaliburLqip,
  nameObfuscated: true,
};

export default excalibur;
