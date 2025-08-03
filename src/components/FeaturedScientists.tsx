'use client';

import Link from 'next/link';
import { doctors } from '@/lib/data';
import { Doctor } from '@/types/person';

// Выбираем 6 ученых для отображения (по 2 из каждой области)
const getFeaturedScientists = (): Doctor[] => {
  const fieldCounts: Record<string, number> = {};
  const featured: Doctor[] = [];
  
  for (const scientist of doctors) {
    if (featured.length >= 6) break;
    
    const count = fieldCounts[scientist.scienceField] || 0;
    if (count < 2) {
      featured.push(scientist);
      fieldCounts[scientist.scienceField] = count + 1;
    }
  }
  
  return featured;
};

const featuredScientists: Doctor[] = getFeaturedScientists();

export function FeaturedScientists() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {featuredScientists.map((scientist, index) => (
        <Link 
          key={scientist.id} 
          href={`/doctors/${scientist.id}`}
          className="google-card-elevated p-4 block hover:no-underline group animate-scale-in"
          style={{animationDelay: `${index * 0.1}s`}}
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
              <div className="google-chip-primary inline-block mb-3">
                {scientist.scienceField}
              </div>
              <p className="google-text-body google-text-secondary text-sm">
                Кандидат наук • Исследователь
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
} 