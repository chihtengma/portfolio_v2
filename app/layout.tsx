import type { Metadata } from "next";
import { Abril_Fatface, Inter, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
});

const abrilFatface = Abril_Fatface({
    variable: "--font-abril",
    subsets: ["latin"],
    weight: ["400"],
});

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
    title: "Chihteng Ma's Portfolio",
    description: "Portfolio of Chihteng Ma, a Full Stack Developer",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${montserrat.variable} ${abrilFatface.variable} ${inter.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
