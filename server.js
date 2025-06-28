import http from 'node:http';
import { parse } from 'node:url';

const clubs = [
  {
    id: 1,
    name: 'Робототехника Junior',
    city: 'Астана',
    address: 'ул. Абая, 11',
    direction: 'Техническое',
    age: '7-11',
    price: '20 000 ₸',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&q=80',
    desc: 'Роботы, 3D-принтеры, соревнования и творчество для детей.'
  },
  {
    id: 2,
    name: 'Шахматная академия',
    city: 'Астана',
    address: 'пр. Мангилик Ел, 12',
    direction: 'Логика',
    age: '6-14',
    price: '15 000 ₸',
    image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=facearea&w=400&q=80',
    desc: 'Обучение шахматам в группах и индивидуально. Турниры каждую неделю!'
  },
  {
    id: 3,
    name: 'Арт-студия "Краски"',
    city: 'Астана',
    address: 'ул. Сарыарка, 7',
    direction: 'Творчество',
    age: '5-12',
    price: '18 000 ₸',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80',
    desc: 'Живопись, лепка, творчество и развитие эстетического вкуса.'
  }
];

const parentDashboard = {
  child: { name: 'Айжан', age: 9, interests: ['Робототехника', 'Рисование', 'Футбол'], photoUrl: 'https://randomuser.me/api/portraits/med/women/43.jpg' },
  records: [
    { id: 1, club: 'Робототехника Junior', date: '2024-09-01', status: 'Записан' },
    { id: 2, club: 'Футбольная секция "Звезда"', date: '2024-09-02', status: 'Посещено' }
  ],
  events: [
    { id: 1, date: '2024-09-03', event: 'Открытый урок по рисованию' },
    { id: 2, date: '2024-09-05', event: 'Запись в "Робототехника Junior"' }
  ]
};

const clubDashboard = {
  club: {
    name: 'Центр развития "Юный гений"',
    city: 'Астана',
    phone: '+7 777 123 4567',
    email: 'info@jun-gen.kz',
    address: 'ул. Абая, 10',
    directions: ['Робототехника', 'Шахматы', 'Арт-студия'],
    studentsCount: 32,
    teachers: ['Иванов А.А.', 'Серикова М.М.'],
    photoUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80'
  },
  schedule: [
    { id: 1, name: 'Робототехника', days: 'Пн, Ср, Пт', time: '15:00–16:30' },
    { id: 2, name: 'Шахматы', days: 'Вт, Чт', time: '16:00–17:00' }
  ]
};

const adminDashboard = {
  stats: { clubs: 12, parents: 41, students: 56, pendingClubs: 2, reviews: 7 },
  complaints: [
    { id: 1, text: 'Некорректная информация о кружке "Футбольная секция"', status: 'Новая' },
    { id: 2, text: 'Жалоба на поведение педагога', status: 'В работе' }
  ],
  users: [
    { id: 1, name: 'Айжан', role: 'parent' },
    { id: 2, name: 'Юный гений', role: 'club' },
    { id: 3, name: 'Админ', role: 'admin' }
  ]
};

const server = http.createServer((req, res) => {
  const url = parse(req.url, true);
  if (req.method === 'GET' && url.pathname === '/api/clubs') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(clubs));
    return;
  }
  if (req.method === 'GET' && url.pathname === '/api/parent/dashboard') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(parentDashboard));
    return;
  }
  if (req.method === 'GET' && url.pathname === '/api/club/dashboard') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(clubDashboard));
    return;
  }
  if (req.method === 'GET' && url.pathname === '/api/admin/dashboard') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(adminDashboard));
    return;
  }
  if (req.method === 'POST' && url.pathname === '/api/login') {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });
    req.on('end', () => {
      try {
        const { role, name } = JSON.parse(body);
        const token = Buffer.from(`${role}:${name}`).toString('base64');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ token, role, name }));
      } catch {
        res.writeHead(400);
        res.end();
      }
    });
    return;
  }
  res.writeHead(404);
  res.end();
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`API server running on ${PORT}`);
});
