import { notFound } from 'next/navigation';
import Link from 'next/link';
import { doctors } from '@/lib/data';

interface DoctorPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function DoctorPage({ params }: DoctorPageProps) {
  const { id } = await params;
  const doctor = doctors.find(d => d.id === id);

  if (!doctor) {
    notFound();
  }

  const getFieldIcon = (field: string) => {
    const icons: Record<string, string> = {
      'биология': '🧬',
      'история': '📜',
      'математика': '🔢',
      'медицина': '🏥',
      'технические науки': '⚙️',
      'физика': '⚛️',
      'филология': '📚',
      'химия': '🧪',
      'экономика': '💰',
      'юриспруденция': '⚖️',
      'общественные науки': '🌍'
    };
    return icons[field] || '🎓';
  };

  return (
    <main className="min-h-screen bg-surface-variant">
      {/* Header */}
      <div className="google-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-8">
            <Link 
              href="/candidates"
              className="text-white/80 hover:text-white transition-colors duration-200 flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Назад к списку</span>
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <div className="google-avatar w-24 h-24">
              <span className="text-white font-bold text-2xl">
                {doctor.fullName.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <h1 className="google-text-headline text-white mb-4">
                {doctor.fullName}
              </h1>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{getFieldIcon(doctor.scienceField)}</span>
                <span className="google-text-body text-white/90">
                  {doctor.scienceField}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="google-card p-8">
              <h2 className="google-text-title google-text-primary mb-6">О ученом</h2>
              <div className="prose prose-lg max-w-none">
                <p className="google-text-body google-text-secondary leading-relaxed">
                  {doctor.fullName} — выдающийся ученый в области {doctor.scienceField}, 
                  внесший значительный вклад в развитие науки. Имеет обширный опыт 
                  исследовательской деятельности и множество научных публикаций.
                </p>
                <p className="google-text-body google-text-secondary leading-relaxed mt-6">
                  Основные направления исследований включают фундаментальные и 
                  прикладные аспекты {doctor.scienceField}, а также разработку 
                  инновационных подходов к решению актуальных научных задач.
                </p>
              </div>
            </div>

            {/* Research Areas */}
            <div className="google-card p-8">
              <h2 className="google-text-title google-text-primary mb-6">Области исследований</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-primary-light rounded-2xl">
                  <h3 className="google-text-title google-text-primary mb-4">Основные направления</h3>
                  <ul className="google-text-body google-text-secondary space-y-2">
                    <li>• Фундаментальные исследования</li>
                    <li>• Прикладные разработки</li>
                    <li>• Инновационные технологии</li>
                  </ul>
                </div>
                <div className="p-6 bg-primary-light rounded-2xl">
                  <h3 className="google-text-title google-text-primary mb-4">Специализация</h3>
                  <ul className="google-text-body google-text-secondary space-y-2">
                    <li>• Теоретические основы</li>
                    <li>• Экспериментальные методы</li>
                    <li>• Аналитические подходы</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Publications */}
            <div className="google-card p-8">
              <h2 className="google-text-title google-text-primary mb-6">Публикации</h2>
              <div className="space-y-6">
                <div className="p-6 border border-outline rounded-2xl">
                  <h3 className="google-text-title google-text-primary mb-3">
                    &ldquo;Инновационные подходы в области {doctor.scienceField}&rdquo;
                  </h3>
                  <p className="google-text-label google-text-secondary mb-3">
                    Журнал &ldquo;Научные исследования&rdquo;, 2023
                  </p>
                  <p className="google-text-body google-text-secondary">
                    Статья посвящена современным методам и подходам в области {doctor.scienceField}, 
                    включая анализ последних достижений и перспективы развития.
                  </p>
                </div>
                <div className="p-6 border border-outline rounded-2xl">
                  <h3 className="google-text-title google-text-primary mb-3">
                    &ldquo;Теоретические основы и практические приложения&rdquo;
                  </h3>
                  <p className="google-text-label google-text-secondary mb-3">
                    Международная конференция, 2022
                  </p>
                  <p className="google-text-body google-text-secondary">
                    Доклад о теоретических основах и их практическом применении 
                    в различных областях науки и техники.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <div className="google-card p-6">
              <h3 className="google-text-title google-text-primary mb-6">Информация</h3>
              <div className="space-y-4">
                <div>
                  <span className="google-text-label google-text-secondary">Ученая степень:</span>
                  <p className="google-text-body google-text-primary font-medium">Кандидат наук</p>
                </div>
                <div>
                  <span className="google-text-label google-text-secondary">Область науки:</span>
                  <p className="google-text-body google-text-primary font-medium">{doctor.scienceField}</p>
                </div>
                <div>
                  <span className="google-text-label google-text-secondary">Статус:</span>
                  <p className="google-text-body google-text-primary font-medium">Исследователь</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="google-card p-6">
              <h3 className="google-text-title google-text-primary mb-6">Контакты</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 google-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="google-text-body google-text-secondary">scientist@university.edu</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 google-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="google-text-body google-text-secondary">+7 (XXX) XXX-XX-XX</span>
                </div>
              </div>
            </div>

            {/* Related Scientists */}
            <div className="google-card p-6">
              <h3 className="google-text-title google-text-primary mb-6">Похожие ученые</h3>
              <div className="space-y-4">
                {doctors
                  .filter(d => d.scienceField === doctor.scienceField && d.id !== doctor.id)
                  .slice(0, 3)
                  .map(relatedDoctor => (
                    <Link 
                      key={relatedDoctor.id}
                      href={`/doctors/${relatedDoctor.id}`}
                      className="block p-4 bg-primary-light rounded-2xl hover:bg-primary-light/80 transition-colors duration-200"
                    >
                      <p className="google-text-body google-text-primary font-medium">
                        {relatedDoctor.fullName}
                      </p>
                      <p className="google-text-label google-text-secondary">
                        {relatedDoctor.scienceField}
                      </p>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
