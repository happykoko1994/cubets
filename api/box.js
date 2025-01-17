// api/box.js
import cors from 'cors';

const corsOptions = {
  origin: ['http://localhost:3000', 'https://your-vercel-project-url.vercel.app'],
};

export default function handler(req, res) {
  // Применяем CORS
  cors(corsOptions)(req, res, () => {
    if (req.method === 'POST') {
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
      return res.json({ vertices });
    } else {
      // Если метод не POST, возвращаем ошибку
      return res.status(405).json({ error: 'Method Not Allowed' });
    }
  });
}
