const fs = require('fs');
const path = require('path');
const pdfParse = require('pdf-parse');

async function analyzePDF(filePath) {
  try {
    console.log(`\n=== Анализ файла: ${path.basename(filePath)} ===`);
    
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdfParse(dataBuffer);
    
    console.log(`Количество страниц: ${data.numpages}`);
    console.log(`Информация: ${data.info ? JSON.stringify(data.info, null, 2) : 'Нет информации'}`);
    
    // Выводим первые 1000 символов текста для анализа
    const preview = data.text.substring(0, 1000);
    console.log('\nПервые 1000 символов текста:');
    console.log('---');
    console.log(preview);
    console.log('---');
    
    // Анализируем структуру строк
    const lines = data.text.split('\n').filter(line => line.trim());
    console.log(`\nВсего строк: ${lines.length}`);
    
    console.log('\nПервые 20 строк:');
    lines.slice(0, 20).forEach((line, index) => {
      console.log(`${index + 1}: "${line.trim()}"`);
    });
    
    // Ищем строки с ФИО (3 слова, начинающиеся с заглавной буквы)
    const namePattern = /^[А-ЯЁ][а-яё]+\s+[А-ЯЁ][а-яё]+\s+[А-ЯЁ][а-яё]+/;
    const nameLines = lines.filter(line => namePattern.test(line.trim()));
    
    console.log(`\nНайдено строк с ФИО: ${nameLines.length}`);
    nameLines.slice(0, 10).forEach((line, index) => {
      console.log(`${index + 1}: "${line.trim()}"`);
    });
    
  } catch (error) {
    console.error(`Ошибка при анализе файла ${filePath}:`, error);
  }
}

async function main() {
  const publicDir = path.join(__dirname, '../public');
  const files = [
    '1_КАНДИДАТЫ_НАУК_из_БАЛКАРЦЕВ_на_17_07_2025.pdf',
    '8_КАНДИДАТЫ_НАУК_из_КАРАЧАЕВЦЕВ_15_07_2025.pdf'
  ];
  
  for (const file of files) {
    const filePath = path.join(publicDir, file);
    await analyzePDF(filePath);
  }
}

main().catch(console.error); 