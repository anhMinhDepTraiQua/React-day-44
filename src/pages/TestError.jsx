import React from 'react';

const TestError = () => {
  // Throw error để test Error Boundary
  throw new Error('Test lỗi ');
  
  // Code dưới đây sẽ không bao giờ chạy
  return (
    <div>
      <h1>Test Error Page</h1>
      <p>Bạn không nên thấy nội dung này!</p>
    </div>
  );
};

export default TestError;