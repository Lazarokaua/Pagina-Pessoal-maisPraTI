'use client'

import { useEffect, useState } from "react"

import { FaBrain, FaCss3, FaHtml5, FaJs, FaReact, FaRocket } from "react-icons/fa"
import { AiOutlineTeam } from "react-icons/ai"
import { RiTailwindCssFill } from "react-icons/ri"
import { SiNextdotjs } from "react-icons/si"
import { FaTeamspeak, FaAnchor } from "react-icons/fa6";


import { BolinhaDancante } from "../ui/BolinhaDancante"



export function Skills() {

    const TEMPO_EM_MS = 5000

    const [currentSkill, setCurrentSkill] = useState<'hard' | 'soft'>('hard')

    function changeSkill() {
        setCurrentSkill(currentSkill === 'hard' ? 'soft' : 'hard')
    }

    useEffect(() => {
        const intervalID = setInterval(() => {
            setCurrentSkill((prevSkill) => prevSkill === 'hard' ? 'soft' : 'hard')
        }, TEMPO_EM_MS);


        return () => clearInterval(intervalID)
    })

    return (
        <section className="px-6 py-6 text-center" id="skills">
            {/* Efeito dos icones chegando ao centro */}
            {/* Botão para trocar a visualização para ver as soft-skills */}
            {/* Usar wrap para as stacks */}
            {/* toggle para softs e hards skills */}


            <button className="text-slate-600 border px-2 py-2 rounded-3xl font-bold cursor-pointer" onClick={changeSkill}><BolinhaDancante skill={currentSkill} />Soft <span className="font-bold pl-4 cursor-pointer"> Hard</span></button>

            {currentSkill === 'hard' ? <ul className="flex gap-4 flex-wrap justify-center py-4">
                <li className="text-orange-600 text-5xl flex flex-col items-center"><FaHtml5 /><p className="text-sm">HTML5</p></li>
                <li className="text-blue-600 text-5xl flex flex-col items-center"><FaCss3 /><p className="text-sm">CSS3</p></li>
                <li className="text-yellow-400 text-5xl flex flex-col items-center"><FaJs /><p className="text-sm">JavaScript</p></li>
                <li className="text-cyan-400 text-5xl flex flex-col items-center"><FaReact /><p className="text-sm">React.js</p></li>
                <li className="text-teal-400 text-5xl flex flex-col items-center"><RiTailwindCssFill /><p className="text-sm">Tailwind CSS</p></li>
                <li className="text-black text-5xl flex flex-col items-center"><SiNextdotjs /><p className="text-sm">Next.js</p></li>
            </ul> : <ul className="flex gap-4 flex-wrap justify-center py-4">
                <li className="text-blue-500 text-5xl flex flex-col items-center">
                    <AiOutlineTeam />
                    <p className="text-sm">Trabalho em Equipe</p>
                </li>
                <li className="text-green-500 text-5xl flex flex-col items-center">
                    <FaTeamspeak />
                    <p className="text-sm">Comunicação</p>
                </li>
                <li className="text-yellow-500 text-5xl flex flex-col items-center">
                    <FaAnchor />
                    <p className="text-sm">Resiliência</p>
                </li>
                <li className="text-pink-500 text-5xl flex flex-col items-center">
                    <FaRocket />
                    <p className="text-sm">Proatividade</p>
                </li>
                <li className="text-purple-500 text-5xl flex flex-col items-center">
                    <FaBrain />
                    <p className="text-sm">Aprendizado Contínuo</p>
                </li>
            </ul>}




        </section>
    )
}
