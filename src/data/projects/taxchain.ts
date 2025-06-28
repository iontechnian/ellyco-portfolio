import { skillsMap } from "../skills";
import type { Project } from "../types";

import taxchainLqip from "@assets/images/taxes.jpg?lqip";
import taxchainSrcSet from "@assets/images/taxes.jpg?w=500;700;900;1200&format=webp&as=srcset";

const taxchain: Project = {
  id: "taxchain",
  name: "TaxChain",
  summary: "Platform for crypto tax reporting and compliance",
  skills: [
    skillsMap.typescript,
    skillsMap.solidity,
    skillsMap.nestjs,
    skillsMap.aws,
  ],
  duration: {
    start: { month: 10, year: 2021 },
    end: { month: 7, year: 2022 },
  },
  team_size: 2,
  responsibilities: [
    "Created infrastructure for massive imports of transactions, using serverless architecture",
    "Implemented tax equations based on transaction history, accounting for regulations on crypto",
    "Supervised junior developer within project",
  ],
  contributions: [
    { name: "Infrastructure", percentage: 50 },
    { name: "Backend", percentage: 40 },
    { name: "Smart Contracts", percentage: 10 },
  ],
  imageCredit: {
    creatorName: "Jakub Żerdzicki",
    creatorUrl:
      "https://unsplash.com/@jakubzerdzicki?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    originName: "Unsplash",
    originUrl:
      "https://unsplash.com/photos/a-remote-control-sitting-on-top-of-a-table-next-to-a-book-heiYgqp0Tsk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  },
  imageSrcSet: taxchainSrcSet,
  imageLqip: taxchainLqip,
  nameObfuscated: true,
};

export default taxchain;
