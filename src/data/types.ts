import { ForwardRefExoticComponent, SVGProps } from "react";

export interface Skill {
    id: string;
    name: string;
    category: 'language' | 'cloud' | 'database' | 'technology' | 'misc';
    description: string;
    icon: ForwardRefExoticComponent<SVGProps<SVGSVGElement>>;
}
