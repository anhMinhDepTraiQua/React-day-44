import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div 
      onClick={() => setCount(c => c + 1)}
      style={{ 
        padding: '25px 40px', 
        background: '#3498db',
        color: 'white',
        cursor: 'pointer',
        borderRadius: '10px',
        display: 'inline-block',
        fontSize: '20px',
        fontWeight: 'bold',
        userSelect: 'none',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        transition: 'all 0.2s'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = '#2980b9';
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = '#3498db';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
      }}
    >
      Count is {count}
    </div>
  );
};

export default Counter;