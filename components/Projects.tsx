"use client";

import { projects } from "@/data/projects";
import { AnimatePresence, motion, PanInfo } from "framer-motion";
import { useState } from "react";

export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [tabletIndex, setTabletIndex] = useState(0);

    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const threshold = 50;
        if (info.offset.x > threshold && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else if (info.offset.x < -threshold && currentIndex < projects.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handleTabletDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const threshold = 50;
        const maxIndex = Math.ceil(projects.length / 2) - 1;
        if (info.offset.x > threshold && tabletIndex > 0) {
            setTabletIndex(tabletIndex - 1);
        } else if (info.offset.x < -threshold && tabletIndex < maxIndex) {
            setTabletIndex(tabletIndex + 1);
        }
    };

    return (
        <section id="projects" className="relative w-full bg-primary-navy py-12 md:py-24">
            <div className="max-w-[1368px] mx-auto px-4 sm:px-8 md:px-16">
                <h2 className="font-montserrat font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-tight md:leading-10 text-primary-cream text-center mb-6 md:mb-12">
                    Featured Projects
                </h2>
                <p className="font-montserrat font-bold text-base sm:text-lg md:text-xl lg:text-2xl leading-6 md:leading-[34px] text-primary-cream/80 text-center max-w-[1093px] mx-auto mb-12 md:mb-24">
                    Explore my recent work showcasing innovative solutions and creative implementations. Each project represents a unique
                    challenge and a successful delivery.
                </p>

                {/* Desktop Grid */}
                <div className="hidden xl:grid grid-cols-2 gap-16 auto-rows-fr">
                    {projects.map((project) => (
                        <div key={project.id} className="relative pt-12 md:pt-14 lg:pt-16 flex flex-col">
                            {/* Number Badge */}
                            <div className="absolute top-0 right-8 md:right-12 lg:right-16 w-[90px] h-[90px] md:w-[100px] md:h-[100px] lg:w-[110px] lg:h-[110px] bg-primary-gold border-3 border-black rounded-full flex items-center justify-center z-10">
                                <span className="font-montserrat font-extrabold text-[64px] md:text-[72px] lg:text-[80px] leading-10 text-primary-navy">
                                    {project.id}
                                </span>
                            </div>

                            <div className="relative flex-1 flex flex-col">
                                <div className="absolute w-full h-full bg-gold-dark rounded-[20px] translate-x-3 translate-y-3" />
                                <div className="relative w-full h-full bg-white border-3 border-black rounded-[20px] p-6 md:p-8 lg:p-10 flex flex-col">
                                    <h3 className="font-montserrat font-extrabold text-2xl md:text-2xl lg:text-[40px] leading-8 md:leading-8 lg:leading-12 text-primary-navy mb-3 md:mb-4 pr-20 md:pr-24 lg:pr-28 shrink-0">
                                        {project.title}
                                    </h3>
                                    <p className="font-montserrat font-bold text-base md:text-sm lg:text-[20px] leading-6 md:leading-relaxed lg:leading-7 text-primary-navy/70 mb-auto">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5 md:gap-2 lg:gap-2 mb-4 md:mb-5 lg:mb-6 shrink-0 mt-4 md:mt-6">
                                        {project.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-2 md:px-2.5 lg:px-4 py-0.5 md:py-1 lg:py-2 bg-primary-cream border-2 border-black rounded-full text-primary-navy font-montserrat font-semibold text-[10px] md:text-[11px] lg:text-sm leading-tight">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="shrink-0">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full h-[50px] md:h-[52px] lg:h-[60px] bg-primary-gold border-3 border-black rounded-[10px] font-montserrat font-bold text-base md:text-lg lg:text-[24px] text-primary-navy hover:bg-gold-dark hover:translate-x-1 hover:translate-y-1 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center cursor-pointer">
                                            View Project
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tablet Carousel (2 cards at a time) */}
                <div className="hidden md:block xl:hidden relative overflow-hidden">
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={tabletIndex}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                onDragEnd={handleTabletDragEnd}
                                initial={{ opacity: 0, x: 300 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -300 }}
                                transition={{ duration: 0.3 }}
                                className="relative">
                                <div className="grid grid-cols-2 gap-8 auto-rows-fr">
                                    {projects.slice(tabletIndex * 2, tabletIndex * 2 + 2).map((project) => (
                                        <div key={project.id} className="relative pt-14 flex flex-col">
                                            {/* Number Badge */}
                                            <div className="absolute top-0 right-12 w-[100px] h-[100px] bg-primary-gold border-3 border-black rounded-full flex items-center justify-center z-10">
                                                <span className="font-montserrat font-extrabold text-[72px] leading-10 text-primary-navy">
                                                    {project.id}
                                                </span>
                                            </div>

                                            <div className="relative flex-1 flex flex-col">
                                                <div className="absolute w-full h-full bg-gold-dark rounded-[20px] translate-x-3 translate-y-3" />
                                                <div className="relative w-full h-full bg-white border-3 border-black rounded-[20px] p-8 flex flex-col">
                                                    <h3 className="font-montserrat font-extrabold text-2xl leading-8 text-primary-navy mb-4 pr-24 shrink-0">
                                                        {project.title}
                                                    </h3>
                                                    <p className="font-montserrat font-bold text-sm leading-relaxed text-primary-navy/70 mb-auto">
                                                        {project.description}
                                                    </p>
                                                    <div className="flex flex-wrap gap-2 mb-5 shrink-0 mt-6">
                                                        {project.technologies.map((tech, index) => (
                                                            <span
                                                                key={index}
                                                                className="px-2.5 py-1 bg-primary-cream border-2 border-black rounded-full text-primary-navy font-montserrat font-semibold text-[11px] leading-tight">
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                    <div className="shrink-0">
                                                        <a
                                                            href={project.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="w-full h-[52px] bg-primary-gold border-3 border-black rounded-[10px] font-montserrat font-bold text-lg text-primary-navy hover:bg-gold-dark hover:translate-x-1 hover:translate-y-1 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center cursor-pointer">
                                                            View Project
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Indicators */}
                    <div className="flex justify-center gap-3 mt-8">
                        {Array.from({ length: Math.ceil(projects.length / 2) }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setTabletIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all ${
                                    index === tabletIndex ? "bg-primary-gold w-8" : "bg-primary-cream/50"
                                }`}
                                aria-label={`Go to projects ${index * 2 + 1}-${Math.min(index * 2 + 2, projects.length)}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Mobile Carousel */}
                <div className="md:hidden relative overflow-hidden">
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                onDragEnd={handleDragEnd}
                                initial={{ opacity: 0, x: 300 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -300 }}
                                transition={{ duration: 0.3 }}
                                className="relative">
                                <div className="relative pt-12 sm:pt-14 md:pt-16">
                                    {/* Number Badge */}
                                    <div className="absolute top-0 right-8 md:right-12 w-20 h-20 sm:w-24 sm:h-24 md:w-[90px] md:h-[90px] bg-primary-gold border-3 border-black rounded-full flex items-center justify-center z-10">
                                        <span className="font-montserrat font-extrabold text-5xl sm:text-6xl md:text-[64px] leading-10 text-primary-navy">
                                            {projects[currentIndex].id}
                                        </span>
                                    </div>

                                    <div className="relative overflow-hidden rounded-[20px]">
                                        <div className="absolute w-full h-full bg-gold-dark rounded-[20px] translate-x-3 translate-y-3" />
                                        <div className="relative w-full bg-white border-3 border-black rounded-[20px] p-6 sm:p-8 md:p-10 flex flex-col gap-4 md:gap-6 overflow-hidden">
                                            <h3 className="font-montserrat font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-[36px] leading-7 md:leading-10 text-primary-navy pr-16 md:pr-24">
                                                {projects[currentIndex].title}
                                            </h3>
                                            <p className="font-montserrat font-bold text-base sm:text-lg md:text-xl lg:text-[20px] leading-6 md:leading-7 text-primary-navy/70">
                                                {projects[currentIndex].description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {projects[currentIndex].technologies.map((tech, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-3 py-1.5 sm:px-4 sm:py-2 bg-primary-cream border-2 border-black rounded-full text-primary-navy font-montserrat font-semibold text-xs sm:text-sm">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="pb-1">
                                                <a
                                                    href={projects[currentIndex].link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex w-full h-[50px] sm:h-[55px] md:h-[60px] bg-primary-gold border-3 border-black rounded-[10px] font-montserrat font-bold text-lg sm:text-xl md:text-2xl lg:text-[24px] text-primary-navy hover:bg-gold-dark hover:translate-x-1 hover:translate-y-1 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] items-center justify-center cursor-pointer">
                                                    View Project
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Indicators */}
                    <div className="flex justify-center gap-3 mt-8">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? "bg-primary-gold w-8" : "bg-primary-cream/50"
                                    }`}
                                aria-label={`Go to project ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
