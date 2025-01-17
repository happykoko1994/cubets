import React from 'react';
import { Switch } from 'antd';

interface ThemeSwitcherProps {
  darkMode: boolean;
  onChange: (checked: boolean) => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ darkMode, onChange }) => (
  <div className="switch-container">
    <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
    <Switch checked={darkMode} onChange={onChange} />
  </div>
);

export default ThemeSwitcher;
