import type { Route } from "./+types/skill-info";

export function clientLoader({ params }: Route.ClientLoaderArgs) {
  const capitalizedSkill = params.skill
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return { skill: params.skill, capitalizedSkill };
}

export default function SkillInfo({ loaderData }: Route.ComponentProps) {
  const { capitalizedSkill, skill } = loaderData;
  
  return (
    <div>
      <h1>SkillInfo</h1>
      <p>Original: {skill}</p>
      <p>Capitalized: {capitalizedSkill}</p>
    </div>
  );
}

