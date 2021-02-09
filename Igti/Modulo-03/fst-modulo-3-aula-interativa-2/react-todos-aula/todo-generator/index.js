import { promises as fs } from 'fs';
import { v4 as uuid } from 'uuid';

const TODOS = [
  'Dormir',
  'Nadar',
  'Descansar',
  'Correr',
  'Fazer exercícios físicos',
  'Estudar JavaScript',
  'Estudar React',
  'Estudar Node',
  'Estudar MongoDB',
  'Estudar Heroku',
  'Estudar Insomnia',
  'Ir ao shopping',
  'Ir ao zoológico',
  'Ir ao parque',
  'Casamento',
  'Festa',
  'Jogar videogame',
  'Meditar',
  'Ir ao médico',
  'Ir ao dentista',
  'Fazer compras',
  'Pagar conta de água',
  'Pagar conta de luz',
  'Pagar conta de telefone',
  'Pagar conta de internet',
];

const MONTHS = [
  { month: '01', days: 31 },
  { month: '02', days: 28 },
  { month: '03', days: 31 },
  { month: '04', days: 30 },
  { month: '05', days: 31 },
  { month: '06', days: 30 },
  { month: '07', days: 31 },
  { month: '08', days: 31 },
  { month: '09', days: 30 },
  { month: '10', days: 31 },
  { month: '11', days: 30 },
  { month: '12', days: 31 },
];

const currentYear = new Date().getFullYear();
const YEARS = [currentYear - 1, currentYear, currentYear + 1];

function getRandomDescription() {
  const randomIndex = Math.floor(Math.random() * TODOS.length);
  return TODOS[randomIndex];
}

function fiftyPercent() {
  return Math.ceil(Math.random() * 1000) % 2 === 0;
}

function getRandomCount() {
  return Math.max(1, Math.ceil(Math.random() * 5));
}

async function start() {
  const backend = { todos: [] };

  for (const year of YEARS) {
    for (const monthItem of MONTHS) {
      for (let day = 1; day <= monthItem.days; day++) {
        const countItems = getRandomCount();

        for (let count = 1; count <= countItems; count++) {
          const description = getRandomDescription();
          const period = `${year}-${monthItem.month}`;
          const date = `${period}-${day.toString().padStart(2, '0')}`;

          backend.todos.push({
            id: uuid(),
            day: day,
            month: parseInt(monthItem.month, 10),
            year: year,
            period,
            date,
            description,
            done: fiftyPercent(),
          });
        }
      }
    }
  }

  backend.todos.sort((a, b) => a.id.localeCompare(b.id));
  console.log(backend);
  console.log(backend.length);

  fs.writeFile('./backend.json', JSON.stringify(backend, null, 2));
}

start();
