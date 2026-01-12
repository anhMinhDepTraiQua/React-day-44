import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import Home from "./pages/Home";
import ErrorBoundary from "./components/ErrorBoundary";

// Code splitting - Lazy load các pages (trừ Home)
const PropKey = lazy(() => import("./pages/PropKey"));
const Counter = lazy(() => import("./pages/Counter"));
const TestError = lazy(() => import("./pages/TestError"));
const Sentry = lazy(() => import("./pages/Sentry"));

// Loading component
const LoadingFallback = () => (
  <div style={{ 
    padding: '40px', 
    textAlign: 'center',
    fontSize: '18px',
    color: '#666'
  }}>
    <div style={{ marginBottom: '10px' }}>⏳</div>
    <div>Đang tải trang...</div>
  </div>
);

// NavLink component - SỬA LẠI ĐỂ DÙNG React Router Link
function NavLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      style={{
        padding: '16px 20px',
        color: 'white',
        textDecoration: 'none',
        display: 'block',
        transition: 'background 0.2s',
        fontSize: '15px',
        fontWeight: '500',
        background: isActive ? '#34495e' : 'transparent'
      }}
      onMouseEnter={(e) => {
        if (!isActive) {
          e.currentTarget.style.background = '#34495e';
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.currentTarget.style.background = 'transparent';
        }
      }}
    >
      {children}
    </Link>
  );
}

// Navigation Component
function Navigation() {
  return (
    <nav style={{ 
      padding: '0', 
      background: '#2c3e50',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        display: 'flex',
        gap: '5px',
        padding: '0 20px'
      }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/prop-key">Prop Key</NavLink>
        <NavLink to="/counter">Counter</NavLink>
        <NavLink to="/sentry">Sentry</NavLink>
        <NavLink to="/test-error">Test Error</NavLink>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div style={{ 
          minHeight: '100vh',
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        }}>
          <Navigation />

          {/* Routes with Suspense */}
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/prop-key" element={<PropKey />} />
              <Route path="/counter" element={<Counter />} />
              <Route path="/test-error" element={<TestError />} />
              <Route path="/sentry" element={<Sentry />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}