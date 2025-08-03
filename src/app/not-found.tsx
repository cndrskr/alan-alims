import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-surface-variant flex items-center justify-center">
      <div className="text-center">
        <div className="google-card p-12 max-w-md mx-auto">
          <div className="text-6xl mb-6">🔍</div>
          <h1 className="google-text-headline google-text-primary mb-4">
            Страница не найдена
          </h1>
          <p className="google-text-body google-text-secondary mb-8">
            К сожалению, запрашиваемая страница не существует.
          </p>
          <Link 
            href="/" 
            className="google-button"
          >
            Вернуться на главную
          </Link>
        </div>
      </div>
    </div>
  );
}
