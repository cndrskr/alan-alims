"use client";

import { useState, useMemo } from "react";
import { doctors } from "@/lib/data";
import { ScienceField } from "@/types/person";
import { SearchBar } from "@/components/SearchBar";
import { FilterSelect } from "@/components/FilterSelect";
import { ScientistCard } from "@/components/ScientistCard";

export default function CandidatesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedField, setSelectedField] = useState<ScienceField | "all">(
    "all"
  );

  const filteredScientists = useMemo(() => {
    return doctors.filter((scientist) => {
      const matchesSearch = scientist.fullName
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const matchesField =
        selectedField === "all" || scientist.scienceField === selectedField;

      return matchesSearch && matchesField;
    });
  }, [searchQuery, selectedField]);

  const scienceFields: { value: ScienceField | "all"; label: string }[] = [
    { value: "all", label: "Все области" },
    { value: "филология", label: "Филология" },
    { value: "медицина", label: "Медицина" },
    { value: "экономика", label: "Экономика" },
    { value: "биология", label: "Биология" },
    { value: "физика", label: "Физика" },
    { value: "история", label: "История" },
    { value: "общественные науки", label: "Общественные науки" },
    { value: "технические науки", label: "Технические науки" },
    { value: "юриспруденция", label: "Юриспруденция" },
    { value: "химия", label: "Химия" },
  ];

  return (
    <main className="min-h-screen bg-surface-variant">
      {/* Header */}
      <div className="google-gradient py-12">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in-up">
            <h1 className="google-text-headline text-white mb-4">
              Ученые Алании
            </h1>
            <p className="google-text-body text-white/90 max-w-3xl mx-auto">
              Исследуйте достижения выдающихся ученых и исследователей из
              Республики Северная Осетия-Алания
            </p>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="container mx-auto px-4 py-6">
        <div className="google-card p-6 mb-6 animate-fade-in-up">
          <div className="grid md:grid-cols-2 gap-4">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Поиск по имени ученого..."
            />
            <FilterSelect
              value={selectedField}
              onChange={setSelectedField}
              options={scienceFields}
              placeholder="Выберите область науки"
            />
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="google-text-title google-text-primary">
              Найдено ученых: {filteredScientists.length}
            </h2>
            <div className="google-text-body google-text-secondary">
              Всего в базе: {doctors.length}
            </div>
          </div>

          {filteredScientists.length === 0 ? (
            <div className="text-center py-12 animate-fade-in-up">
              <div className="google-card p-8 max-w-md mx-auto">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="google-text-title google-text-primary mb-3">
                  Ученые не найдены
                </h3>
                <p className="google-text-body google-text-secondary">
                  Попробуйте изменить параметры поиска или фильтры
                </p>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredScientists.map((scientist, index) => (
                <div
                  key={scientist.id}
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <ScientistCard scientist={scientist} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
