"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

interface Particle {
    size: number;
    left: number;
    top: number;
    duration: number;
    delay: number;
    color: string;
    opacity: number;
    xOffset: number;
}

interface ParticlesProps {
    count?: number;
    colors?: string[];
}

const DEFAULT_COLORS = ["#F4D35E", "#0D3B66"];

export default function Particles({ count = 30, colors = DEFAULT_COLORS }: ParticlesProps) {
    const [particles, setParticles] = useState<Particle[]>([]);
    
    // Use stringified colors as dependency to prevent infinite re-renders
    const colorsKey = useMemo(() => JSON.stringify(colors), [colors]);

    useEffect(() => {
        const newParticles = Array.from({ length: count }, () => ({
            size: Math.random() * 10 + 6,
            left: Math.random() * 100,
            top: Math.random() * 100,
            duration: Math.random() * 15 + 20, // Slower: 20-35 seconds
            delay: Math.random() * 5,
            color: colors[Math.floor(Math.random() * colors.length)],
            opacity: Math.random() * 0.3 + 0.5,
            xOffset: Math.random() * 50 - 25,
        }));
        setParticles(newParticles);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count, colorsKey]);

    return (
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
            {particles.map((particle, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        left: `${particle.left}%`,
                        top: `${particle.top}%`,
                        backgroundColor: particle.color,
                        opacity: particle.opacity,
                        boxShadow: `0 0 ${particle.size * 2}px ${particle.color}80`,
                        willChange: "transform, opacity",
                    }}
                    animate={{
                        y: [0, -150, 0],
                        x: [0, particle.xOffset, 0],
                        opacity: [particle.opacity, Math.min(particle.opacity * 1.3, 0.85), particle.opacity],
                        scale: [1, 1.15, 1],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: particle.delay,
                    }}
                />
            ))}
        </div>
    );
}

