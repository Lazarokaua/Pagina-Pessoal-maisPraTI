'use client'
import { FaLinkedin } from "react-icons/fa"

export function Header() {
    return (
        <header className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
            <div className="flex  items-center flex-col gap-2">
                <img src="profile.jpeg" alt="Imagem de Perfil" className="w-14 h-14 rounded-full object-cover" />
                
                <a href="https://linkedin.com/in/lazarokaua" target="_blanck">
                    <span className="text-slate-400 hover:text-slate-900 font-bold flex items-center gap-2"><FaLinkedin className="text-[#FFD700]"/>Lázaro Kauã - Dev Full Stack Jr</span>
                </a>
            </div>
            <nav>
                <ul className="flex gap-4 px-6 py-6">
                    <li><a href="#" className="text-slate-600 hover:text-slate-900 font-bold">Sobre mim</a></li>
                    <li><a href="#" className="text-slate-600 hover:text-slate-900 font-bold">Habilidades</a></li>
                    <li><a href="#" className="text-slate-600 hover:text-slate-900 font-bold">Projetos</a></li>
                    <li><a href="#" className="text-slate-600 hover:text-slate-900 font-bold">Contato</a></li>
                </ul>
        </nav>
        </header>
    )
}