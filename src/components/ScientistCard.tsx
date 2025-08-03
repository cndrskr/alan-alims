'use client';

import Link from 'next/link';
import { Doctor } from '@/types/person';

interface ScientistCardProps {
  scientist: Doctor;
}

export function ScientistCard({ scientist }: ScientistCardProps) {
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
    <Link 
      href={`/doctors/${scientist.id}`}
      className="google-card-elevated p-4 block hover:no-underline group"
    >
      <div className="flex items-start space-x-3">
        <div className="google-avatar w-12 h-12 flex-shrink-0 group-hover:scale-110 transition-transform">
          <span className="text-white font-semibold text-sm">
            {scientist.fullName.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="google-text-title google-text-primary mb-2 line-clamp-2 group-hover:text-primary-dark transition-colors">
            {scientist.fullName}
          </h3>
          <div className="flex items-center space-x-2 mb-3">
            <span className="text-lg">{getFieldIcon(scientist.scienceField)}</span>
            <span className="google-chip-primary">
              {scientist.scienceField}
            </span>
          </div>
          <div className="space-y-1">
            <p className="google-text-body google-text-secondary text-sm">Кандидат наук</p>
            <p className="google-text-body google-text-secondary text-sm">Исследователь</p>
            <p className="google-text-label google-text-secondary opacity-75 text-xs">Нажмите для подробной информации</p>
          </div>
        </div>
      </div>
    </Link>
  );
} 