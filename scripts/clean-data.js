const fs = require('fs');
const path = require('path');

// Функция для нормализации области науки
function normalizeScienceField(field) {
  const fieldMap = {
    'медицина': 'медицина',
    'история': 'история',
    'биология': 'биология',
    'экономика': 'экономика',
    'юриспруденция': 'юриспруденция',
    'технические науки': 'технические науки',
    'физика': 'физика',
    'филология': 'филология',
    'общественные науки': 'общественные науки',
    'филологических': 'филология',
    'социологических': 'общественные науки',
    'философских': 'общественные науки',
    'химических': 'химия',
    'политических': 'общественные науки',
    'физико- математических': 'физика',
    'фармацевтических': 'медицина',
    'культурологических': 'общественные науки'
  };
  
  return fieldMap[field] || 'общественные науки';
}

// Функция для очистки имени
function cleanCandidateName(name) {
  return name
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\([^)]*\)/g, '') // Удаляем скобки и их содержимое
    .replace(/\s+/g, ' ')
    .trim();
}

// Функция для создания уникального ID
function createUniqueId(name, existingIds) {
  let baseId = name.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[ё]/g, 'е')
    .replace(/[^а-яёa-z0-9\-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  
  let id = baseId;
  let counter = 1;
  
  while (existingIds.has(id)) {
    id = `${baseId}-${counter}`;
    counter++;
  }
  
  existingIds.add(id);
  return id;
}

// Основная функция
function main() {
  console.log('Начинаю очистку данных...');
  
  // Читаем исходные данные
  const dataPath = path.join(__dirname, '../src/lib/candidates-data.json');
  const rawData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  
  console.log(`Загружено кандидатов: ${rawData.length}`);
  
  // Очищаем и нормализуем данные
  const existingIds = new Set();
  const cleanedCandidates = [];
  
  for (const candidate of rawData) {
    const cleanName = cleanCandidateName(candidate.fullName);
    const normalizedField = normalizeScienceField(candidate.scienceField);
    const uniqueId = createUniqueId(cleanName, existingIds);
    
    // Пропускаем кандидатов с пустыми именами
    if (!cleanName || cleanName.length < 5) {
      continue;
    }
    
    cleanedCandidates.push({
      id: uniqueId,
      fullName: cleanName,
      scienceField: normalizedField,
      degree: 'кандидат наук',
      source: candidate.source
    });
  }
  
  console.log(`После очистки кандидатов: ${cleanedCandidates.length}`);
  
  // Статистика по областям науки
  const fieldStats = {};
  cleanedCandidates.forEach(candidate => {
    fieldStats[candidate.scienceField] = (fieldStats[candidate.scienceField] || 0) + 1;
  });
  
  console.log('\nСтатистика по областям науки:');
  Object.entries(fieldStats)
    .sort(([,a], [,b]) => b - a)
    .forEach(([field, count]) => {
      console.log(`${field}: ${count}`);
    });
  
  // Статистика по источникам
  const sourceStats = {};
  cleanedCandidates.forEach(candidate => {
    sourceStats[candidate.source] = (sourceStats[candidate.source] || 0) + 1;
  });
  
  console.log('\nСтатистика по источникам:');
  Object.entries(sourceStats).forEach(([source, count]) => {
    console.log(`${source}: ${count}`);
  });
  
  // Сохраняем очищенные данные
  const outputPath = path.join(__dirname, '../src/lib/cleaned-candidates.json');
  fs.writeFileSync(outputPath, JSON.stringify(cleanedCandidates, null, 2), 'utf8');
  
  console.log(`\nОчищенные данные сохранены в: ${outputPath}`);
  
  // Выводим примеры
  console.log('\nПримеры очищенных кандидатов:');
  cleanedCandidates.slice(0, 10).forEach((candidate, index) => {
    console.log(`${index + 1}. ${candidate.fullName} - ${candidate.scienceField} (${candidate.source})`);
  });
}

main(); 