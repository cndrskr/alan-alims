export default function HeroElbrus() {
  return (
    <div
      className="h-[400px] w-full bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: "url('/elbrus.jpg')" }}
    >
      {/* Overlay with Google gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center animate-fade-in-up">
          <h1 className="google-text-display text-white mb-4 drop-shadow-lg">
            ТАУЛУ АЛИМЛЕ
          </h1>
          <p className="google-text-body text-white/90 max-w-2xl mx-auto mb-6 drop-shadow-md">
            Платформа для популяризации научных достижений ученых из Балкарии и
            Карачая
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/candidates" className="google-button group">
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
              Исследовать ученых
            </a>
            <a
              href="/about"
              className="google-button-outlined text-white border-white hover:bg-white hover:text-primary"
            >
              Узнать больше
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}
