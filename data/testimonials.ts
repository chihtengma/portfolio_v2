export interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    testimonial: string;
    initials: string;
    avatarColor: "gold" | "navy";
    image: string;
    rotation: number;
    position: {
        left: string;
        top: string;
    };
}

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Daniel Kioko",
        role: "CTO",
        company: "Orlando O. Spencer Inc.",
        testimonial:
            "ChihTeng possesses an excellent understanding of APIs and complex backend systems, and his problem-solving abilities are top-notch. Beyond his technical skills, he's an awesome team player who collaborates effectively and always brings a positive attitude to the table.",
        initials: "DK",
        avatarColor: "gold",
        image: "/testimonials/testimonial1.jpeg",
        rotation: 2,
        position: {
            left: "37px",
            top: "81px",
        },
    },
    {
        id: 2,
        name: "Shiyang Chen",
        role: "Software Engineer",
        company: "Octane",
        testimonial:
            "Ivan's exceptional logical thinking and has excellent problem-solving skills. Working with him is a breeze, as he effortlessly tackles challenges and delivers outstanding results.",
        initials: "SC",
        avatarColor: "navy",
        image: "/testimonials/testimonial2.jpeg",
        rotation: -2.4,
        position: {
            left: "581px",
            top: "81px",
        },
    },
    {
        id: 3,
        name: "Wenxu Chen",
        role: "Software Engineer",
        company: "Hoover & Strong",
        testimonial:
            "Ivan is a passionate, solutions-driven engineer who blends creativity with precision—always curious, always improving, and always ready to tackle the next big challenge.",
        initials: "WC",
        avatarColor: "gold",
        image: "/testimonials/testimonial3.jpeg",
        rotation: 2,
        position: {
            left: "37px",
            top: "376px",
        },
    },
];
