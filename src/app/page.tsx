import { Header } from '@/components/shared/Header'
import { AboutMe } from '@/components/shared/AboutMe'
import { Hero } from '@/components/shared/Hero'

export default function Home() {
    return (
        <main>
            <Header />
            <Hero />
            <AboutMe />
        </main>
    )
}
