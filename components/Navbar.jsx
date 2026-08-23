// 顶部导航栏 — 浅色版本
// 滚动时背景从透明变半透明白毛玻璃

function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: '策展理念', href: '#statement' },
    { label: '关于', href: '#about' },
    { label: '项目', href: '#projects' },
    { label: '社区', href: '#community' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#top" className="navbar-logo">
          <span className="mark"></span>
          <span>Qiang Tiankai</span>
        </a>

        <ul className="navbar-nav">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="navbar-contact">
          联系
        </a>

        <button
          className="navbar-mobile-toggle"
          aria-label="菜单"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span style={{ transform: mobileOpen ? 'rotate(45deg) translate(4px, 5px)' : 'none' }}></span>
          <span style={{ opacity: mobileOpen ? 0 : 1 }}></span>
          <span style={{ transform: mobileOpen ? 'rotate(-45deg) translate(3px, -4px)' : 'none' }}></span>
        </button>
      </div>

      {/* 移动端菜单 */}
      {mobileOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(248, 246, 242, 0.97)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--line-1)',
            padding: '24px var(--pad-x)',
          }}
        >
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--text-2)',
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li style={{ marginTop: '8px' }}>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  padding: '10px 22px',
                  border: '1px solid var(--accent)',
                  color: 'var(--accent-3)',
                }}
              >
                联系
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

Object.assign(window, { Navbar });
