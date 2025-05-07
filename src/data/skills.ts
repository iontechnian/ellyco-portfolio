import type { Skill } from "./types";
import IconTypescript from "~icons/logos/typescript-icon";
import IconPython from "~icons/logos/python";
import IconCSharp from "~icons/devicon/csharp";
import IconSolidity from "~icons/logos/ethereum-color";
import IconSql from "~icons/logos/postgresql";
import IconGdscript from "~icons/logos/godot-icon";
import IconAws from "~icons/logos/aws";
import IconAzure from "~icons/logos/microsoft-azure";
import IconGoogleCloud from "~icons/logos/google-cloud";
import IconMongodb from "~icons/logos/mongodb-icon";
import IconDynamodb from "~icons/logos/aws-dynamodb";
import IconRedis from "~icons/logos/redis";
import IconMysql from "~icons/logos/mysql";
import IconAngular from "~icons/logos/angular-icon";
import IconReact from "~icons/logos/react";
import IconNestjs from "~icons/logos/nestjs";
import IconFastapi from "~icons/logos/fastapi-icon";
import IconServerless from "~icons/logos/serverless";
import IconUnity from "~icons/logos/unity";
import IconTerraform from "~icons/logos/terraform-icon";
import IconDocker from "~icons/logos/docker-icon";
import IconKubernetes from "~icons/logos/kubernetes";
import IconNodejs from "~icons/logos/nodejs-icon";
import IconDeno from "~icons/logos/deno";
import IconElectron from "~icons/logos/electron";
import IconArduino from "~icons/logos/arduino";
import IconExpress from "~icons/logos/express";
// Languages
const languageSkills = [
  {
    id: "typescript",
    name: "Typescript",
    category: "language",
    description:
      "Strongly typed programming language that builds on JavaScript",
    icon: IconTypescript,
    color: "#3178C6",
  },
  {
    id: "python",
    name: "Python",
    category: "language",
    description: "High-level, general-purpose programming language",
    icon: IconPython,
    color: "#3776AB",
  },
  {
    id: "csharp",
    name: "C#",
    category: "language",
    description: "Object-oriented programming language from Microsoft",
    icon: IconCSharp,
    color: "#512BD4",
  },
  {
    id: "solidity",
    name: "Solidity",
    category: "language",
    description:
      "Object-oriented programming language for writing smart contracts",
    icon: IconSolidity,
    color: "#627EEA",
  },
  {
    id: "sql",
    name: "SQL",
    category: "language",
    description:
      "Standard language for storing, manipulating and retrieving data in databases",
    icon: IconSql,
    color: "#336791",
  },
  {
    id: "gdscript",
    name: "GdScript",
    category: "language",
    description:
      "High-level, dynamically typed programming language used to create content in the Godot Engine",
    icon: IconGdscript,
    color: "#478CBF",
  },
] as const;

// Cloud Providers
const cloudSkills = [
  {
    id: "aws",
    name: "AWS",
    category: "cloud",
    description: "Amazon Web Services cloud platform",
    icon: IconAws,
    color: "#FF9900",
  },
  {
    id: "google-cloud",
    name: "Google Cloud",
    category: "cloud",
    description: "Google's suite of cloud computing services",
    icon: IconGoogleCloud,
    color: "#4285F4",
  },
  {
    id: "azure",
    name: "Azure",
    category: "cloud",
    description: "Microsoft's cloud computing service",
    icon: IconAzure,
    color: "#0089D6",
  },
] as const;

// Databases
const databaseSkills = [
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "database",
    description: "Powerful, open source object-relational database system",
    icon: IconSql,
    color: "#336791",
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "database",
    description: "Open-source relational database management system",
    icon: IconMysql,
    color: "#4479A1",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "database",
    description: "Cross-platform document-oriented database program",
    icon: IconMongodb,
    color: "#47A248",
  },
  {
    id: "dynamodb",
    name: "DynamoDB",
    category: "database",
    description: "AWS's fast and flexible NoSQL database service",
    icon: IconDynamodb,
    color: "#4053D6",
  },
  {
    id: "redis",
    name: "Redis",
    category: "database",
    description:
      "In-memory data structure store used as a database, cache, and message broker",
    icon: IconRedis,
    color: "#DC382D",
  },
] as const;

// Frameworks/Technologies
const technologySkills = [
  {
    id: "angular",
    name: "Angular",
    category: "technology",
    description: "Platform for building mobile and desktop web applications",
    icon: IconAngular,
    color: "#DD0031",
  },
  {
    id: "react",
    name: "React",
    category: "technology",
    description: "JavaScript library for building user interfaces",
    icon: IconReact,
    color: "#61DAFB",
  },
  {
    id: "nestjs",
    name: "NestJS",
    category: "technology",
    description: "Progressive Node.js framework for server-side applications",
    icon: IconNestjs,
    color: "#E0234E",
  },
  {
    id: "fastapi",
    name: "FastAPI",
    category: "technology",
    description: "Modern, fast web framework for building APIs with Python",
    icon: IconFastapi,
    color: "#009688",
  },
  {
    id: "serverless",
    name: "Serverless",
    category: "technology",
    description:
      "Framework for building applications on AWS Lambda and other serverless platforms",
    icon: IconServerless,
    color: "#FD5750",
  },
  {
    id: "electron",
    name: "Electron",
    category: "technology",
    description:
      "Framework for creating native applications with web technologies",
    icon: IconElectron,
    color: "#47848F",
  },
  {
    id: "unity",
    name: "Unity",
    category: "technology",
    description: "Cross-platform game engine developed by Unity Technologies",
    icon: IconUnity,
    color: "#000000",
  },
  {
    id: "godot",
    name: "Godot",
    category: "technology",
    description: "Free and open-source game engine",
    icon: IconGdscript,
    color: "#478CBF",
  },
  {
    id: "terraform",
    name: "Terraform",
    category: "technology",
    description: "Infrastructure as code software tool",
    icon: IconTerraform,
    color: "#7B42BC",
  },
  {
    id: "docker",
    name: "Docker",
    category: "technology",
    description:
      "Platform for developing, shipping, and running applications in containers",
    icon: IconDocker,
    color: "#2496ED",
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    category: "technology",
    description:
      "Open-source container orchestration system for automating deployment, scaling, and management",
    icon: IconKubernetes,
    color: "#326CE5",
  },
  {
    id: "nodejs",
    name: "NodeJS",
    category: "technology",
    description: "JavaScript runtime built on Chrome's V8 JavaScript engine",
    icon: IconNodejs,
    color: "#339933",
  },
  {
    id: "deno",
    name: "Deno",
    category: "technology",
    description: "Secure JavaScript and TypeScript runtime",
    icon: IconDeno,
    color: "#000000",
  },
  {
    id: "arduino",
    name: "Arduino",
    category: "technology",
    description: "Open-source electronics platform",
    icon: IconArduino,
    color: "#00979D",
  },
  {
    id: "express",
    name: "Express",
    category: "technology",
    description: "Fast, unopinionated, minimalist web framework for Node.js",
    icon: IconExpress,
    color: "#000000",
    useTextColor: true,
  },
] as const;

// Combined skills array
const skills = [
  ...languageSkills,
  ...cloudSkills,
  ...databaseSkills,
  ...technologySkills,
] as const;

export type SkillId = (typeof skills)[number]["id"];

const skillsMap = skills.reduce((acc, skill) => {
  acc[skill.id] = skill;
  return acc;
}, {} as Record<SkillId, Skill>);

export {
  cloudSkills,
  databaseSkills,
  languageSkills,
  skillsMap,
  technologySkills,
};
export default skills;
