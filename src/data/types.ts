import { ForwardRefExoticComponent, SVGProps } from "react";

export interface Lqip {
    lqip: string;
    width: number;
    height: number;
    src: string;
}
export interface Skill {
    id: string;
    name: string;
    category: "language" | "cloud" | "database" | "technology" | "misc";
    description: string;
    icon: ForwardRefExoticComponent<SVGProps<SVGSVGElement>>;
    color: string;
    useTextColor?: boolean | undefined;
}

export interface Project {
    id: string;
    name: string;
    summary: string;
    imageSrcSet: string;
    imageLqip: Lqip;
    imageCredit?: {
        creatorName: string;
        creatorUrl: string;
        originName: string;
        originUrl: string;
    };
    skills: Skill[];
    duration_months: number;
    team_size: number;
    responsibilities: string[];
    contributions: { name: string; percentage: number }[];
    nameObfuscated: boolean;
}
