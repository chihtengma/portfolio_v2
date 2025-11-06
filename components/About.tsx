import { personalInfo } from "@/data/personal";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="relative max-w-[1368px] mx-auto px-4 sm:px-8 md:px-16 pt-0 pb-8 md:pb-16">
            <div className="w-full bg-white border-3 border-black rounded-[20px] p-6 sm:p-12 md:p-16 xl:p-24 flex flex-col xl:flex-row items-center gap-8 xl:gap-16 shadow-[12px_12px_0px_#0D3B66]">
                {/* Profile Image - Hidden on mobile/tablet/iPad, shown on desktop */}
                <div className="hidden xl:block relative w-[385px] h-[481px] shrink-0">
                    <div className="absolute w-full h-full bg-primary-gold rounded-[10px] shadow-[9px_4px_4px_rgba(0,0,0,0.15)] translate-x-3 translate-y-3" />
                    <div className="relative w-full h-full bg-primary-cream border-3 border-black rounded-[10px] flex items-center justify-center overflow-hidden">
                        <Image src="/profile.jpeg" alt={personalInfo.name} fill className="object-cover" sizes="385px" />
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col gap-4 md:gap-8 w-full">
                    <h2 className="font-montserrat font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-tight md:leading-10 text-primary-navy">About me</h2>
                    <div className="flex flex-col gap-2 md:gap-3">
                        {personalInfo.taglines.map((tagline, index) => (
                            <p key={index} className="font-montserrat font-bold text-lg sm:text-xl md:text-2xl lg:text-[32px] leading-6 md:leading-7 text-primary-navy/70">
                                {tagline}
                            </p>
                        ))}
                    </div>
                    <p className="font-montserrat font-bold text-base sm:text-lg md:text-xl lg:text-2xl leading-6 md:leading-[34px] text-primary-navy/80 max-w-[664px]">
                        {personalInfo.about.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-4 flex-wrap">
                        <div className="relative">
                            <div className="absolute w-full sm:w-[202px] lg:w-[202px] h-[60px] sm:h-[70px] bg-gold-dark rounded-[15px] translate-x-2 translate-y-2" />
                            <a
                                href="mailto:chihtengma416@gmail.com"
                                className="relative w-full sm:w-[202px] lg:w-[202px] h-[60px] sm:h-[70px] bg-primary-gold border-2 border-black rounded-[15px] flex items-center justify-center hover:translate-x-1 hover:translate-y-1 hover:bg-gold-dark transition-all cursor-pointer">
                                <span className="font-montserrat font-bold text-xl sm:text-2xl md:text-[32px] leading-8 md:leading-10 text-primary-navy">Hire me</span>
                            </a>
                        </div>
                        <div className="relative">
                            <div className="absolute w-full sm:w-[240px] md:w-[260px] lg:w-[278px] h-[60px] sm:h-[69px] bg-navy-light rounded-[15px] translate-x-2 translate-y-2" />
                            <a
                                href="/CV.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative w-full sm:w-[240px] md:w-[260px] lg:w-[278px] h-[60px] sm:h-[69px] bg-primary-navy border-2 border-black rounded-[15px] flex items-center justify-center hover:translate-x-1 hover:translate-y-1 hover:bg-navy-light transition-all cursor-pointer">
                                <span className="font-montserrat font-bold text-xl sm:text-2xl md:text-[32px] leading-8 md:leading-10 text-primary-cream">Download CV</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
