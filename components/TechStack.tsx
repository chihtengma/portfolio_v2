"use client";

import { techStack } from "@/data/techStack";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

export default function TechStack() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const threshold = 50;
        if (info.offset.x > threshold && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else if (info.offset.x < -threshold && currentIndex < techStack.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <section className="relative w-full bg-primary-cream py-12 md:py-24">
            <div className="max-w-[1368px] mx-auto px-4 sm:px-8 md:px-16">
                <h2 className="font-montserrat font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-tight md:leading-10 text-primary-navy text-center mb-6 md:mb-12">Tech Stack</h2>
                <p className="font-montserrat font-bold text-base sm:text-lg md:text-xl lg:text-2xl leading-6 md:leading-[34px] text-primary-navy/70 text-center max-w-[1093px] mx-auto mb-12 md:mb-24">
                    Technologies and tools I use to bring ideas to life
                </p>

                {/* Desktop Grid */}
                <div className="hidden xl:grid xl:grid-cols-3 gap-12 auto-rows-fr">
                    {techStack.map((category, index) => {
                        return (
                            <div key={index} className="relative flex flex-col">
                                <div className="absolute w-full h-full bg-primary-gold rounded-[20px] translate-x-3 translate-y-3" />
                                <div className="relative w-full h-full bg-white border-3 border-black rounded-[20px] p-10 flex flex-col">
                                    <div className="flex items-center justify-center mb-6">
                                        <div className="w-20 h-20 bg-primary-navy rounded-full flex items-center justify-center p-4">
                                            <Image
                                                src={category.iconImage}
                                                alt={category.title}
                                                width={80}
                                                height={80}
                                                className="w-full h-full object-contain invert brightness-0 contrast-100"
                                                style={{ filter: "invert(1) brightness(2)" }}
                                            />
                                        </div>
                                    </div>
                                    <h3 className="font-montserrat font-extrabold text-[36px] leading-[1.2] text-primary-navy text-center mb-6 h-[86px] flex items-center justify-center">
                                        {category.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-3 justify-center flex-1 content-start">
                                        {category.technologies.map((tech, techIndex) => {
                                            const TechIcon = tech.icon;
                                            return (
                                                <span
                                                    key={techIndex}
                                                    className="px-4 py-2 bg-primary-cream border-2 border-black rounded-full text-primary-navy font-montserrat font-semibold text-sm flex items-center gap-2 whitespace-nowrap">
                                                    <TechIcon className="text-base shrink-0" />
                                                    {tech.name}
                                                </span>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Mobile/Tablet Carousel */}
                <div className="xl:hidden relative overflow-hidden">
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
                                <div className="absolute w-full min-h-[400px] bg-primary-gold rounded-[20px] translate-x-3 translate-y-3" />
                                <div className="relative w-full min-h-[400px] bg-white border-3 border-black rounded-[20px] p-8 md:p-10 flex flex-col">
                                    <div className="flex items-center justify-center mb-6">
                                        <div className="w-20 h-20 bg-primary-navy rounded-full flex items-center justify-center p-4">
                                            <Image
                                                src={techStack[currentIndex].iconImage}
                                                alt={techStack[currentIndex].title}
                                                width={80}
                                                height={80}
                                                className="w-full h-full object-contain invert brightness-0 contrast-100"
                                                style={{ filter: "invert(1) brightness(2)" }}
                                            />
                                        </div>
                                    </div>
                                    <h3 className="font-montserrat font-extrabold text-3xl md:text-4xl leading-[1.2] text-primary-navy text-center mb-6 min-h-[70px] md:h-[86px] flex items-center justify-center">
                                        {techStack[currentIndex].title}
                                    </h3>
                                    <div className="flex flex-wrap gap-2.5 md:gap-3 justify-center flex-1 content-start">
                                        {techStack[currentIndex].technologies.map((tech, techIndex) => {
                                            const TechIcon = tech.icon;
                                            return (
                                                <span
                                                    key={techIndex}
                                                    className="px-3.5 py-1.5 md:px-4 md:py-2 bg-primary-cream border-2 border-black rounded-full text-primary-navy font-montserrat font-semibold text-sm md:text-base flex items-center gap-2 whitespace-nowrap">
                                                    <TechIcon className="text-base md:text-lg shrink-0" />
                                                    {tech.name}
                                                </span>
                                            );
                                        })}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Indicators */}
                    <div className="flex justify-center gap-3 mt-8">
                        {techStack.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all ${
                                    index === currentIndex ? "bg-primary-gold w-8" : "bg-primary-navy/30"
                                }`}
                                aria-label={`Go to ${techStack[index].title}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
