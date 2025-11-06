import { IconType } from "react-icons";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export interface SocialLink {
    id: string;
    name: string;
    icon: IconType;
    url: string;
}

export const socialLinks: SocialLink[] = [
    {
        id: "linkedin",
        name: "LinkedIn",
        icon: FaLinkedin,
        url: "https://linkedin.com/in/chihtengma",
    },
    {
        id: "github",
        name: "GitHub",
        icon: FaGithub,
        url: "https://github.com/chihtengma",
    },
    {
        id: "email",
        name: "Email",
        icon: HiMail,
        url: "mailto:chihtengma416@gmail.com",
    },
];
