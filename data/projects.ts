export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image?: string;
    link?: string;
    useIconPlaceholder?: boolean;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Siftly",
        description:
            "Siftly is an intelligent Gmail assistant that automatically categorizes emails, provides one-click actions, and enhances your email experience with AI-powered features.",
        technologies: ["React", "Node.js", "OpenAI API", "TypeScript", "Chrome Extension"],
        image: "",
        link: "https://github.com/chihtengma/Siftly",
        useIconPlaceholder: true,
    },
    {
        id: 2,
        title: "TrackWise",
        description:
            "An intelligent transit application that combines real-time MTA data with AI-powered recommendations to optimize NYC commutes. Features live subway updates, weather-aware route planning, and personalized transit insights.",
        technologies: ["Next.js", "TypeScript", "PostgreSQL", "Python", "FastAPI"],
        image: "/trackwise.png",
        link: "https://github.com/chihtengma/trackwise",
    },
    {
        id: 3,
        title: "Little Coders Studio",
        description:
            "Built a reponsive company website for Little Coders Studio, a software company that help people make ideas into reality. The website showcases their services, portfolio, and team members.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
        image: "/little_coder_studio.png",
        link: "https://www.littlecoderstudio.com/",
    },
    {
        id: 4,
        title: "Flovv",
        description:
            "A all-in-one student management system that streamlines attendance tracking, grade management, and communication between teachers, students, and parents. Built with a user-friendly interface and robust backend.",
        technologies: ["Python", "Django", "PostgreSQL", "Redis", "Docker", "AWS", "React Native"],
        image: "/flovv.png",
        link: "https://github.com/littlecoderstudio",
    },
];
