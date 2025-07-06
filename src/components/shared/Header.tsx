'use client'
import { useState } from "react"
import { FaLinkedin } from "react-icons/fa"
import { IoMenu } from "react-icons/io5"

export function Header() {

    const [menuIsOpen, setMenuIsOpened] = useState(false)

    const handleMenuClick = () => {
        setMenuIsOpened(!menuIsOpen)
    }


    return (
        <header className="flex flex-col shadow py-4 px-6 sm:flex sm:flex-row sm:justify-between">
            <div className="flex items-center gap-2 sm:text-sm md:text-lg md:flex-col md:shrink-0 sm:flex-col">
                <button onClick={handleMenuClick}><IoMenu size="30" className="text-gray-900 md:hidden sm:hidden"/></button>
                <img src="profile.jpeg" alt="Imagem de Perfil" className="w-14 h-14 rounded-full object-cover" />
                
                <a href="https://linkedin.com/in/lazarokaua" target="_blanck">
                    <span className="text-slate-400 hover:text-slate-900 font-bold flex items-center gap-2 sm:text-sm"><FaLinkedin className="text-[#FFD700]"/>Lázaro Kauã - Dev Full Stack Jr</span>
                </a>
            </div>
            <nav className="flex justify-center sm:flex">
                {menuIsOpen ? (
                     <ul className="flex flex-col gap-4 px-6 py-6 sm:flex-row sm:text-sm md:text-lg ">
                    <li><a href="#about" className="text-slate-600 hover:text-slate-900 font-bold">Sobre mim</a></li>
                    <li><a href="#" className="text-slate-600 hover:text-slate-900 font-bold">Habilidades</a></li>
                    <li><a href="#" className="text-slate-600 hover:text-slate-900 font-bold">Projetos</a></li>
                    <li><a href="#" className="text-slate-600 hover:text-slate-900 font-bold">Contato</a></li>
                </ul>
                ) : null}
                
                <ul className="md:flex flex-col gap-4 px-6 py-6 sm:flex-row sm:text-sm md:text-lg hidden sm:flex">
                    <li><a href="#about" className="text-slate-600 hover:text-slate-900 font-bold">Sobre mim</a></li>
                    <li><a href="#" className="text-slate-600 hover:text-slate-900 font-bold">Habilidades</a></li>
                    <li><a href="#" className="text-slate-600 hover:text-slate-900 font-bold">Projetos</a></li>
                    <li><a href="#" className="text-slate-600 hover:text-slate-900 font-bold">Contato</a></li>
                </ul>
        </nav>
        </header>
    )
}