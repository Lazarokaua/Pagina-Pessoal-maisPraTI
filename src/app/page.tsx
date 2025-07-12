import { Header } from '@/components/layout/Header'
import { AboutMe } from '@/components/layout/AboutMe'
import { Hero } from '@/components/layout/Hero'
import { Skills } from '@/components/layout/Skills'

export default function Home() {
    return (
        <main>
            <Header />
            <Skills />
            <AboutMe />
            <Hero />
        </main>
    )
}
