"use client";

import { personalInfo } from "@/data/personal";
import { socialLinks } from "@/data/socialLinks";
import Image from "next/image";
import { motion } from "framer-motion";
import Particles from "./Particles";

export default function Hero() {
    return (
        <section id="home" className="relative max-w-[1368px] mx-auto px-4 sm:px-8 md:px-16 pt-12 md:pt-16 pb-0 min-h-screen flex items-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                {/* Gradient Mesh Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-cream via-primary-cream to-primary-gold/30" />

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-5">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#0D3B66" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>
            </div>

            {/* Particles Effect */}
            <Particles />
            <motion.div
                className="flex flex-col gap-4 md:gap-8 max-w-xl relative z-10 md:max-w-xl"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}>
                <motion.h2
                    className="font-montserrat font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-tight md:leading-10 text-primary-navy"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}>
                    Hello,
                </motion.h2>
                <motion.h1
                    className="font-montserrat font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-tight md:leading-10 text-primary-navy"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}>
                    I&apos;m {personalInfo.name}
                </motion.h1>
                <motion.div
                    className="flex flex-wrap gap-2 md:gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}>
                    {personalInfo.taglines.map((tagline, index) => (
                        <span key={index} className="font-montserrat font-semibold text-base sm:text-lg md:text-xl lg:text-[25px] leading-6 md:leading-7 text-primary-navy/70">
                            {tagline}
                            {index < personalInfo.taglines.length - 1 ? "," : ""}
                        </span>
                    ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-6 md:mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}>
                    {/* Hire Me Button */}
                    <motion.div className="relative" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <div className="absolute w-full sm:w-[202px] h-[60px] sm:h-[70px] bg-gold-dark rounded-[15px] translate-x-2 translate-y-2" />
                        <a
                            href="mailto:chihtengma416@gmail.com"
                            className="relative w-full sm:w-[202px] h-[60px] sm:h-[70px] bg-primary-gold border-2 border-black rounded-[15px] flex items-center justify-center hover:translate-x-1 hover:translate-y-1 hover:bg-gold-dark transition-all cursor-pointer">
                            <span className="font-montserrat font-bold text-xl sm:text-2xl md:text-[32px] leading-8 md:leading-10 text-primary-navy">Hire me</span>
                        </a>
                    </motion.div>

                    {/* Download CV Button */}
                    <motion.div className="relative" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <div className="absolute w-full sm:w-[278px] h-[60px] sm:h-[69px] bg-navy-light rounded-[15px] translate-x-2 translate-y-2" />
                        <a
                            href="/CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative w-full sm:w-[278px] h-[60px] sm:h-[69px] bg-primary-navy border-2 border-black rounded-[15px] flex items-center justify-center hover:translate-x-1 hover:translate-y-1 hover:bg-navy-light transition-all cursor-pointer">
                            <span className="font-montserrat font-bold text-xl sm:text-2xl md:text-[32px] leading-8 md:leading-10 text-primary-cream">Download CV</span>
                        </a>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
                className="absolute right-4 sm:right-6 md:right-8 lg:right-12 xl:right-24 top-16 sm:top-20 md:top-24 lg:top-28 xl:top-32 z-10"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}>
                <motion.div className="relative w-[150px] h-[188px] sm:w-[220px] sm:h-[275px] md:w-[280px] md:h-[350px] lg:w-[350px] lg:h-[438px] xl:w-[550px] xl:h-[688px]" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                    {/* Shadow */}
                    <div className="absolute w-full h-full bg-primary-gold rounded-[10px] shadow-[9px_4px_4px_rgba(0,0,0,0.15)] translate-x-2 sm:translate-x-3 translate-y-2 sm:translate-y-3" />
                    {/* Main Card */}
                    <div className="relative w-full h-full bg-white border-2 sm:border-3 border-black rounded-[10px] flex items-center justify-center overflow-hidden">
                        <Image src="/profile.jpeg" alt={personalInfo.name} fill className="object-cover" priority loading="eager" sizes="(max-width: 640px) 150px, (max-width: 768px) 220px, (max-width: 1024px) 280px, (max-width: 1280px) 350px, 550px" />
                    </div>
                </motion.div>
            </motion.div>

            {/* Social Links Sidebar */}
            <div className="hidden md:flex fixed right-4 lg:right-12 top-1/2 transform -translate-y-1/2 flex-col gap-2 lg:gap-3 z-40">
                {socialLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                        <motion.a
                            key={link.id}
                            href={link.url}
                            className="w-16 h-16 lg:w-24 lg:h-24 bg-white border-2 border-black rounded-full flex items-center justify-center hover:scale-110 hover:bg-primary-gold hover:border-black transition-all group"
                            aria-label={link.name}
                            initial={{ opacity: 0, y: 30, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                                duration: 0.6,
                                delay: 1 + index * 0.2,
                                ease: [0.34, 1.56, 0.64, 1],
                            }}
                            whileHover={{ scale: 1.15, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}>
                            <div className="w-14 h-14 lg:w-20 lg:h-20 bg-primary-navy group-hover:bg-white rounded-full flex items-center justify-center transition-all">
                                <Icon className="text-white group-hover:text-primary-navy text-2xl lg:text-3xl" />
                            </div>
                        </motion.a>
                    );
                })}
            </div>
        </section>
    );
}
