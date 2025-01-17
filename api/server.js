import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';  // Импортируем cors

// Инициализация приложения
const app = express();
const port = 5000;

// Разрешаем CORS для всех доменов
app.use(cors({
  origin: ['http://localhost:3000', 'https://cubets-maxims-projects-b69b44ba.vercel.app'],  // Разрешить доступ с двух источников
}));
// Использование body-parser для обработки JSON
app.use(bodyParser.json());

// POST-обработчик для получения параметров коробки
app.post('/api/box', (req, res) => {
  const { length, width, height } = req.body;

  // Проверяем, что параметры переданы
  if (!length || !width || !height) {
    return res.status(400).json({ error: 'All parameters (length, width, height) are required' });
  }

  // Логика для вычисления координат вершин коробки
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

  // Отправляем результат на клиент
  res.json({ vertices });
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
