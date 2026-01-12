function NavLink({ to, children }) {
  return (
    <a
      href={to}
      onClick={(e) => {
        e.preventDefault();
        window.history.pushState({}, '', to);
        window.dispatchEvent(new PopStateEvent('popstate'));
      }}
      style={{
        padding: '16px 20px',
        color: 'white',
        textDecoration: 'none',
        display: 'block',
        transition: 'background 0.2s',
        fontSize: '15px',
        fontWeight: '500',
        background: window.location.pathname === to ? '#34495e' : 'transparent'
      }}
      onMouseEnter={(e) => {
        if (window.location.pathname !== to) {
          e.currentTarget.style.background = '#34495e';
        }
      }}
      onMouseLeave={(e) => {
        if (window.location.pathname !== to) {
          e.currentTarget.style.background = 'transparent';
        }
      }}
    >
      {children}
    </a>

  );
}
export default NavLink;