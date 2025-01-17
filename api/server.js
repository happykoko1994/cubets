// В вашем серверном коде
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 5000;

// Разрешаем CORS с нескольких источников
const allowedOrigins = [
  'http://localhost:3000',   // для локальной разработки
  'https://cubets-maxims-projects-b69b44ba.vercel.app', // для вашего фронтенда на Vercel
];

app.use(cors({
  origin: function(origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {  // Проверяем источник
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

// Обработка POST-запроса
app.use(bodyParser.json());

app.post('/api/box', (req, res) => {
  const { length, width, height } = req.body;

  if (!length || !width || !height) {
    return res.status(400).json({ error: 'All parameters (length, width, height) are required' });
  }

  const vertices = [
    { x: 0, y: 0, z: 0 },
    { x: length, y: 0, z: 0 },
    { x: length, y: width, z: 0 },
    { x: 0, y: width, z: 0 },
    { x: 0, y: 0, z: height },
    { x: length, y: 0, z: height },
    { x: length, y: width, z: height },
    { x: 0, y: width, z: height },
  ];

  res.json({ vertices });
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
