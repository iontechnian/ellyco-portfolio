import Skill from "./skill";
import IconTypescript from "~icons/logos/typescript-icon";
import IconPython from "~icons/logos/python";
import IconCSharp from "~icons/devicon/csharp";
import IconSolidity from "~icons/logos/ethereum-color";
import IconSql from "~icons/logos/postgresql";
import IconGdscript from "~icons/logos/godot-icon";
import SkillCategory from "./skill-category";
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
export default function Skills() {
  return (
    <>
      <h1
        className="text-[45px] text-center mt-[100px] mb-[20px]"
        style={{ color: "var(--blue-color)" }}
      >
        My Skills
      </h1>
      <div className="flex flex-wrap justify-center gap-[32px]">
        <SkillCategory name="Languages">
          <Skill icon={<IconTypescript />} text="Typescript" />
          <Skill icon={<IconPython />} text="Python" />
          <Skill icon={<IconCSharp />} text="C#" />
          <Skill icon={<IconSolidity />} text="Solidity" />
          <Skill icon={<IconSql />} text="SQL" />
          <Skill icon={<IconGdscript />} text="GdScript" />
        </SkillCategory>
        <SkillCategory name="Cloud Providers">
          <Skill icon={<IconAws />} text="AWS" />
          <Skill icon={<IconGoogleCloud />} text="Google Cloud" />
          <Skill icon={<IconAzure />} text="Azure" />
        </SkillCategory>
        <SkillCategory name="Databases">
          <Skill icon={<IconSql />} text="PostgreSQL" />
          <Skill icon={<IconMysql />} text="MySQL" />
          <Skill icon={<IconMongodb />} text="MongoDB" />
          <Skill icon={<IconDynamodb />} text="DynamoDB" />
          <Skill icon={<IconRedis />} text="Redis" />
        </SkillCategory>
        <SkillCategory name="Frameworks/Technologies">
          {/* <div className="grid grid-cols-2 gap-[12px]"> */}
            <Skill icon={<IconAngular />} text="Angular" />
            <Skill icon={<IconReact />} text="React" />
            <Skill icon={<IconNestjs />} text="NestJS" />
            <Skill icon={<IconFastapi />} text="FastAPI" />
            <Skill icon={<IconServerless />} text="Serverless" />
            <Skill icon={<IconElectron />} text="Electron" />
            <Skill icon={<IconUnity />} text="Unity" />
            <Skill icon={<IconGdscript />} text="Godot" />
            <Skill icon={<IconTerraform />} text="Terraform" />
            <Skill icon={<IconDocker />} text="Docker" />
            <Skill icon={<IconKubernetes />} text="Kubernetes" />
            <Skill icon={<IconNodejs />} text="NodeJS" />
            <Skill icon={<IconDeno />} text="Deno" />
          {/* </div> */}
        </SkillCategory>
      </div>
    </>
  );
}
