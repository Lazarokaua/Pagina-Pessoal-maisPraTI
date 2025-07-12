

export function AboutMe() {
    return (
        <section className="grid grid-cols-1 text-slate-500 px-4 py-4" id="about">

            <h2 className="font-bold pb-4">Sobre Mim</h2>

            <div className="flex flex-col gap-4 ">
                <p>Olá, sejam bem-vindos 🖖! Me chamo <span className="text-[#23C6FF]">Lázaro Kauã</span>, sou um profissional da área administrativa em transição de carreira para <span>Desenvolvedor de Software.</span></p>
                <p>Iniciei minha jornada profissional como jovem aprendiz e, após o término do contrato, fui efetivado como auxiliar administrativo. Em constante aprendizado, minha rotina envolve diversos desafios. Como entusiasta de tecnologia, aplico soluções técnicas no dia a dia, desenvolvendo automações web com Python (Selenium), web scraping (BeautifulSoup), análise de dados, ETL e modelagem com Pandas, além de outras tecnologias que beneficiam a equipe.</p>
                <p> Minha jornada no desenvolvimento web iniciou em 2023, quando me introduzi ao Front-end. Desde então, construí um portfólio com projetos em  
                    <span className="text-[#E44D26] font-bold">{/* HTML: #E44D26 */} HTML</span>, {/* HTML: #E44D26 */}
                    <span className="text-[#1572B6] font-bold">{/* CSS: #1572B6 */}CSS</span>, {/* CSS: #1572B6 */}
                    <span className="text-[#F7DF1E] font-bold">{/* JavaScript: #F7DF1E */}JavaScript</span>, {/* JavaScript: #F7DF1E */}
                    <span className="text-[#61DAFB] font-bold">{/* React: #61DAFB */}React</span>, {/* React: #61DAFB */}
                    <span className="text-[#06B6D4] font-bold">{/* Tailwind CSS: #06B6D4 */}Tailwind CSS</span>. {/* Tailwind CSS: #06B6D4 */}
                    Atualmente, estou expandindo meus conhecimentos para o Back-end, estudando Java com  
                     <span className="text-[#6DB33F] font-bold">{/* Spring: #6DB33F */} Spring Boot</span>.{/* Spring: #6DB33F */}
                </p>
                <p>Vamos conversar!</p>
            </div>

        </section>
    )
}