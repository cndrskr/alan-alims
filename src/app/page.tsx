// app/page.tsx
import Link from "next/link";
import HeroElbrus from "@/components/HeroElbrus";
import { AcademicStats } from "@/components/AcademicStats";
import { FeaturedScientists } from "@/components/FeaturedScientists";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroElbrus />

      {/* Stats Section */}
      <section className="py-12 google-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 animate-fade-in-up">
            <h2 className="google-text-headline mb-4">
              Академическое сообщество Алании
            </h2>
            <p className="google-text-body opacity-90 max-w-3xl mx-auto">
              Исследуйте достижения выдающихся ученых и исследователей из
              Республики Северная Осетия-Алания
            </p>
          </div>
          <AcademicStats />
        </div>
      </section>

      {/* Featured Scientists */}
      <section className="py-12 google-gradient-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 animate-fade-in-up">
            <h2 className="google-text-headline google-text-primary mb-4">
              Выдающиеся ученые
            </h2>
            <p className="google-text-body google-text-secondary max-w-3xl mx-auto">
              Познакомьтесь с ведущими исследователями в различных областях
              науки
            </p>
          </div>
          <FeaturedScientists />
          <div className="text-center mt-8">
            <Link href="/candidates" className="google-button">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              Смотреть всех ученых
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 animate-fade-in-up">
              <h2 className="google-text-headline google-text-primary mb-4">
                О проекте
              </h2>
              <p className="google-text-body google-text-secondary max-w-4xl mx-auto leading-relaxed">
                Alan Alims — это платформа, посвященная популяризации научных
                достижений ученых из Республики Северная Осетия-Алания. Мы
                стремимся показать вклад наших исследователей в развитие мировой
                науки и вдохновить молодое поколение на научную деятельность.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="google-card p-6 text-center animate-scale-in" style={{animationDelay: '0.1s'}}>
                <div className="google-avatar w-12 h-12 mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="google-text-title google-text-primary mb-3">
                  Исследования
                </h3>
                <p className="google-text-body google-text-secondary">
                  Актуальные научные исследования и открытия
                </p>
              </div>
              
              <div className="google-card p-6 text-center animate-scale-in" style={{animationDelay: '0.2s'}}>
                <div className="google-avatar w-12 h-12 mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="google-text-title google-text-primary mb-3">
                  Образование
                </h3>
                <p className="google-text-body google-text-secondary">
                  Образовательные программы и публикации
                </p>
              </div>
              
              <div className="google-card p-6 text-center animate-scale-in" style={{animationDelay: '0.3s'}}>
                <div className="google-avatar w-12 h-12 mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="google-text-title google-text-primary mb-3">
                  Сообщество
                </h3>
                <p className="google-text-body google-text-secondary">
                  Научное сообщество и коллаборации
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
