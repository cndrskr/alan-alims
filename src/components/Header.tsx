"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-outline-variant sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="google-avatar w-8 h-8 group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <div>
              <h1 className="google-text-title google-text-primary text-lg">
                Alan Alims
              </h1>
              <p className="google-text-label google-text-secondary text-xs">
                Академическое сообщество
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="google-text-label google-text-secondary hover:google-text-primary transition-colors duration-200"
            >
              Главная
            </Link>
            <Link
              href="/candidates"
              className="google-text-label google-text-secondary hover:google-text-primary transition-colors duration-200"
            >
              Ученые
            </Link>
            <Link
              href="/about"
              className="google-text-label google-text-secondary hover:google-text-primary transition-colors duration-200"
            >
              О проекте
            </Link>
            <Link
              href="/news"
              className="google-text-label google-text-secondary hover:google-text-primary transition-colors duration-200"
            >
              Новости
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-surface-variant transition-colors duration-200"
          >
            <svg
              className="w-6 h-6 google-text-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-outline-variant animate-fade-in-up">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="google-text-label google-text-secondary hover:google-text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Главная
              </Link>
              <Link
                href="/candidates"
                className="google-text-label google-text-secondary hover:google-text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Ученые
              </Link>
              <Link
                href="/about"
                className="google-text-label google-text-secondary hover:google-text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                О проекте
              </Link>
              <Link
                href="/news"
                className="google-text-label google-text-secondary hover:google-text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Новости
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
