export default function Contact() {
    return (
        <section id="contact" className="relative w-full bg-primary-navy py-12 md:py-24">
            <div className="max-w-[1368px] mx-auto px-4 sm:px-8 md:px-16 flex flex-col items-center">
                <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[42px] leading-tight md:leading-10 text-primary-cream text-center mb-8 md:mb-16 max-w-[1110px]">
                    Let&apos;s work together on your next project
                </h2>

                <div className="relative w-full max-w-[550px]">
                    <a
                        href="mailto:chihtengma416@gmail.com"
                        className="relative w-full h-[80px] sm:h-[90px] md:h-[110px] bg-primary-gold border-3 border-black rounded-[25px] sm:rounded-[30px] md:rounded-[35px] shadow-[-12px_16px_0px_#d4b03e] sm:shadow-[-15px_20px_0px_#d4b03e] md:shadow-[-18px_24px_0px_#d4b03e] flex items-center justify-center hover:shadow-[-10px_14px_0px_#d4b03e] sm:hover:shadow-[-12px_16px_0px_#d4b03e] md:hover:shadow-[-15px_20px_0px_#d4b03e] hover:translate-x-1 hover:translate-y-1 hover:bg-gold-dark transition-all cursor-pointer">
                        <span className="font-montserrat font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-7 md:leading-9 text-primary-navy">Contact me</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
