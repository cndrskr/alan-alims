'use client';

import { useState, useEffect } from 'react';
import { getStatistics } from '@/lib/data';

interface StatItem {
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

export function AcademicStats() {
  const [animatedStats, setAnimatedStats] = useState<StatItem[]>([]);
  const [stats, setStats] = useState<StatItem[]>([]);

  useEffect(() => {
    // Получаем реальную статистику
    const statistics = getStatistics();
    
    const realStats: StatItem[] = [
      {
        label: 'Кандидатов наук',
        value: statistics.total,
        suffix: '',
        icon: '🎓'
      },
      {
        label: 'Областей науки',
        value: Object.keys(statistics.byField).length,
        suffix: '',
        icon: '🔬'
      },
      {
        label: 'Балкарцев',
        value: statistics.bySource['балкарцы'] || 0,
        suffix: '',
        icon: '👥'
      },
      {
        label: 'Карачаевцев',
        value: statistics.bySource['карачаевцы'] || 0,
        suffix: '',
        icon: '👥'
      }
    ];
    
    setStats(realStats);
    setAnimatedStats(realStats.map(stat => ({ ...stat, value: 0 })));
  }, []);

  useEffect(() => {
    if (stats.length === 0) return;

    const animateStats = () => {
      const interval = setInterval(() => {
        setAnimatedStats(prev => 
          prev.map((stat, index) => {
            const target = stats[index].value;
            const current = stat.value;
            const increment = Math.ceil(target / 50);
            
            if (current < target) {
              return { ...stat, value: Math.min(current + increment, target) };
            }
            return stat;
          })
        );
      }, 50);

      return () => clearInterval(interval);
    };

    const timer = setTimeout(animateStats, 500);
    return () => clearTimeout(timer);
  }, [stats]);

  if (animatedStats.length === 0) {
    return <div>Загрузка статистики...</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {animatedStats.map((stat, index) => (
        <div key={index} className="text-center animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
          <div className="google-card p-4">
            <div className="text-3xl mb-3">{stat.icon}</div>
            <div className="google-text-headline font-bold mb-1">
              {stat.value.toLocaleString()}{stat.suffix}
            </div>
            <div className="google-text-label opacity-90 text-sm">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
} 