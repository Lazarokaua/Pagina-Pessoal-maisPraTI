'use-client'

import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import { SiNextdotjs } from "react-icons/si"



export function Skills() {
    return (
        <section className="px-6 py-6">
            {/* Efeito dos icones chegando ao centro */}
            {/* Botão para trocar a visualização para ver as soft-skills */}
            {/* Usar wrap para as stacks */}
            {/* toggle para softs e hards skills */}
            <ul>
                <li className="text-orange-600 text-5xl"><FaHtml5 /></li>
                <li className="text-blue-600 text-5xl"><FaCss3 /></li>
                <li className="text-yellow-400 text-5xl"><FaJs /></li>
                <li className="text-cyan-400 text-5xl"><FaReact /></li>
                <li className="text-teal-400 text-5xl"><RiTailwindCssFill /></li>
                <li className="text-black text-5xl"><SiNextdotjs /></li>
            </ul>
        </section>
    )
}
