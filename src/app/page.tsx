import { Header } from '@/components/layout/Header'
import { AboutMe } from '@/components/layout/AboutMe'
import { Contact } from '@/components/layout/Contact'
import { Skills } from '@/components/layout/Skills'
import { Projects } from '@/components/layout/Projects'
import Footer from '@/components/layout/Footer'

export default function Home() {
    return (
        <main>
            <Header />
            <Skills />
            <AboutMe />
            <Projects />
            <Contact />
            <Footer />
        </main>
    )
}
