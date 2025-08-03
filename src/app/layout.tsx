import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alan Alims - Академическое сообщество Алании",
  description:
    "Платформа для популяризации научных достижений ученых из КБР и КЧР",
  keywords: "ученые, наука, Алания, исследования, академическое сообщество",
  authors: [{ name: "Alan Alims Team" }],
  openGraph: {
    title: "Alan Alims - Академическое сообщество Алании",
    description:
      "Платформа для популяризации научных достижений ученых из КБР и КЧР",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header />
        {children}
        <footer className="bg-white border-t border-outline-variant py-8">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="google-avatar w-8 h-8">
                    <span className="text-white font-bold text-sm">A</span>
                  </div>
                  <div>
                    <h3 className="google-text-title google-text-primary text-lg">
                      Alan Alims
                    </h3>
                    <p className="google-text-label google-text-secondary text-xs">
                      Академическое сообщество
                    </p>
                  </div>
                </div>
                <p className="google-text-body google-text-secondary text-sm">
                  Платформа для популяризации научных достижений ученых Карачая
                  и Балкарии
                </p>
              </div>
              <div>
                <h4 className="google-text-title google-text-primary mb-4">
                  Навигация
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="google-text-body google-text-secondary hover:google-text-primary transition-colors text-sm"
                    >
                      Главная
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/candidates"
                      className="google-text-body google-text-secondary hover:google-text-primary transition-colors text-sm"
                    >
                      Ученые
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="google-text-body google-text-secondary hover:google-text-primary transition-colors text-sm"
                    >
                      О проекте
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/news"
                      className="google-text-body google-text-secondary hover:google-text-primary transition-colors text-sm"
                    >
                      Новости
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="google-text-title google-text-primary mb-4">
                  Контакты
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-4 h-4 google-text-secondary"
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
                    <span className="google-text-body google-text-secondary text-sm">
                      info@alan-alims.ru
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-4 h-4 google-text-secondary"
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
                    <span className="google-text-body google-text-secondary text-sm">
                      +7 (XXX) XXX-XX-XX
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-4 h-4 google-text-secondary"
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
                    <span className="google-text-body google-text-secondary text-sm">
                      Нальчик 2025
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-outline-variant mt-6 pt-4 text-center">
              <p className="google-text-body google-text-secondary text-sm">
                &copy; 2024 Alan Alims. Все права защищены.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
