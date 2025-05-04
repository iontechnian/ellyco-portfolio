import type { Skill } from "../types";
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

// Languages
const languageSkills: Skill[] = [
  {
    id: "typescript",
    name: "Typescript",
    category: "language",
    description:
      "Strongly typed programming language that builds on JavaScript",
    icon: IconTypescript,
  },
  {
    id: "python",
    name: "Python",
    category: "language",
    description: "High-level, general-purpose programming language",
    icon: IconPython,
  },
  {
    id: "csharp",
    name: "C#",
    category: "language",
    description: "Object-oriented programming language from Microsoft",
    icon: IconCSharp,
  },
  {
    id: "solidity",
    name: "Solidity",
    category: "language",
    description:
      "Object-oriented programming language for writing smart contracts",
    icon: IconSolidity,
  },
  {
    id: "sql",
    name: "SQL",
    category: "language",
    description:
      "Standard language for storing, manipulating and retrieving data in databases",
    icon: IconSql,
  },
  {
    id: "gdscript",
    name: "GdScript",
    category: "language",
    description:
      "High-level, dynamically typed programming language used to create content in the Godot Engine",
    icon: IconGdscript,
  },
];

// Cloud Providers
const cloudSkills: Skill[] = [
  {
    id: "aws",
    name: "AWS",
    category: "cloud",
    description: "Amazon Web Services cloud platform",
    icon: IconAws,
  },
  {
    id: "google-cloud",
    name: "Google Cloud",
    category: "cloud",
    description: "Google's suite of cloud computing services",
    icon: IconGoogleCloud,
  },
  {
    id: "azure",
    name: "Azure",
    category: "cloud",
    description: "Microsoft's cloud computing service",
    icon: IconAzure,
  },
];

// Databases
const databaseSkills: Skill[] = [
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "database",
    description: "Powerful, open source object-relational database system",
    icon: IconSql,
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "database",
    description: "Open-source relational database management system",
    icon: IconMysql,
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "database",
    description: "Cross-platform document-oriented database program",
    icon: IconMongodb,
  },
  {
    id: "dynamodb",
    name: "DynamoDB",
    category: "database",
    description: "AWS's fast and flexible NoSQL database service",
    icon: IconDynamodb,
  },
  {
    id: "redis",
    name: "Redis",
    category: "database",
    description:
      "In-memory data structure store used as a database, cache, and message broker",
    icon: IconRedis,
  },
];

// Frameworks/Technologies
const technologySkills: Skill[] = [
  {
    id: "angular",
    name: "Angular",
    category: "technology",
    description: "Platform for building mobile and desktop web applications",
    icon: IconAngular,
  },
  {
    id: "react",
    name: "React",
    category: "technology",
    description: "JavaScript library for building user interfaces",
    icon: IconReact,
  },
  {
    id: "nestjs",
    name: "NestJS",
    category: "technology",
    description: "Progressive Node.js framework for server-side applications",
    icon: IconNestjs,
  },
  {
    id: "fastapi",
    name: "FastAPI",
    category: "technology",
    description: "Modern, fast web framework for building APIs with Python",
    icon: IconFastapi,
  },
  {
    id: "serverless",
    name: "Serverless",
    category: "technology",
    description:
      "Framework for building applications on AWS Lambda and other serverless platforms",
    icon: IconServerless,
  },
  {
    id: "electron",
    name: "Electron",
    category: "technology",
    description:
      "Framework for creating native applications with web technologies",
    icon: IconElectron,
  },
  {
    id: "unity",
    name: "Unity",
    category: "technology",
    description: "Cross-platform game engine developed by Unity Technologies",
    icon: IconUnity,
  },
  {
    id: "godot",
    name: "Godot",
    category: "technology",
    description: "Free and open-source game engine",
    icon: IconGdscript,
  },
  {
    id: "terraform",
    name: "Terraform",
    category: "technology",
    description: "Infrastructure as code software tool",
    icon: IconTerraform,
  },
  {
    id: "docker",
    name: "Docker",
    category: "technology",
    description:
      "Platform for developing, shipping, and running applications in containers",
    icon: IconDocker,
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    category: "technology",
    description:
      "Open-source container orchestration system for automating deployment, scaling, and management",
    icon: IconKubernetes,
  },
  {
    id: "nodejs",
    name: "NodeJS",
    category: "technology",
    description: "JavaScript runtime built on Chrome's V8 JavaScript engine",
    icon: IconNodejs,
  },
  {
    id: "deno",
    name: "Deno",
    category: "technology",
    description: "Secure JavaScript and TypeScript runtime",
    icon: IconDeno,
  },
];

// Combined skills array
const skills: Skill[] = [
  ...languageSkills,
  ...cloudSkills,
  ...databaseSkills,
  ...technologySkills,
];

export { cloudSkills, databaseSkills, languageSkills, technologySkills };
export default skills;
