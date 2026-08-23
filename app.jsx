// App 主入口 — 画中画画布布局

function App() {
  const [activeProject, setActiveProject] = React.useState(null);

  useReveal();

  // 宣告可升级为全栈应用
  React.useEffect(() => {
    function announceUpgrade() {
      window.parent.postMessage(
        { type: 'miaoda:upgrade:available', kind: 'interactive-prototype' },
        '*'
      );
    }
    announceUpgrade();
    if (document.readyState !== 'complete') {
      window.addEventListener('load', announceUpgrade, { once: true });
    }
  }, []);

  function handleProjectClick(project) {
    setActiveProject(project);
  }

  function handleCloseModal() {
    setActiveProject(null);
  }

  return (
    <div>
      {/* 背景：暗调展览海报拼接 + 玻璃高光 */}
      <div className="ambient-collage" aria-hidden="true">
        <div className="ambient-tile" style={{ backgroundImage: 'url(https://aka.doubaocdn.com/s/gWxpkjNgX5)' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url(https://aka.doubaocdn.com/s/xmuyGNZVho)' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url(https://aka.doubaocdn.com/s/jtNqCh8idx)' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url(https://aka.doubaocdn.com/s/LkuDSjeOFm)' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url(https://aka.doubaocdn.com/s/AfH5NefCRF)' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url(https://aka.doubaocdn.com/s/C3g0BHTjqp)' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url(https://aka.doubaocdn.com/s/df3GiCQH0W)' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url(https://aka.doubaocdn.com/s/a64X8A5HDK)' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url(https://aka.doubaocdn.com/s/bMc6BD8kMk)' }} />
        <div className="ambient-scrim" />
        <div className="ambient-grain" />
      </div>

      <div className="page-canvas">
        <Navbar />
        <main>
          <Hero />
          <Statement />
          <About />
          <Projects onProjectClick={handleProjectClick} />
          <Community />
          <Contact />
        </main>
      </div>

      <ProjectModal project={activeProject} onClose={handleCloseModal} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
