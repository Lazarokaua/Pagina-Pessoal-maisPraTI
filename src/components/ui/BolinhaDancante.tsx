'use client'
import { motion } from "framer-motion";

interface BolinhaDancanteProp {
    skill: 'hard' | 'soft'
}

export function BolinhaDancante({ skill }: BolinhaDancanteProp) {
    return (
        <span>
            <motion.div
                className="w-12 h-6 bg-[#23C6FF] rounded-full absolute"
                animate={{ x: skill === 'hard' ? 0 : 40 }}
            />
        </span>
    )
}
