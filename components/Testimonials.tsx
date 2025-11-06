"use client";

import { testimonials } from "@/data/testimonials";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const threshold = 50;
        if (info.offset.x > threshold && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else if (info.offset.x < -threshold && currentIndex < testimonials.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <section className="relative w-full bg-white py-12 md:py-24 overflow-hidden">
            <div className="max-w-[1368px] mx-auto px-4 sm:px-8 md:px-16">
                <h2 className="font-montserrat font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-tight md:leading-10 text-primary-navy text-center mb-6 md:mb-12">
                    What My Colleagues Say
                </h2>
                <p className="font-montserrat font-bold text-base sm:text-lg md:text-xl lg:text-2xl leading-6 md:leading-[34px] text-primary-navy/70 text-center max-w-[1093px] mx-auto mb-12 md:mb-24">
                    Hear from the amazing people I&apos;ve had the privilege to work with
                </p>

                {/* Desktop Grid */}
                <div className="hidden xl:grid grid-cols-1 gap-12">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="relative">
                            <div className="absolute w-full min-h-[250px] bg-primary-gold rounded-[20px] translate-x-3 translate-y-3" />
                            <div className="relative min-h-[250px] bg-white border-3 border-black rounded-[20px] p-10 flex flex-col gap-8">
                                <p className="font-montserrat font-bold text-[24px] leading-9 text-primary-navy italic">
                                    &quot;{testimonial.testimonial}&quot;
                                </p>
                                <div className="flex items-center gap-6">
                                    <div className="relative w-20 h-20 border-3 border-black rounded-full overflow-hidden shrink-0">
                                        <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" sizes="80px" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h4 className="font-montserrat font-extrabold text-[28px] leading-9 text-primary-navy">
                                            {testimonial.name}
                                        </h4>
                                        <p className="font-montserrat font-semibold text-[20px] leading-7 text-primary-navy/70">
                                            {testimonial.role}, {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
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
                                <div className="absolute w-full h-[380px] md:h-[400px] bg-primary-gold rounded-[20px] translate-x-3 translate-y-3" />
                                <div className="relative h-[380px] md:h-[400px] bg-white border-3 border-black rounded-[20px] p-6 sm:p-7 md:p-9 flex flex-col gap-5 md:gap-6">
                                    <p className="font-montserrat font-bold text-lg sm:text-xl md:text-2xl leading-7 md:leading-8 text-primary-navy italic flex-1">
                                        &quot;{testimonials[currentIndex].testimonial}&quot;
                                    </p>
                                    <div className="flex items-center gap-3 md:gap-5 shrink-0">
                                        <div className="relative w-14 h-14 md:w-16 md:h-16 border-3 border-black rounded-full overflow-hidden shrink-0">
                                            <Image src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} fill className="object-cover" sizes="(max-width: 768px) 56px, 64px" />
                                        </div>
                                        <div className="flex flex-col gap-0.5">
                                            <h4 className="font-montserrat font-extrabold text-lg sm:text-xl md:text-2xl leading-tight text-primary-navy">
                                                {testimonials[currentIndex].name}
                                            </h4>
                                            <p className="font-montserrat font-semibold text-sm sm:text-base md:text-lg leading-tight text-primary-navy/70">
                                                {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Indicators */}
                    <div className="flex justify-center gap-3 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all ${
                                    index === currentIndex ? "bg-primary-gold w-8" : "bg-primary-navy/30"
                                }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
