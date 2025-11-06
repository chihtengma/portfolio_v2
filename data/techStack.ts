import { IconType } from "react-icons";
import RedisIcon from "@/components/icons/Redis";
import FastapiIcon from "@/components/icons/FastAPI";
import { FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaAngular, FaAws } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress, SiDjango, SiGraphql, SiMongodb, SiPostgresql } from "react-icons/si";

export interface Technology {
    name: string;
    icon: IconType;
}

export interface TechCategory {
    title: string;
    iconImage: string;
    technologies: Technology[];
}

export const techStack: TechCategory[] = [
    {
        title: "Frontend",
        iconImage: "/frontend.png",
        technologies: [
            { name: "React", icon: FaReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Tailwind", icon: SiTailwindcss },
            { name: "Angular", icon: FaAngular },
        ],
    },
    {
        title: "Backend",
        iconImage: "/backend.png",
        technologies: [
            { name: "Node.js", icon: FaNodeJs },
            { name: "Express", icon: SiExpress },
            { name: "Python", icon: FaPython },
            { name: "Django", icon: SiDjango },
            { name: "GraphQL", icon: SiGraphql },
            { name: "FastAPI", icon: FastapiIcon },
            { name: "Redis", icon: RedisIcon },
        ],
    },
    {
        title: "Database & Tools",
        iconImage: "/database.png",
        technologies: [
            { name: "MongoDB", icon: SiMongodb },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "Docker", icon: FaDocker },
            { name: "Git", icon: FaGitAlt },
            { name: "AWS", icon: FaAws },
        ],
    },
];
