
import { ProjectCard } from "./ProjectCard";

export function Projects() {
    return (
        <section id="project">
            <h2 className="font-suisse font-bold text-center text-2xl md:text-3xl lg:text-4xl tracking-wide mb-12 md:mb-16 lg:mb-20 transition-all duration-300 text-slate-700">Projetos</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 transition-all duration-300">


                <ProjectCard url={"https://trilha-front-end-jr-jun-15-k44k.vercel.app/"} srcImg="/codigoCerto.png" titleProject={"Trilha Inicial Front-End Jr | Codigo Certo Coders"} descriptionProject={"Este projeto tem como objetivo criar uma página web onde os candidatos podem se apresentar, compartilhar seus gostos pessoais e explicar por que desejam fazer parte da comunidade Codigo Certo Coders e participar de projetos voluntários."} mobileAvaible={true} />


                <ProjectCard url={"https://spotify-clone-five-neon.vercel.app/"} srcImg={"/spotify.png"} titleProject={"Clone Spotify"} descriptionProject={"Projeto em Front-end da imersão front-end da alura #ImersãoFrontEnd #Alura."} mobileAvaible={false} />

                <ProjectCard url={"https://simon-game-xi-ten.vercel.app/"} srcImg={"/simmoGame.png"} titleProject={"Bem-vindo ao Simon-game"} descriptionProject={"jogo da memória com cores em JavaScript!"} mobileAvaible={true} />


                <ProjectCard url={"https://nlw-expert-react-6mblnxt4w-lazarokauas-projects.vercel.app"} srcImg={"/nlw.png"} titleProject={"NLW Expert notes"} descriptionProject={"Essa aplicação foi desenvolvida durante o NLW Experts da Rocketseat utilizando React, TypeScript, Tailwind e a SpeechRecognition API."} mobileAvaible={true} />


            </div>
        </section>
    )
}
