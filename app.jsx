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
      {/* 背景：暗调展览海报拼接（J 盘素材）+ 玻璃高光，随页面滚动 */}
      <div className="ambient-collage" aria-hidden="true">
        <div className="ambient-tile" style={{ backgroundImage: 'url(posters/海报 (1).jpg)' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url(posters/海报 (2).jpg)' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url(posters/海报 (3).jpg)' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url(posters/海报 (4).jpg)' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url(posters/海报 (5).jpg)' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url(posters/海报 (6).jpg)' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url(posters/海报 (7).jpg)' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url(posters/海报 (8).jpg)' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url(posters/海报 (9).jpg)' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url(posters/海报 (10).jpg)' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url(posters/海报 (11).jpg)' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url(posters/海报 (12).jpg)' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url(posters/终版海报.jpg)' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url(posters/梦江水海报.jpg)' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url(posters/喃喃海报.png)' }} />
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
