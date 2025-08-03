/* eslint-disable @typescript-eslint/no-explicit-any */
import { Doctor } from "@/types/person";
// Импортируем данные кандидатов из JSON файла
import candidatesData from "./cleaned-candidates.json";

export const doctors: Doctor[] = candidatesData.map((candidate: any) => ({
  id: candidate.id,
  fullName: candidate.fullName,
  scienceField: candidate.scienceField,
}));

// Экспортируем статистику для использования в компонентах
export const getStatistics = () => {
  const fieldStats: Record<string, number> = {};
  const sourceStats: Record<string, number> = {};

  candidatesData.forEach((candidate: any) => {
    fieldStats[candidate.scienceField] =
      (fieldStats[candidate.scienceField] || 0) + 1;
    sourceStats[candidate.source] = (sourceStats[candidate.source] || 0) + 1;
  });

  return {
    total: candidatesData.length,
    byField: fieldStats,
    bySource: sourceStats,
  };
};
