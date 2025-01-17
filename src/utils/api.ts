import { BoxParams } from '../types';

export const handleFormSubmit = async (values: BoxParams, setBoxParams: React.Dispatch<React.SetStateAction<BoxParams>>) => {
  try {
    const response = await fetch('http://localhost:5000/triangulate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });

    const data = await response.json();

    if (response.ok) {
      console.log('Received data from server:', data); // Логируем данные с сервера
      setBoxParams({
        length: data.length,
        width: data.width,
        height: data.height,
        triangles: data.triangles, // Передаем массив треугольников
      });
    } else {
      console.error('Server error:', data);
    }
  } catch (error) {
    console.error('Request error:', error);
  }
};
