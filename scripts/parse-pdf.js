const fs = require('fs');
const path = require('path');
const pdfParse = require('pdf-parse');

// Функция для извлечения данных из PDF
async function parsePDF(filePath) {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdfParse(dataBuffer);
    return data.text;
  } catch (error) {
    console.error(`Ошибка при чтении файла ${filePath}:`, error);
    return null;
  }
}

// Функция для парсинга текста и извлечения информации о кандидатах
function parseCandidates(text, source) {
  const lines = text.split('\n').filter(line => line.trim());
  const candidates = [];
  
  for (const line of lines) {
    const trimmedLine = line.trim();
    
    // Пропускаем заголовки и пустые строки
    if (!trimmedLine || 
        trimmedLine.includes('КАНДИДАТЫ НАУК') || 
        trimmedLine.includes('список формируется') ||
        trimmedLine.startsWith('КАНДИДАТЫ')) {
      continue;
    }
    
    // Ищем строки с номером, ФИО и областью науки
    // Паттерн: номер. ФИО область наук
    const pattern = /^\d+\.\s+([А-ЯЁ][А-ЯЁ\s\-\(\)]+?)\s+(кандидат\s+[а-яё\s\-]+наук)/i;
    const match = trimmedLine.match(pattern);
    
    if (match) {
      const fullName = match[1].trim();
      const scienceField = match[2].trim();
      
      // Очищаем имя от лишних пробелов и скобок
      const cleanName = fullName.replace(/\s+/g, ' ').trim();
      
      // Создаем ID из имени
      const id = cleanName.toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[ё]/g, 'е')
        .replace(/[^а-яёa-z0-9\-]/g, '')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
      
      // Определяем область науки
      let field = 'не указана';
      if (scienceField.includes('медицинских')) field = 'медицина';
      else if (scienceField.includes('исторических')) field = 'история';
      else if (scienceField.includes('биологических')) field = 'биология';
      else if (scienceField.includes('экономических')) field = 'экономика';
      else if (scienceField.includes('юридических')) field = 'юриспруденция';
      else if (scienceField.includes('технических')) field = 'технические науки';
      else if (scienceField.includes('физико-математических')) field = 'физика';
      else if (scienceField.includes('педагогических')) field = 'филология';
      else if (scienceField.includes('психологических')) field = 'общественные науки';
      else if (scienceField.includes('географических')) field = 'биология';
      else if (scienceField.includes('геолого-минералогических')) field = 'технические науки';
      else if (scienceField.includes('ветеринарных')) field = 'биология';
      else if (scienceField.includes('сельскохозяйственных')) field = 'биология';
      else field = scienceField.replace('кандидат ', '').replace(' наук', '');
      
      candidates.push({
        id,
        fullName: cleanName,
        scienceField: field,
        degree: 'кандидат наук',
        source
      });
    }
  }
  
  return candidates;
}

// Основная функция
async function main() {
  console.log('Начинаю обработку PDF файлов...');
  
  const publicDir = path.join(__dirname, '../public');
  const files = [
    '1_КАНДИДАТЫ_НАУК_из_БАЛКАРЦЕВ_на_17_07_2025.pdf',
    '8_КАНДИДАТЫ_НАУК_из_КАРАЧАЕВЦЕВ_15_07_2025.pdf'
  ];
  
  let allCandidates = [];
  
  for (const file of files) {
    const filePath = path.join(publicDir, file);
    console.log(`Обрабатываю файл: ${file}`);
    
    const text = await parsePDF(filePath);
    if (text) {
      const source = file.includes('БАЛКАРЦЕВ') ? 'балкарцы' : 'карачаевцы';
      const candidates = parseCandidates(text, source);
      allCandidates = allCandidates.concat(candidates);
      console.log(`Найдено кандидатов в ${file}: ${candidates.length}`);
    }
  }
  
  console.log(`Всего найдено кандидатов: ${allCandidates.length}`);
  
  // Сохраняем результат в JSON файл
  const outputPath = path.join(__dirname, '../src/lib/candidates-data.json');
  fs.writeFileSync(outputPath, JSON.stringify(allCandidates, null, 2), 'utf8');
  
  console.log(`Данные сохранены в: ${outputPath}`);
  
  // Выводим первые несколько кандидатов для проверки
  console.log('\nПримеры найденных кандидатов:');
  allCandidates.slice(0, 10).forEach((candidate, index) => {
    console.log(`${index + 1}. ${candidate.fullName} - ${candidate.scienceField} (${candidate.source})`);
  });
  
  // Статистика по областям науки
  const fieldStats = {};
  allCandidates.forEach(candidate => {
    fieldStats[candidate.scienceField] = (fieldStats[candidate.scienceField] || 0) + 1;
  });
  
  console.log('\nСтатистика по областям науки:');
  Object.entries(fieldStats).forEach(([field, count]) => {
    console.log(`${field}: ${count}`);
  });
}

// Запускаем скрипт
main().catch(console.error); 