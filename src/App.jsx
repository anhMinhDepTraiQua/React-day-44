import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Home from "./pages/Home";
import ErrorBoundary from "./components/ErrorBoundary";
import  NavLink  from "./components/NavLink";
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

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter basename="/React-day-44">
        <div style={{ 
          minHeight: '100vh',
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        }}>
          {/* Navigation */}
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
