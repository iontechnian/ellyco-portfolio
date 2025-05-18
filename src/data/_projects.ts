import { skillsMap } from "./skills";
import type { Project } from "./types";

import natxLqip from "@assets/images/crypto_trading.jpg?lqip";
import natxSrcSet from "@assets/images/crypto_trading.jpg?w=500;700;900;1200&format=webp&as=srcset";

import photoboothLqip from "@assets/images/photobooth.jpg?lqip";
import photoboothSrcSet from "@assets/images/photobooth.jpg?w=500;700;900;1200&format=webp&as=srcset";

import kaleidoscopeLqip from "@assets/images/presentation.jpg?lqip";
import kaleidoscopeSrcSet from "@assets/images/presentation.jpg?w=500;700;900;1200&format=webp&as=srcset";

import excaliburLqip from "@assets/images/money_growth.jpg?lqip";
import excaliburSrcSet from "@assets/images/money_growth.jpg?w=500;700;900;1200&format=webp&as=srcset";

import taxchainLqip from "@assets/images/taxes.jpg?lqip";
import taxchainSrcSet from "@assets/images/taxes.jpg?w=500;700;900;1200&format=webp&as=srcset";

import retailsyncLqip from "@assets/images/online_shopping.jpg?lqip";
import retailsyncSrcSet from "@assets/images/online_shopping.jpg?w=500;700;900;1200&format=webp&as=srcset";

const projects: Project[] = [
  {
    id: "natx",
    name: "NatX",
    summary: "Nationally recognized exchange for digital assets",
    skills: [
      skillsMap.typescript,
      skillsMap.angular,
      skillsMap.express,
      skillsMap.aws,
    ],
    duration_months: 24,
    team_size: 2,
    responsibilities: [
      "Overhaul existing frontend",
      "Intergrate with third-party exchange framework",
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
  },
  {
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
  },
  {
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
  },
  {
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
    duration_months: 8,
    team_size: 4,
    responsibilities: [
      "Architectured project and integration with multisig wallets",
      "Created Smart Contracts for handling tokenomics",
      "Created system for parsing transactions",
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
  },
  {
    id: "taxchain",
    name: "TaxChain",
    summary: "Platform for crypto tax reporting and compliance",
    skills: [
      skillsMap.typescript,
      skillsMap.solidity,
      skillsMap.nestjs,
      skillsMap.aws,
    ],
    duration_months: 10,
    team_size: 2,
    responsibilities: [
      "Created Architecture for massive imports of transactions",
      "Implemented tax equation based on transaction history",
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
  },
  {
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
  },
];

export default projects;
