import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { BoxGeometry, MeshStandardMaterial, Mesh, DirectionalLight, AmbientLight, EdgesGeometry, LineBasicMaterial, Line } from 'three';
import { OrbitControls } from '@react-three/drei';

interface BoxSceneProps {
  boxParams: { length: number; width: number; height: number };
  darkMode: boolean;
  color: string;
}

const BoxScene: React.FC<BoxSceneProps> = ({ boxParams, darkMode, color }) => {
  const { length, width, height } = boxParams;
  const boxRef = useRef<Mesh>(null!);

  // Обновляем геометрию куба при изменении параметров
  useEffect(() => {
    if (boxRef.current) {
      if (length > 0 && width > 0 && height > 0) {
        // Освобождаем старую геометрию и создаем новую
        boxRef.current.geometry.dispose();
        boxRef.current.geometry = new BoxGeometry(length, width, height);
      }
    }
  }, [length, width, height]);

  // Создаем геометрию для граней куба
  const edges = new EdgesGeometry(new BoxGeometry(length, width, height));
  const lineMaterial = new LineBasicMaterial({ color: 0x000000, linewidth: 2 });

  return (
    <Canvas
      style={{ height: '400px', background: darkMode ? '#121212' : '#ffffff' }}
      camera={{ position: [5, 5, 5], fov: 75 }}
    >
      {/* Улучшение света для лучшего отображения 3D */}
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <ambientLight intensity={0.3} />
      
      {/* Куб с геометрией и цветом */}
      <mesh ref={boxRef} position={[0, 0, 0]}>
        <boxGeometry args={[length, width, height]} />
        <meshStandardMaterial color={color} />
        {/* Линии для отображения граней */}
        <lineSegments geometry={edges} material={lineMaterial} />
      </mesh>

      {/* Управление камерой с минимальной дистанцией */}
      <OrbitControls minDistance={3} />
    </Canvas>
  );
};

export default BoxScene;
