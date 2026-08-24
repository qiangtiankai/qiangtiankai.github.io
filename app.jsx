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
    <div className="app-root">
      {/* 背景：暗调展览海报平铺（全站最底层半透明背景，统一位置/缩放/对齐） */}
      <div className="ambient-collage" aria-hidden="true">
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
