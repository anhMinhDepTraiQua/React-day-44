import React, { useState } from 'react';
import Counter from './Counter';

const CounterPage = () => {
  const [resetKey, setResetKey] = useState(0);

  const handleReset = () => {
    setResetKey(prevKey => prevKey + 1);
  };

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#2c3e50', marginBottom: '20px' }}>Counter Demo</h1>
      
      <p style={{ 
        color: '#666', 
        marginBottom: '30px', 
        lineHeight: '1.6',
        fontSize: '16px'
      }}>
        Click vào counter để tăng số đếm. Nhấn nút <strong>Reset</strong> để khởi tạo lại component.
      </p>

      <div style={{ marginBottom: '30px' }}>
        <Counter key={resetKey} />
      </div>

      <div>
        <button 
          onClick={handleReset}
          style={{ 
            padding: '12px 28px',
            background: '#e74c3c',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '600',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#c0392b';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#e74c3c';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
          }}
        >
          Reset
        </button>
      </div>

    </div>
  );
};

export default CounterPage;