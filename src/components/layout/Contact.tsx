export function Contact() {
    return (
        <section className="flex flex-col items-center justify-center px-4 py-10 min-h-[40vh] bg-gradient-to-b from-white to-slate-100" id="contact">
            <div className="flex flex-col items-center gap-6 w-full max-w-md text-center">
                <h2 className="text-gray-700 text-2xl md:text-3xl font-semibold">Conecte-se comigo no LinkedIn!</h2>
                <span className="inline-block w-full max-w-xs rounded-lg bg-[#23C6FF] transition-colors duration-200 shadow-md">
                    <a
                        href="https://linkedin.com/in/lazarokaua"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block py-3 px-6 text-white font-medium text-lg md:text-xl rounded-lg w-full"
                    >
                        Entre em Contato
                    </a>
                </span>
            </div>
        </section>
    )
}
