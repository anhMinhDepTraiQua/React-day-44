import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    // Tích hợp Sentry tại đây nếu đã cài đặt
    // if (window.Sentry) {
    //   window.Sentry.captureException(error);
    // }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '40px', 
          textAlign: 'center', 
          fontFamily: 'system-ui, -apple-system, sans-serif',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <h1 style={{ color: '#e74c3c', fontSize: '32px', marginBottom: '20px' }}>
            ⚠️ Đã xảy ra lỗi
          </h1>
          <p style={{ color: '#555', marginTop: '20px', fontSize: '16px' }}>
            Xin lỗi, đã có lỗi xảy ra trong ứng dụng. Vui lòng thử lại sau.
          </p>
          <div style={{ marginTop: '30px', color: '#666', lineHeight: '1.8' }}>
            <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
              Liên hệ hỗ trợ:
            </p>
            <p>📧 Email: support@example.com</p>
            <p>📘 Fanpage: fb.com/yourpage</p>
          </div>
          <button 
            onClick={() => window.location.href = '/'}
            style={{ 
              marginTop: '30px', 
              padding: '12px 24px', 
              background: '#3498db', 
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '500'
            }}
          >
            Về trang chủ
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;