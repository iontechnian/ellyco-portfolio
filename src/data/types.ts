import { ForwardRefExoticComponent, SVGProps } from "react";

export interface Skill {
    id: string;
    name: string;
    category: "language" | "cloud" | "database" | "technology" | "misc";
    description: string;
    icon: ForwardRefExoticComponent<SVGProps<SVGSVGElement>>;
    color: string;
    useTextColor?: boolean | undefined;
}

export type Responsibility =
    | "Design"
    | "Development"
    | "Testing"
    | "Maintenance"
    | "Documentation"
    | "Other";

export interface Project {
    id: string;
    name: string;
    summary: string;
    image: string;
    skills: Skill[];
    duration_months: number;
    team_size: number;
    responsibilities: Responsibility[];
    contributions: { name: string; percentage: number }[];
    nameObfuscated: boolean;
}
