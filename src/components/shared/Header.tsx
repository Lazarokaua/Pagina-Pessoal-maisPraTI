'use client'
import { FaLinkedin } from "react-icons/fa"

export function Header() {
    return (
        <header className="flex flex-col shadow py-4 px-6 sm:flex sm:flex-row sm:justify-between">
            <div className="flex  items-center flex-col gap-2 sm:text-sm md:text-lg">
                <img src="profile.jpeg" alt="Imagem de Perfil" className="w-14 h-14 rounded-full object-cover" />
                
                <a href="https://linkedin.com/in/lazarokaua" target="_blanck">
                    <span className="text-slate-400 hover:text-slate-900 font-bold flex items-center gap-2"><FaLinkedin className="text-[#FFD700]"/>Lázaro Kauã - Dev Full Stack Jr</span>
                </a>
            </div>
            <nav className="flex justify-center sm:flex">
                <ul className="flex flex-col gap-4 px-6 py-6 sm:flex-row sm:text-sm md:text-lg">
                    <li><a href="#" className="text-slate-600 hover:text-slate-900 font-bold">Sobre mim</a></li>
                    <li><a href="#" className="text-slate-600 hover:text-slate-900 font-bold">Habilidades</a></li>
                    <li><a href="#" className="text-slate-600 hover:text-slate-900 font-bold">Projetos</a></li>
                    <li><a href="#" className="text-slate-600 hover:text-slate-900 font-bold">Contato</a></li>
                </ul>
        </nav>
        </header>
    )
}