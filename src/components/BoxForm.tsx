import React, { useState } from 'react';
import { Form, InputNumber, Button } from 'antd';
import '../styles/App.css';

interface BoxFormProps {
  onSubmit: (params: { length: number; width: number; height: number }) => void;
}

const BoxForm: React.FC<BoxFormProps> = ({ onSubmit }) => {
  const [length, setLength] = useState(5);
  const [width, setWidth] = useState(5);
  const [height, setHeight] = useState(3);

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/box', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ length, width, height }),
      });

      if (!response.ok) {
        throw new Error('Failed to send data');
      }

      const data = await response.json();
      console.log(data);
      onSubmit({ length, width, height });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Form layout="vertical" onFinish={handleSubmit} className="form-container">
      <Form.Item className="form-item">
        <label className="form-item-label">Length</label>
        <div className="input-container">
          <InputNumber
            min={0.1}
            value={length}
            onChange={(value) => setLength(value || 0)}
            style={{ width: '100%' }}
          />
        </div>
      </Form.Item>

      <Form.Item className="form-item">
        <label className="form-item-label">Width</label>
        <div className="input-container">
          <InputNumber
            min={0.1}
            value={width}
            onChange={(value) => setWidth(value || 0)}
            style={{ width: '100%' }}
          />
        </div>
      </Form.Item>

      <Form.Item className="form-item">
        <label className="form-item-label">Height</label>
        <div className="input-container">
          <InputNumber
            min={0.1}
            value={height}
            onChange={(value) => setHeight(value || 0)}
            style={{ width: '100%' }}
          />
        </div>
      </Form.Item>

      <Form.Item className="form-item">
        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
          Set Box
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BoxForm;
