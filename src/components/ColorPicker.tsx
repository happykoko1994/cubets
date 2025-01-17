import React from 'react';
import { Input } from 'antd';

interface ColorPickerProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ value, onChange }) => (
  <div
    style={{
      marginBottom: '10px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <label htmlFor="boxColorInput" className="form-item-label" style={{ marginRight: '10px' }}>
      Choose Box Color:
    </label>
    <Input
      id="boxColorInput"
      type="color"
      value={value}
      onChange={onChange}
      style={{ width: '50px' }}
    />
  </div>
);

export default ColorPicker;
