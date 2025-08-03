export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      {/* Header */}
      <div className="academic-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">О проекте</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Узнайте больше о миссии и целях платформы Alan Alims
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Mission */}
          <section className="academic-card p-8">
            <h2 className="text-3xl font-bold text-[#003366] mb-6">
              Наша миссия
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-[#4a5568] leading-relaxed mb-4">
                Alan Alims — это инновационная платформа, созданная для
                популяризации научных достижений ученых из Карачая и Балкарии.
                Мы стремимся создать единое информационное пространство, где
                каждый может познакомиться с выдающимися исследователями и их
                вкладом в развитие науки.
              </p>
              <p className="text-[#4a5568] leading-relaxed">
                Наша цель — вдохновить молодое поколение на научную
                деятельность, показать разнообразие научных направлений и
                создать мост между академическим сообществом и широкой
                общественностью.
              </p>
            </div>
          </section>

          {/* Goals */}
          <section className="academic-card p-8">
            <h2 className="text-3xl font-bold text-[#003366] mb-6">
              Цели проекта
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-[#E1F5FE] rounded-lg">
                <div className="w-12 h-12 bg-[#003366] rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#003366] mb-2">
                  Популяризация науки
                </h3>
                <p className="text-[#4a5568]">
                  Сделать научные достижения доступными и понятными для широкой
                  аудитории
                </p>
              </div>
              <div className="p-6 bg-[#E1F5FE] rounded-lg">
                <div className="w-12 h-12 bg-[#003366] rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#003366] mb-2">
                  Создание сообщества
                </h3>
                <p className="text-[#4a5568]">
                  Объединить ученых, исследователей и всех, кто интересуется
                  наукой
                </p>
              </div>
              <div className="p-6 bg-[#E1F5FE] rounded-lg">
                <div className="w-12 h-12 bg-[#003366] rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#003366] mb-2">
                  Образование
                </h3>
                <p className="text-[#4a5568]">
                  Предоставить образовательные ресурсы и информацию о научных
                  направлениях
                </p>
              </div>
              <div className="p-6 bg-[#E1F5FE] rounded-lg">
                <div className="w-12 h-12 bg-[#003366] rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#003366] mb-2">
                  Инновации
                </h3>
                <p className="text-[#4a5568]">
                  Стимулировать инновационное развитие и научно-технический
                  прогресс
                </p>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="academic-card p-8">
            <h2 className="text-3xl font-bold text-[#003366] mb-6">
              Возможности платформы
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#003366] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#003366] mb-2">
                    База данных ученых
                  </h3>
                  <p className="text-[#4a5568]">
                    Полная информация о докторах и кандидатах наук включая их
                    научные достижения, публикации и области исследований.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#003366] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#003366] mb-2">
                    Поиск и фильтрация
                  </h3>
                  <p className="text-[#4a5568]">
                    Удобный поиск ученых по имени и фильтрация по областям
                    науки, позволяющая быстро найти нужную информацию.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#003366] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#003366] mb-2">
                    Детальные профили
                  </h3>
                  <p className="text-[#4a5568]">
                    Подробные страницы ученых с информацией об их исследованиях,
                    публикациях, контактах и научных достижениях.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#003366] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#003366] mb-2">
                    Адаптивный дизайн
                  </h3>
                  <p className="text-[#4a5568]">
                    Современный адаптивный интерфейс, который корректно
                    отображается на всех устройствах — от смартфонов до больших
                    мониторов.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Technology Stack */}
          <section className="academic-card p-8">
            <h2 className="text-3xl font-bold text-[#003366] mb-6">
              Технологический стек
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-[#E1F5FE] rounded-lg">
                <div className="text-2xl mb-2">⚛️</div>
                <h3 className="font-semibold text-[#003366]">Next.js 15</h3>
                <p className="text-sm text-[#4a5568]">React Framework</p>
              </div>
              <div className="text-center p-4 bg-[#E1F5FE] rounded-lg">
                <div className="text-2xl mb-2">🎨</div>
                <h3 className="font-semibold text-[#003366]">Tailwind CSS</h3>
                <p className="text-sm text-[#4a5568]">Utility-first CSS</p>
              </div>
              <div className="text-center p-4 bg-[#E1F5FE] rounded-lg">
                <div className="text-2xl mb-2">🔧</div>
                <h3 className="font-semibold text-[#003366]">TypeScript</h3>
                <p className="text-sm text-[#4a5568]">Type Safety</p>
              </div>
              <div className="text-center p-4 bg-[#E1F5FE] rounded-lg">
                <div className="text-2xl mb-2">🚀</div>
                <h3 className="font-semibold text-[#003366]">Vercel</h3>
                <p className="text-sm text-[#4a5568]">Deployment</p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="academic-card p-8">
            <h2 className="text-3xl font-bold text-[#003366] mb-6">
              Свяжитесь с нами
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-[#003366] mb-4">
                  Контактная информация
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-[#4a5568]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-[#4a5568]">info@alan-alims.ru</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-[#4a5568]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="text-[#4a5568]">+7 (XXX) XXX-XX-XX</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-[#4a5568]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-[#4a5568]">
                      Кабардино-Балкарская республика
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#003366] mb-4">
                  Обратная связь
                </h3>
                <p className="text-[#4a5568] mb-4">
                  Если у вас есть предложения по улучшению платформы или вы
                  хотите добавить информацию о себе, свяжитесь с нами.
                </p>
                <button className="academic-button">Написать нам</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
