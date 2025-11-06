"use client";

import { personalInfo } from "@/data/personal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
};

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavClick = (sectionId: string) => {
        setIsMenuOpen(false);
        setTimeout(() => {
            smoothScrollTo(sectionId);
        }, 300);
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-primary-navy rounded-b-[36px] md:rounded-b-[36px] rounded-b-[20px]">
            <nav className="max-w-[1368px] mx-auto px-4 sm:px-8 md:px-16 py-4 md:py-6 flex items-center justify-between">
                {/* Logo */}
                <div className="relative">
                    <div className="absolute w-12 h-12 md:w-16 md:h-16 bg-gold-dark border-2 border-black rounded-lg translate-x-1 translate-y-1" />
                    <div className="relative w-12 h-12 md:w-16 md:h-16 bg-primary-gold border-2 border-black rounded-lg flex items-center justify-center">
                        <span className="font-montserrat font-extrabold text-2xl md:text-4xl leading-10 text-primary-navy">
                            {personalInfo.initials}
                        </span>
                    </div>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center gap-8 lg:gap-12">
                    <a
                        href="#home"
                        onClick={(e) => {
                            e.preventDefault();
                            smoothScrollTo("home");
                        }}
                        className="font-montserrat font-semibold text-2xl lg:text-4xl text-primary-cream hover:text-primary-gold transition-colors">
                        Home
                    </a>
                    <a
                        href="#about"
                        onClick={(e) => {
                            e.preventDefault();
                            smoothScrollTo("about");
                        }}
                        className="font-montserrat font-semibold text-2xl lg:text-4xl text-primary-cream hover:text-primary-gold transition-colors">
                        About
                    </a>
                    <a
                        href="#projects"
                        onClick={(e) => {
                            e.preventDefault();
                            smoothScrollTo("projects");
                        }}
                        className="font-montserrat font-semibold text-2xl lg:text-4xl text-primary-cream hover:text-primary-gold transition-colors">
                        Projects
                    </a>
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            smoothScrollTo("contact");
                        }}
                        className="font-montserrat font-semibold text-2xl lg:text-4xl text-primary-cream hover:text-primary-gold transition-colors">
                        Contact
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden w-12 h-12 bg-primary-gold border-2 border-black rounded-lg flex items-center justify-center z-50 relative"
                    aria-label="Toggle menu">
                    <div className="flex flex-col gap-1.5">
                        <span className={`w-6 h-0.5 bg-primary-navy transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`w-6 h-0.5 bg-primary-navy transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                        <span className={`w-6 h-0.5 bg-primary-navy transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </div>
                </button>
            </nav>

            {/* Full Screen Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden fixed inset-0 bg-primary-navy z-40 flex items-center justify-center"
                        onClick={() => setIsMenuOpen(false)}>
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="flex flex-col gap-8 items-center"
                            onClick={(e) => e.stopPropagation()}>
                            <a
                                href="#home"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick("home");
                                }}
                                className="font-montserrat font-extrabold text-5xl text-primary-cream hover:text-primary-gold transition-colors">
                                Home
                            </a>
                            <a
                                href="#about"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick("about");
                                }}
                                className="font-montserrat font-extrabold text-5xl text-primary-cream hover:text-primary-gold transition-colors">
                                About
                            </a>
                            <a
                                href="#projects"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick("projects");
                                }}
                                className="font-montserrat font-extrabold text-5xl text-primary-cream hover:text-primary-gold transition-colors">
                                Projects
                            </a>
                            <a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick("contact");
                                }}
                                className="font-montserrat font-extrabold text-5xl text-primary-cream hover:text-primary-gold transition-colors">
                                Contact
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
