import { personalInfo } from "@/data/personal";
import { socialLinks } from "@/data/socialLinks";

export default function Footer() {
    return (
        <footer className="relative w-full py-12 md:py-24 bg-primary-cream">
            <div className="max-w-[1368px] mx-auto px-4 sm:px-8 md:px-16">
                {/* Logo */}
                <div className="flex justify-center mb-6 md:mb-8">
                    <div className="relative">
                        <div className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-[103px] md:h-[101px] bg-gold-dark border-2 border-black rounded-lg translate-x-1.5 translate-y-1.5" />
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-[103px] md:h-[101px] bg-primary-gold border-2 border-black rounded-lg flex items-center justify-center">
                            <span className="font-montserrat font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-10 text-primary-navy">
                                {personalInfo.initials}
                            </span>
                        </div>
                    </div>
                </div>

                <h3 className="font-montserrat font-extrabold text-3xl sm:text-4xl md:text-5xl leading-8 md:leading-10 text-primary-navy text-center mb-6 md:mb-8">
                    {personalInfo.name}
                </h3>

                <p className="font-montserrat font-bold text-xl sm:text-2xl md:text-3xl lg:text-[40px] leading-7 md:leading-[42px] text-primary-navy text-center max-w-[852px] mx-auto mb-12 md:mb-16">
                    {personalInfo.footer.tagline}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-2 mb-12 md:mb-16">
                    {socialLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                            <a
                                key={link.id}
                                href={link.url}
                                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white border-2 border-black rounded-full flex items-center justify-center hover:scale-110 hover:bg-primary-gold hover:border-black transition-all group"
                                aria-label={link.name}>
                                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-primary-navy group-hover:bg-white rounded-full flex items-center justify-center transition-all">
                                    <Icon className="text-white group-hover:text-primary-navy text-2xl sm:text-2xl md:text-3xl" />
                                </div>
                            </a>
                        );
                    })}
                </div>

                {/* Footer Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between border-t border-primary-navy/20 pt-6 md:pt-8 gap-4 md:gap-6">
                    <div className="flex items-center gap-2 md:gap-2.5">
                        <svg className="w-6 h-7 sm:w-7 sm:h-8 md:w-7 md:h-8" viewBox="0 0 33 35" fill="none">
                            <path
                                d="M16.5 0L16.5 35M16.5 35C25.613 35 33 27.165 33 17.5C33 7.835 25.613 0 16.5 0C7.387 0 0 7.835 0 17.5C0 27.165 7.387 35 16.5 35Z"
                                fill="#0D3B66"
                            />
                        </svg>
                        <span className="font-montserrat font-medium text-base sm:text-lg md:text-base lg:text-[25px] leading-6 md:leading-6 lg:leading-[30px] tracking-wider text-primary-navy">
                            {personalInfo.location}
                        </span>
                    </div>

                    <p className="font-montserrat font-medium text-base sm:text-lg md:text-base lg:text-[25px] leading-6 md:leading-6 lg:leading-[30px] text-primary-navy text-center">© 2025, All Rights Reserved.</p>

                    <div className="flex items-center gap-3 sm:gap-4 md:gap-3 lg:gap-8 flex-wrap justify-center">
                        <a href="#" className="font-montserrat font-medium text-base sm:text-lg md:text-sm lg:text-[25px] leading-6 md:leading-6 lg:leading-[30px] text-primary-navy hover:underline whitespace-nowrap">
                            Guides
                        </a>
                        <a href="#" className="font-montserrat font-medium text-base sm:text-lg md:text-sm lg:text-[25px] leading-6 md:leading-6 lg:leading-[30px] text-primary-navy hover:underline whitespace-nowrap">
                            Terms of Use
                        </a>
                        <a href="#" className="font-montserrat font-medium text-base sm:text-lg md:text-sm lg:text-[25px] leading-6 md:leading-6 lg:leading-[30px] text-primary-navy hover:underline whitespace-nowrap">
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
