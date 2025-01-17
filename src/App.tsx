import React, { useState } from 'react';
import { Layout } from 'antd';
import BoxForm from './components/BoxForm';
import BoxScene from './components/BoxScene';
import ColorPicker from './components/ColorPicker';
import ThemeSwitcher from './components/ThemeSwitcher';
import './styles/App.css';

const { Header, Content } = Layout;

const App: React.FC = () => {
  const [boxParams, setBoxParams] = useState({
    length: 5,
    width: 5,
    height: 3,
  });
  const [darkMode, setDarkMode] = useState(false);
  const [boxColor, setBoxColor] = useState('#f0f0f0');

  const handleFormSubmit = (params: { length: number; width: number; height: number }) => {
    setBoxParams(params);
  };

  const handleDarkModeChange = (checked: boolean) => {
    setDarkMode(checked);
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBoxColor(e.target.value);
  };

  return (
    <Layout className={darkMode ? 'dark-mode' : ''}>
      <Header>
        <span className="header-title">3D Box App</span>
      </Header>
      <Content style={{ padding: '20px' }}>
        <div className="container">
          <div className="form-container">
            <ColorPicker value={boxColor} onChange={handleColorChange} />
            <BoxForm onSubmit={handleFormSubmit} />
          </div>

          <div className="scene-container">
            <BoxScene
              boxParams={boxParams}
              darkMode={darkMode}
              color={boxColor}
            />
          </div>
        </div>

        <ThemeSwitcher darkMode={darkMode} onChange={handleDarkModeChange} />
      </Content>
    </Layout>
  );
};

export default App;
