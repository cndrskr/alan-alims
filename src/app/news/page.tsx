export default function NewsPage() {
  const news = [
    {
      id: 1,
      title: "Новые достижения в области физики",
      excerpt:
        "Ученые из Северной Осетии представили инновационные исследования в области квантовой физики",
      date: "2024-01-15",
      category: "Физика",
      image: "/elbrus.jpg",
    },
    {
      id: 2,
      title: "Международная конференция по медицине",
      excerpt:
        "Владикавказ стал площадкой для проведения международной конференции по современной медицине",
      date: "2024-01-10",
      category: "Медицина",
      image: "/elbrus.jpg",
    },
    {
      id: 3,
      title: "Открытие нового исследовательского центра",
      excerpt:
        "В республике открылся новый центр научных исследований в области биологии",
      date: "2024-01-05",
      category: "Биология",
      image: "/elbrus.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      {/* Header */}
      <div className="academic-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Новости науки
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Последние новости и события из мира науки
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {news.map((item) => (
              <article key={item.id} className="academic-card p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div
                      className="w-full h-48 bg-cover bg-center rounded-lg"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                  </div>
                  <div className="md:w-2/3">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="px-3 py-1 bg-[#E1F5FE] text-[#003366] rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                      <span className="text-[#4a5568] text-sm">
                        {new Date(item.date).toLocaleDateString("ru-RU")}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-[#003366] mb-3">
                      {item.title}
                    </h2>
                    <p className="text-[#4a5568] leading-relaxed mb-4">
                      {item.excerpt}
                    </p>
                    <button className="academic-button-secondary">
                      Читать далее
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="academic-card p-8 mt-12 text-center">
            <div className="text-6xl mb-4">📰</div>
            <h2 className="text-2xl font-bold text-[#003366] mb-4">
              Больше новостей скоро
            </h2>
            <p className="text-[#4a5568] max-w-2xl mx-auto">
              Мы работаем над расширением раздела новостей. Вскоре здесь
              появятся актуальные новости о научных достижениях, конференциях,
              публикациях и других событиях из мира науки.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
